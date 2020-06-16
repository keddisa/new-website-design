import React from 'react'
import {TitleAside, Skills} from '../components'

const MyPlayground = () => {
    return(<section className="my-playground">
        <Skills />
        <TitleAside titleOne="MY PLAY"
                    titleTwo="GROUND"
                    justify="right"/>     
    </section>)
}

export default MyPlayground