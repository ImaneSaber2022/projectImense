/* eslint-disable jsx-a11y/anchor-is-valid */

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React, { useState as UseState } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "helpers";
import { Brand } from "components/brand/Brand";
import Image from "react-bootstrap/Image";

export function Aside(props) {
  // const [isOpen, setOpen] = UseState(true);
  // const handelIsOPEN = () => {
  //   setOpen(!isOpen);
  // };
  const {isOpen , add} =props
 
  return (
    <div
      id="kt_aside"
      className={`aside bg-white aside-left d-flex aside-fixed border-right  ${
        isOpen ? "w-250px h-100" : ""
      } `}
      style={{ width: "63px" }}
    >
      {/* begin::Primary */}
      <div
        className={`aside-primary d-flex flex-column align-items-center flex-row-auto    ${
          isOpen ? "w-250px h-100" : ""
        }  `}
        style={{ width: "63px" }}
      >
        {isOpen ? (
          <div className=" d-flex align-middle justify-content-between w-100 h-60px">
            <div className="     pl-3 ">
              <div className=" d-flex pt-1 ">
                <Image
                  src={toAbsoluteUrl("/media/logo/logo3.jpg")}
                  width={200}
                />
              </div>
            </div>

            <div
              className=" svg-icon   my-auto pr-3"
               onClick={() => add()}
            >
              <SVG src={toAbsoluteUrl("/media/toggle.svg")} />
            </div>
          </div>
        ) : (
          <Brand logo={"/media/logo/logo.svg"} />
        )}
        {/* begin::Nav Wrapper */}
        {/* Remove " flex-column-fluid "::To solve aside footer bottom padding */}
        <div
          className={`aside-nav  d-flex flex-column align-items-center py-5  ${
            isOpen ? "w-250px " : "w-63px"
          } `}
        >
          <div className="w-75">
            {/* begin::Nav */}
            <ul className="list-unstyled flex-column" role="tablist">
              {/* begin::Item */}
              <MyNavLink
                svg="/media/pers.svg"
                txt={"Clients"}
                link="/client"
                isOpen={isOpen}
                
              />

              <MyNavLink
                svg="/media/hand.svg"
                txt={"P.P.E Management"}
                link="/PPE"
                isOpen={isOpen}
              />
            </ul>
          </div>

          {/* end::Nav */}
        </div>

        {/* end::Nav Wrapper */}
      </div>
      {/* end::Primary */}
    </div>
  );
}

function MyNavLink({ link, svg, txt, isOpen }) {
  return (
    <li
      className="nav-item mb-3"
      data-toggle="tooltip"
      data-placement="rigth"
      data-container="body"
      data-boundary="window"
    >
    
        {isOpen ? (
          <NavLink
        to={`${link}`}
        activeClassName="active"
        className={`nav-link btn   btn-clean  btn-lg  w-100  ${
          isOpen ? "  justify-content-start " : ""
        }`}
      >
          <div className="d-flex flex-nowrap text-nowrap  ">
            {" "}
            <span className="svg-icon svg-icon-lg svg-hover-info">
              <SVG src={toAbsoluteUrl(svg)} />
            </span>
            <span className="px-2 text-center">{txt}</span>{" "}
          </div>
          </NavLink>
        ) : (
          <NavLink
          to={`${link}`}
          activeClassName="active"
          className={`nav-link btn btn-icon btn-lg   w-100  ${
            isOpen ? "asideclient justify-content-start " : null
          }`}
        >
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="latest-project">{txt}</Tooltip>}
          >
            <span className="svg-icon svg-icon-lg svg-hover-black  ">
              <SVG src={toAbsoluteUrl(svg)} />
            </span>
          </OverlayTrigger>
          </NavLink>
        )}
 
    </li>
  );
}

 