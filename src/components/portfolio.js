import React from 'react';
import PortfolioCard from './portfolio-card';
import Technologies from '../technologies';

const Portfolio = () => {
    const projects = [
        {
            title: "MineSweeper Game",
            description: "A game that never gets old! Brought to you by React and Typescript",
            technologies: [Technologies.html, Technologies.css, Technologies.javascript, Technologies.react, Technologies.typescript],
            githubLink: "https://github.com/keddisa/minesweeper",
            liveLink: 'https://keddisa.github.io/minesweeper/'
        },
        {
            title: "Concentration Game",
            description: "Test your concentration. Two player game developed with React and React Hooks",
            technologies: [Technologies.html, Technologies.css, Technologies.javascript, Technologies.react],
            githubLink: "https://github.com/keddisa/concentration-game-react",
            liveLink: 'https://shinkei-suijaku.s3.us-east-2.amazonaws.com/index.html'
        },
        {
            title: "The Simon Game",
            description: "Test your memory with the Simon Game. One player game developed with Tailwind and jQuery",
            technologies: [Technologies.html, Technologies.tailwind, Technologies.javascript, Technologies.jquery],
            githubLink: "https://github.com/keddisa/the-simon-game",
            liveLink: 'https://keddisa.github.io/the-simon-game/.'
        }
    ]

    const renderProjects = () => {
        return projects.map((project, index) => {
            return <PortfolioCard key={index} project={project}/>
        })
    }

    return (<div className="portfolio">
        {renderProjects()}
    </div>)
}

export default Portfolio;