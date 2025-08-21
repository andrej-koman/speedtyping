import Logo from "../../_components/logo";

export default async function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between pe-2 ps-6 xl:w-[75rem]">
        <Logo href="/" size="lg" />
      </div>
    </header>
  );
}
