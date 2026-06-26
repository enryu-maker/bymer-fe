"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { fetchMachinery, fetchMachineryById } from "@/lib/api";

const MachineryCatalogContext = createContext(null);

function plantKey(plant) {
  return String(plant ?? 1);
}

export function MachineryCatalogProvider({ children }) {
  const [machineryByPlant, setMachineryByPlant] = useState({});
  const [machineDetails, setMachineDetails] = useState({});
  const [loadingMachineryByPlant, setLoadingMachineryByPlant] = useState({});
  const [loadingMachineDetails, setLoadingMachineDetails] = useState({});

  const machineryByPlantRef = useRef(machineryByPlant);
  const machineDetailsRef = useRef(machineDetails);
  const inflightRef = useRef({});

  machineryByPlantRef.current = machineryByPlant;
  machineDetailsRef.current = machineDetails;

  const ensureMachineryList = useCallback(async (plant) => {
    const key = plantKey(plant);
    const cached = machineryByPlantRef.current[key];
    if (cached) return cached;

    const inflightKey = `plant:${key}`;
    if (inflightRef.current[inflightKey]) {
      return inflightRef.current[inflightKey];
    }

    const request = (async () => {
      setLoadingMachineryByPlant((prev) => ({ ...prev, [key]: true }));
      try {
        const data = await fetchMachinery(plant);
        const list = Array.isArray(data) ? data : [];
        setMachineryByPlant((prev) => ({ ...prev, [key]: list }));
        return list;
      } catch (err) {
        console.error("Failed to load machinery:", err);
        setMachineryByPlant((prev) => ({ ...prev, [key]: [] }));
        return [];
      } finally {
        setLoadingMachineryByPlant((prev) => ({ ...prev, [key]: false }));
        delete inflightRef.current[inflightKey];
      }
    })();

    inflightRef.current[inflightKey] = request;
    return request;
  }, []);

  const ensureMachineDetail = useCallback(async (machineId) => {
    if (!machineId) return null;

    const cached = machineDetailsRef.current[machineId];
    if (cached) return cached;

    for (const list of Object.values(machineryByPlantRef.current)) {
      const fromList = list.find((item) => String(item.id) === String(machineId));
      if (fromList) {
        setMachineDetails((prev) => ({ ...prev, [machineId]: fromList }));
        return fromList;
      }
    }

    const inflightKey = `machine:${machineId}`;
    if (inflightRef.current[inflightKey]) {
      return inflightRef.current[inflightKey];
    }

    const request = (async () => {
      setLoadingMachineDetails((prev) => ({ ...prev, [machineId]: true }));
      try {
        const data = await fetchMachineryById(machineId);
        if (data) {
          setMachineDetails((prev) => ({ ...prev, [machineId]: data }));
        }
        return data;
      } catch {
        return null;
      } finally {
        setLoadingMachineDetails((prev) => ({ ...prev, [machineId]: false }));
        delete inflightRef.current[inflightKey];
      }
    })();

    inflightRef.current[inflightKey] = request;
    return request;
  }, []);

  const value = useMemo(
    () => ({
      machineryByPlant,
      machineDetails,
      loadingMachineryByPlant,
      loadingMachineDetails,
      ensureMachineryList,
      ensureMachineDetail,
    }),
    [
      machineryByPlant,
      machineDetails,
      loadingMachineryByPlant,
      loadingMachineDetails,
      ensureMachineryList,
      ensureMachineDetail,
    ]
  );

  return (
    <MachineryCatalogContext.Provider value={value}>
      {children}
    </MachineryCatalogContext.Provider>
  );
}

export function useMachineryCatalog(plant = 1) {
  const {
    machineryByPlant,
    loadingMachineryByPlant,
    ensureMachineryList,
  } = useContext(MachineryCatalogContext) ?? {};

  if (!ensureMachineryList) {
    throw new Error("useMachineryCatalog must be used within a MachineryCatalogProvider");
  }

  const key = plantKey(plant);
  const machinery = machineryByPlant[key];
  const loading = Boolean(loadingMachineryByPlant[key]) && machinery === undefined;

  return {
    machinery: machinery ?? [],
    loading,
    ensureMachineryList: useCallback(
      () => ensureMachineryList(plant),
      [ensureMachineryList, plant]
    ),
  };
}

export function useMachineDetail(machineId) {
  const {
    machineDetails,
    loadingMachineDetails,
    ensureMachineDetail: loadMachineDetail,
  } = useContext(MachineryCatalogContext) ?? {};

  if (!loadMachineDetail) {
    throw new Error("useMachineDetail must be used within a MachineryCatalogProvider");
  }

  const machine = machineId ? machineDetails[machineId] : null;
  const loading =
    Boolean(machineId) &&
    Boolean(loadingMachineDetails[machineId]) &&
    !machine;

  const ensureMachineDetail = useCallback(
    () => loadMachineDetail(machineId),
    [loadMachineDetail, machineId]
  );

  return {
    machine,
    loading,
    ensureMachineDetail,
  };
}
