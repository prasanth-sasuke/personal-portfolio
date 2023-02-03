import React from 'react'
import './Experience.css'
import { themeContext } from '../../context'
import react from 'react'
const Experience = () => {
  const theme = react.useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div container className="experience" id='Experience'>
      
        <div className="achievement">
            <div className="circle" style={{ color: darkMode ? 'black' : '' }}>7+</div>
            <span>Month</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{ color: darkMode ? 'black' : '' }}>1+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>  <div className="achievement">
            <div className="circle" style={{ color: darkMode ? 'black' : '' }}>1</div>
            <span>Companies</span>
            <span>Work</span>
        </div>
    </div>
  )
}

export default Experience