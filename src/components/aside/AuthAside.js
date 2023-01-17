import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "helpers";

export  function AuthAside({ bgColor = "#131313", showLogo = true, svgLink }) {
  const showLogoLogic = () => {
    if (showLogo === false) {
      return "d-sm-none d-md-block opacity-1";
    }
    return "";
  };
  return (
    <>
      {/* begin::Aside */}
      <div className="login-aside d-flex flex-column flex-row-auto" style={{ background: bgColor}}>
        {/*begin::Aside Top*/}        <div className=" d-flex justify-content-center ">

        <div className={`d-flex flex-column-auto flex-column py-lg-20 py-10`}>
          {/*begin::Aside header*/}
          <Link to="/" className="text-center">
            <SVG className={`h-100px max-h-250px ${showLogoLogic()}`} src={toAbsoluteUrl("/media/logos/mossahamati-logo-white-Auth.svg")} />
          </Link>
          {/*end::Aside header*/}
        </div>
        </div>
        {/*end::Aside Top*/}
        {/*begin::Aside Bottom*/}
        <div
          className="aside-img d-flex flex-row-fluid bgi-no-repeat  bgi-position-y-bottom bgi-position-x-center"
          style={{
            backgroundImage: `url('${toAbsoluteUrl(svgLink)}')`,
          }}
        />
        {/*end::Aside Bottom*/}
      </div>
      {/* end::Aside */}
    </>
  );
}
