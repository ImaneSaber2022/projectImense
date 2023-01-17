import React from 'react'
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
function thead() {
  return (
    <thead className="  "style={{background: "#42A4DF",height:'30px'}}>
    <tr>
      <th className="align-middle text-white flex-nowrap text-nowrap " >ID</th>
      <th className="align-middle text-white flex-nowrap text-nowrap">Suscription</th>
      <th className="align-middle text-white flex-nowrap text-nowrap">Client</th>
      <th className="align-middle text-white flex-nowrap text-nowrap">Contact Person</th>
      <th className="align-middle text-white flex-nowrap text-nowrap">Sites</th>
      <th className="align-middle text-white flex-nowrap text-nowrap"  >Subscription Type</th>
      <th className="align-middle text-white flex-nowrap ">Next Bill</th>
      <th className="align-middle text-white  flex-nowrap text-nowrap" >Phone</th>
      <th className="align-middle text-white flex-nowrap text-nowrap"   >Email</th>
      <th className="align-middle text-white flex-nowrap text-nowrap">Status</th>
      <th className="align-middle text-white flex-nowrap text-nowrap">
        <div className=" svg-icon svg-icon-sm  ">
          <SVG src={toAbsoluteUrl("/media/table/thing.svg")} />
        </div>
      </th>
    </tr>
  </thead>
  )
}

export default thead
