import React, { Component } from 'react';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {

    };
}


class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='bg-white box-shadow h-100 p-4'>
                <div className='row justify-content-center align-items-end'>
                    <div className="col-md-3">
                        <img src="https://i.a4vn.com/2019/1/26/tuyen-tap-nhung-hinh-anh-gai-dep-nam-2019-gay-nhieu-chu-y-cua-co-8bc5c6.png" className="w-100" alt="hình đại diện" />
                    </div>
                    <div className='col-md-9 w-100'>
                        <button className="btn d-block text-nowrap btn-primary mb-3">
                            Chọn hình ảnh
                        </button>
                        <span> Thay hình ảnh bạn muốn </span>
                    </div>
                </div>
                <div className="row mt-3  align-items-center">
                    <div className="col-md-3 "> <label className='mb-0' htmlFor="">Họ và tên</label> </div>
                    <div className="col-md-5"> <input value='Nguyễn Ngọc Nhất' className="input border" /></div>
                </div>
                <div className="row mt-3 align-items-center">
                    <div className="col-md-3"> <label className='mb-0' htmlFor="">Email</label> </div>
                    <div className="col-md-5"> <input className="input border" value="nhatnnps07643@gmail.com" /></div>
                </div>
                <div className="row mt-3 align-items-center">
                    <div className="col-md-3"> <label className='mb-0' htmlFor="">Giới tính</label> </div>
                    <div className="col-md-5">
                        <select className="input border" name="" id="">
                            <option >Giới tính</option>
                            <option selected>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-8 d-flex justify-content-end">
                        <button className="btn btn-secondary mr-3">
                            Hủy
                        </button>
                        <button className="btn bg-fill-main text-white">
                            Thay đổi
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
)(EditProfile);