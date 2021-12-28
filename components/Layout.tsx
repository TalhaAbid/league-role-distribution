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
    <div className="flex flex-col flex-wrap w-screen h-screen items-center justify-center bg-violet-200 border border-yellow-400 ">
      <h1 className="font-mono text-2xl font-medium">
        League Of Legends Role Distribution
      </h1>
      <Navbar labels={labels} clickHandler={setRegion} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
