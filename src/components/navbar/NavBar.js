import React, { useState as UseState } from "react";

import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import { Navbar, Nav } from "react-bootstrap";
import Profil from "components/profil/profil";
 
export function NavBar(props) {
  const [show, setShow] = UseState(false);

  const hide = (bool) => {
    setShow(bool);
  };
  const { logo ,add ,isOpen } = props;

  console.log(props);
  return (
    <div
      id="kt_header"
      className="header header-fixed header-menu-wrapper header-menu-wrapper-left "
    >
      <div className="d-flex align-items-stretch justify-content-between">
        <div
          id="kt_header_menu_wrapper"
          className="header-menu-wrapper header-menu-wrapper-left d-flex"
        >
          <Navbar className="parentNav p-0" bg="white" expand="lg">
          {isOpen === false ? 
          <div className=" svg-icon  d-flex  m-auto" aria-controls="basic-navbar-nav" onClick={()=> add()}>
                  <SVG  src={toAbsoluteUrl(`${logo}`)}  className=" d-flex ml-1 align-items-center my-auto"/>
                </div>
              :null
              
              }
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto d-flex align-items-center">
                <div activeClassName="active" className=" d-flex align-items-center">
                  <h6 className="myP font-weight-bold  " style={{fontSize :18}}>
                    {props.text}
                  </h6>
                </div>
              </Nav>
            
            </Navbar.Collapse>
            
          </Navbar>

        </div>
        <div className="topbar align-items-center">
          <div className="">
            <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
              <SVG src={toAbsoluteUrl("/media/A.svg")} />
            </div>
          </div>
          <div className="">
            <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
              <SVG src={toAbsoluteUrl("/media/moon.svg")} />
            </div>
          </div>
          <div className="px-2">
            <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
              <SVG src={toAbsoluteUrl("/media/notif.svg")} />
            </div>
          </div>
          <div className="dropdown ">
            <div
              className="topbar-item"
              data-toggle="dropdown"
              data-offset="10px, 0px"
            >
              <div className="btn btn-icon btn-clean btn-dropdown btn-lg">
                <img
                  src="/media/uk.svg"
                  alt="Morocco"
                  className="h-20px w-20px rounded-sm"
                />
              </div>
            </div>
          </div>
          <div
            className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-4"
            onClick={() => {
              setShow(true);
            }}
          >
            <SVG src={toAbsoluteUrl("/media/blog.svg")} />

            <span
              className="  font-weight-bold font-size-base d-none d-md-inline mr-1 pl-3"
              style={{ color: "#7A7A7A" }}
            >
              BESIX Group
            </span>
            <span className="  font-weight-bolder font-size-base d-none d-md-inline mr-3 w-20px">
              <SVG src={toAbsoluteUrl("/media/angle-down (1).svg")} />
            </span>
          </div>
        </div>
        {show && <Profil show={show} hide={hide} />}
      </div>
    </div>
  );
}
