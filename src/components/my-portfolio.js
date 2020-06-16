import React from 'react'
import {TitleAside, Portfolio} from '../components'

const MyPortfolio = () => {
    return(<section className="my-portfolio">
        <Portfolio />
        <TitleAside titleOne="CHECK"
                    titleTwo="'EM OUT"
                    justify="right"/>     
    </section>)
}

export default MyPortfolio