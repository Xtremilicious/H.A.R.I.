import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  background: transparent;
  border-radius: 1.5rem;
  padding: 0rem;

  .table-header {
    background: rgb(46, 46, 46);
    border-radius: 1.5rem;
  }
  .table-container {
    background: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 1.5rem;
    overflow: hidden;
    padding: 0rem;
  }
  thead{
    border-radius: 1.5rem;
  }
`;

function PatientSatisfactionTable() {
  return (
    <Wrapper className="d-flex flex-column justify-content-center align-items-center">
      {/* <div style={{fontSize: "1.5rem", marginBottom:"1rem"}}>Patient Satisfied with Treatment</div> */}
      <div>
        <table className="table m-0 p-0 table-container text-center">
          <thead className="table-header text-white">
            <tr>
              <th>Ratings</th>
              <th>Remarks</th>
              <th>No. of Patients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </td>
              <td>Fully Satisfied</td>
              <td>23K</td>
            </tr>
            <tr>
              <td className="text-left">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </td>
              <td>Satisfied</td>
              <td>16K</td>
            </tr>
            <tr>
              <td className="text-left">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </td>
              <td>Average</td>
              <td>13K</td>
            </tr>
            <tr>
              <td className="text-left">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <FontAwesomeIcon icon={faStar} className="icon" />
              </td>
              <td>Below Average</td>
              <td>11K</td>
            </tr>
            <tr>
              <td className="text-left">
                <FontAwesomeIcon icon={faStar} className="icon" />
              </td>
              <td>Poor</td>
              <td>9K</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default PatientSatisfactionTable;
