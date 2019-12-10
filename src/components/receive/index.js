import React from "react"
import propTypes from 'prop-types'
import CurrencyIcon from "../icon/currency"
import "./index.sass"

function Receive(props) {
  return (
    <div className="receive p-2">
      <div className="row justify-content-between no-gutters my-2">
        <div className='col-5'>
          <img className='rounded size-xl ' src='https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-gai-dep-520x390.jpg' alt='Hình gia sư' />
        </div>
        <div className="col-7 d-inline-flex justify-content-end flex-column">
          <p className='h5'> <b>Ngọc Nhất </b> </p>
          <p className="mb-0"> <span> Chi phí: </span> <b> 20 </b>
            <span className="svg svg-fill-main">
              <CurrencyIcon /></span></p>
        </div>
      </div>
      <div className="d-flex no-gutters my-2">
      </div>
      <div className="d-flex no-gutters my-2">
        <div className="col-md-5"> Thời gian thuê:</div>
        <div className="col-md-7">
          <select className='rounded input border w-100'>
            <option value="1">
              1 Giờ
                  </option>
            <option value="2">
              2 Giờ
                  </option>
            <option value="3">
              3 Giờ
                  </option>
            <option value="4">
              4 Giờ
                  </option>
            <option value="5">
              5 Giờ
                </option>
          </select>
        </div>
      </div>
      <div className="row no-gutters my-2">
        <div className="col-12">
          <textarea row='4' className='w-100 p-3 rounded input border' placeholder='Nội dung gởi đi' />
        </div>
        <div className='col-12 text-center'>
          <button className='mt-3 button button-sm bg-fill-primary '>NHẬN</button>
        </div>
      </div>
    </div>
  )
}

Receive.propTypes = {
  children: propTypes.string,
  variant: propTypes.string
}

export default Receive;