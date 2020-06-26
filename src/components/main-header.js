import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"

import {TitleAside} from '../components'

const MainHeader = ({container, item}) => {
    const ref = React.useRef(null)
    const [elementTop, setElementTop] = React.useState(0)

    const { scrollY } = useViewportScroll();

    const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, 1]);

    React.useLayoutEffect(()=>{
      const element = ref.current;
      setElementTop(element?.offsetTop)
    }, [ref])

    return(<motion.section className="main-header" ref={ref}>
        <TitleAside titleOne="ANDREW"
                    titleTwo="KEDDIS"
                    titleOneVertical="ANDREW"
                    titleTwoVertical="KEDDIS"
                    justify="left"/>
        <motion.div className="text-content-large"
            variants={container}
            initial="hidden"
            animate="show">
            <motion.div variants={item}>Software Engineer</motion.div>
            <motion.div variants={item}>Educator</motion.div>
            <motion.div variants={item}>MBA</motion.div>
            <motion.div variants={item}>Adventurer</motion.div>
            <motion.div variants={item}>Traveler</motion.div>
            <motion.div variants={item}>Athlete</motion.div>
            <motion.div variants={item}>Adrenaline Junkie</motion.div>
        </motion.div>
    </motion.section>)
}

export default MainHeader