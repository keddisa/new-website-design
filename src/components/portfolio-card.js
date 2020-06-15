import React from 'react';


const PortfolioCard = (props) => {
    React.useEffect(()=>{
        console.log(props)
    })
    const renderTechnologies = () => {
        return props.project.technologies.map((technology, index) => {
                return <div className="portfolio-card-tech-icon" key={index}>{technology}</div>
            })
    }

    return(<div className="portfolio-card">
        <img className="portfolio-card-image" src={props.project.displayImage} alt="" />   
        <div className="portfolio-card-title">{props.project.title}</div>
        <img className="portfolio-card-line" src={require("../images/grey-line-horizontal.png")} alt="application development image." />  
        <div className="portfolio-card-content">
        <div className="portfolio-card-description">{props.project.description}</div>
        <div className="portfolio-card-technologies">
            <div className="portfolio-card-tech-text">Technologies:</div>
            <div className="portfolio-card-tech-icons">{renderTechnologies()}</div>        
        </div>
        <div className="portfolio-card-links">
        <div className="portfolio-card-links-text">Links:</div>
        <div className="portfolio-card-links-icons">
            <a className="portfolio-card-icon" href={props.project.liveLink} target="blank">
                <svg  viewBox="0 0 26 26" >
                    <g>
                        <path fill="#030104" d="M8.083,11.222L6.419,15c-0.041,0.094-0.144,0.154-0.257,0.154H5.31
                            c-0.113,0-0.216-0.061-0.256-0.154l-0.79-1.803c-0.077-0.178-0.147-0.348-0.213-0.517c-0.073,0.186-0.148,0.359-0.223,0.525
                            l-0.833,1.8c-0.042,0.091-0.144,0.149-0.255,0.149H1.888c-0.117,0-0.219-0.063-0.259-0.158l-1.557-3.779
                            c-0.03-0.074-0.018-0.156,0.034-0.221s0.135-0.103,0.225-0.103H1.29c0.121,0,0.227,0.069,0.263,0.169l0.684,1.92
                            c0.057,0.162,0.11,0.315,0.159,0.461c0.06-0.146,0.125-0.3,0.194-0.463l0.842-1.932c0.041-0.093,0.143-0.155,0.256-0.155H4.48
                            c0.115,0,0.217,0.063,0.258,0.157l0.798,1.89c0.072,0.17,0.136,0.329,0.195,0.479c0.049-0.142,0.106-0.296,0.171-0.465l0.737-1.898
                            c0.038-0.098,0.143-0.164,0.26-0.164h0.926c0.091,0,0.175,0.039,0.227,0.104C8.105,11.064,8.115,11.147,8.083,11.222z
                            M17.005,11.222L15.341,15c-0.041,0.094-0.144,0.154-0.256,0.154h-0.854c-0.113,0-0.215-0.061-0.256-0.154l-0.789-1.803
                            c-0.078-0.178-0.148-0.348-0.214-0.517c-0.073,0.186-0.148,0.359-0.223,0.525l-0.833,1.8c-0.042,0.091-0.143,0.149-0.255,0.149
                            h-0.853c-0.116,0-0.219-0.063-0.259-0.158l-1.557-3.779c-0.03-0.074-0.018-0.156,0.034-0.221c0.052-0.064,0.136-0.103,0.225-0.103
                            h0.959c0.121,0,0.227,0.069,0.263,0.169l0.683,1.92c0.057,0.162,0.11,0.315,0.161,0.461c0.059-0.146,0.123-0.3,0.192-0.463
                            l0.843-1.932c0.04-0.093,0.142-0.155,0.256-0.155H13.4c0.115,0,0.218,0.063,0.258,0.157l0.799,1.89
                            c0.071,0.17,0.135,0.329,0.193,0.479c0.051-0.142,0.106-0.296,0.172-0.465l0.737-1.898c0.038-0.098,0.144-0.164,0.261-0.164h0.926
                            c0.092,0,0.177,0.039,0.227,0.104C17.026,11.064,17.038,11.147,17.005,11.222z M25.926,11.222L24.263,15
                            c-0.042,0.094-0.144,0.154-0.257,0.154h-0.853c-0.113,0-0.216-0.061-0.256-0.154l-0.789-1.803
                            c-0.078-0.178-0.148-0.348-0.214-0.517c-0.073,0.186-0.149,0.359-0.224,0.525l-0.833,1.8c-0.042,0.091-0.144,0.149-0.255,0.149
                            H19.73c-0.117,0-0.22-0.063-0.26-0.158l-1.557-3.779c-0.029-0.074-0.019-0.156,0.033-0.221s0.136-0.103,0.226-0.103h0.96
                            c0.121,0,0.227,0.069,0.262,0.169l0.684,1.92c0.057,0.162,0.11,0.315,0.16,0.461c0.059-0.146,0.123-0.3,0.192-0.463l0.843-1.932
                            c0.041-0.093,0.143-0.155,0.257-0.155h0.791c0.115,0,0.218,0.063,0.258,0.157l0.798,1.89c0.072,0.17,0.137,0.329,0.196,0.479
                            c0.049-0.142,0.106-0.296,0.171-0.465l0.738-1.898c0.037-0.098,0.142-0.164,0.26-0.164h0.926c0.092,0,0.176,0.039,0.227,0.104
                            C25.946,11.064,25.958,11.147,25.926,11.222z"/>
                        <g>
                            <path fill="#030104" d="M2.71,9c0.283-0.718,0.637-1.401,1.057-2.037C3.829,6.975,3.887,7,3.952,7h1.88
                                c-0.199,0.634-0.355,1.309-0.49,2h2.055c0.155-0.699,0.335-1.376,0.562-2h9.986c0.227,0.624,0.407,1.301,0.562,2h2.055
                                c-0.135-0.691-0.291-1.366-0.49-2h1.88c0.065,0,0.123-0.025,0.186-0.037C22.556,7.599,22.911,8.282,23.194,9h2.121
                                c-1.691-5.216-6.591-9-12.363-9S2.28,3.784,0.588,9H2.71z M20.478,5H19.29c-0.258-0.543-0.542-1.05-0.851-1.519
                                C19.179,3.909,19.861,4.419,20.478,5z M12.952,2c1.551,0,2.983,1.154,4.062,3H8.89C9.969,3.154,11.401,2,12.952,2z M7.463,3.481
                                C7.155,3.95,6.871,4.457,6.613,5H5.426C6.043,4.419,6.725,3.909,7.463,3.481z"/>
                            <path fill="#030104;" d="M23.194,17c-0.283,0.719-0.638,1.4-1.057,2.037C22.075,19.025,22.017,19,21.952,19h-1.881
                                c0.199-0.634,0.355-1.309,0.49-2h-2.055c-0.154,0.699-0.335,1.377-0.562,2H7.959c-0.227-0.623-0.407-1.301-0.562-2H5.343
                                c0.135,0.691,0.291,1.366,0.49,2H3.952c-0.065,0-0.123,0.025-0.185,0.037C3.348,18.4,2.993,17.719,2.71,17H0.588
                                c1.692,5.216,6.592,9,12.364,9s10.672-3.784,12.363-9H23.194z M5.426,21h1.188c0.258,0.543,0.542,1.051,0.85,1.519
                                C6.725,22.091,6.043,21.581,5.426,21z M12.952,24c-1.551,0-2.983-1.154-4.062-3h8.123C15.935,22.846,14.503,24,12.952,24z
                                M18.44,22.519c0.309-0.468,0.593-0.976,0.851-1.519h1.188C19.861,21.581,19.179,22.091,18.44,22.519z"/>
                        </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>           
                </a>
                <a className="portfolio-card-icon" href={props.project.githubLink} target="blank">
                    <svg viewBox="0 0 24 24"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121"/>
                    </svg>    
                </a>
        </div>
        
        </div>

        </div>
       
    </div>)
}

export default PortfolioCard;