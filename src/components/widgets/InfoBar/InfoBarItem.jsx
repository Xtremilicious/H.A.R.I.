import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWheelchair,

} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
 .icon{ 
      font-size: 3rem;
 }
 .info-text{
    font-size: 1.2rem;
 }
`;

function InfoBarItem() {
  return <Wrapper className="col-2 m-0 p-0">
      <div className="row m-0 p-0">
          <div className="col-4 icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faWheelchair} className=""/></div>
          <div className="col-8">
          <div className="info-text">No. of Patients</div>
          <div className="info-text">3</div>
          </div>
          
      </div>
  </Wrapper>
}

export default InfoBarItem;
