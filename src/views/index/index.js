import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mentor from "../../components/mentor"

import "./index.sass"
function mapStateToProps(state) {
    return {

    };
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
class View extends Component {
    render() {
        return (
            <div className='content'>
                {array.map((element, index) => <Mentor key={index} />)}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
)(View);