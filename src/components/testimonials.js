import React from 'react'
import { TestimonialCard, TitleAside } from "../components"
import brigitte from "../images/brigitte.jpg"
import paddy from "../images/paddy.jpg"
import raghid from "../images/raghid.jpg"
import samer from "../images/samer.jpg"

const Testimonials = () => {
    return (<div className="testimonials">
        <TitleAside titleOne="TESTIM"
            titleTwo="ONIALS"
            titleOneVertical="TESTIMONIALS"
            justify="left"/> 
        <div>
        <TestimonialCard    headshotImage={brigitte}
                            content="Andrew is a charismatic individual combining strong listening and analytical skills. He is a strong leader and exemplary team player. He has an interesting background linking engineering with business and management"
                            name="Brigitte Nicoulaud"
                            title="Deputy Head Of Department - Learning and Teaching, Aston University"/>
        <TestimonialCard    headshotImage={raghid}
                            content="I had the pleasure of being one of the clients Andrew worked with. He always showed great commitment and kept surprising me with that standard of his work. As a client, I always trusted Andrew to provide us with on time results with quality beyond our hopes and expectations"
                            name="Raghid Shakhshir"
                            title="Chief of Engineering, Engineering Consultancy"/>
        <TestimonialCard    headshotImage={paddy}
                            content="Out of the 90 or so people undertaking this years MBA, it is safe to say that Andrew is one of the most popular students. However, this is not down to just his pleasant manner and energetic character but can also be attributed to his creative mind, his ability to be both a team player while also being able to lead when required. He is a hard worker and is the last guy to leave the study room on a regular basis"
                            name="Paddy Carmody"
                            title="Head of Marketing, Beiersdorf IRELAND"/>
        <TestimonialCard    headshotImage={samer}
                            content="Andrew is one of the most persistent, smart, creative engineers I have worked with. As an engineer, he is organized and always successfully managed his team into achieving activities and progress as planned. He is a friendly colleague and a positive person in all meaning of the word. I would recommend Andrew for any challenging position and any company in need of a class A individual"
                            name="Samer Haddad"
                            title="MEA Regional Manager, Procurement & Contracts"/>
        </div>

    </div>)
}

export default Testimonials;