import React from "react";
import SignInOrOutBtns from "./SignInOrOutBtns";

function TopBar() {
  return (
    <div className="flex justify-between px-5 py-2">
      <h2>TopBar</h2>
      <div className="btns">
        <SignInOrOutBtns />
      </div>
    </div>
  );
}

export default TopBar;
