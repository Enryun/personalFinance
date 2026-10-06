import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import appIcon from '../../Image/Oanquan.png';
import { LanguageSwitch, useOAnQuanLanguage } from '../AppIntroduction/OAnQuan/language';
import '../AppIntroduction/OAnQuan/o_an_quan.scss';

const content = {
  vi: {
    title: 'Chính sách quyền riêng tư', date: 'Có hiệu lực từ ngày 6 tháng 10 năm 2026', back: 'Về trang trò chơi',
    intro: 'James Thang phát triển Ô Ăn Quan: Trò chơi dân gian. Chính sách này giải thích cách thông tin được xử lý khi bạn chơi, kết nối trực tuyến, xem quảng cáo hoặc mua nội dung trong ứng dụng.',
    sections: [
      ['Dữ liệu trò chơi', 'Ứng dụng sử dụng dữ liệu như trạng thái ván đấu, nước đi, lịch sử chơi, lựa chọn bộ cờ và cài đặt để cung cấp tính năng chơi và xem lại. Dữ liệu được lưu trên thiết bị có thể nằm trong bản sao lưu của hệ điều hành. Chơi trực tuyến cần trao đổi dữ liệu ván đấu với người chơi khác thông qua dịch vụ của Apple.'],
      ['Game Center và chơi trực tuyến', 'Ứng dụng sử dụng Apple Game Center để kết nối người chơi, mời bạn và tìm đối thủ. Khi bạn dùng các tính năng này, Game Center xử lý thông tin người chơi như biệt danh, mã định danh và dữ liệu ván đấu cần thiết để kết nối và chơi. Biệt danh và thông tin ván đấu có thể hiển thị cho đối thủ. Apple quản lý tài khoản và dịch vụ Game Center theo chính sách của Apple; James Thang không nhận mật khẩu tài khoản Apple của bạn.'],
      ['Quảng cáo Google AdMob', 'Ứng dụng sử dụng Google AdMob để hiển thị quảng cáo. Google Mobile Ads SDK có thể xử lý địa chỉ IP (bao gồm suy ra vị trí gần đúng), mã định danh thiết bị hoặc quảng cáo, quảng cáo đã xem, tương tác với quảng cáo và ứng dụng, cùng dữ liệu chẩn đoán và hiệu suất. Dữ liệu được dùng để phân phối và đo lường quảng cáo, phân tích, cải thiện dịch vụ và ngăn gian lận. Google và các đối tác quảng cáo có thể xử lý dữ liệu theo cấu hình quảng cáo và lựa chọn đồng ý của bạn. Quảng cáo không cá nhân hóa vẫn có thể sử dụng dữ liệu để phân phối, đo lường và bảo vệ dịch vụ.'],
      ['Lựa chọn quyền riêng tư và theo dõi', 'Ứng dụng sử dụng thông báo đồng ý AdMob và lời nhắc App Tracking Transparency (ATT) khi áp dụng. Bạn có thể chấp nhận hoặc từ chối theo dõi qua lời nhắc của iOS và thay đổi quyền tại Cài đặt > Quyền riêng tư & Bảo mật > Theo dõi. Quyền truy cập mã định danh quảng cáo của Apple (IDFA) phụ thuộc vào quyền ATT. Khi có thông báo hoặc mục lựa chọn quyền riêng tư về quảng cáo, bạn có thể xem và cập nhật lựa chọn tại đó. Từ chối ATT không tự động tắt toàn bộ dữ liệu quảng cáo, phân tích hoặc báo cáo lỗi.'],
      ['Firebase Analytics và Crashlytics', 'Ứng dụng sử dụng Google Firebase Analytics để hiểu cách các tính năng được sử dụng và Firebase Crashlytics để chẩn đoán lỗi. Các dịch vụ này có thể xử lý mã định danh phiên bản cài đặt hoặc ứng dụng, thông tin thiết bị và hệ điều hành, sự kiện sử dụng, địa chỉ IP và dữ liệu lỗi hoặc hiệu suất. Thông tin này giúp cải thiện độ ổn định và trải nghiệm trò chơi. Việc xử lý tuân theo cấu hình dịch vụ, các lựa chọn đồng ý áp dụng và chính sách của Google.'],
      ['Mua hàng trong ứng dụng', 'Các giao dịch mua trong ứng dụng được Apple xử lý qua App Store. Ứng dụng sử dụng thông tin giao dịch và quyền sở hữu để cung cấp nội dung đã mua và hỗ trợ khôi phục các giao dịch đủ điều kiện. James Thang không nhận số thẻ hoặc thông tin thanh toán đầy đủ của bạn. Apple xử lý dữ liệu thanh toán theo chính sách của Apple.'],
      ['Chia sẻ và dịch vụ bên thứ ba', 'Thông tin được xử lý bởi Apple cho Game Center và giao dịch mua, bởi Google cho quảng cáo, phân tích và báo cáo lỗi, và được trao đổi với đối thủ khi cần cho ván đấu trực tuyến. Nếu bạn liên hệ hỗ trợ qua email, James Thang nhận địa chỉ email và nội dung bạn gửi để trả lời yêu cầu. Không gửi mật khẩu hoặc thông tin thanh toán nhạy cảm qua email.'],
      ['Lưu giữ và yêu cầu về dữ liệu', 'Dữ liệu được lưu giữ trong thời gian cần thiết để cung cấp tính năng, hỗ trợ, chẩn đoán sự cố và đáp ứng nghĩa vụ áp dụng. Dữ liệu do Apple và Google xử lý tuân theo chính sách lưu giữ của từng dịch vụ. Xóa ứng dụng sẽ xóa dữ liệu cục bộ của ứng dụng, nhưng không tự động xóa bản sao lưu, giao dịch mua hoặc dữ liệu đã được các dịch vụ bên thứ ba xử lý. Bạn có thể liên hệ để yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu do James Thang nắm giữ, tùy theo quyền áp dụng và khả năng xác định dữ liệu của bạn. Các yêu cầu về tài khoản Apple hoặc Google cần được gửi tới nhà cung cấp tương ứng.'],
      ['Bảo mật', 'Chúng tôi áp dụng các biện pháp hợp lý để bảo vệ thông tin và sử dụng các dịch vụ nền tảng cho tính năng trực tuyến và giao dịch. Tuy nhiên, không có phương thức truyền hoặc lưu trữ điện tử nào bảo đảm an toàn tuyệt đối.'],
      ['Quyền riêng tư của trẻ em', 'James Thang không cố ý thu thập thông tin cá nhân của trẻ em trái với quy định áp dụng. Phụ huynh có thể quản lý Game Center, giao dịch mua và quyền riêng tư qua cài đặt của Apple, bao gồm Thời gian sử dụng. Nếu bạn cho rằng trẻ em đã cung cấp thông tin cá nhân không phù hợp, hãy liên hệ để chúng tôi xem xét và thực hiện các bước phù hợp.'],
      ['Thay đổi chính sách', 'Chính sách có thể được cập nhật khi tính năng hoặc dịch vụ thay đổi. Phiên bản cập nhật được đăng trên trang này cùng ngày có hiệu lực mới.'],
    ],
    providers: 'Chính sách của nhà cung cấp', contact: 'Liên hệ', contactText: 'Nếu bạn có câu hỏi về quyền riêng tư hoặc yêu cầu về dữ liệu, hãy liên hệ James Thang:',
  },
  en: {
    title: 'Privacy Policy', date: 'Effective October 6, 2026', back: 'Back to the game',
    intro: 'James Thang develops Ô Ăn Quan: Trò chơi dân gian. This policy explains how information is processed when you play, connect online, view advertisements, or purchase in-app content.',
    sections: [
      ['Game data', 'The app uses data such as match state, moves, play history, board selections, and settings to provide gameplay and replay features. Data stored on your device may be included in operating system backups. Online play requires exchanging match data with other players through Apple services.'],
      ['Game Center and online play', 'The app uses Apple Game Center to connect players, invite friends, and find opponents. When you use these features, Game Center processes player information such as nicknames, identifiers, and match data needed to connect and play. Your nickname and match information may be visible to your opponent. Apple manages Game Center accounts and services under its own policies; James Thang does not receive your Apple Account password.'],
      ['Google AdMob advertising', 'The app uses Google AdMob to display advertisements. The Google Mobile Ads SDK may process IP addresses (including inferred approximate location), device or advertising identifiers, advertisements viewed, ad and app interactions, and diagnostic and performance data. This data is used to deliver and measure advertising, provide analytics, improve services, and prevent fraud. Google and advertising partners may process data according to the advertising configuration and your consent choices. Non-personalized advertisements may still use data for delivery, measurement, and service protection.'],
      ['Privacy choices and tracking', 'The app uses AdMob consent messages and App Tracking Transparency (ATT) prompts where applicable. You can allow or decline tracking through the iOS prompt and change permission in Settings > Privacy & Security > Tracking. Access to Apple’s advertising identifier (IDFA) depends on ATT permission. Where an advertising privacy message or privacy options entry is available, you can review and update your choices there. Declining ATT does not automatically disable all advertising data, analytics, or crash reporting.'],
      ['Firebase Analytics and Crashlytics', 'The app uses Google Firebase Analytics to understand feature usage and Firebase Crashlytics to diagnose crashes. These services may process installation or app identifiers, device and operating system information, usage events, IP addresses, and crash or performance data. This information helps improve game stability and the player experience. Processing follows the service configuration, applicable consent choices, and Google’s policies.'],
      ['In-app purchases', 'Apple processes in-app purchases through the App Store. The app uses transaction and entitlement information to provide purchased content and support restoring eligible purchases. James Thang does not receive your card number or full payment details. Apple processes payment data under its own policies.'],
      ['Sharing and third-party services', 'Information is processed by Apple for Game Center and purchases, by Google for advertising, analytics, and crash reporting, and exchanged with opponents as needed for online matches. If you contact support by email, James Thang receives your email address and the content you send to respond to your request. Do not send passwords or sensitive payment information by email.'],
      ['Retention and data requests', 'Data is retained as needed to provide features, respond to support requests, diagnose problems, and meet applicable obligations. Data processed by Apple and Google follows each service’s retention policies. Deleting the app removes its local app data but does not automatically delete backups, purchases, or data already processed by third-party services. You can contact us to request access, correction, or deletion of data held by James Thang, subject to applicable rights and our ability to identify your data. Requests concerning Apple or Google accounts should be directed to the relevant provider.'],
      ['Security', 'We take reasonable measures to protect information and use platform services for online features and transactions. However, no method of electronic transmission or storage guarantees absolute security.'],
      ['Children’s privacy', 'James Thang does not knowingly collect children’s personal information in violation of applicable requirements. Parents can manage Game Center, purchases, and privacy through Apple settings, including Screen Time. If you believe a child has provided personal information inappropriately, contact us so we can investigate and take appropriate steps.'],
      ['Policy updates', 'This policy may change as features or services change. An updated version will be posted on this page with a new effective date.'],
    ],
    providers: 'Provider privacy policies', contact: 'Contact', contactText: 'For privacy questions or data requests, contact James Thang:',
  },
};

