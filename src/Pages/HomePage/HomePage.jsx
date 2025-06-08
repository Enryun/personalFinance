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

            {/* Books Section */}
            <section className="books-section">
                <div className="books-content">
                    <h2 className="books-title">Published Author</h2>
                    <p className="books-subtitle">
                        Sharing knowledge through comprehensive guides that help thousands of developers worldwide
                    </p>
                    
                    <div className="books-grid">
                        <div className="book-card">
                            <div className="book-cover">
                                <img 
                                    src={require('../../Image/SwiftUI.jpg')} 
                                    alt="Ultimate SwiftUI Handbook for iOS Developers book cover"
                                    className="book-cover-image"
                                />
                            </div>
                            <div className="book-info">
                                <h3 className="book-title">Ultimate SwiftUI Handbook for iOS Developers</h3>
                                <p className="book-description">
                                    A comprehensive guide to mastering SwiftUI development. From basic concepts to advanced techniques, 
                                    this handbook provides everything needed to build modern iOS applications.
                                </p>
                                <a 
                                    href="https://www.amazon.com/Ultimate-SwiftUI-Handbook-iOS-Developers-ebook/dp/B0CKBVY7V6/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="book-link"
                                >
                                    View on Amazon →
                                </a>
                            </div>
                        </div>

                        <div className="book-card">
                            <div className="book-cover">
                                <img 
                                    src={require('../../Image/Firebase.JPG')} 
                                    alt="Ultimate Firebase Android Applications High-Performance book cover"
                                    className="book-cover-image"
                                />
                            </div>
                            <div className="book-info">
                                <h3 className="book-title">Ultimate Firebase Android Applications High-Performance</h3>
                                <p className="book-description">
                                    Master Firebase for Android development with this in-depth guide covering real-time databases, 
                                    authentication, cloud functions, and performance optimization techniques.
                                </p>
                                <a 
                                    href="https://www.amazon.com/Ultimate-Firebase-Android-Applications-High-Performance-ebook/dp/B0DLG5K3ZB?ref_=ast_author_dp" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="book-link"
                                >
                                    View on Amazon →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="books-cta">
                        <p className="books-cta-text">
                            These books represent my commitment to sharing knowledge and helping fellow developers 
                            excel in mobile development. Join thousands of readers who have advanced their skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-content">
                    <h2 className="contact-title">Let's Build Something Amazing Together</h2>
                    
                    <div className="skills-grid">
                        <div className="skill-card">
                            <h3 className="skill-title">iOS Development</h3>
                            <p className="skill-description">
                                Expert in UIKit and SwiftUI with 8 published apps across Finance, AR, Gaming, EdTech, and POS systems.
                                From concept to App Store - I bring ideas to life.
                            </p>
                        </div>

                        <div className="skill-card">
                            <h3 className="skill-title">Problem Solving</h3>
                            <p className="skill-description">
                                Self-taught developer who thrives on challenges. I turn complex problems into elegant solutions 
                                that impact thousands of users.
                            </p>
                        </div>

                        <div className="skill-card">
                            <h3 className="skill-title">Full-Stack Vision</h3>
                            <p className="skill-description">
                                Beyond iOS - I understand the complete ecosystem from backend integration to user experience, 
                                ensuring seamless end-to-end solutions.
                            </p>
                        </div>
                    </div>

                    <div className="contact-cta">
                        <h3 className="contact-cta-title">Ready to Start Your Next Project?</h3>
                        <p className="contact-cta-text">
                            Whether you have a million-dollar idea or need to solve a specific challenge, 
                            let's discuss how we can bring your vision to reality.
                        </p>
                        
                        <div className="contact-info">
                            <div className="contact-method">
                                <strong>Email:</strong> jamesthang1996@gmail.com
                            </div>
                            <div className="contact-method">
                                <strong>Phone:</strong> (+84) 085 771 3736
                            </div>
                            <div className="contact-method">
                                <strong>LinkedIn:</strong> 
                                <a href="https://www.linkedin.com/in/jamesthang/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                    linkedin.com/in/jamesthang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
