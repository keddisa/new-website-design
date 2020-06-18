import React from 'react'
import {TitleAside, JourneyCards} from '../components'

const MyJourney = () => {
    return(<section className="my-journey">
        <TitleAside titleOne="MY JO"
                    titleTwo="URNEY"
                    titleOneVertical="MY"
                    titleTwoVertical="JOURNEY"
                    justify="left"/> 
        <JourneyCards />   
    </section>)
}

export default MyJourney