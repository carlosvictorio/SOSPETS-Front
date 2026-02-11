import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/new-logo-removebg.png";
import { Button } from "../ui/button";

const Header = () => {
  function navLinkClass(isActive: boolean) {
    return `
    relative pb-1
    text-primary
    hover:text-primary-hover
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-full after:bg-primary
    after:origin-left
    after:transition-transform after:duration-300
    ${isActive ? "after:scale-x-100 text-primary-hover" : "after:scale-x-0 hover:after:scale-x-100"}
    `;
  }

  return (
    <header className="border flex justify-between px-7 bg-blue-50">
      <Link to="/">
        <div className="h-20 flex items-center justify-center">
          <img src={Logo} alt="logo" className="w-18" />
        </div>
      </Link>

      <div className="flex justify-center items-center gap-6">
        <NavLink to="/" className={({ isActive }) => navLinkClass(isActive)}>
          Home
        </NavLink>

        <NavLink
          to="/adoption"
          className={({ isActive }) => navLinkClass(isActive)}
        >
          Adoption
        </NavLink>

        <NavLink
          to="/beavolunteer"
          className={({ isActive }) => navLinkClass(isActive)}
        >
          Volunteers
        </NavLink>

        <NavLink
          to="/adoption"
          className={({ isActive }) => navLinkClass(isActive)}
        >
          Raffles
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => navLinkClass(isActive)}
        >
          Contact
        </NavLink>

        <Button className="ml-15 mb-1">Donate Now</Button>
      </div>
    </header>
  );
};

export default Header;
