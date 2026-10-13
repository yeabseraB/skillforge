import { Link } from "react-router-dom";
import "./SkillDetails.css";

const SkillDetails = () => {
  return (
    <main className="skill-details-page">

      <section className="skill-details-content">
        
        <Link to="/skills" className="back-link">
          ← Back to Skills
        </Link>

        <section className="skill-details-header">

          <div>
            <span className="skill-category">
              Frontend Framework
            </span>

            <h1>React</h1>

            <p>
              Your current React skill level and areas that need
              improvement.
            </p>
          </div>

          <div className="skill-score">
            <strong>70%</strong>
            <span>Intermediate</span>
          </div>

        </section>


    
        <section className="details-card">

          <div className="card-heading">
            <h2>Overall Progress</h2>
            <span>70%</span>
          </div>

          <div className="details-progress">
            <div
              className="details-progress-fill"
              style={{ width: "70%" }}
            ></div>
          </div>

        </section>


        <section className="details-grid">
          
          <article className="details-card">

            <h2>Strengths</h2>

            <ul className="skill-list">
              <li>Components</li>
              <li>Props & State</li>
              <li>React Hooks</li>
            </ul>

          </article>


          {/* Areas to Improve */}
          <article className="details-card">

            <h2>Areas to Improve</h2>

            <ul className="skill-list">
              <li>Testing</li>
              <li>Performance</li>
              <li>Advanced Patterns</li>
            </ul>

          </article>

        </section>


        {/* Learning Roadmap */}
        <section className="roadmap-section">

          <div className="section-heading">
            <h2>Learning Roadmap</h2>

            <p>
              Recommended topics to improve your React skills.
            </p>
          </div>


          <article className="roadmap-item">

            <div className="roadmap-number">
              1
            </div>

            <div className="roadmap-info">
              <h3>React Testing Library</h3>
              <p>
                Learn how to write reliable tests for React
                applications.
              </p>
            </div>

            <span className="roadmap-status in-progress">
              In Progress
            </span>

          </article>


          <article className="roadmap-item">

            <div className="roadmap-number">
              2
            </div>

            <div className="roadmap-info">
              <h3>Performance Optimization</h3>
              <p>
                Learn techniques for improving React application
                performance.
              </p>
            </div>

            <span className="roadmap-status">
              Not Started
            </span>

          </article>


          <article className="roadmap-item">

            <div className="roadmap-number">
              3
            </div>

            <div className="roadmap-info">
              <h3>Advanced React Patterns</h3>
              <p>
                Explore reusable patterns for larger applications.
              </p>
            </div>

            <span className="roadmap-status">
              Not Started
            </span>

          </article>

        </section>

      </section>

    </main>
  );
};

export default SkillDetails;