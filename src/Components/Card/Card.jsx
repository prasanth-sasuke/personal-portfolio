import React from 'react'
import './Card.css'
import { themeContext } from '../../context'
import react from 'react'

const Card = ({emoji,heading,details}) => {
  const theme = react.useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span style={{ color: darkMode ? 'white' : '' }}>{heading}</span>
        <span>{details}</span>
        <button className="c-button">Learn more</button>
    </div>
  )
}

export default Card