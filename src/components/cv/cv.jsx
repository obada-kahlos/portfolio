import React from 'react'
import { Link } from 'react-router-dom'
import './cv.css'
const Cv = () => {
    return (
        <div className="My-Cv">
            <div className="btn-style">
                <p> Hi <span className=''><ion-icon name="happy-outline"></ion-icon></span> , My Name Is Obada kahlous </p>
                <p>You can download my CV or view my portfolio</p>
                <div className="Hi">
                    <Link to='/about-me'>
                        <div className="btn">
                            <span className='text-[22px]'><ion-icon name="cloud-download-outline"></ion-icon></span>
                            <p className="cv-text"> Portfolio </p>
                        </div>
                    </Link>
                    <a href="../../assets/obada's Resume (3).pdf" className="cv" download>
                        <div className="btn">
                            <span className='text-[22px]'><ion-icon name="play-outline"></ion-icon></span>
                            <p className="cv-text"> CV </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cv