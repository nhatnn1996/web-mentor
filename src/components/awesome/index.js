import React from "react"
import propTypes from 'prop-types'
import styled from "styled-components"

const Awesome = styled.i`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center
`;
function Icon(props) {
    return (
        <Awesome className={props.className} aria-hidden="true" />
    )
}
Icon.propTypes = {
    className: propTypes.string,
}
export default Icon;