import React, { useState as UseState } from "react";
 
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import moment from "moment";
import { NavBar } from "components/navbar/NavBar";
import { SubHeader } from "components/subheader/SubHeader.js";
import Table from "react-bootstrap/Table";
 
import Thead from "./thead";
import Row from "./tableRow";
function index(props) {
  const onApply = ( picker) => {
    setStartDate(moment(picker.startDate._d).format("YYYY-MM-DD"));
    setEndtDate(moment(picker.endDate._d).format("YYYY-MM-DD"));
  };

  const [startDate, setStartDate] = UseState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndtDate] = UseState(moment().format("YYYY-MM-DD"));

  const [head, setHead] = UseState([
    {
      "id": 1,
      "profil": "/media/table/photo.png",
      "client": "/media/table/img.png",
      "name": "Blaise DEFLOO",
      "post": "Manager",
      "gloves": 2,
      "glasses": 1,
      "ear": 0,
      "mask": 10,
      "Knee": 0,
      "shoes": 0,
      "coverall": 0,
      "jacket": 1,
      "safety": 0,
      "face": 1,
      "hardHat": 0,
      "weldingHelmet": 0,
    },
    {
      "id": 2,
      "profil": "/media/table/photo.png",
      "client": "/media/table/img.png",
      "name": "Blaise DEFLOO",
      "post": "Manager",
      "gloves": 0,
      "glasses": 5,
      "ear": 0,
      "mask": 0,
      "Knee": 0,
      "shoes": 20,
      "coverall": 0,
      "jacket": 0,
      "safety": 0,
      "face": 1,
      "hardHat": 0,
      "weldingHelmet": 3,
    },
    {
      "id": 3,
      "profil": "/media/table/photo.png",
      "client": "/media/table/img.png",
      "name": "Blaise DEFLOO",
      "post": "Manager",
      "gloves": 10,
      "glasses": 0,
      "ear": 3,
      "mask": 20,
      "Knee": 0,
      "shoes": 1,
      "coverall": 0,
      "jacket": 0,
      "safety": 1,
      "face": 0,
      "hardHat": 7,
      "weldingHelmet": 0,
    },
  ]);



  return (
    <>
      
      <SubHeader />
      {/*P.P.E Violations start  */}
      <div className="container-fluid   ">
      
     
      <div className=" d-flex align-items-stretch justify-content-between  mt-10  row ">
        <div className="col-md-2  col-sm-2">
          <h4 className="text-dark ">P.P.E Violations Table</h4>
        </div>
        <div className="d-flex col-md-10 col-sm-10  justify-content-end ">
          <Form inline className="m-0 col-sm-3 p-0 col-md-5  justify-content-end ">
            <InputGroup className="w-100 ">
              <InputGroup.Prepend className="h-30px">
                <InputGroup.Text
                  id="inputGroupPrepend"
                  className="iconSearch bg-white"
                >
                  <i className="fas fa-search"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Search workers ..."
                className="  inputSearch bg-white h-30px"
              />
            </InputGroup>
          </Form>

          <div className="  align-items-center  d-flex justify-content-end mx-3 ">
            <div >
              <DateRangePicker  
                initialSettings={{
                  startDate: startDate,
                  endDate: endDate,
                  locale: {
                    format: "YYYY-MM-DD",
                    applyLabel: "Valider",
                    cancelLabel: "Annuler",
                    fromLabel: "De",
                    toLabel: "à",
                    customRangeLabel: "Custom",
                    daysOfWeek: [
                      "Dim",
                      "Lun",
                      "Mar",
                      "Mer",
                      "Jeu",
                      "Ven",
                      "Sam",
                    ],
                    monthNames: [
                      "Janvier",
                      "Février",
                      "Mars",
                      "Avril",
                      "Mai",
                      "Juin",
                      "Juillet",
                      "Août",
                      "Septembre",
                      "Octobre",
                      "Novembre",
                      "Décembre",
                    ],
                    firstDay: 1,
                  },
                  ranges: {
                    "Aujourd'hui": [moment(), moment()],
                    Hier: [
                      moment().subtract(1, "days"),
                      moment().subtract(1, "days"),
                    ],
                    "Les 7 derniers jours": [
                      moment().subtract(6, "days"),
                      moment(),
                    ],
                    "Les 30 derniers jours": [
                      moment().subtract(29, "days"),
                      moment(),
                    ],
                    "Ce mois-ci": [
                      moment().startOf("month"),
                      moment().endOf("month"),
                    ],
                    "Le mois dernier": [
                      moment().subtract(1, "month").startOf("month"),
                      moment().subtract(1, "month").endOf("month"),
                    ],
                  },
                }}
                onApply={(event, picker) => onApply(event, picker)}
              >
                <button className="form-control  text-left h-30px py-1 ">
                  {startDate} - {endDate}
                </button>
              </DateRangePicker>
            </div>
          </div>
          <div className="    align-items-center  d-flex col-sm-3  p-0 col-md-2   "  >
            <Form.Control
              as="select"
              defaultValue="All Contractors"
              className="w-200px px-2 py-0 h-30px"
            >
              <option>All Contractors.</option>
              <option>...</option>
            </Form.Control>
          </div>
          <div className="  pl-3 svg-icon   align-items-center p-0 d-flex   ">
            <SVG src={toAbsoluteUrl("/media/full.svg")} style={{width:'30px', height:'30px'}}/>
          </div> 
        </div>
      </div>

      {/*P.P.E Violations end  */}
      {/*-------------------------- */}
      {/*P.P.E Violations table  */}
      <div className=" ppetabel  pt-3">
        <Table
          responsive
          className=" rounded bg-white text-center align-star justify-content-center  ppetabel"
        >
          <Thead />
          <tbody>
          {head.map((ele)=>(
             <Row 
             key={ele.id}
             id={ele.id}
             profil={ele.profil}
             client={ele.client}
             name={ele.name}
             post={ele.post}
             gloves={ele.gloves}
             glasses={ele.glasses}
             ear={ele.ear}
             mask={ele.mask}
             Knee={ele.Knee}
             shoes={ele.shoes}
             coverall={ele.coverall}
             jacket={ele.jacket}
             safety={ele.safety}
             face={ele.face}
             hardHat={ele.hardHat}
             weldingHelmet={ele.weldingHelmet}

             
             />
          ))}
         
         
          </tbody>
        </Table>
      </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const { userreducer } = state;
  return {
    user: userreducer.user,
  };
};
export default withRouter(connect(mapStateToProps, {})(index));
