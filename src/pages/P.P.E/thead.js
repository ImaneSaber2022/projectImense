import React from 'react'
import Image from 'react-bootstrap/Image' 
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
function thead() {
  return (
    <thead className="h-160px p-0">
    <tr > 
      <th className="align-middle  border-right px-2">
        <div className=" svg-icon svg-icon-sm  ">
          <SVG src={toAbsoluteUrl("/media/table/thing.svg")} />
        </div>
      </th>
      <th className="align-middle border-right">
        <div> 
        <div className="  w-250px " style={{color:'#7D7D7D'}}>
        Workers
        </div>
        </div>
        
      </th>
      <th className="align-top pl-2  pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'}  src={toAbsoluteUrl("/media/table/gloves.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Protective<br/> gloves</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/glasses.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Safety glasses</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/ear.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Ear protection</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/mask.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Mask <br/> protection</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/knee.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Knee pads</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/shoes.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Safety shoes</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/coverall.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Coverall</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/jacket.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Hi-Vis Jacket</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/safety.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Safety Harness</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/face.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Face shield</p>
        </div>
      </th>
      <th className="align-top pt-4 ">
        <div> 
        <div className=" ">
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/hard.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Hard Hat</p>
        </div>
      </th>
      <th className="align-top pt-4 pr-2 ">
        <div> 
        <div >
          <Image width={'100px'} height={'100px'} src={toAbsoluteUrl("/media/table/Welding.png")} />
        </div>
        </div>
        <div>
          <p className="text-muted">Welding helmet</p>
        </div>
      </th>
    
    </tr>
  </thead>
  )
}

export default thead
