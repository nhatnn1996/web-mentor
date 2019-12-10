import React, { Component } from 'react';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {

    };
}
class EditPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='bg-white box-shadow h-100 p-4'>
                <div className="row h-100 ">
                    <div className="col-md-8 ">
                        <div className="row lign-items-center">
                            <div className="col-md-4"> <label className='mb-0' htmlFor="">Mật khẩu củ</label> </div>
                            <div className="col-md-8"> <input className="input border" /></div>
                        </div>
                        <div className="row mt-3 align-items-center">
                            <div className="col-md-4"> <label className='mb-0' htmlFor="">Mật khẩu mới</label> </div>
                            <div className="col-md-8"> <input className="input border" /></div>
                        </div>
                        <div className="row mt-3 align-items-center">
                            <div className="col-md-4"> <label className='mb-0' htmlFor="">Nhập lại mất khẩu</label> </div>
                            <div className="col-md-8"> <input className="input border" /> </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12 d-flex justify-content-end">
                                <button className="btn btn-secondary mr-3">
                                    Hủy
                                </button>
                                <button className="btn bg-fill-main text-white">
                                    Thay đổi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
)(EditPassword);