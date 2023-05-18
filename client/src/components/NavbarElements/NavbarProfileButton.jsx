"use client";
import React, { useEffect, useState } from "react";
import NavbarLogoutButton from "../NavbarElements/NavbarLogoutButton";
import { getUser } from "../../app/services/authServices";
import Link from "next/link";

const Modal = ({ isOpen, toggle }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuItems = {
    "item1": "Item 1 Content...",
    "item2": "Item 2 Content...",
    "item3": "Item 3 Content...",
    // add more items as needed
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:w-4/5 h-4/5 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 bg-gray-200 p-4 overflow-auto">
            <h2 className="font-bold mb-2 text-xl">Menu</h2>
            <ul>
              {Object.keys(menuItems).map((item) => (
                <li key={item} className="cursor-pointer text-lg mb-2" onClick={() => handleMenuItemClick(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-2/3 p-4 relative">
            <button type="button" className="absolute top-2 right-2 inline-flex rounded-md border border-transparent shadow-sm px-2 py-1 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={toggle}>
              X
            </button>
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-8 mb-2">
              Modal Title
            </h3>
            <div>
              <p className="text-sm text-gray-500">
                {menuItems[activeMenuItem]}
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

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const toggleProfileDropdown = () => setIsOpen(!isOpen);

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
                  <button
                    onClick={toggleModal}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Manage Account
                  </button>
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
