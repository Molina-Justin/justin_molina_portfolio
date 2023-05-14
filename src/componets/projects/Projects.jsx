import React from 'react';
import img_1 from "../../assets/MedicareScreen.png";
import img_5 from "../../assets/img_5.png";


import "./projects.css";


const Projects = () => {
    return (

        <section className="project section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My Creative Projects</span>

            <div className="project__container container grid">
    
    
                <div className="project__box">
                    <img src={img_1} alt="" />
                    <h3 className="project__title">Medicare Visualizer</h3>
                    <div className="project_made">
                        <h4 className="project__subtitle">Made with Vue.js, Cold Fusion, MySQL, EC2, RDS
                        </h4>

                    </div>
                    <span className="project__subtitle">
                    Medicare Visualizer Dashboard, a powerful data visualization platform designed to provide comprehensive insights into Medicare spending trends, demographics, and drug utilization patterns. With its user-friendly interface and advanced analytics capabilities, this platform is tailored to support US policymakers, enabling them to make informed decisions and engage in impactful negotiations with pharmaceutical manufacturers.
                    </span>
                </div>

                <div className="project__box">
                    <img src={img_5} alt="" />
                    <h3 className="project__title">Optical Character Recognition</h3>
                    <div className="project_made">
                        <h4 className="project__subtitle">Made with Python, using This project was made with Python, pandas, NumPy, scikit-learn, and XGBoost
                        </h4>
                        
                    </div>
                    <span className="project__subtitle">

                    This project aims to enhance optical character recognition (OCR) performance by leveraging an ensemble of diverse machine learning classifiers, including SVM, Random Forest, KNN, Neural Networks, and XGBoost, on the EMNIST Balanced dataset, a collection of handwritten digits and characters with balanced class distribution. The results demonstrate the combined strengths of these classifiers in improving OCR accuracy.                    </span>
                </div>

       
        </div>
        </section>
      )
    }

export default Projects