import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiMagnifyingGlass, GiTreasureMap, GiNewspaper } from "react-icons/gi";
import { FaRegAddressBook } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import styled from "styled-components";
import { IconContext } from "react-icons";

const Icon = styled.div`
  /* width: 50px;
  height: 50px; */
`;

const BottomBar = styled.span`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const NavBar = ({ name }) => {
  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState(name);

  useEffect(() => {
    switch (activeTabs) {
      case "notes":
        navigate("/notes");
        break;
      case "map":
        navigate("/map");
        break;
      case "paper":
        navigate("/paper");
        break;
      case "directory":
        navigate("/directory");
        break;
      case "chat":
        navigate("/chat");
        break;
      default:
        navigate("/");
        break;
    }
  }, [activeTabs, navigate]);

  return (
    <BottomBar>
      <IconContext.Provider value={{ size: "25px" }}>
        <Icon onClick={() => setActiveTabs("notes")}>
          <GiMagnifyingGlass />
          <div>Notes</div>
        </Icon>
        <Icon onClick={() => setActiveTabs("map")}>
          <GiTreasureMap />
          <div>Map</div>
        </Icon>
        <Icon onClick={() => setActiveTabs("paper")}>
          <GiNewspaper />
          <div>Newspaper</div>
        </Icon>
        <Icon onClick={() => setActiveTabs("directory")}>
          <FaRegAddressBook />
          <div>Directory</div>
        </Icon>
        <Icon onClick={() => setActiveTabs("chat")}>
          <BsChatDots />
          <div>Chat</div>
        </Icon>
      </IconContext.Provider>
    </BottomBar>
  );
};
export default NavBar;
