import React from 'react'

import {TitleAside, JourneyCards} from '../components'

const MyJourney = ({container, item}) => {

    return(<section className="my-journey">
        <TitleAside titleOne="MY JO"
                    titleTwo="URNEY"
                    titleOneVertical="MY"
                    titleTwoVertical="JOURNEY"
                    justify="left"/> 
        <JourneyCards container={container} item={item}/>   
    </section>)
}

export default MyJourney