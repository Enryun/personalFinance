import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { professionalPages, books } from './content';
import './ProfessionalPage.scss';

function PageLink({ href, children, ...props }) {
  return href.startsWith('/') ? <Link to={href} {...props}>{children}</Link> : <a href={href} {...props}>{children}</a>;
}
export default function ProfessionalPage() {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/+$/, '') || '/';
  const page = professionalPages[pathname];
  const vi = pathname.startsWith('/vi/');
  if (!page) return null;
  return <div className="professional-page">
    <a className="profile-skip" href="#profile-main">{vi ? 'Đến nội dung chính' : 'Skip to content'}</a>
    <header className="profile-nav profile-container">
      <Link className="profile-brand" to="/">James Thang<span>iOS · SwiftUI · Author</span></Link>
      <nav aria-label={vi ? 'Điều hướng chính' : 'Main navigation'}>
        <Link to={vi ? '/vi/about' : '/about'}>{vi ? 'Giới thiệu' : 'About'}</Link><Link to="/ios-consulting">{vi ? 'Tư vấn iOS' : 'Consulting'}</Link><Link to={vi ? '/vi/swiftui-training' : '/swiftui-training'}>{vi ? 'Học SwiftUI' : 'Learn SwiftUI'}</Link><Link to="/books">{vi ? 'Sách' : 'Books'}</Link><Link to="/contact">{vi ? 'Liên hệ' : 'Contact'} ↗</Link>
      </nav>
    </header>
    <main id="profile-main" className="profile-container">
      <section className={`profile-hero${page.image ? ' profile-hero-with-image' : ''}`}>
        <div><p className="profile-eyebrow">{page.eyebrow}</p><h1>{page.heading}</h1><p className="profile-intro">{page.intro}</p>
          {page.article && <p className="profile-byline"><Link to="/about">By James Thang</Link> · Published <time dateTime={page.date}>October 7, 2026</time></p>}
          {page.translation && <PageLink className="profile-language" href={page.translation} lang={vi ? 'en' : 'vi'} hrefLang={vi ? 'en' : 'vi'}>{vi ? 'Read in English' : 'Đọc bằng tiếng Việt'} ↗</PageLink>}
          {page.appRoute && <div className="profile-actions"><Link className="profile-button" to={page.appRoute}>Explore the app →</Link><a href={page.appStore}>View on the App Store ↗</a></div>}
        </div>
        {page.image && <figure className={`profile-product-image${pathname.includes('tidora') ? ' profile-product-wide' : ''}`}><img src={page.image} alt={page.imageAlt} /></figure>}
      </section>
      {page.books && <div className="profile-books">{books.map(book => <article className="profile-book" key={book.isbn}><img src={book.image} alt={`${book.title} cover`} loading="lazy" /><div><p className="profile-eyebrow">ORANGE AVA · {book.date.slice(0, 4)}</p><h2>{book.title}</h2><p>{book.text}</p><dl><dt>Author</dt><dd>Dương Đình Bảo (James) Thăng</dd><dt>Publication date</dt><dd><time dateTime={book.date}>{book.date}</time></dd><dt>Print ISBN</dt><dd>{book.isbn}</dd></dl><a href={book.url}>View publisher listing ↗</a></div></article>)}</div>}
      <div className="profile-sections">{page.sections.map((section, index) => <section className="profile-section" key={section.title} aria-labelledby={`section-${index}`}><div><p className="profile-section-number">{String(index + 1).padStart(2, '0')}</p><h2 id={`section-${index}`}>{section.title}</h2></div><div>{section.paragraphs && section.paragraphs.map(text => <p key={text}>{text}</p>)}{section.items && <ul>{section.items.map(text => <li key={text}>{text}</li>)}</ul>}{section.links && <div className="profile-links">{section.links.map(link => <PageLink href={link.href} key={link.href}>{link.label} →</PageLink>)}</div>}</div></section>)}</div>
      <aside className="profile-next"><p className="profile-eyebrow">{vi ? 'BƯỚC TIẾP THEO' : 'NEXT STEP'}</p><h2>{vi ? 'Cùng trao đổi mục tiêu của bạn.' : 'Let’s talk about what you want to build or learn.'}</h2><Link className="profile-button" to="/contact">{vi ? 'Đến trang liên hệ' : 'Visit my contact page'} ↗</Link></aside>
    </main>
  </div>;
}
export function NotFound() {
  return <main className="professional-page profile-not-found"><p className="profile-eyebrow">404</p><h1>That page could not be found.</h1><p>Explore James Thang’s apps, books, and SwiftUI learning resources.</p><Link className="profile-button" to="/">Go to the homepage →</Link></main>;
}
