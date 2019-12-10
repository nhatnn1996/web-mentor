import React from "react";
import propTypes from "prop-types";
import "./style.sass";

function Tab(props) {
  const { value } = props;
  const [location, setLocatin] = React.useState(0);
  const [render, setRender] = React.useState(value[location].render);

  const changeTab = i => () => {
    setRender(value[i].render);
    setLocatin(i);
  };
  return (
    <div className="tab">
      <ul>
        {value.map((element, index) => (
          <li
            key={index}
            className={" px-4 py-2" + (location === index ? " active " : "")}
            onClick={changeTab(index)}>
            {element.title}
            {element.icon}
          </li>
        ))}
      </ul>
      <div className="content">{render}</div>
    </div>
  );
}

Tab.propTypes = {
  value: propTypes.array
};

export default Tab;
