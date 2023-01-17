import { NavBar } from "components/navbar/NavBar";
import DateRangePicker from "react-bootstrap-daterangepicker";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Row from "./tbleRow";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import moment from "moment";
import React, { useState as UseState } from "react";
import Thead from "./thead";
function index() {
  const onApply = (picker) => {
    setStartDate(moment(picker.startDate._d).format("YYYY-MM-DD"));
    setEndtDate(moment(picker.endDate._d).format("YYYY-MM-DD"));
  };

  const [startDate, setStartDate] = UseState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndtDate] = UseState(moment().format("YYYY-MM-DD"));
  const [client, setClient] = UseState([
    {
      id: "0001",
      Suscription: "29 / 11 / 2022",
      Client: "/media/client/CLIENT.PNG",
      ContactPerson: {
        profil: "/media/client/photo.png",
        name: "Blaise DEFLOO",
        post: "Manager",
      },
      Sites: "1 Site",
      SubscriptionType: "Monthly",
      NextBill: { DATE: "Mar 1, 2023", DAY: "1" },
      Phone: "+32 4 227 18 08",
      Email: "prewitt.lemaitre@newelec.be",
      Status: "Active",
    },
    {
      id: "0001",
      Suscription: "29 / 11 / 2022",
      Client: "/media/client/CLIENT.PNG",
      ContactPerson: {
        profil: "/media/client/photo.png",
        name: "Blaise DEFLOO",
        post: "Manager",
      },
      Sites: "1 Site",
      SubscriptionType: "Monthly",
      NextBill: { DATE: "Mar 1, 2023", DAY: "18 " },
      Phone: "+32 4 227 18 08",
      Email: "prewitt.lemaitre@newelec.be",
      Status: "Active",
    },
    {
      id: "0001",
      Suscription: "29 / 11 / 2022",
      Client: "/media/client/CLIENT.PNG",
      ContactPerson: {
        profil: "/media/client/photo.png",
        name: "Blaise DEFLOO",
        post: "Manager",
      },
      Sites: "1 Site",
      SubscriptionType: "Monthly",
      NextBill: { DATE: "Mar 1, 2023", DAY: "11" },
      Phone: "+32 4 227 18 08",
      Email: "prewitt.lemaitre@newelec.be",
      Status: "Active",
    },
  ]);
  return (
    <>
      

      {/*Clients Info start  */}
      <div className="container-fluid    ">
        <div className=" d-flex align-items-stretch justify-content-between mt-10 ">
          <div className=" col-md-2  col-sm-1 ">
            <h4 className="text-dark mt-2 ">Clients Info</h4>
          </div>
          <div className="d-flex col-md-10 col-sm-11 px-0 justify-content-end">
            <div className="d-flex col-md-8 col-sm-6 px-0 justify-content-end">
              <Form inline className="m-0   p-0 ">
                <InputGroup className="flex-nowrap text-nowrap ">
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
                    placeholder="Search by id, name, status ..."
                    className=" mr-sm-2 inputSearch bg-white h-30px w-auto"
                  />
                </InputGroup>
              </Form>
              <div className="  align-items-center p-0 d-flex  mr-2">
                <div className=" flex-nowrap text-nowrap">
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
                    <button className="form-control  text-left   h-30px py-1">
                      {startDate} - {endDate}
                    </button>
                  </DateRangePicker>
                </div>
              </div>{" "}
            </div>

            <div className="d-flex col-md-4 col-sm-5 justify-content-end  align-items-center p-0">
              <div className="    align-items-center p-0 d-flex w-100 ">
                <Form.Control
                  as="select"
                  defaultValue="All Contractors"
                  className="  px-2 py-0 h-30px  "
                  style={{ color: "#8E8E8E" }}
                >
                  <option>Subscription Type</option>
                  <option>...</option>
                </Form.Control>
              </div>
              <div className="d-flex align-items-center p-0 w-100  m-0">
                <Form.Control
                  as="select"
                  defaultValue="All Contractors"
                  className=" mx-2 py-0 h-30px "
                  style={{ color: "#8E8E8E" }}
                >
                  <option>Status</option>
                  <option>...</option>
                </Form.Control>
              </div>
           
             
              <div className=" btn btn-icon btn-clean   nav-link svg-icon p-0 m-0">
                <Image
                  src={toAbsoluteUrl("/media/client/btn.png")}
                  style={{ width: "26px", height: "26px" }}
                />
              </div>
              <div className="d-flex align-items-center">
                <div
                  className=" btn btn-icon btn-clean   nav-link svg-icon svg-icon-2x p-0 m-0 "
                  style={{ width: "30px", height: "30px" }}
                >
                  <Image src={toAbsoluteUrl("/media/client/Vector.png")} />
                </div>
              </div>
              </div>
          </div>
        </div>

        {/*Clients Info end  */}
        <div className="pt-4">
          <Table
            responsive
            className=" rounded bg-white text-center align-star justify-content-center   "
          >
            <Thead />
            <tbody>
              {client.map((ele) => (
                <Row
                  id={ele.id}
                  Suscription={ele.Suscription}
                  Client={ele.Client}
                  ContactPerson={ele.ContactPerson}
                  Sites={ele.Sites}
                  SubscriptionType={ele.SubscriptionType}
                  NextBill={ele.NextBill}
                  Phone={ele.Phone}
                  Email={ele.Email}
                  Status={ele.Status}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default index;
