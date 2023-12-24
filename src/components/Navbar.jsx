export default function Navbar() {
  return (
    <div className="bg-violet-700/30 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-white">
        <h2 className="flex items-center italic">
          <img src="/logo.svg" height="40" width="40" />
          <span>Budget App</span>
        </h2>
        <div className="flex items-center gap-4">
          <h2>Naimul Haque</h2>
          <a href="#" className="undeline text-sm text-white/50">
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
}
