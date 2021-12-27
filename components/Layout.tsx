import Navbar from "./Navbar";
import { FunctionComponent } from "react";
import { useState } from "react";

interface Props {
  setRegion: any;
  children: any;
}

const Layout: FunctionComponent<Props> = ({ setRegion, children }) => {
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

  return (
    <div className="flex flex-col flex-wrap w-screen h-screen justify-center bg-white border border-yellow-400 ">
      <Navbar labels={labels} clickHandler={setRegion} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
