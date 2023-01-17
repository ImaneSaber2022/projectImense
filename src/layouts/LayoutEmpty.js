import React, { Component } from "react";

class LayoutEmpty extends Component {
  render() {
    const { children } = this.props;
    
    return <>
    <div className="container-fluid d-flex align-items-center justify-content-center">
    {children}
    </div>
    
    
    </>;
  }
}
export default LayoutEmpty;
