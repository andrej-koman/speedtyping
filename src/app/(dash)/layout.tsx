import Header from "../_components/app-header";
import SidebarNav from "./_components/sidebar-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <div className="flex h-full w-full flex-col space-x-4 space-y-8 p-5 lg:flex-row lg:space-y-0">
          <aside className="flex w-[20%] flex-row justify-center space-x-8">
            <SidebarNav />
          </aside>
          {children}
        </div>
      </div>
    </>
  );
}
