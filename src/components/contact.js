import React from 'react'
import {TitleAside} from '../components'
import EmailImage from '../images/email-sand.png'
import NumberImage from '../images/number-sand.png'

const Contact = () => {
    return (<div className="contact">
        <div className="contact-main">
            <div className="text-content-large">
                bring your idea a step closer to reality
            </div>
            <div className="email-and-number">
                <div className="email-and-number-icon">
                    <svg viewBox="0 0 64 64">
                        <path d="M 23.65625 4 C 22.32025 4 21.065094 4.5208437 20.121094 5.4648438 L 13.464844 12.121094 C 12.520844 13.066094 12 14.32125 12 15.65625 L 12 22.433594 L 3.4550781 27.560547 C 2.5570781 28.099547 2 29.084812 2 30.132812 L 2 57 C 2 58.654 3.346 60 5 60 L 59 60 C 60.654 60 62 58.654 62 57 L 62 30.132812 C 62 29.084812 61.442922 28.099547 60.544922 27.560547 L 52 22.433594 L 52 7 C 52 5.346 50.654 4 49 4 L 23.65625 4 z M 24 6 L 49 6 C 49.552 6 50 6.449 50 7 L 50 31 C 50 31.552 50.447 32 51 32 C 51.553 32 52 31.552 52 31 L 52 24.767578 L 59.515625 29.275391 C 59.815625 29.455391 60 29.783812 60 30.132812 L 60 31.351562 L 33.226562 43.353516 C 32.447562 43.703516 31.552437 43.703516 30.773438 43.353516 L 4 31.351562 L 4 30.132812 C 4 29.783812 4.185375 29.454391 4.484375 29.275391 L 12 24.765625 L 12 31 C 12 31.552 12.447 32 13 32 C 13.553 32 14 31.552 14 31 L 14 16 L 21 16 C 22.654 16 24 14.654 24 13 L 24 6 z M 22 6.4980469 L 22 13 C 22 13.551 21.552 14 21 14 L 14.498047 14 C 14.608047 13.835 14.734906 13.679156 14.878906 13.535156 L 21.535156 6.8789062 C 21.679156 6.7349062 21.834 6.6080469 22 6.4980469 z M 31 16 C 27.141 16 24 19.14 24 23 L 24 29 C 24 32.86 27.141 36 31 36 L 37 36 C 37.553 36 38 35.552 38 35 C 38 34.448 37.553 34 37 34 L 31 34 C 28.243 34 26 31.757 26 29 L 26 23 C 26 20.243 28.243 18 31 18 L 33 18 C 35.757 18 38 20.243 38 23 L 38 29 C 38 29.551 37.552 30 37 30 C 36.448 30 36 29.551 36 29 L 36 28 L 36 26 L 36 24 C 36 21.794 34.206 20 32 20 C 29.794 20 28 21.794 28 24 L 28 28 C 28 30.206 29.794 32 32 32 C 33.05 32 34.000844 31.584922 34.714844 30.919922 C 35.265844 31.574922 36.08 32 37 32 C 38.654 32 40 30.654 40 29 L 40 23 C 40 19.14 36.859 16 33 16 L 31 16 z M 32 22 C 33.103 22 34 22.897 34 24 L 34 26 L 34 28 C 34 29.103 33.103 30 32 30 C 30.897 30 30 29.103 30 28 L 30 24 C 30 22.897 30.897 22 32 22 z M 4 33.544922 L 29.955078 45.179688 C 30.605078 45.470687 31.303 45.615234 32 45.615234 C 32.697 45.615234 33.395922 45.470688 34.044922 45.179688 L 60 33.544922 L 60 57 C 60 57.551 59.552 58 59 58 L 5 58 C 4.448 58 4 57.551 4 57 L 4 33.544922 z M 7 50 C 6.447 50 6 50.448 6 51 L 6 53 C 6 53.552 6.447 54 7 54 C 7.553 54 8 53.552 8 53 L 8 51 C 8 50.448 7.553 50 7 50 z M 12 50 C 11.447 50 11 50.448 11 51 L 11 53 C 11 53.552 11.447 54 12 54 C 12.553 54 13 53.552 13 53 L 13 51 C 13 50.448 12.553 50 12 50 z M 17 50 C 16.447 50 16 50.448 16 51 L 16 53 C 16 53.552 16.447 54 17 54 C 17.553 54 18 53.552 18 53 L 18 51 C 18 50.448 17.553 50 17 50 z M 22 50 C 21.447 50 21 50.448 21 51 L 21 53 C 21 53.552 21.447 54 22 54 C 22.553 54 23 53.552 23 53 L 23 51 C 23 50.448 22.553 50 22 50 z M 27 50 C 26.447 50 26 50.448 26 51 L 26 53 C 26 53.552 26.447 54 27 54 C 27.553 54 28 53.552 28 53 L 28 51 C 28 50.448 27.553 50 27 50 z M 32 50 C 31.447 50 31 50.448 31 51 L 31 53 C 31 53.552 31.447 54 32 54 C 32.553 54 33 53.552 33 53 L 33 51 C 33 50.448 32.553 50 32 50 z M 37 50 C 36.447 50 36 50.448 36 51 L 36 53 C 36 53.552 36.447 54 37 54 C 37.553 54 38 53.552 38 53 L 38 51 C 38 50.448 37.553 50 37 50 z M 42 50 C 41.447 50 41 50.448 41 51 L 41 53 C 41 53.552 41.447 54 42 54 C 42.553 54 43 53.552 43 53 L 43 51 C 43 50.448 42.553 50 42 50 z M 47 50 C 46.447 50 46 50.448 46 51 L 46 53 C 46 53.552 46.447 54 47 54 C 47.553 54 48 53.552 48 53 L 48 51 C 48 50.448 47.553 50 47 50 z M 52 50 C 51.447 50 51 50.448 51 51 L 51 53 C 51 53.552 51.447 54 52 54 C 52.553 54 53 53.552 53 53 L 53 51 C 53 50.448 52.553 50 52 50 z M 57 50 C 56.447 50 56 50.448 56 51 L 56 53 C 56 53.552 56.447 54 57 54 C 57.553 54 58 53.552 58 53 L 58 51 C 58 50.448 57.553 50 57 50 z"/>
                    </svg>          
                </div>   
                <img src={EmailImage} alt="contact-us email." className="email-and-number-text"/>
            </div>
            <div className="email-and-number">
                <div className="email-and-number-icon">
                    <svg viewBox="0 0 80 80">
                        <path d="M 57 2 C 55.35503 2 54 3.3550302 54 5 L 54 10 L 25 10 C 22.250484 10 20 12.250484 20 15 L 20 67 C 20 69.749516 22.250484 72 25 72 L 55 72 C 57.749516 72 60 69.749516 60 67 L 60 5 C 60 3.3550302 58.64497 2 57 2 z M 57 4 C 57.56503 4 58 4.4349698 58 5 L 58 67 C 58 68.668484 56.668484 70 55 70 L 25 70 C 23.331516 70 22 68.668484 22 67 L 22 15 C 22 13.331516 23.331516 12 25 12 L 56 12 L 56 5 C 56 4.4349698 56.43497 4 57 4 z M 26 17 L 26 18 L 26 37 L 54 37 L 54 17 L 26 17 z M 28 19 L 52 19 L 52 35 L 28 35 L 28 19 z M 31 21 A 1 1 0 0 0 30 22 A 1 1 0 0 0 31 23 A 1 1 0 0 0 32 22 A 1 1 0 0 0 31 21 z M 35 21 A 1 1 0 0 0 34 22 A 1 1 0 0 0 35 23 A 1 1 0 0 0 36 22 A 1 1 0 0 0 35 21 z M 39 21 A 1 1 0 0 0 38 22 A 1 1 0 0 0 39 23 A 1 1 0 0 0 40 22 A 1 1 0 0 0 39 21 z M 43 21 A 1 1 0 0 0 42 22 A 1 1 0 0 0 43 23 A 1 1 0 0 0 44 22 A 1 1 0 0 0 43 21 z M 47 21 A 1 1 0 0 0 46 22 A 1 1 0 0 0 47 23 A 1 1 0 0 0 48 22 A 1 1 0 0 0 47 21 z M 31 25 A 1 1 0 0 0 30 26 A 1 1 0 0 0 31 27 A 1 1 0 0 0 32 26 A 1 1 0 0 0 31 25 z M 31 29 A 1 1 0 0 0 30 30 A 1 1 0 0 0 31 31 A 1 1 0 0 0 32 30 A 1 1 0 0 0 31 29 z M 28 41 C 26.906937 41 26 41.906937 26 43 L 26 46 C 26 47.093063 26.906937 48 28 48 L 32 48 C 33.093063 48 34 47.093063 34 46 L 34 43 C 34 41.906937 33.093063 41 32 41 L 28 41 z M 38 41 C 36.906937 41 36 41.906937 36 43 L 36 46 C 36 47.093063 36.906937 48 38 48 L 42 48 C 43.093063 48 44 47.093063 44 46 L 44 43 C 44 41.906937 43.093063 41 42 41 L 38 41 z M 48 41 C 46.906937 41 46 41.906937 46 43 L 46 46 C 46 47.093063 46.906937 48 48 48 L 52 48 C 53.093063 48 54 47.093063 54 46 L 54 43 C 54 41.906937 53.093063 41 52 41 L 48 41 z M 28 43 L 32 43 L 32 46 L 28 46 L 28 43 z M 38 43 L 42 43 L 42 46 L 38 46 L 38 43 z M 48 43 L 52 43 L 52 46 L 48 46 L 48 43 z M 28 50 C 26.906937 50 26 50.906937 26 52 L 26 55 C 26 56.093063 26.906937 57 28 57 L 32 57 C 33.093063 57 34 56.093063 34 55 L 34 52 C 34 50.906937 33.093063 50 32 50 L 28 50 z M 38 50 C 36.906937 50 36 50.906937 36 52 L 36 55 C 36 56.093063 36.906937 57 38 57 L 42 57 C 43.093063 57 44 56.093063 44 55 L 44 52 C 44 50.906937 43.093063 50 42 50 L 38 50 z M 48 50 C 46.906937 50 46 50.906937 46 52 L 46 55 C 46 56.093063 46.906937 57 48 57 L 52 57 C 53.093063 57 54 56.093063 54 55 L 54 52 C 54 50.906937 53.093063 50 52 50 L 48 50 z M 28 52 L 32 52 L 32 55 L 28 55 L 28 52 z M 38 52 L 42 52 L 42 55 L 38 55 L 38 52 z M 48 52 L 52 52 L 52 55 L 48 55 L 48 52 z M 28 59 C 26.906937 59 26 59.906937 26 61 L 26 64 C 26 65.093063 26.906937 66 28 66 L 32 66 C 33.093063 66 34 65.093063 34 64 L 34 61 C 34 59.906937 33.093063 59 32 59 L 28 59 z M 38 59 C 36.906937 59 36 59.906937 36 61 L 36 64 C 36 65.093063 36.906937 66 38 66 L 42 66 C 43.093063 66 44 65.093063 44 64 L 44 61 C 44 59.906937 43.093063 59 42 59 L 38 59 z M 48 59 C 46.906937 59 46 59.906937 46 61 L 46 64 C 46 65.093063 46.906937 66 48 66 L 52 66 C 53.093063 66 54 65.093063 54 64 L 54 61 C 54 59.906937 53.093063 59 52 59 L 48 59 z M 28 61 L 32 61 L 32 64 L 28 64 L 28 61 z M 38 61 L 42 61 L 42 64 L 38 64 L 38 61 z M 48 61 L 52 61 L 52 64 L 48 64 L 48 61 z"/>
                    </svg>
                </div>            
                <img src={NumberImage} alt="contact-us phone." className="email-and-number-text"/>
            </div>
                <div className="text-content-large">Charlotte, North Carolina, USA</div>
            <div className="contact-icons">
                <a className="portfolio-card-icon" href="https://www.linkedin.com/in/keddisa/" target="blank">
                    <svg viewBox="0 -10 200 210">
                        <defs>
                            <linearGradient id="linearGradient3003" y2="425.4" gradientUnits="userSpaceOnUse" x2="-395.85" gradientTransform="matrix(-0.50335197,0,0,0.50335205,-148.17928,-158.80197)" y1="274.71" x1="-344.15">
                                <stop stopColor="#FFF" offset="0"/>
                                <stop stopColor="#FFF" stopOpacity="0" offset="1"/>
                            </linearGradient>
                        </defs>
                        <rect transform="scale(-1,1)" rx="30.201" ry="30.201" height="199.98" width="200" y="0.011226" x="-200" fill="#069"/>
                        <path opacity="0.7811159" d="m147.16,8.5612-94.32,0c-24.967,0-45.066,20.263-45.066,45.433v92.02c0.80814,19.647,3.9167,7.2266,9.8337-14.531,6.8768-25.287,29.273-47.388,56.547-63.952,20.817-12.642,44.119-20.715,86.533-21.483,24.054-0.43553,21.931-31.218-13.527-37.487z" fill="url(#linearGradient3003)"/>
                        <path d="m63.992,167.85,0-90.884-30.208,0,0,90.884,30.208,0zm-15.1-103.3c10.534,0,17.091-6.9789,17.091-15.7-0.19632-8.9179-6.5566-15.703-16.891-15.703-10.333,0-17.09,6.7852-17.09,15.703,0,8.7216,6.5553,15.7,16.693,15.7h0.19633z" fill="#FFF"/>
                        <path d="m80.712,167.85,30.208,0,0-50.754c0-2.7163,0.19632-5.4298,0.99398-7.3715,2.1838-5.4271,7.1542-11.048,15.499-11.048,10.931,0,15.304,8.3343,15.304,20.552v48.621h30.206v-52.112c0-27.916-14.903-40.905-34.778-40.905-16.296,0-23.451,9.1089-27.426,15.313h0.2017v-13.181h-30.208c0.39641,8.528,0,90.884,0,90.884z" fill="#FFF"/>
                    </svg>
                </a>
                <a className="portfolio-card-icon" href="https://github.com/keddisa?tab=repositories" target="blank">
                    <svg viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>
                </a>
                <a className="portfolio-card-icon" href="https://www.instagram.com/n0mad_expl0rer/" target="blank">
                    <svg viewBox="0 -5 130 140"><defs><linearGradient id="b"><stop offset="0" stopColor="#3771c8"/><stop stopColor="#3771c8" offset=".128"/><stop offset="1" stopColor="#60f" stopOpacity="0"/></linearGradient><linearGradient id="a"><stop offset="0" stopColor="#fd5"/><stop offset=".1" stopColor="#fd5"/><stop offset=".5" stopColor="#ff543e"/><stop offset="1" stopColor="#c837ab"/></linearGradient><radialGradient id="c" cx="158.429" cy="578.088" r="65" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088"/><radialGradient id="d" cx="147.694" cy="473.455" r="65" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455"/></defs><path fill="url(#c)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/><path fill="url(#d)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/><path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"/></svg>
                </a>
                <a className="portfolio-card-icon" href="https://medium.com/@keddisa" target="blank">
                    <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 -50 512 562" ><path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-19.502,137.321l-99.495,0l-70.926,176.926l-80.672,-176.926l-104.37,0l0,6.049l33.614,40.493c3.301,2.974 4.985,7.343 4.537,11.762l0,159.114c0.978,5.739 -0.83,11.603 -4.872,15.794l-37.816,45.868l0,6.048l107.227,0l0,-6.048l-37.816,-45.868c-4.073,-4.182 -5.994,-10.008 -5.21,-15.794l0,-137.607l94.119,205.317l10.924,0l80.84,-205.317l0,163.651c0,4.367 0,5.208 -2.858,8.063l-29.075,28.229l0,6.048l141.175,0l0,-6.048l-28.066,-27.556c-2.478,-1.888 -3.707,-4.993 -3.194,-8.065l0,-202.463c-0.513,-3.073 0.716,-6.178 3.194,-8.066l28.74,-27.555l0,-6.049Z"/></svg>

                </a>
            </div>
            <a href="https://storage.googleapis.com/2005_andrew-keddis-resume/resume.pdf" target="_blank" className="resume-link text-content">Click to download Andrew's Resume</a>
        </div>
        <TitleAside titleOne="GET IN"
                    titleTwo="TOUCH"
                    titleOneVertical="GET"
                    titleTwoVertical="IN"
                    titleThreeVertical="TOUCH"
                    justify="right"/>
    </div>)
}

export default Contact;