export default function PolicyOAnQuan() {
  const location = useLocation();
  const selected = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'vi';
  const t = content[selected];
  const { language, suffix } = useOAnQuanLanguage(`Ô Ăn Quan — ${t.title}`, t.intro);
  return (
    <div className="oq-policy-page" lang={language}>
      <header className="oq-nav"><Link to={`/o-an-quan${suffix}`} className="oq-brand" aria-label={t.back}><img src={appIcon} alt="" width="40" height="40" /><span>Ô Ăn Quan</span></Link><LanguageSwitch language={language} /></header>
      <main className="oq-policy oq-container">
        <p className="oq-eyebrow">Ô ĂN QUAN: TRÒ CHƠI DÂN GIAN</p>
        <h1>{t.title}</h1><p className="oq-policy-date"><time dateTime="2026-10-06">{t.date}</time></p><p>{t.intro}</p>
        {t.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
        <section><h2>{t.providers}</h2><ul>
          <li><a href="https://policies.google.com/privacy">Google / AdMob</a></li>
          <li><a href="https://firebase.google.com/support/privacy">Firebase Analytics &amp; Crashlytics</a></li>
          <li><a href="https://www.apple.com/legal/privacy/data/en/game-center/">Apple Game Center</a></li>
          <li><a href="https://www.apple.com/legal/privacy/">Apple / App Store</a></li>
        </ul></section>
        <section><h2>{t.contact}</h2><p>{t.contactText} <a href="mailto:jamesthang1996@gmail.com">jamesthang1996@gmail.com</a>.</p></section>
      </main>
      <footer className="oq-footer oq-container"><span>© {new Date().getFullYear()} James Thang</span><Link to={`/o-an-quan${suffix}`}>{t.back}</Link></footer>
    </div>
  );
}
