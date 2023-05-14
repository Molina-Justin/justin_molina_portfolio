import React, { useState } from 'react';
import "./header.css";

/*=============== Toggle Menu ===============*/
const Header = () => {
    const[Toggle,showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo" alt="">Justin Molina</a>



            <div className={Toggle ? "nav__menu show-menu":
            "nav__menu"}>
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link" alt="pass">
                            <i className="uil uil-estate nav__icons"></i>  
                            Home
                        </a>
                    </li>

                    
                    <li className="nav__item">
                        <a href="#about" className="nav__link" alt="">
                            <i className="uil uil-user nav__icons"></i>           
                            About             
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link" alt="">
                            <i className="uil uil-notes nav__icons"></i>           
                            Qualifications             
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link" alt="">
                            <i className="uil uil-scenery nav__icons"></i>
                            Portfolio
                        </a>
                    </li>
                    
                </ul>
                <i className="uil uil-times nav__close" onClick={()=> showMenu (!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=> showMenu (!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header