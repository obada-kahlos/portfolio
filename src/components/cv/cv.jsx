import React from 'react'
import { Link } from 'react-router-dom'
// import { saveAs } from "file-saver";
import './cv.css'
const Cv = () => {
    // const saveFile = () => {
    //     saveAs(
    //       "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    //       "example.pdf"
    //     );
    //  };
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
                    <a href="cv.pdf" className="cv" download>
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