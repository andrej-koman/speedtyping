import Header from "../_components/app-header";
import SidebarNav from "./_components/sidebar-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <div className="flex h-full w-full flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="flex w-max flex-row space-x-8">
            <SidebarNav />
          </aside>
          {children}
        </div>
      </div>
    </>
  );
}
