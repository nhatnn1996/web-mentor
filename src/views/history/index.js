import React, { useState, useEffect } from "react";
import Currency from "../../components/icon/currency";
import { connect } from "react-redux";
import Api from "../../service/api";
import { URLIMG } from "../../service/config";

const format = (data, id) => {
  const result = data.map(element => {
    const item = {};
    item.time = element.time;
    item.cost = element.cost;

    if (element.user.id === id) {
      item.type = 1;
      item.partner = element.mentor;
    } else {
      item.type = 2;
      item.partner = element.user;
    }
    return item;
  });
  return result;
};

function History(props) {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    function changeHistory(res) {
      if (histories.length === 0) {
        const resut = format(res.data.data, props.user.id);
        setHistories(resut);
      }
    }
    Api()
      .get("/contract/" + props.user.id)
      .then(changeHistory);
  });
  if (histories.length === 0)
    return (
      <div className=" justify-content-center d-flex align-items-center h-100">
        Loading....
      </div>
    );
  else
    return (
      <div className="history bg-white box-shadow p-3">
        <h2 className="text-center py-2">Lịch sử </h2>
        <table className="table">
          <thead>
            <tr>
              <th> STT </th>
              <th> Hành động </th>
              <th> Thời gian </th>
              <th> Đối tác </th>
              <th> Tiền </th>
            </tr>
          </thead>
          <tbody>
            {histories.map((element, index) => {
              const classes =
                element.action === "1"
                  ? "btn-warning text-white"
                  : "btn-success";
              return (
                <tr key={index}>
                  <td> {index} </td>
                  <td>
                    <span className={"btn btn-sm " + classes}>
                      {element.action === "1" ? "Thuê" : "Được thuê"}
                    </span>
                  </td>
                  <td> {element.time} giờ </td>
                  <td>
                    {element.partner.name}
                    <img
                      className="ml-2 rounded-circle shadow-sm size-sm"
                      src={URLIMG + element.partner.avatar}
                      alt=""
                    />
                  </td>
                  <td>
                    <span> 85 </span>
                    <span className="svg svg-fill-main">
                      <Currency />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm justify-content-end">
        <li className="page-item pointer disabled">
          <span className="page-link" tabIndex="-1">
            Previous
          </span>
        </li>
        <li className="page-item pointer">
          <span className="page-link">1</span>
        </li>
        <li className="page-item pointer">
          <span className="page-link">2</span>
        </li>
        <li className="page-item pointer">
          <span className="page-link">3</span>
        </li>
        <li className="page-item pointer">
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav> */}
      </div>
    );
}
export default connect(
  state => ({ user: state.auth }),
  null
)(History);
