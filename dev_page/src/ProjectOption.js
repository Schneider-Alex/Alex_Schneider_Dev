import React from 'react'
import "./ProjectOption.css"
function ProjectOption({ vid, pic, title, description }) {
    return (
        <div className="projectOption">
            <h2>{title}</h2>
            <div className="projectOption_body">
            
            <video
                
                poster={pic}
                onMouseOver={event => event.target.play()}
                // onMouseOut={event => event.target.pause()}
                src={`${vid}#t=1`} >
            </video>
            <p>-{description}</p>
            </div>

        </div>
    )
}

export default ProjectOption