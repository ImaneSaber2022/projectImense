import React, { Component } from "react";
import SVG from "react-inlinesvg";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import "assets/sass/pages/login/login-4.scss";
import { Aside } from "components/aside/Aside";
 
 
import { toAbsoluteUrl } from "helpers";
import { NavBar } from "components/navbar/NavBar";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isOpen: true
    };
  }


  add = () => {
    this.setState({
      isOpen:!this.state.isOpen
      
    })
  }


  componentDidMount() {
    this.setState({ loading: false });
    $(document).on("click", "div.offcanvas-mobile-overlay", () => {
      console.log("in");
      $("#kt_profile_aside").removeClass("offcanvas-mobile-on");
      $("div.offcanvas-mobile-overlay").remove();
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      $("#kt_profile_aside").removeClass("offcanvas-mobile-on");
      $("div.offcanvas-mobile-overlay").remove();
    }
  }

  render() {
    const { loading } = this.state;
    
    const { children,  routeName} = this.props;

    if (loading) {
      return (
        <div id="splash-screen" className="kt-splash-screen">
          <SVG
            src={toAbsoluteUrl("/media/logo/logo.svg")}
            alt="Mossahamati"
          />
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <circle cx="16.5" cy="16.5" r="16" fill="url(#pattern0)" stroke="#2A5F9E"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use   transform="translate(0 0.166667) scale(0.000333333)"/>
          </pattern>
           
          </defs>
          </svg>
          
        </div>
      );
    }


    return (
      <>
   <>
        {/*begin::Main*/}
        {/* <HeaderMobile /> */}
        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            
              <Aside  isOpen={this.state.isOpen} add={this.add} />
            

            {/*begin::Wrapper*/}
            <div
              className="d-flex flex-column flex-row-fluid wrapper"
              id="kt_wrapper"
            >
              {/*begin::Content*/}
              <div
                id="kt_content"
                className={`content d-flex flex-column flex-column-fluid pt-0 `}
              >
              {routeName ==='PPE'&&  
              <NavBar add={this.add}  isOpen={this.state.isOpen} text={'Overview'} logo={"/media/toggle.svg"}/>
                 }
                 {routeName ==='client'&& 
                 <NavBar  add={this.add}  isOpen={this.state.isOpen}  text={"Clients Management"} logo={"/media/toggle.svg"}/>
                }
                {children}
                
              </div>
              {/*end::Content*/}
            
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        </>
   
 
      </>
    );
  }
}

 
export default withRouter((Layout));
