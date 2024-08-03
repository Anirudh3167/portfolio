import { memo } from "react"

import './LoadingContainer.css'

function LoadingContainer ({name}) {
    return ( 
        <div className="LoadingContainer">
            <div className="LoadingContainerDot"></div>
            {name}
        </div>
    )
}

export default memo(LoadingContainer);