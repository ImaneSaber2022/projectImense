/* eslint-disable jsx-a11y/anchor-is-valid */

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "helpers";
import { Brand } from "components/brand/Brand";
import Image from "react-bootstrap/Image";

export default function AsideClient(props) {
  return (
    <div>
      {/* begin::Aside */}
      <div
        id="kt_aside"
        className="aside bg-white aside-left d-flex aside-fixed border-right w-250px h-100 "
      >
        {/* begin::Primary */}
        <div className="aside-primary d-flex flex-column align-items-center flex-row-auto w-250px ">
          <div className=" d-flex align-middle justify-content-between w-100 h-60px">
            <div className="     pl-3 ">
              <div className=" d-flex pt-1 ">
                <Image
                  src={toAbsoluteUrl("/media/logo/logo3.jpg")}
                  width={200}
                />
              </div>
            </div>

            <div className=" svg-icon   my-auto pr-3">
              <SVG src={toAbsoluteUrl("/media/toggle.svg")} />
            </div>
          </div>

          {/* begin::Nav Wrapper */}
          {/* Remove " flex-column-fluid "::To solve aside footer bottom padding */}
          <div className="d-flex flex-column justify-content-between">
            <div className="aside-nav d-flex flex-column align-items-center py-5 px-4 scrollA scrollA-pull">
              <div className={`scrollA scrollA-pull overflow-auto `}>
                {/* begin::Nav */}
                <ul className="list-unstyled flex-column" role="tablist">
                  {/* begin::Item */}
                  
                <CNavLink svg="/media/home.svg" txt={"home"}   />
                <Link to={"/PPE"}>
                  <CNavLink
                    svg="/media/hand.svg"
                    txt={"P.P.E Management"}
                    
                  /></Link>
                </ul>
              </div>

              {/* end::Nav */}
            </div>
            <div className="position-absolute bottom-0 end-0 w-250px" >
            <div className=" aside-footer d-flex flex-column   justify-content-start flex-column-auto pt-4   px-2   border-top  ">
              <h6 className=" font-weight-bold text-left text-muted">@ App name 2021</h6>
              <p className="text-muted fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
            </div>
          </div>
          {/* end::Nav Wrapper */}
        </div>

        {/* end::Primary */}
      </div>

      {/* end::Aside */}
    </div>
  );
}

 

function CNavLink({ link, svg, txt }) {
  return (
    <li
      className="nav-item mb-3 "
      data-toggle="tooltip"
      data-placement="rigth"
      data-container="body"
      data-boundary="window"
    >
      <div
        
        activeClassName="active"
        className="nav-link btn asideclient     "
      >
      <div className="d-flex align-items-center">
      
        <span className=" svg-icon-lg svg-icon menu-icon">
          <SVG src={toAbsoluteUrl(svg)} />
        </span>
        <h6 className="text-dark asidetext m-0 p-0">{txt}</h6>
      </div>
      
      </div>
    </li>
  );
}
