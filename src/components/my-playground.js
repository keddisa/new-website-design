import React from 'react'
import { motion, useViewportScroll, useTransform} from 'framer-motion'
import {TitleAside, Skills} from '../components'

const MyPlayground = () => {
    const ref = React.useRef(null)
    const [elementTop, setElementTop] = React.useState(0)

    const { scrollY } = useViewportScroll();

    const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, 1]);

    React.useLayoutEffect(()=>{
      const element = ref.current;
      setElementTop(element?.offsetTop)
    }, [ref])
    return(<motion.section className="my-playground" ref={ref}>
        <Skills />
        <TitleAside titleOne="MY PLAY"
                    titleTwo="GROUND"
                    titleOneVertical="MY"
                    titleTwoVertical="PLAYGROUND"
                    justify="right"/>     
    </motion.section>)
}

export default MyPlayground