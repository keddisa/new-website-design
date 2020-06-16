import React from 'react'
import {TitleAside} from '../components'

const MainHeader = () => {
    return(<section className="main-header">
        <TitleAside titleOne="ANDREW"
                    titleTwo="KEDDIS"
                    justify="left"/>
        <div className="text-content-large">
            Software Engineer <br/> Educator <br/> Business Professional <br/> Adventurer <br/> Traveler <br/> Exercise Junkie
        </div>
    </section>)
}

export default MainHeader