import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom"
import Rank from "../../icon/rank"
import HomeIcon from "../../icon/home"
import HistoryIcon from "../../icon/history"
import UserIcon from "../../icon/user"
import "./style.sass"
function mapStateToProps(state) {
    return {

    };
}

class index extends Component {
    render() {
        return (
            <footer>
                <NavLink to="/" activeClassName="active" exact className='tab d-flex flex-column align-items-cente justify-content-centerr'>
                    <HomeIcon />
                    <span>Trang chủ</span>
                </NavLink>
                <NavLink to="/sasdsa" activeClassName="active" exact className='tab d-flex flex-column align-items-cente justify-content-centerr'>
                    <Rank />
                    <span>Xếp hạng</span>
                </NavLink>
                <NavLink to="/sdsad" activeClassName="active" exact className='tab d-flex flex-column align-items-cente justify-content-centerr'>
                    <HistoryIcon />
                    <span>Lịch sử</span>
                </NavLink>
                <NavLink to="/ss" activeClassName="active" exact className='tab d-flex flex-column align-items-cente justify-content-centerr'>
                    <UserIcon />
                    <span>Cá nhân</span>
                </NavLink>
            </footer>
        );
    }
}

export default connect(
    mapStateToProps,
)(index);