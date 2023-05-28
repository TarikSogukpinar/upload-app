"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getUser } from "../../app/services/userServices";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";

const NavbarLogoutButton = dynamic(() =>
  import("../NavbarElements/NavbarLogoutButton")
);
const AccountSection = dynamic(() => import("../ModalElements/AccountSection"));
const SecuritySection = dynamic(() =>
  import("../ModalElements/SecuritySection")
);

const Modal = ({ isOpen, toggle }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = {
    Account: { component: <AccountSection />, icon: <RiAccountCircleLine /> },
    Security: { component: <SecuritySection />, icon: <BsShieldCheck /> },
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    if (isOpen) {
      setActiveMenuItem("Account");
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div
        className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center drop-shadow-2xl"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="antialiased bg-white rounded-xl text-left overflow-hidden shadow-xl  transform transition-all sm:w-2/4 h-4/5 flex flex-col sm:flex-row">
          <div className="sm:w-1/3 bg-gray-50 border-collapse p-4 overflow-auto rounded-sm ">
            <ul>
              {Object.keys(menuItems).map((item) => (
                <button
                  key={item}
                  className="antialiased flex w-full rounded-lg bg-gray-200 px-8 py-3 text-sm font-medium text-dark transition hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-5"
                  onClick={() => handleMenuItemClick(item)}
                >
                  <div className="antialiased mt-1 mr-1 text-lg">
                    {menuItems[item].icon}
                  </div>

                  <div className="antialiased text-lg">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </div>
                </button>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-2/3 p-4 relative bg-gray-50 ">
            <button
              type="button"
              className="absolute top-2 right-2 inline-flex rounded-sm border border-transparent shadow-sm px-2 py-1  text-base font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              onClick={toggle}
            >
              <div className="text-black">X</div>
            </button>

            <div>
              <h1 className="text-sm text-gray-900">
                {menuItems[activeMenuItem]?.component}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default function NavbarProfileButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = async () => {
    const res = await getUser(
      userInfo.userName,
      userInfo.email,
      userInfo.password,
      userInfo.confirmPassword,
      userInfo.role
    );
    setUserInfo(res.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const toggleProfileDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {userInfo.map((userInfos, index) => (
        <div
          key={index}
          className="mt-4 flex flex-col gap-8 sm:mt-0 sm:flex-row sm:items-center"
        >
          <div className="relative">
            <button
              type="button"
              onClick={toggleProfileDropdown}
              className="group flex shrink-0 items-center rounded-lg transition"
            >
              <span className="sr-only">Menu</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div className="ms-2  text-left text-xs ">
                <strong className="block font-medium">
                  {userInfos.userName}
                </strong>

                <span className="text-gray-500"> {userInfos.email} </span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                viewBox="0 0 20 20"
                fillRule="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  {
                    <button
                      onClick={toggleModal}
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-dark hover:bg-indigo-50"
                      role="menuitem"
                    >
                      <FiSettings /> Manage Account
                    </button>
                  }
                </div>
                <Modal isOpen={isOpenModal} toggle={toggleModal} />
                <NavbarLogoutButton />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
