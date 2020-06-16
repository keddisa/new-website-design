import React from 'react'
import {TitleAside, JourneyCards} from '../components'

const MyJourney = () => {
    return(<section className="my-journey">
        <TitleAside titleOne="MY JO"
                    titleTwo="URNEY"
                    justify="left"/> 
        <JourneyCards />   
    </section>)
}

export default MyJourney