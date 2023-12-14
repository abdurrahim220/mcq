import React from "react";
import {
  FaHome,
  FaAlignJustify,
  FaDatabase,
  FaRegCreditCard,
} from "react-icons/fa";

import { AiOutlineTeam } from "react-icons/ai";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { MdOutlineManageAccounts, MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", link: "/", icon: <FaHome /> },
    { name: "Recent Tests", link: "/recent-tests", icon: <FaAlignJustify /> },
    {
      name: "Archived Tests",
      link: "/archived-tests",
      icon: <RiArchiveDrawerLine />,
    },
    {
      name: "Scoratease Quizzes",
      link: "/scoratease-quizzes",
      icon: <MdQuiz />,
    },
    { name: "Usages", link: "/usages", icon: <FaDatabase /> },
    { name: "Billing", link: "/billing", icon: <FaRegCreditCard /> },
    { name: "Team", link: "/team", icon: <AiOutlineTeam /> },
    { name: "Account", link: "/account", icon: <MdOutlineManageAccounts /> },
  ];

  return (
    <div>
      <div className="grid justify-center items-center">
        {menuItems.map((item, index) => (
          <div key={index} className="">
            <Link className="flex gap-2 py-2 items-center" to={item.link}>
              {item.icon} {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
