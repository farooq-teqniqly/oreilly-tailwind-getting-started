import React from "react";

function NotFoundErrorPage() {
  return (
    <div className={`text-center text-slate-600 p-4 flex flex-col text-xl`}>
      <span className={`font-bold`}>404</span>
      <span>This is not the web page you are looking for.</span>
    </div>
  );
}

export default NotFoundErrorPage;
