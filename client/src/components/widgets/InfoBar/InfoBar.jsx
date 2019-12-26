import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair, faUserMd, faUserNurse, faBriefcaseMedical, faHeartbeat, faAmbulance} from "@fortawesome/free-solid-svg-icons";

import InfoBarItem from "./InfoBarItem.jsx";

const Wrapper = styled.div`
.main-container{
  background: #2E2E2E;
}
   
  .icon {
    font-size: 3rem;
    color: rgb(46,46,46);
  }
  .info-text {
    font-size: 1.2rem;
    color: #848484;
  }
  .text-blue{
    color:#424242;
  }
  .item{
    border-radius: 1.5rem;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;

function InfoBar() {
  return (
    <Wrapper className="row m-0 p-3 d-flex justify-content-center">
      <div className="col-2 m-3 p-2 item">
        <div className="row m-0 p-0">
          <div className="col-4 icon d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faWheelchair} className="" />
          </div>
          <div className="col-8">
            <div className="info-text">No. of Patients</div>
            <div className="info-text text-blue">5647</div>
          </div>
        </div>
      </div>
      <div className="col-2 m-3 p-2 item">
        <div className="row m-0 p-0">
          <div className="col-4 icon d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faUserMd} className="" />
          </div>
          <div className="col-8">
            <div className="info-text">No. of Doctors</div>
            <div className="info-text text-blue">126</div>
          </div>
        </div>
      </div>

      {/* <div className="col-2 m-3 p-2">
        <div className="row m-0 p-0">
          <div className="col-4 icon d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faAmbulance} className="" />
          </div>
          <div className="col-8">
            <div className="info-text">No. of Ambulances</div>
            <div className="info-text text-blue">3</div>
          </div>
        </div>
      </div> */}

      <div className="col-2 m-3 p-2 item">
        <div className="row m-0 p-0">
          <div className="col-4 icon d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faHeartbeat} className="" />
          </div>
          <div className="col-8">
            <div className="info-text">Heart Patients</div>
            <div className="info-text text-blue">1820</div>
          </div>
        </div>
      </div>

      <div className="col-2 m-3 p-2 item">
        <div className="row m-0 p-0">
          <div className="col-4 icon d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faBriefcaseMedical} className="" />
          </div>
          <div className="col-8">
            <div className="info-text">Medicine Shops</div>
            <div className="info-text text-blue">56</div>
          </div>
        </div>
      </div>

      <div className="col-2 m-3 p-2 item">
        <div className="row m-0 p-0">
          <div className="col-4 icon d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faUserNurse} className="" />
          </div>
          <div className="col-8">
            <div className="info-text">No. of Interns</div>
            <div className="info-text text-blue">52</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default InfoBar;
