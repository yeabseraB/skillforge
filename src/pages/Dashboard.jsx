import Navbar from "../components/Navbar";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="dashboard">
      
      <section className="dashboard-content">
      {/* Welcome */}
      <section className="welcome-section">
        <h1>Welcome back, Ana 👋</h1>
        <p>Frontend Developer</p>
      </section>

      {/* Summary Cards */}
      <section className="summary-cards">
        {/* Overall Progress */}
        <section className="summary-card">
          <h2>Overall Progress</h2>
          <p className="progress-value">72%</p>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '72%' }}></div>
          </div>

          <Link to="/skills" className="card-link">
            View skills →
          </Link>
        </section>

        {/* Biggest Gaps */}
        <section className="summary-card">
          <h2>Biggest Gaps</h2>

          <p className="gap-item">Testing — 10%</p>
          <p className="gap-item">TypeScript — 20%</p>
          <p className="gap-item">Accessibility — 35%</p>

          <Link to="/skills" className="card-link">
            View gaps →
          </Link>
        </section>

        {/* Next Focus */}
        <section className="summary-card">
          <h2>Next Focus</h2>
          <h3>Testing</h3>
          <p>React Testing Library</p>

          <Link to="/assessment" className="card-link">
            Start →
          </Link>
        </section>
      </section>

      {/* Recommended Next */}
      <section className="recommended-section">
        <h2>Recommended Next</h2>

        <h3>Learn React Testing Library</h3>

        <p>
          Testing is currently your biggest skill gap.
        </p>

        <a href="/skills" className="card-link">View skill →</a>
      </section>

      {/* Recent Projects */}
      <section className="projects-section">
        <h2>Recent Projects</h2>

        <article className="project-card">
          <h3>Movie Search</h3>
          <p>React • API</p>
          <a href="/projects">View project →</a>
        </article>

        <article className="project-card">
          <h3>Weather App</h3>
          <p>React • API</p>
          <Link to="/projects" className="card-link">
            View project →
          </Link>
        </article>
      </section>
      </section>
    </main>
  );
};

export default Dashboard;