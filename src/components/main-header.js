import React from 'react'
import {TitleAside} from '../components'

const MainHeader = () => {
    return(<section className="main-header">
        <TitleAside titleOne="ANDREW"
                    titleTwo="KEDDIS"
                    justify="left"/>
        <div className="text-content-large">
            Software Engineer <br/> Educator <br/> MBA <br/> Adventurer <br/> Traveler <br/> Athlete <br/> Adrenaline Junkie
        </div>
    </section>)
}

export default MainHeader