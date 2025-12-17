import SideBar from "../../components/Share/SideBar";
import { items } from "../../utils/data";
import { Outlet } from "react-router-dom";

const RemedyPage = () => {
  return (
    <div className="flex w-[90%] mx-auto min-h-screen">
      <SideBar items={items} />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RemedyPage;
