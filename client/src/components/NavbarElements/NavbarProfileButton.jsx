"use client";
import React, { useEffect, useState } from "react";
import NavbarLogoutButton from "../NavbarElements/NavbarLogoutButton";
import { getUser } from "../../app/services/authServices";
import AccountSection from "../ModalElements/AccountSection";
import SecuritySection from "../ModalElements/SecuritySection";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs"
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
                  <div className="antialiased mt-1 mr-1 text-lg">{menuItems[item].icon}</div>

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
              <p className="text-sm text-gray-900">
                {menuItems[activeMenuItem]?.component}
              </p>
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
            <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
              <button className="border-e px-4 py-2 text-md/none text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                {userInfos.userName}
              </button>

              <button
                onClick={toggleProfileDropdown}
                className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  {
                    <button
                      onClick={toggleModal}
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Manage Account
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
