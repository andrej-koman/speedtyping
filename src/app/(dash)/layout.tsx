import Header from "../_components/app-header";
import SidebarNav from "./_components/sidebar-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <div className="mt-1 flex h-full w-full flex-col space-x-2 px-5 lg:flex-row">
          <aside className="flex w-[20%] flex-row justify-center space-x-8">
            <SidebarNav />
          </aside>
          {children}
        </div>
      </div>
    </>
  );
}
