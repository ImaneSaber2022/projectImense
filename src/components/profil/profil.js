import React from "react";

import { connect } from "react-redux";

function Profil(props) {
  return (
    <>
      {props.show ? (
        <>
          <div
            className=" offcanvas offcanvas-right p-5 offcanvas-on"
            style={{ width: "25%" }}
          >
            <div
              className="offcanvas-header d-flex align-items-center justify-content-end pb-5"
              kt-hidden-height={40}
            >
              <a
                href="#"
                className="btn btn-xs btn-icon btn-light btn-hover-primary "
                id="kt_quick_user_close"
                onClick={() => props.hide(false)}
              >
                <i className="ki ki-close icon-xs text-muted" />
              </a>
            </div>
     
          </div>
          <div
            className="offcanvas-overlay"
            onClick={() => {
              props.hide(false);
            }}
          />
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = ({ userreducer }) => {
  return { ...userreducer };
};

export default connect(mapStateToProps, {})(Profil);
