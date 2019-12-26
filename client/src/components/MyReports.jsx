import React, { Component } from "react";
import Reports from "./widgets/Reports";
import { Items } from "../../data";

export default class MyReports extends Component {
  render() {
    let value = [];
    Items.forEach(item => {
      const singleItem = { ...item };
      value = [...value, singleItem];
    });
    return (
      <React.Fragment>
        <div className="">
          <div className="container m-0 p-0 mx-auto">
            <div className="row m-0 p-0 d-flex justify-content-center">
              {value.map(report => {
                if(report.id==="H17280X3"){
                  return <Reports key={report.id} data={report} />;
                }
                
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
