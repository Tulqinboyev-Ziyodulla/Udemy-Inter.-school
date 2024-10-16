import React from "react";
import LogoIcon from "../../assets/logo.svg";
import {
  BillingIcon,
  DashbpardIcon,
  ExamsIcon,
  SettingIcon,
  StudentIcon,
} from "../../assets/icons";
import Navlink from "../Navlink/Navlink";

const Navbar = () => {
  const navlinks = [
    {
      name: "Dashbpard",
      link: "/",
      icon: <DashbpardIcon />,
    },
    {
      name: "Teachers",
      link: "/teachers",
      icon: <DashbpardIcon />,
    },
    {
      name: "Students",
      link: "/students",
      icon: <StudentIcon />,
    },
    {
      name: "Billing",
      link: "/billing",
      icon: <BillingIcon />,
    },
    {
      name: "Settings",
      link: "/setting",
      icon: <SettingIcon />,
    },
    {
      name: "Exams",
      link: "/exams",
      icon: <ExamsIcon />,
    }
  ];
  return (
    <div className="w-[300px] bg-[#152259] h-screen sticky top-0 left-0">
      <div className="mx-auto flex flex-col items-center p-6 border-b-[2px] border-[#BDBDBD]">
        <img
          className="mb-3"
          src={LogoIcon}
          alt="Logo"
          width={"65"}
          height={"65"}
        />
        <p className="text-white py-3 text-lg">Udemy Inter. school</p>
      </div>
      <ul className="px-[25px] pt-[15px] flex flex-col gap-2">
        {navlinks &&
          navlinks.map((item, index) => {
            return <Navlink item={item} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default Navbar;
