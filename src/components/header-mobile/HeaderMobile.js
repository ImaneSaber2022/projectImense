import React from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "helpers";

export function HeaderMobile() {
  return (
    <>
      {/*begin::Header Mobile*/}
      <div id="kt_header_mobile" className="header-mobile">
        {/* begin::Logo */}
        <Link to="/">
          {/* <img alt="Chronos logo" className="logo-default max-h-30px" src={toAbsoluteUrl("/media/logos/Chronos-Icon-logo-black.png")} /> */}
          <SVG className="logo-default max-h-30px" src={toAbsoluteUrl("/media/logos/chronos-Icon-logo-black.svg")} />
        </Link>
        {/* end::Logo */}

        {/* begin::Toolbar */}
        <div className="d-flex align-items-center">
          <button className="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
            <span />
          </button>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header Mobile */}
    </>
  );
}
