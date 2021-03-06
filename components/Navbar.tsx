import React, { Dispatch, SetStateAction } from "react";

interface navItemProps {
  label: LabelType;
  clickHandler: Dispatch<SetStateAction<"" | string>>;
}

const NavItem = ({ label, clickHandler }: navItemProps) => {
  return (
    <li className="mr-2">
      <button
        onClick={() => clickHandler(label.acronym)}
        className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
      >
        {label.regionName}
      </button>
    </li>
  );
};

interface LabelType {
  regionName: string;
  acronym: string;
}

interface NavbarProps {
  clickHandler: Dispatch<SetStateAction<string>>;
  labels: Array<LabelType>;
}

const Navbar = ({ clickHandler, labels }: NavbarProps) => {
  return (
    <div className="h-[100] w-[400px]  py-2 m-4 items-center grid justify-items-center">
      <ul className="flex flex-row justify-center">
        {labels.map((label) => (
          <NavItem
            key={label.acronym}
            clickHandler={clickHandler}
            label={label}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
