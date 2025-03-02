import Logo from "./Logo";
import Navigations from "./Navigations";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigations />
      </div>
    </header>
  );
}

export default Header;
