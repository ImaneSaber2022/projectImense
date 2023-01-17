import Image from "react-bootstrap/Image";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Switch } from "antd";
import React,{useState as UseState} from "react";

function row(props) {

  const [event , setEvent]=UseState('')

  
  return (
    <tr >
      <td className="align-middle  flex-nowrap text-nowrap"> {props.id}</td>
      <td className="align-middle flex-nowrap text-nowrap"> {props.Suscription}</td>
      <td className="align-middle flex-nowrap text-nowrap">
        <Image width={"114px"} src={toAbsoluteUrl(`${props.Client}`)} />
      </td>
      <td className="align-middle w-150px flex-nowrap text-nowrap">
        <div className="d-flex  justify-content-center align-items-center ">
          <Image
            width={"34px"}
            src={toAbsoluteUrl(`${props.ContactPerson.profil}`)}
          />
          <div className="d-flex  ml-3 my">
            <div>
              <h4 className="p-0 m-0" style={{ fontSize: 12, height: "15px" }}>
                {props.ContactPerson.name}
              </h4>

              <p
                className="p-0 m-0 text-left "
                style={{ fontSize: 11, height: "15px" }}
              >
                {props.ContactPerson.post}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="align-middle flex-nowrap text-nowrap">
        <div className="d-flex">
          <div
            className="  svg-icon svg-icon"
            style={{ width: "14px", height: "17px" }}
          >
            <SVG src={toAbsoluteUrl("/media/client/Vector.svg")} />
          </div>
          <div className="ml-4">{props.Sites}</div>
        </div>
      </td>
      <td className="align-middle  justify-content-center flex-nowrap text-nowrap  ">
        <div
          className="border px-2 py-2 m-auto border-2  bordersubscription  "
          style={{
            borderRadius: 50,
            fontSize: 11,
            color: "#42A4DF",
             
            width: "87px",
            height: "30px",
            borderWidth: 3,
             
          }}
        >
          {props.SubscriptionType}
        </div>
      </td>
      <td className="align-middle  flex-nowrap text-nowrap">
        {props.NextBill.DAY > 10 ? (
          <div
            className={`btn px-3 py-1 text-white  `}
            style={{
              borderRadius: 50,
              fontSize: 11,
              backgroundColor: "#47CA5B",
            }}
          >
            {props.NextBill.DATE} <span className="px-2">.</span>
            {props.NextBill.DAY}
            <span className="px-2">Days Remaining</span>
          </div>
        ) : (
          <>
            {
              (props.NextBill.DAY === '1' ? (
                <div
                  className={`btn px-3 py-1 text-white  `}
                  style={{
                    borderRadius: 50,
                    fontSize: 11,
                    backgroundColor: "#F5B100",
                  }}
                >
                  {props.NextBill.DATE} <span className="px-2">.</span>
                  {props.NextBill.DAY}
                  <span className="px-2">Days Remaining</span>
                </div>
              ) : props.NextBill.DAY < 10 && props.NextBill.DAY > 1 ? (
                <div
                  className={`btn px-3 py-1 text-white  `}
                  style={{
                    borderRadius: 50,
                    fontSize: 11,
                    backgroundColor: "#FF3838",
                  }}
                >
                  {props.NextBill.DATE} <span className="px-2">.</span>
                  {props.NextBill.DAY}
                  <span className="px-2">Days Remaining</span>
                </div>
              ) : null)
            }
          </>
        )}
      </td>
      <td className="align-middle text-success flex-nowrap text-nowrap " style={{ color: "#47CA5B" }}>
        {" "}
        {props.Phone}
      </td>
      <td className="align-middle flex-nowrap text-nowrap" style={{ color: "#FF772A" }}>
        {" "}
        {props.Email}
      </td>
      <td className="align-middle flex-nowrap text-nowrap ">
        <Switch
 
          className={`${event ? 'bg-success' : 'bg-muted'}`}
          checkedChildren={"Active"}
          unCheckedChildren={"Inactive"}
           
          onClick={(e)=> { setEvent(e)}}
        />
      </td>
      <td className="align-middle ">
        <LongMenu />
      </td>
    </tr>
  );
}

export default row;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        className="overflow-hidden mt-20"
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            overflow: "hidden",
            height: 200,
            width: 150,
          },
        }}
      >
        <div className=" d-flex justify-content-center ">
          <div>
            <h6 className=" d-flex justify-content-center py-3 ">Actions</h6>
            <div>
              <MenuItem
                onClick={handleClose}
                className=" d-flex justify-content-start   "
              >
                <div className=" svg-icon svg-icon-md  px-2">
                  <SVG src={toAbsoluteUrl("/media/table/thing.svg")} />
                </div>
                <span>Preferences</span>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className=" d-flex justify-content-start    "
              >
                <div className=" svg-icon svg-icon-md  px-2 ">
                  <Image src={toAbsoluteUrl("/media/client/edit.png")} />
                </div>
                <span className=" "> Edit</span>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className=" d-flex justify-content-start  "
              >
                <div className=" svg-icon svg-icon-md px-2  ">
                  <SVG src={toAbsoluteUrl("/media/client/delete.svg")} />
                </div>
                <span>Delete</span>
              </MenuItem>

              <MenuItem
                onClick={handleClose}
                className=" d-flex justify-content-start  "
              >
                <div className=" svg-icon svg-icon-md px-2 ">
                  <SVG src={toAbsoluteUrl("/media/client/export.svg")} />
                </div>
                <span>Export</span>
              </MenuItem>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
