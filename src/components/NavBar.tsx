import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiMagnifyingGlass, GiTreasureMap, GiNewspaper } from "react-icons/gi";
import { FaRegAddressBook } from "react-icons/fa";
// import { BsChatDots } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { IconContext } from "react-icons";

const NavBar = ({ name }: { name?: any }) => {
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
    <div className="fixed bottom-0 flex w-full cursor-pointer gap-3 bg-white text-center">
      <IconContext.Provider value={{ size: "25px" }}>
        <div className="flex" onClick={() => setActiveTabs("notes")}>
          <GiMagnifyingGlass />
          <div>Notes</div>
        </div>
        <div className="flex" onClick={() => setActiveTabs("map")}>
          <GiTreasureMap />
          <div>Map</div>
        </div>
        <div className="flex" onClick={() => setActiveTabs("paper")}>
          <GiNewspaper />
          <div>Newspaper</div>
        </div>
        <div className="flex" onClick={() => setActiveTabs("directory")}>
          <FaRegAddressBook />
          <div>Directory</div>
        </div>
        <div className="flex" onClick={() => setActiveTabs("help")}>
          {/* <BsChatDots /> */}
          <MdHelp />
          <div>Help</div>
        </div>
      </IconContext.Provider>
    </div>
  );
};
export default NavBar;
