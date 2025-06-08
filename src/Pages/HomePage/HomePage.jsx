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
                        Hi, I'm Dương Đình Bảo Thăng
                    </h1>
                    <div>
                        <p className="hero-text">
                            My journey from Finance & Economics to iOS development proves that <em>passion drives mastery.</em> 
                            Through self-education and dedication, I became a professional iOS developer with expertise in <strong>UIKit and SwiftUI</strong>.
                        </p>
                        <p className="hero-text hero-highlight">
                            I've created 8 apps across Finance, AR, Gaming, EdTech, and POS systems—impacting thousands of users. 
                            As a SwiftUI book author, I'm passionate about pushing the boundaries of iOS development.
                        </p>
                    </div>
                </div>
            </header>

            {/* Journey Section */}
            <main className="main-content">
                <div>
                    <h2 className="section-title">
                        My Development Portfolio
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
                        Explore My Work
                    </h3>
                    <p className="cta-text">
                        Each app represents a chapter in my journey from Finance to iOS development. 
                        Click any project to see how passion transformed into expertise.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
