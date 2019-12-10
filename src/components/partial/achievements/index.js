import React from 'react';
import AchievementsIcon from "../../icon/achievement"
import "./style.sass"

function Achievements(props) {
    let { achievements } = props.mentor
    achievements = achievements ? achievements : []
    return (
        <div className='info p-4 w-100'>
            {
                achievements.map((element, index) =>
                    <Element value={element} key={index} />
                )
            }
        </div>
    );
}

export default Achievements

function Element(props) {
    const element = props.value
    const date = new Date(element.time);
    const time = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    return (
        <div className="row">
            <div className="col-md-2 col-4 mb-2">
                <span className='svg svg-sm '>
                    <AchievementsIcon />
                </span>
            </div>
            <div className="col-md-3 col-6 mb-2">
                <p className='font-weight-bold text-secondary'> {time} </p>
            </div>
            <div className="col-md-7 mb-2">
                <p> {element.content} </p>
            </div>
        </div>
    )
}