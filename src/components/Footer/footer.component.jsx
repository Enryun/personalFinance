import { getHorologyLocale } from '../../Pages/AppIntroduction/HorologyStudio/locales';
import { getGalaxyLocale } from '../../Pages/AppIntroduction/GalaxyGallery/locales';
import { isOAnQuanPath } from '../../Pages/AppIntroduction/OAnQuan/locales';
import { getVolaLocale } from '../../Pages/AppIntroduction/Vola/locales';
import React from 'react';
import { useLocation } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
    const { pathname } = useLocation();
    if (getHorologyLocale(pathname) || getGalaxyLocale(pathname) || isOAnQuanPath(pathname) || getVolaLocale(pathname) || ['/folio', '/galaxy-gallery'].includes(pathname.replace(/\/+$/, ''))) return null;
    const editorial = pathname === '/' || pathname === '/contact' || pathname.startsWith('/vi/') || ['/about', '/ios-consulting', '/swiftui-training', '/books'].includes(pathname) || pathname.startsWith('/case-studies/') || pathname.startsWith('/articles');
    return (
        <footer className={`footer${editorial ? ' editorial-footer' : ''}`}>
            <div className='footer-content'>
                <div className='footer-text'>
                    James Thang · iOS, macOS &amp; React Native development
                </div>
                <div className='footer-copyright'>
                    © {new Date().getFullYear()} Dương Đình Bảo Thăng. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
