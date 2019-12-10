import React, { Component } from "react";
import { connect } from "react-redux";
import Currency from "../../components/icon/currency";
function mapStateToProps(state) {
  return {};
}
const array = [
  {
    action: "1",
    time: " 18:30 - 17:30, today ",
    partner: "Ngọc Tín",
    avatar:
      "https://img2.thuthuatphanmem.vn/uploads/2018/12/25/nhung-hinh-anh-gai-xinh-cuc-dep_012909400.jpg"
  },
  {
    action: "2",
    time: " 18:30 - 17:30, today  ",
    partner: "Ngọc Tín",
    avatar:
      "https://2sao.vietnamnetjsc.vn/images/2019/03/26/22/43/u23-viet-nam-06.jpg"
  },
  {
    action: "1",
    time: " 18:30 - 17:30, today  ",
    partner: "Ngọc Tín",
    avatar:
      "http://diembaoaz.com/wp-content/uploads/2018/11/anh-girl-xinh-9-1.jpg"
  },
  {
    action: "2",
    time: " 18:30 - 17:30, today  ",
    partner: "Ngọc Tín",
    avatar:
      "http://media2.sieuhai.tv:8088/onbox/images/user_lead_image/20190408/84947430634_20190408001343.jpg"
  },
  {
    action: "1",
    time: " 18:30 - 17:30, today  ",
    partner: "Ngọc Tín",
    avatar:
      "https://www.hvn88.com/wp-content/uploads/2019/03/gai-xinh-tik-tok-2.jpg"
  },
  {
    action: "1",
    time: " 18:30 - 17:30, today  ",
    partner: "Ngọc Tín",
    avatar:
      "https://www.hvn88.com/wp-content/uploads/2019/03/gai-xinh-tik-tok-2.jpg"
  },
  {
    action: "1",
    time: " 18:30 - 17:30, today  ",
    partner: "Ngọc Tín",
    avatar:
      "https://www.hvn88.com/wp-content/uploads/2019/03/gai-xinh-tik-tok-2.jpg"
  },
  {
    action: "1",
    time: " 18:30 - 17:30, today  ",
    partner: "Ngọc Tín",
    avatar:
      "https://www.hvn88.com/wp-content/uploads/2019/03/gai-xinh-tik-tok-2.jpg"
  },
  {
    action: "2",
    time: " 18:30 - 17:30, today ",
    partner: "Ngọc Tín",
    avatar: "https://vcdn-ione.vnecdn.net/2019/07/03/0-1-4015-1562137097.jpg"
  }
];
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      valuePopup: {}
    };
    this.changePopup = this.changePopup.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  changePopup() {
    this.setState(state => ({ popup: !state.popup }));
  }
  getValue(item) {
    this.setState({ popup: true, valuePopup: item });
  }
  render() {
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
            {array.map((element, index) => {
              const classes =
                element.action === "1"
                  ? "btn-warning text-white"
                  : "btn-success";
              return (
                <tr>
                  <td> {index} </td>
                  <td>
                    {" "}
                    <span className={"btn btn-sm " + classes}>
                      {" "}
                      {element.action === "1" ? "Thuê" : "Được thuê"}
                    </span>{" "}
                  </td>
                  <td> {element.time} </td>
                  <td>
                    {" "}
                    {element.partner}{" "}
                    <img
                      className="ml-2 rounded-circle shadow-sm size-sm"
                      src={element.avatar}
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
        <nav aria-label="Page navigation example">
          <ul class="pagination pagination-sm justify-content-end">
            <li class="page-item pointer disabled">
              <span class="page-link" tabindex="-1">
                Previous
              </span>
            </li>
            <li class="page-item pointer">
              <span class="page-link">1</span>
            </li>
            <li class="page-item pointer">
              <span class="page-link">2</span>
            </li>
            <li class="page-item pointer">
              <span class="page-link">3</span>
            </li>
            <li class="page-item pointer">
              <span class="page-link">Next</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default connect(mapStateToProps)(History);
