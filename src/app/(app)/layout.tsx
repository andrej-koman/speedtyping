import SidebarNav from "./_components/sidebar-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen p-12">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 w-full h-full">
        <aside className="w-max">
          <SidebarNav />
        </aside>
        <div className="flex-1 lg:max-w-2xl w-full">{children}</div>
      </div>
    </div>
  );
}
