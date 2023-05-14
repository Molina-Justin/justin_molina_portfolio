import React, { useState } from 'react';
import "./qualification.css";



const Qualification = () => {

    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };


  return (
    <section className="qualification section" id="skills">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">


                <div 
                className={toggleState === 1 ? 
                "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }onClick={() => toggleTab(1) }>
                    
                <i className="uil uil-graduation-cap  qualification__icon"></i>
                Education
                </div> 


                <div 
                className={toggleState === 2 ? 
                "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }onClick={() => toggleTab(2) }>

                    <i className="uil uil-briefcase-alt  qualification__icon"></i>
                    Experience
                </div>
            </div>


            <div className="qualification__sections">


                <div 
                className= {
                    toggleState === 1  
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                }> 
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">New Jersey Institute of Technology</h3>
                            <span className="qualification__subtitle">Bachelor of Science</span><br/>    
                            <span className="qualification__subtitle">Computer Science</span>                      
                            <div className="qualification__calendar">
                                {/* <i className="uil uil-calendar-alt"></i>1990-1991 */}
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span> 
                            <span className="qualification__line"></span>
                        </div>



                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span> 
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Brookdale Community College</h3>
                            <span className="qualification__subtitle">Associate of Science</span> 
                            <span className="qualification__subtitle">Computer Science</span> 

                            
                            <div className="qualification__calendar">
                                {/* <i className="uil uil-calendar-alt"></i> Sept 2020 - May 2021 */}
                            </div>
                        </div>
                    </div>

                    

                    
                    
                </div> 


                <div 
                className= {
                    toggleState === 2 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                }> 
                 <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Apple Inc.</h3>
                            <span className="qualification__subtitle">Specialist, Freehold NJ </span> <br/>     
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>Sept 2018-Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span> 
                            <span className="qualification__line"></span>
                        </div>



                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span> 
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Apple Inc.</h3>
                            <span className="qualification__subtitle">RCC Order Support Specialist, Remote</span> 

                            
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Sept 2020 - May 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">American Eagle Outfitters</h3>
                            <span className="qualification__subtitle">Sales Lead, Freehold NJ</span>                           
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>Jan 2016 - Feb 2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span> 
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div> 

                 
            </div>
        </div>
    </section>
  );
}
export default Qualification