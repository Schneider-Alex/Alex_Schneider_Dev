import React from 'react'
import "./ProjectOption.css"
function ProjectOption({ vid, pic, title, description }) {
    return (
        <div className="projectOption">
            <h3>{title}</h3>
            <div className="projectOption_body">
            <video
                poster={pic}
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={`${vid}#t=1`} >
            </video>
            </div>

        </div>
    )
}

export default ProjectOption