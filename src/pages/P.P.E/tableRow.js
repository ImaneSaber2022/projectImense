import React from "react";
import Image from "react-bootstrap/Image";
import { toAbsoluteUrl } from "helpers";

function row(props) {
  return (
    <tr key={props.id} className="p-0" >
      <td className="  justify-content-center   align-middle p-0 m-0  border-right"  style={{color:'#7D7D7D'}}>
        {props.id}
      </td>
      <td className=" border-right">
        <div className="  d-flex   justify-content-between m-auto ">
          <div className="d-flex  justify-content-center align-items-center ">
            <Image width={"35px"} src={toAbsoluteUrl(`${props.profil}`)} />
            <div className="d-flex  ml-3 my">
              <div>
                <h6 className="p-0 m-0" style={{color:"#505050" , fontSize:12}}>{props.name}</h6>

                <p className="p-0 m-0 text-left"  style={{color:'#7D7D7D',fontSize:11}}>{props.post}</p>
              </div>
            </div>
          </div>
          <Image width={"40px"} src={toAbsoluteUrl(`${props.client}`)} />
        </div>
      </td>

      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.gloves < 10 && props.gloves > 0 ? (
          <small className={"badge badge-warning  text-center d-flex justify-content-center align-items-center  rounded-circle"} style={{width:'36px',height:'36px',background:'#F8CC23'}}   >{props.gloves} </small>
        ) : (
          <>
            {props.gloves === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.gloves}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.glasses < 10 && props.glasses > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.glasses}</small>
        ) : (
          <>
            {props.glasses === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.glasses}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.ear < 10 && props.ear > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.ear}</small>
        ) : (
          <>
            {props.ear === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.ear}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.mask < 10 && props.mask > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.mask}</small>
        ) : (
          <>
            {props.mask === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.mask}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.Knee < 10 && props.Knee > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.Knee}</small>
        ) : (
          <>
            {props.Knee === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.Knee}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.shoes < 10 && props.shoes > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.shoes}</small>
        ) : (
          <>
            {props.shoes === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.shoes}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.coverall < 10 && props.coverall > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.coverall}</small>
        ) : (
          <>
            {props.coverall === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.coverall}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.jacket < 10 && props.jacket > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.jacket}</small>
        ) : (
          <>
            {props.jacket === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.jacket}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.safety < 10 && props.safety > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.safety}</small>
        ) : (
          <>
            {props.safety === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.safety}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.face < 10 && props.face > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.face}</small>
        ) : (
          <>
            {props.face === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.face}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.hardHat < 10 && props.hardHat > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> {props.hardHat}</small>
        ) : (
          <>
            {props.hardHat === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.glashardHatses}
              </small>
            )}
          </>
        )}
      
      </div>
        </td>
      <td className="align-middle ">
      <div className="d-flex justify-content-center align-items-center ">
      
        {props.weldingHelmet < 10 && props.weldingHelmet > 0 ? (
          <small className={"badge badge-warning   text-center d-flex justify-content-center align-items-center rounded-circle "} style={{width:'36px',height:'36px',background:'#F8CC23'}}> 
            {props.weldingHelmet}
          </small>
        ) : (
          <>
            {props.weldingHelmet === 0 ? (
              "-"
            ) : (
              <small className={"badge text-white    text-center d-flex justify-content-center align-items-center rounded-circle"} style={{width:'36px',height:'36px' ,backgroundColor:'#EF3C3C'}} >
                {props.weldingHelmet}
              </small>
            )}
      
      
            </>
        )}</div>
      </td>
    </tr>
  );
}

export default row;
