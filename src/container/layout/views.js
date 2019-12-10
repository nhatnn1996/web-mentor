import React from "react"
import Header from "../../components/partial/header"
import Footer from "../../components/partial/mobile"
import Menu from '../../components/partial/menu'
import Slide from "../../components/partial/slide"

const TemplateHome = ( ) => {
    return (
        <div className="">
            <Header />
            <div className='main'>
                <div className="wrap ">
                    <div className="wrap d-flex">
                        <Slide />
                        <div className="main pl-md-5 row">
                            <div className="col-md-3">
                                <Menu />
                            </div>
                            <div className="col-md-9">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default TemplateHome
