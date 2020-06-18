import React from 'react'

const TitleAside = ({titleOne, titleTwo, justify, titleOneVertical, titleTwoVertical, titleThreeVertical}) => {
    return (<aside className={`title-aside-main `}>
        <div className={`section-title justify-${justify}`}>
            <h1 className="title-one">{titleOne}</h1>
            <h1 className="title-two">{titleTwo}</h1>
            <h1 className="title-one-vertical">{titleOneVertical}</h1>
            <h1 className="title-two-vertical">{titleTwoVertical}</h1>
            <h1 className="title-two-vertical">{titleThreeVertical}</h1>
        </div>
        
    </aside>
    )
}

export default TitleAside