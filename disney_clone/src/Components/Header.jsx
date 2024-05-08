import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { RiHome5Fill, RiMovie2Fill } from "react-icons/ri";
import { FaSearch, FaPlus, FaStar } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import HeaderItems from "./HeaderItems";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      names: "HOME",
      icon: RiHome5Fill,
    },
    {
      names: "SEARCH",
      icon: FaSearch,
    },
    {
      names: "WATCHLIST",
      icon: FaPlus,
    },
    {
      names: "ORIGINALS",
      icon: FaStar,
    },
    {
      names: "MOVIES",
      icon: BiSolidCameraMovie,
    },
    {
      names: "SERIES",
      icon: RiMovie2Fill,
    },
  ];
  return (
    <>
      <div className="w-full flex  justify-between px-10 items-center py-2 bg-slate-900">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="img" className="h-12 object-cover" />
          {menu.map(
            (items, index) =>
              index < 3 && <HeaderItems name={items.names} Icon={items.icon} />
          )}
          <div className=" md:flex justify-center items-center gap-5 hidden">
            {menu.map(
              (items, index) =>
                index > 2 && (
                  <HeaderItems name={items.names} Icon={items.icon} />
                )
            )}
          </div>
          <div className="md:hidden group relative  text-white cursor-pointer">
            <BsThreeDotsVertical
              onClick={() => {
                setToggle(!toggle);
              }}
            />

            {toggle ? (
              <>
                <div
                  className="fixed top-0 left-0 w-screen h-screen"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                ></div>
                <div className="absolute w-fit h-fit py-2 px-4 bg-slate-800 rounded-lg  ml-2 top-8 ">
                  {menu.map(
                    (items, index) =>
                      index > 2 && (
                        <div className=" flex gap-2 my-2 w-full h-full">
                          <HeaderItems Icon={items.icon} />
                          <h1>{items.names}</h1>
                        </div>
                      )
                  )}
                </div>
              </>
            ) : null}
          </div>
        </div>

        <img
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1703512118~exp=1703512718~hmac=dd59e4e2a3a02bd6db2f42d1e52a87a5d3dee8864db489a391f526bb10b8c1df"
          alt="img"
          width={60}
          className="rounded-full"
        />
      </div>
    </>
  );
};

export default Header;
