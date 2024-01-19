import Logo from '../../assets/images/tasker-logo.png';

const Header = () => {
  return (
    <nav className="py-4 md:py-3 fixed top-0 w-full !bg-[#191D26] z-10">
      <div className="container mx-auto flex items-center justify-center">
        <a
          href="/"
          className="hover:scale-110 hover:drop-shadow-md  transition"
        >
          <img className="h-[72px] z-10" src={Logo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
};
export default Header;
