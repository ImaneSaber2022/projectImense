import React, { useState as UseState } from "react";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import { Navbar, Nav } from "react-bootstrap";
import Profil from "components/profil/profil";


import { NavLink } from "react-router-dom";

export function SubHeader(props) {
  const [show, setShow] = UseState(false);

  const hide = (bool) => {
    setShow(bool);
  };
  const { logo } = props;
  return (
    
    <>
      {/* <div
        id="kt_header"
        className="header header-fixed subheader py-2  subheader-solid border-bottom border-md"
      >
        <Nav className="d-flex px-5  ">
          <div activeClassName="active" className=" pl-5" style={{color:'#B6B6B6'}} >
            SITES
          </div>
        </Nav>
        <div className=" p-0 m-0 "  style={{transform: 'rotate(90deg)' , borderColor:'#B6B6B6 ' ,width:38,border:'  0.2px solid #B6B6B6'}}/>
        <div className="container-fluid d-flex align-items-stretch justify-content-between  flex-wrap flex-sm-nowrap ">
          <div
            id="kt_header_menu_wrapper"
            className="header-menu-wrapper header-menu-wrapper-left"
          >
            <Navbar className="parentNav p-0" bg="danger" expand="lg">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-info"
                  >
                    All
                  </NavLink>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-muted"
                  >
                    Site 1
                  </NavLink>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-muted"
                  >
                    Site 2
                  </NavLink>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-muted"
                  >
                    Site 3
                  </NavLink>
                </Nav>
                <Nav className="mr-auto d-flex">
                  <NavLink
                    to="/formation/settings"
                    activeClassName="active"
                    className="ml-5  px-5 text-muted"
                  >
                    Site 4
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div> */}
      <div
      id="kt_header"
      className="header header-fixed header-menu-wrapper header-menu-wrapper-left"
    >
      <div className="d-flex align-items-stretch justify-content-between">
        <div
          id="kt_header_menu_wrapper"
          className="header-menu-wrapper header-menu-wrapper-left d-flex "style={{height:"36px"}}
        >
           <div activeClassName="active" className=" d-flex align-items-center"style={{height:'36px',width:'86px'}}>
                  <h6 className="myP font-weight-bold border-right border-opacity-75 border-dark-50 d-flex my-0 py-0 align-items-center justify-content-center " style={{fontSize :12 ,height:'36px',width:'86px', backgroundColor:"#F2F2F2", color:"#ADADAD"}}>
                   SITES
                  </h6>
                </div>
               
                <div className="d-flex justify-content-start  align-items-center">
                <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
            <div className="btn btn-icon  btn-clean  btn-lg px-2 ml-3 ">
              <span style={{color:'#42A4DF', fontsize:11}}>All</span>
           
          </div>
         
            <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
            <span style={{color:'#ABABAB', fontsize:12}}>Site 1</span>
            
          </div>
         
            <div className="btn btn-icon w-auto btn-clean d-flex align-items-content btn-lg px-2 ml-3">
            <span style={{color:'#ABABAB', fontsize:12}}>Site 2</span>
          
          </div>
         
            <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
            <span style={{color:'#ABABAB', fontsize:12}}>Site 3</span>
            
          </div>
          <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3">
            <span style={{color:'#ABABAB', fontsize:12}}>Site 4</span>
            
          </div>
          {/* <div className="dropdown ">
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
          </div> */}
          {/* <div
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
          </div> */}
        </div>
        </div>
        
        {/* {show && <Profil show={show} hide={hide} />} */}
      </div>
    </div>
 
    </>
  );
}

