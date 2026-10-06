import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import appIcon from '../../../Image/Oanquan.png';
import shot1 from '../../../Image/Oanquan1.png';
import shot2 from '../../../Image/Oanquan2.png';
import shot3 from '../../../Image/Oanquan3.png';
import shot4 from '../../../Image/Oanquan4.png';
import shot5 from '../../../Image/Oanquan5.png';
import { LanguageSwitch, useOAnQuanLanguage } from './language';
import './o_an_quan.scss';

const APP_STORE_URL = 'https://apps.apple.com/app/id6817187778';
const copy = {
  vi: {
    title: 'Ô Ăn Quan: Trò chơi dân gian',
    eyebrow: 'DÂN GIAN VIỆT NAM · iOS',
    headline: 'Một ván cờ, cả trời tuổi thơ.',
    description: 'Gieo từng hạt, tính từng nước. Tìm lại niềm vui của trò chơi dân gian quen thuộc — một mình, bên bạn bè, hay cùng người thân.',
    download: 'Tải trên App Store', explore: 'Khám phá trò chơi', home: 'Về trang chủ',
    note: 'Chơi với máy · Trực tuyến · Hai người cùng thiết bị',
    modes: [ ['Chơi với máy', 'Luyện từng nước đi, tìm cách rải quân và đón lấy cơ hội ăn quan.'], ['Gặp bạn trực tuyến', 'Mời một người bạn hoặc tìm đối thủ qua Game Center.'], ['Cùng ngồi lại', 'Hai người, một thiết bị. Một ván vui ngay bên nhau.'] ],
    scenes: [
      ['Rải quân khéo, ăn quan hay.', 'Chọn ô, chọn hướng, rồi theo dõi từng hạt quân trên bàn cờ. Những nước đi giản dị mở ra cả một cuộc đấu trí.', 'Ván Ô Ăn Quan với bàn cờ, điểm số và nút chọn hướng rải quân'],
      ['Rủ bạn cùng chơi một ván.', 'Gặp lại bạn bè qua một trò chơi quen thuộc. Mời bạn hoặc tìm một đối thủ mới để cùng khai cuộc trực tuyến.', 'Màn hình chơi trực tuyến với lựa chọn mời bạn và tìm đối thủ'],
      ['Nhìn lại từng nước hay.', 'Xem lại ván đấu, dừng ở một khoảnh khắc, hoặc phát lại từng nước. Mỗi ván cờ là một dịp để hiểu thêm cách chơi của mình.', 'Bản xem lại ván đấu với thanh tiến trình và điều khiển phát lại'],
      ['Bàn cờ mang nét riêng.', 'Khám phá những bộ cờ có chất liệu, màu sắc và câu chuyện riêng. Chọn một bàn cờ để mỗi ván chơi thêm gần gũi.', 'Bộ cờ Sen Sau Mưa với đá xanh, thạch anh hồng và câu chuyện của bộ sưu tập'],
    ],
    learnTitle: 'Mới chơi? Bắt đầu từ một hạt quân.', learn: 'Mở mục Cách chơi trong ứng dụng để làm quen với luật, rồi thử một ván với máy. Cứ thong thả — nước hay bắt đầu từ những điều nhỏ.',
    closing: 'Cùng góp một ván vui.', closingText: 'Mang một chút tuổi thơ vào những phút nghỉ trong ngày.',
    privacy: 'Chính sách quyền riêng tư', support: 'Liên hệ hỗ trợ', imageNote: 'Hình ảnh ứng dụng bằng tiếng Việt.',
  },
  en: {
    title: 'Ô Ăn Quan: Vietnamese Folk Game',
    eyebrow: 'A VIETNAMESE TRADITION · iOS',
    headline: 'One little board. A childhood of memories.',
    description: 'Sow the stones. Think a move ahead. Rediscover a traditional Vietnamese game, whether you play on your own, with friends, or beside someone you love.',
    download: 'View on the App Store', explore: 'Explore the game', home: 'Back to home',
    note: 'Play against the computer · Online matches · Two players, one device',
    modes: [ ['Play on your own', 'Practice your moves and discover opportunities to capture stones.'], ['Meet online', 'Invite a friend or find an opponent through Game Center.'], ['Sit down together', 'Two players, one device. Share a match side by side.'] ],
    scenes: [
      ['Small stones. Thoughtful moves.', 'Choose a pit and a direction, then watch the stones travel around the board. Simple moves make room for thoughtful strategy.', 'Ô Ăn Quan match showing the board, scores, and sowing direction controls'],
      ['Invite a friend to the board.', 'Reconnect over a familiar game. Invite someone you know or find a new opponent for an online match.', 'Online play screen with invite friend and find opponent options'],
      ['Revisit every clever move.', 'Replay a match, pause at a moment, or step through the moves. Every game is a chance to learn a little more about how you play.', 'Match replay with a timeline and playback controls'],
      ['A board with its own story.', 'Explore board collections with distinctive materials, colors, and stories. Find a setting that makes every match feel personal.', 'Sen Sau Mưa board collection with green stone, rose quartz, and its story'],
    ],
    learnTitle: 'New to the game? Start with a single stone.', learn: 'Open the in-app How to Play guide to learn the rules, then try a match against the computer. Take your time: a good move begins with the little things.',
    closing: 'Make time for a match.', closingText: 'Bring a little Vietnamese childhood nostalgia into your day.',
    privacy: 'Privacy Policy', support: 'Contact support', imageNote: 'App screenshots shown in Vietnamese.',
  },
};

