import React from 'react'
import { Link } from "react-router-dom";
const Skillcard = ({ skill }) => {
  return (
    <article className='skill-card'>
        <div className="skill-card-header">
            <div>

          <h2>{skill.name}</h2>
          <span>{skill.category}</span>
            </div>
            <strong>{skill.progress}%</strong>
        </div>
        <p>{skill.level}</p>
        <div className='skill-progress'>
             <div
          className="skill-progress-fill"
          style={{ width: `${skill.progress}%` }}
        ></div>

        </div>
        <Link to={`/skillDetails/${skill.id}`}>
           View details →
        </Link>
    </article>
  );
};

export default Skillcard;
