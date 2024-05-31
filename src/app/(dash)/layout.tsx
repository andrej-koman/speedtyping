import Header from "../_components/app-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <div className="mt-1 flex h-full w-full flex-col space-x-1 px-5 lg:flex-row">
          {children}
        </div>
      </div>
    </>
  );
}
