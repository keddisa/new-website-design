import React from 'react'
import { TestimonialCard, TitleAside } from "../components"
import HeadshotImage from "../images/headshot-temp.jpg"

const Testimonials = () => {
    return (<div className="testimonials">
        <TitleAside titleOne="TESTIM"
            titleTwo="ONIALS"
            titleOneVertical="TESTIMONIALS"
            justify="left"/> 
        <div>
        <TestimonialCard    headshotImage={HeadshotImage}
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            name="John Doe"
                            title="Head of Hr, The big Organization"/>
        <TestimonialCard    headshotImage={HeadshotImage}
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            name="John Doe"
                            title="Head of Hr, The big Organization"/>
        <TestimonialCard    headshotImage={HeadshotImage}
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            name="John Doe"
                            title="Head of Hr, The big Organization"/>
        </div>

    </div>)
}

export default Testimonials;