import useAuthStore from "../store";
import React from "react";
import { FaGear, FaMagnifyingGlass, FaMessage } from "react-icons/fa6";
import { FormButton } from "./Button";
import { NavLink as Link } from "react-router-dom";

type NavLinkProps = {
  icon: React.JSX.Element;
  name: string;
  link: string;
  isActive?: boolean;
};

const NavLink = ({ icon, name, link, isActive }: NavLinkProps) => {
  return (
    <Link
      to={link}
      className={`${
        isActive? 'bg-'  : ""
      } p-3 mb-2 flex gap-4 items-center hover:bg-teal-800/70 text-lg rounded-lg`}
    >
      {icon}
      {name}
    </Link>
  );
};

const Sidebar = () => {
  const { setLoggedIn, setAccessToken } = useAuthStore();
  const handleLogout = () => {
    setAccessToken(null);
    setLoggedIn(false);
  };
  return (
    <div className="max-w-72 w-full h-full">
      <nav className="flex flex-col gap-5 py-4 pb-2 pr-4 fixed h-[calc(100%-32px)] max-w-72 w-full">
        <div>
          <h3 className="text-2xl font-semibold px-4 mb-4 text-teal-600">
            Chatty
          </h3>
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul>
            <NavLink icon={<FaMessage />} name="Chats" link="/" />
            <NavLink icon={<FaMagnifyingGlass />} name="Search" link="/" />
            <NavLink icon={<FaGear />} name="Settings" link="/settings" />
          </ul>
          <ul>
            <FormButton buttonLabel="Logout" handleClick={handleLogout} />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
