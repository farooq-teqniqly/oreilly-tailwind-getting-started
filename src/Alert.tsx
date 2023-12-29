import React from "react";

interface Props {
  type?: "info" | "warn";
  children: string;
}

function Alert({ type = "info", children }: Props) {
  const infoClasses = "flex flex-col p-4 pt-2 w-full border-l-8 border-blue-500 bg-blue-100";
  const warnClasses = "flex flex-col p-4 pt-2 w-full border-l-8 border-red-500 bg-red-100";

  const alertClasses = type === "info" ? infoClasses : warnClasses;

  return (
    <>
      <div className={alertClasses}>
        <div
          className={`font-semibold italic text-lg ${
            type === "info" ? "text-blue-500" : "text-red-500"
          }`}
        >
          {type === "info" ? "Info" : "Warning"}
        </div>
        <div
          className={`leading-tight text-sm ${type === "info" ? "text-blue-800" : "text-red-800"}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Alert;
