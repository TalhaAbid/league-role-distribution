import React from "react";

interface PagniationButtonPropTypes {
  onClick: any;
  disabled: any;
  label: string;
}

const PagniationButton = ({
  onClick,
  disabled,
  label,
}: PagniationButtonPropTypes) => {
  return (
    <button
      className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      onClick={onClick}
      disabled={!disabled}
    >
      {label}
    </button>
  );
};
export { PagniationButton };
