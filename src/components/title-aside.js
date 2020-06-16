import React from 'react'

const TitleAside = ({titleOne, titleTwo, justify}) => {
    return (<aside className={`title-aside-main `}>
        <div className={`section-title justify-${justify}`}>
            <h1>{titleOne}</h1>
            <h1>{titleTwo}</h1> 
        </div>
        
    </aside>
    )
}

export default TitleAside