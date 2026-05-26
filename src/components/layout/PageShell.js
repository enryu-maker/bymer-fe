import { Footer } from "./Footer";
import { Header } from "./Header";

export function PageShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
