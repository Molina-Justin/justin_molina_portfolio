import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
        <i class='bx bx-award' ></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 years in Retail </span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt' ></i>        
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">2 Projects </span>
      </div>

      <div className="about__box">
        <i class='bx bxs-school' ></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Bachelor of Science</span>
      </div>

    </div>
  )
}

export default Info