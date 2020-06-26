import React from 'react'
import { motion } from "framer-motion"

const TitleAside = ({titleOne, titleTwo, justify, titleOneVertical, titleTwoVertical, titleThreeVertical}) => {
    return (<aside className={`title-aside-main `}>
        <motion.div className={`section-title justify-${justify}`}
            initial={{ opacity: 0, y: -20, scale: .95 }}
            animate={{ opacity: 1, y: 0, scale: 1}}
            transition={{ duration: 1.5 }}>
            <h1 className="title-one">{titleOne}</h1>
            <h1 className="title-two">{titleTwo}</h1>
            <h1 className="title-one-vertical">{titleOneVertical}</h1>
            <h1 className="title-two-vertical">{titleTwoVertical}</h1>
            <h1 className="title-two-vertical">{titleThreeVertical}</h1>
        </motion.div>
        
    </aside>
    )
}

export default TitleAside