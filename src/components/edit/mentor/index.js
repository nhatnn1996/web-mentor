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
                    <div className="col-md-3  ">
                        <img src="https://i.a4vn.com/2019/1/26/tuyen-tap-nhung-hinh-anh-gai-dep-nam-2019-gay-nhieu-chu-y-cua-co-8bc5c6.png" className="w-100 box-shadow" alt="hình đại diện" />
                    </div>
                    <div className='col-md-3 w-100'>
                        <button className="btn d-block text-nowrap btn-primary mb-3">
                            Chọn hình ảnh
                        </button>
                        <small> Thay hình ảnh bạn muốn </small>
                    </div>
                    <div className="col-md-2"> <label className='mb-0' htmlFor="">Thành tích</label> </div>
                    <div className="col-md-4">
                        <button className="btn btn-warning btn-sm text-white">Thay đổi</button>
                        <button className="btn btn-primary ml-3 btn-sm">Xem</button>
                    </div>
                </div>
                <div className="row mt-3 align-items-center">
                    <div className="col-md-2"> <label className='mb-0' htmlFor="">Tên hiển thị</label> </div>
                    <div className="col-md-4"> <input value='Nguyễn Ngọc Nhất' className="input border" /></div>
                    <div className="col-md-2"> <label className='mb-0' htmlFor="">Trường học</label> </div>
                    <div className="col-md-4"> <input className="input border" value="Cao đẵng FPT" /></div>
                </div>
                <div className="row mt-3 align-items-center">
                    <div className="col-md-2"> <label className='mb-0' htmlFor="">Chuyên ngành</label> </div>
                    <div className="col-md-4">
                        <select className="input border" name="" id="">
                            <option value='0' >Chuyên ngành</option>
                            <option value='1' selected> Thiết kế website </option>
                            <option value='2'>  Ứng dụng phần mềm</option>
                        </select>
                    </div>
                    <div className="col-md-2"> <label className='mb-0' htmlFor="">Học kỳ</label> </div>
                    <div className="col-md-4">
                        <select className="input border" name="" id="">
                            <option >Học kỳ</option>
                            <option value='1' selected> Học kỳ 01 </option>
                            <option value='2'> Học kỳ 01 </option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3 align-items-center">
                    <div className="col-md-2"> <label className='mb-0' htmlFor="">Học phí</label> </div>
                    <div className="col-md-4"> <input className="input border" value="100" /></div>
                    <div className="col-md-2"> <label className='mb-0' htmlFor="">Link Skype</label> </div>
                    <div className="col-md-4"> <input className="input border" value="newbie.dev.js@gmail.com" /></div>
                </div>

                <div className="row mt-3 align-items-center">
                    <div className="col-md-2"> <label className='mb-0' htmlFor="">Mô tả</label> </div>
                    <div className="col-md-10"> <textarea className="input border" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" ></textarea></div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12 justify-content-end d-flex">
                        <button className="btn btn-secondary mr-3"> Hủy</button>
                        <button className="btn btn-warning text-white"> Thay đổi </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
)(EditProfile);