import Navbar from "./Navbar";
import { FunctionComponent } from "react";
import { useState } from "react";

interface Props {
  children: any;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const [active, setActive] = useState<string>("na1");

  const labels = [
    {
      regionName: "North America",
      acronym: "na1",
    },
    {
      regionName: "Korea",
      acronym: "lck",
    },
    {
      regionName: "Europe",
      acronym: "euw1",
    },
  ];
  console.log(active);

  return (
    <div className="border border-yellow-400 w-full h-screen bg-gray-200 grid justify-items-center">
      <Navbar labels={labels} clickHandler={setActive} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