export default function OAnQuan() {
  const location = useLocation();
  const selected = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'vi';
  const t = copy[selected];
  const { language, suffix } = useOAnQuanLanguage(t.title, t.description);
  return (
    <div className="oq-page" lang={language}>
      <a className="oq-skip" href="#oq-content">{language === 'vi' ? 'Đến nội dung' : 'Skip to content'}</a>
      <header className="oq-nav">
        <Link to="/" className="oq-brand" aria-label={t.home}><img src={appIcon} alt="" width="40" height="40" /><span>Ô Ăn Quan</span></Link>
        <LanguageSwitch language={language} />
        <a className="oq-button oq-nav-download" href={APP_STORE_URL}>{t.download}</a>
      </header>
      <main id="oq-content">
        <section className="oq-hero oq-container">
          <div className="oq-hero-copy">
            <p className="oq-eyebrow">{t.eyebrow}</p>
            <p className="oq-app-name">Ô Ăn Quan: Trò chơi dân gian</p>
            <h1>{t.headline}</h1>
            <p className="oq-lede">{t.description}</p>
            <div className="oq-actions"><a className="oq-button" href={APP_STORE_URL}>{t.download}</a><a href="#oq-features">{t.explore} <span aria-hidden="true">↓</span></a></div>
            <p className="oq-note">{t.note}</p>
          </div>
          <figure className="oq-shot oq-hero-shot"><img src={shot1} alt={language === 'vi' ? 'Trang chính Ô Ăn Quan với các chế độ chơi và mục Cách chơi' : 'Ô Ăn Quan home screen with game modes and a How to Play guide'} width="1206" height="2622" /><figcaption>{t.imageNote}</figcaption></figure>
        </section>
        <section className="oq-modes oq-container" aria-label={language === 'vi' ? 'Các chế độ chơi' : 'Game modes'}>
          {t.modes.map(([title, text], index) => <article key={title}><span className="oq-eyebrow">0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}
        </section>
        <div id="oq-features" className="oq-container">
          {t.scenes.map(([title, text, alt], index) => (
            <section className={`oq-scene ${index % 2 ? 'oq-reverse' : ''}`} key={title}>
              <div className="oq-scene-copy"><p className="oq-eyebrow">0{index + 1} / 04</p><h2>{title}</h2><p>{text}</p></div>
              <figure className="oq-shot"><img src={[shot2, shot3, shot4, shot5][index]} alt={alt} width="1206" height="2622" loading="lazy" /></figure>
            </section>
          ))}
          <section className="oq-learn"><h2>{t.learnTitle}</h2><p>{t.learn}</p></section>
          <section className="oq-closing"><img src={appIcon} alt="Ô Ăn Quan" width="88" height="88" /><h2>{t.closing}</h2><p>{t.closingText}</p><a className="oq-button" href={APP_STORE_URL}>{t.download}</a></section>
        </div>
      </main>
      <footer className="oq-footer oq-container"><span>© {new Date().getFullYear()} James Thang</span><Link to={`/policy/o-an-quan${suffix}`}>{t.privacy}</Link><a href="mailto:jamesthang1996@gmail.com">{t.support}</a></footer>
    </div>
  );
}
