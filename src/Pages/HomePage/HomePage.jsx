import React from 'react';
import { Link } from 'react-router-dom';
import courseImage from '../../Image/SwiftUI_Udemy.png';
import swiftBook from '../../Image/SwiftUI.jpg';
import firebaseBook from '../../Image/Firebase.JPG';
import { projects } from './projects';
import horologyShot from '../../Image/Horology1.png';
import folioShot from '../../Image/Folio1.png';
import oAnQuanShot from '../../Image/Oanquan1.png';
import volaShot from '../../Image/Vola2.png';
import tidoraShot from '../../Image/TidyMac1.png';
import './HomePage.scss';

const featured = [
  { route: '/vola', title: 'Vola — AI Note Taker', category: '01 / FEATURED · iOS · AI productivity', detail: 'Stay in the conversation. Vola brings live transcription, AI summaries, and questions about your notes together, with translation and editing while you record.', image: volaShot, alt: 'Vola AI note taker with live transcription, AI summary, and questions about recorded notes', theme: 'vola' },
  { route: '/tidora', title: 'Tidora — Mac Cleaner', category: '02 / macOS · Cleaning & maintenance', detail: 'Make room for what matters. Tidora scans for unnecessary files, caches, and logs, helping you reclaim disk space and keep everyday Mac maintenance straightforward.', image: tidoraShot, alt: 'Tidora Mac cleaning utility showing a scan of application caches and system logs', theme: 'tidora' },
  { route: '/horology-studio', category: '03 / iOS · Interactive experiences', detail: 'A mechanical timepiece made personal. Watch customization, widgets, and system alarms, built around the pleasure of the details.', image: horologyShot, alt: 'Horology Studio interactive watch on an iPhone', theme: 'watch' },
  { route: '/folio', category: '04 / macOS · Developer tools', detail: 'A quieter place for Markdown. Local files, thoughtful organization, and fast search in a focused Mac reading experience.', image: folioShot, alt: 'Folio Markdown reader with source and rendered content on a Mac', theme: 'folio' },
  { route: '/o-an-quan', category: '05 / iOS · Games', detail: 'A childhood game, carried forward. Online matches, replays, and collectible boards bring a Vietnamese tradition to iPhone.', image: oAnQuanShot, alt: 'Ô Ăn Quan game modes and traditional board on iPhone', theme: 'quan', status: 'Preparing for App Store submission' },
];
const capabilities = [
  { number: '01', title: 'Native iOS & macOS', text: 'Swift, SwiftUI, and UIKit for apps that feel at home on Apple platforms. From interface design and system integrations to purchases and App Store preparation.', tags: ['Swift', 'SwiftUI', 'UIKit'] },
  { number: '02', title: 'Cross-platform mobile', text: 'React Native development for projects that need a shared mobile foundation, with attention to platform behavior, usable interfaces, and maintainable code.', tags: ['React Native', 'Mobile UI', 'Platform integration'] },
  { number: '03', title: 'Agent-assisted engineering', text: 'Experience working with Codex, Claude Code, and Cursor across development tasks. I pair these tools with hands-on implementation, code review, and testing.', tags: ['Codex', 'Claude Code', 'Cursor'] },
];
const books = [
  { title: 'Ultimate SwiftUI Handbook for iOS Developers', image: swiftBook, text: 'A practical guide to building iOS interfaces with SwiftUI, from core concepts to more advanced techniques.', url: 'https://www.amazon.com/dp/B0CKBVY7V6' },
  { title: 'Ultimate Firebase for iOS and Android Applications', image: firebaseBook, text: 'A guide to Firebase services for iOS and Android applications, including authentication, databases, and backend integration.', url: 'https://www.amazon.com/dp/B0DLG5K3ZB' },
];
function Arrow({ diagonal = false }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} /></svg>;
}
export default function HomePage() {
  return (
    <div className="professional-home" id="home-top">
      <a className="home-skip" href="#home-main">Skip to content</a>
      <header className="home-nav home-container">
        <a className="home-wordmark" href="#home-top" aria-label="James Thang home">James Thang<span>Developer &amp; maker</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><Link to="/about">About</Link><Link to="/swiftui-training">Learn SwiftUI</Link><Link to="/contact" className="home-nav-contact">Let’s talk <Arrow diagonal /></Link></nav>
      </header>
      <main id="home-main">
        <section className="home-hero home-container" aria-labelledby="home-heading">
          <div className="home-hero-copy">
            <p className="home-eyebrow">INDEPENDENT DEVELOPER · AUTHOR · INSTRUCTOR</p>
            <h1 id="home-heading">Thoughtful apps.<br /><em>Built to matter.</em></h1>
            <p className="home-introduction">I’m <strong>James Thang</strong> <span className="home-native-name">(Dương Đình Bảo Thăng)</span>, an iOS specialist, SwiftUI instructor, and technical author building practical tools, thoughtful games, and polished experiences for iPhone and Mac.</p>
            <p className="home-hero-detail">I bring hands-on product development, SwiftUI and UIKit expertise, and experience with coding agents to help turn an idea into an app ready to ship.</p>
            <div className="home-actions"><Link className="home-button" to="/contact">Work with me <Arrow diagonal /></Link><a className="home-text-link" href="#work">Explore my work <Arrow /></a></div>
          </div>
          <div className="home-hero-art" aria-label="A glimpse of my iOS apps">
            <span className="home-art-label">A LITTLE CRAFT. A LOT OF CARE.</span>
            <figure className="home-art-phone home-art-vola"><img src={volaShot} alt="Vola AI note taker with live transcription and Ask AI" width="1284" height="2778" /></figure>
            <figure className="home-art-phone home-art-quan"><img src={oAnQuanShot} alt="Ô Ăn Quan traditional Vietnamese game" width="1206" height="2622" /></figure>
          </div>
        </section>
        <div className="home-evidence home-container" aria-label="Portfolio highlights"><p><strong>{projects.length}</strong> independent app projects</p><p><strong>02</strong> published technical books</p><p><strong>01</strong> SwiftUI course</p><p className="home-evidence-note">From an idea to something you can use.</p></div>
        <section id="work" className="home-section home-container" aria-labelledby="work-heading">
          <div className="home-section-heading"><div><p className="home-eyebrow">SELECTED WORK</p><h2 id="work-heading">A few things I’ve <em>made.</em></h2></div><p>Independent projects across productivity, utilities, games, finance, and business tools.</p></div>
          <div className="home-featured-grid">{featured.map(item => {
            const project = projects.find(entry => entry.route === item.route);
            return <Link to={item.route} className={`home-featured-card home-featured-${item.theme}`} key={item.route}><figure className="home-project-stage"><img src={item.image} alt={item.alt} loading="lazy" /></figure><div className="home-featured-copy"><p className="home-category">{item.category}</p><div className="home-featured-title"><img src={project.icon} alt="" width="40" height="40" /><h3>{item.title || project.title}</h3></div><p>{item.detail}</p><span className="home-project-link">Take a closer look <Arrow diagonal /></span>{item.status && <span className="home-project-status">{item.status}</span>}</div></Link>;
          })}</div>
          <p className="home-case-links">Product walkthroughs: <Link to="/case-studies/vola">Vola — AI Note Taker</Link> · <Link to="/case-studies/tidora">Tidora — Mac Cleaner</Link> · <Link to="/case-studies/horology-studio">Horology Studio</Link></p>
          <div className="home-portfolio-heading"><h3>Explore the full portfolio</h3><span>{projects.length} projects · iOS &amp; macOS</span></div>
          <div className="home-portfolio-grid">{projects.map(project => <Link to={project.route} className="home-project" key={project.route}><img src={project.icon} alt="" width="48" height="48" loading="lazy" /><div><h4>{project.title}</h4><p>{project.story}</p></div><Arrow diagonal /></Link>)}</div>
        </section>
        <section id="expertise" className="home-expertise" aria-labelledby="expertise-heading"><div className="home-container home-section">
          <div className="home-section-heading"><div><p className="home-eyebrow">HOW I CAN HELP</p><h2 id="expertise-heading">Good ideas deserve<br /><em>good engineering.</em></h2></div><p>For founders and teams building a new app, improving an existing product, or extending to another platform.</p></div>
          <div className="home-capabilities">{capabilities.map(item => <article key={item.number}><span className="home-capability-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><ul aria-label={`${item.title} skills`}>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
          <div className="home-approach"><h3>From the first screen to the release.</h3><div className="home-approach-copy"><p>I connect interface work with the details that make an app useful: data flows, backend integrations, platform features, monetization, and release preparation. My independent apps are a place to put that thinking into practice.</p><Link className="home-text-link" to="/ios-consulting">Explore iOS consulting <Arrow /></Link></div></div>
        </div></section>
        <section id="writing" className="home-section home-container" aria-labelledby="writing-heading">
          <div className="home-section-heading"><div><p className="home-eyebrow">WRITING &amp; TEACHING</p><h2 id="writing-heading">What I learn,<br /><em>I share.</em></h2></div><p>Technical books and a hands-on course that turn mobile development concepts into practical learning.</p></div>
          <p className="home-resource-links"><Link to="/books">Books and publisher records →</Link> · <Link to="/articles">iOS learning notes →</Link> · <Link to="/vi/about">Giới thiệu bằng tiếng Việt →</Link></p>
          <div className="home-books">{books.map(book => <article className="home-book" key={book.title}><img src={book.image} alt={`${book.title} book cover`} loading="lazy" /><div><p className="home-category">PUBLISHED BOOK</p><h3>{book.title}</h3><p>{book.text}</p><a className="home-text-link" href={book.url} target="_blank" rel="noopener noreferrer">View on Amazon <Arrow diagonal /></a></div></article>)}</div>
          <article className="home-course"><img src={courseImage} alt="SwiftUI Essentials course on Udemy" loading="lazy" /><div><p className="home-category">UDEMY COURSE</p><h3>SwiftUI Essentials: Kickstart Your iOS Development Journey</h3><p>A beginner-friendly introduction to SwiftUI through practical projects and the foundations of building iOS interfaces.</p><a className="home-text-link" href="https://www.udemy.com/course/swiftui-essentials-kickstart-your-ios-development-journey" target="_blank" rel="noopener noreferrer">Explore the course <Arrow diagonal /></a></div></article>
        </section>
        <section id="contact" className="home-contact home-container" aria-labelledby="contact-heading"><div><p className="home-eyebrow">LET’S WORK TOGETHER</p><h2 id="contact-heading">Something on your mind?<br /><em>Let’s make it happen.</em></h2><p>Tell me about your product, the platform, and the challenge you’re working through. I’m interested in useful software and the people making it.</p><Link className="home-button" to="/contact">Start a conversation <Arrow diagonal /></Link></div><div className="home-contact-links"><Link to="/contact"><span>GET IN TOUCH</span>Visit my contact page <Arrow diagonal /></Link><a href="https://www.linkedin.com/in/jamesthang/" target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span>Connect with James Thang <Arrow diagonal /></a></div></section>
      </main>
    </div>
  );
}
