import Header from "../_components/app-header";
import { Sidebar } from "./_components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <div className="grid h-full w-full lg:grid-cols-5">
          <Sidebar />
          <div className="col-span-3 p-4 lg:col-span-4">{children}</div>
        </div>
      </div>
    </>
  );
}
