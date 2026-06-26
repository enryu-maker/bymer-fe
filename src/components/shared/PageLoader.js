export function PageLoader({ className = "min-h-[200px]" }) {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <div
        className="w-8 h-8 border-2 border-[#e5e7eb] border-t-[#C75550] rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
