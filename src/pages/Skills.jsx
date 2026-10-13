import React from 'react'
import { useState } from "react";
import Skillcard from '../components/skillcard';
import './Skills.css'
import { skills } from "../data/skills"
import { Link } from "react-router-dom";

const Skills = () => {
  const [addSkills, setAddSkills] = useState(skills);
  function handleAddSkill(newSkill){
    setAddSkills([...addSkills, newSkill]);
  }
  return (
    <main className='skills-page'>
      
      <section className='skills-content'>
        <section className="skills-header">
          <h1>Skills</h1>
          <p>
            Track your current abilities and identify where to improve.
          </p>
        </section>
      </section>
        <div className="skills-search">
          <input
            type="text"
            placeholder="Search skills..."
          />
        </div>
        <div className="add-skill-container">
          
          <button onClick={handleAddSkill} className="add-skill-btn">
            <span className="plus-icon">+</span>
            Add Skills
          </button>
        </div>
        <div className="skill-filters">
          <button className="filter active">All</button>
          <button className="filter">Programming</button>
          <button className="filter">Frameworks</button>
          <button className="filter">Tools</button>
          <button className="filter">Engineering</button>
        </div>
        <section className="skill-grid">
          <article className="skill-card">
            <div className="skill-card-header">
              <div>
                <h2>JavaScript</h2>
                <span>Programming</span>
              </div>

              <strong>85%</strong>
            </div>

            <p>Advanced</p>

            <div className="skill-progress">
              <div
                className="skill-progress-fill"
                style={{ width: "85%" }}
              ></div>
            </div>

            <Link to="/skillDetails">
              View details →
            </Link>
          </article>
          <article className="skill-card">
            <div className="skill-card-header">
              <div>
                <h2>React</h2>
                <span>Framework</span>
              </div>

              <strong>70%</strong>
            </div>

            <p>Intermediate</p>

            <div className="skill-progress">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              >
              </div>
            </div>

            <Link to="/skillDetails">
              View details →
            </Link>
          </article>
        </section>
    </main>

  );
};

export default Skills;
