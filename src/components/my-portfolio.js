import React from 'react'
import {TitleAside, Portfolio} from '../components'

const MyPortfolio = () => {
    return(<section className="my-portfolio">
        <Portfolio />
        <TitleAside titleOne="CHECK"
                    titleTwo="'EM OUT"
                    titleOneVertical="CHECK"
                    titleTwoVertical="'EM"
                    titleThreeVertical="OUT"
                    justify="right"/>     
    </section>)
}

export default MyPortfolio