import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const projects = [
        { 
            title: 'Pay Daily', 
            route: '/pay-daily', 
            story: 'Where it all began - tracking daily expenses',
            icon: require('../../Image/PayDaily.png')
        },
        { 
            title: 'Sudoku', 
            route: '/sudoku', 
            story: 'Learning algorithms through classic puzzles',
            icon: require('../../Image/Sudoku.png')
        },
        { 
            title: 'Finance Advisor', 
            route: '/finance-advisor', 
            story: 'Building tools that matter for financial wellness',
            icon: require('../../Image/financeLogo.png')
        },
        { 
            title: 'UCoffee', 
            route: '/u-coffee', 
            story: 'Creating experiences around daily rituals',
            icon: require('../../Image/POS_Logo.png')
        },
        { 
            title: 'Coffee Record', 
            route: '/ucoffee-remote', 
            story: 'Remote solutions born from real needs',
            icon: require('../../Image/POS_remote_logo.webp')
        },
        { 
            title: 'Dark Horse', 
            route: '/dark-horse', 
            story: 'Exploring dark themes and modern aesthetics',
            icon: require('../../Image/DarkHorse.png')
        },
        { 
            title: 'Neon Cloud', 
            route: '/neon-cloud', 
            story: 'When cloud storage meets vibrant design',
            icon: require('../../Image/Neon.png')
        },
        { 
            title: 'Galaxy Gallery', 
            route: '/galaxy-gallery', 
            story: 'Pushing boundaries with immersive galleries',
            icon: require('../../Image/Gallaxy.png')
        },
        { 
            title: 'Random Rover', 
            route: '/random-rover', 
            story: 'Adventures in exploration and discovery',
            icon: require('../../Image/RandomRover.png')
        },
        { 
            title: 'Word Search', 
            route: '/wordsearch', 
            story: 'Simple games, complex implementations',
            icon: require('../../Image/WordSearch.png')
        }
    ];

    return (
        <div className="homepage">
            {/* Hero Section - Personal Introduction */}
            <header className="hero-section">
                <div className="fade-in-up">
                    <h1 className="hero-title">
                        Hey, I'm an iOS Developer
                    </h1>
                    <div>
                        <p className="hero-text">
                            My journey started with a simple idea: <em>what if apps could make everyday life just a little bit better?</em>
                        </p>
                        <p className="hero-text">
                            From tracking daily expenses to solving complex puzzles, each project taught me something new about crafting experiences that users actually love.
                        </p>
                        <p className="hero-text hero-highlight">
                            Here's the story of my development journey, one app at a time.
                        </p>
                    </div>
                </div>
            </header>

            {/* Journey Section */}
            <main className="main-content">
                <div>
                    <h2 className="section-title">
                        My Development Journey
                    </h2>

                    {/* Projects Timeline */}
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <div key={project.route} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <Link 
                                    to={project.route}
                                    className="project-link"
                                >
                                    <div className="project-content">
                                        <img 
                                            src={project.icon} 
                                            alt={`${project.title} app icon`}
                                            className="project-icon"
                                        />
                                        <div className="project-info">
                                            <h3 className="project-title">
                                                {project.title}
                                            </h3>
                                            <p className="project-story">
                                                {project.story}
                                            </p>
                                        </div>
                                        <div className="project-arrow">
                                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="cta-section">
                    <h3 className="cta-title">
                        Ready to explore?
                    </h3>
                    <p className="cta-text">
                        Each project represents a chapter in my learning journey. Click on any project above to see the story unfold.
                    </p>
                    <div className="cta-footer">
                        Built with curiosity, powered by Swift & React
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
