import Header from "../_components/app-header";
import { Sidebar } from "./_components/sidebar";

import { getUserStats } from "../actions";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const stats = await getUserStats();
  if (!stats) {
    return null;
  }
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Header stats={stats} />
        <div className="grid h-full w-full lg:grid-cols-5">
          <Sidebar />
          <div className="col-span-3 p-4 lg:col-span-4">{children}</div>
        </div>
      </div>
    </>
  );
}
