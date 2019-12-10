import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarIcon from "../../icon/star"
import "./style.sass"
function mapStateToProps(state) {
    return {

    };
}

class Comment extends Component {
    render() {
        return (
            <div className='info p-4 w-100'>
                <Element />
                <Element />
                <Element />
                <Element />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Comment);

function Element() {
    return (
        <div className="row">
            <div className="col-md-2">
                <img className='size-md rounded-circle my-auto' src='https://i.a4vn.com/2018/9/1/hot-girl-kute-de-thuong-hoc-sinh-10x-anh-bia-sac-net-nhat-96cc03.jpg' alt="Người comment" />
            </div>
            <div className="col-md-7">
                <p className='mb-1'><b>Mai Thị Ngọc Quỳnh</b></p>
                <p>Dạy cũng được. Cho 4 sao lấy tinh thần. Tay to. skill mạnh ,  Cho 4 sao lấy tinh thần. Tay to. skill mạnh</p>
            </div>
            <div className="col-md-3">
                <p className="mb-0">
                    <span className='svg svg-fill-main'>  <StarIcon />  </span>
                    <span className='svg svg-fill-main'>  <StarIcon />  </span>
                    <span className='svg svg-fill-main'>  <StarIcon />  </span>
                    <span className='svg svg-fill-main'>  <StarIcon />  </span>
                    <span className='svg svg-fill-secondary'>  <StarIcon />  </span>
                </p>
                <p>
                    <small>Thuê 2 giờ</small> <br /> <small> Ngày 20/02/2019 </small>
                </p>
            </div>
        </div>
    )
}