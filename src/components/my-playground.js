import React from 'react'
import {TitleAside, Skills} from '../components'

const MyPlayground = () => {
    return(<section className="my-playground">
        <Skills />
        <TitleAside titleOne="MY PLAY"
                    titleTwo="GROUND"
                    titleOneVertical="MY"
                    titleTwoVertical="PLAYGROUND"
                    justify="right"/>     
    </section>)
}

export default MyPlayground