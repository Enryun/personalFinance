import React from 'react';
import { Link } from 'react-router-dom';
import './policy.scss';

export default function GalaxyGalleryPolicy() {
  return (
    <main className="policy">
      <h1>Galaxy Gallery privacy policy</h1>
      <p>Last updated November 11, 2026.</p>
      <p>James Thang develops Galaxy Gallery: Space &amp; Focus, an app for exploring planets and the Solar System, learning about space, and completing optional focus missions. This policy describes information handled by the app and its service providers.</p>

      <h2>App content and progress</h2>
      <p>Galaxy Gallery stores information needed for features such as focus history, categories, discoveries, journeys, and preferences on your device. Device data may be included in backups managed by your operating system.</p>

      <h2>Augmented reality</h2>
      <p>AR features use your device’s camera and Apple’s AR Quick Look to display planets in your surroundings. You can manage camera permission through your device settings.</p>

      <h2>Deep Focus and Screen Time</h2>
      <p>Deep Focus uses Apple’s Screen Time frameworks and requires your authorization. Your selected apps and related restriction settings are used to apply protection during a mission. Apple provides privacy-preserving selection tokens for supported selections. You can manage Screen Time authorization through your device settings.</p>

      <h2>Advertising and analytics</h2>
      <p>The app uses Google AdMob to display advertising and Firebase Analytics to understand feature usage. These services may process device and app identifiers, usage events, advertising interactions, network information, approximate location, and diagnostic information according to their configuration and your applicable consent choices. The App Store privacy disclosure identifies coarse location used for third-party advertising.</p>
      <p>Galaxy Plus includes an ad-free experience. Permission and consent settings can affect how advertising services process information.</p>
      <ul>
        <li><a href="https://policies.google.com/privacy">Google privacy policy</a></li>
        <li><a href="https://firebase.google.com/support/privacy">Firebase privacy information</a></li>
        <li><a href="https://support.google.com/admob/answer/6128543">AdMob privacy information</a></li>
        <li><a href="https://www.apple.com/legal/privacy/">Apple privacy policy</a></li>
      </ul>

      <h2>Purchases</h2>
      <p>Apple processes purchases through the App Store. Galaxy Gallery uses purchase and entitlement information to provide eligible features and restore purchases. Apple handles payment details under its own terms and privacy policy.</p>

      <h2>Support and your choices</h2>
      <p>If you contact support, James Thang receives your email address and the information you provide to respond. You can manage device permissions, remove local app data by deleting the app, and contact support with privacy or data questions. Backups, purchases, and information processed by Apple or Google follow those providers’ settings and policies.</p>
      <p>Contact <a href="mailto:jamesthang1996@gmail.com">jamesthang1996@gmail.com</a> for assistance.</p>

      <h2>Security and policy updates</h2>
      <p>We use platform features and service-provider controls to protect information. Electronic storage and transmission carry risks. This policy may change as the app’s features and services change, with the updated version published on this page.</p>
      <p><Link to="/galaxy-gallery/">Back to Galaxy Gallery</Link></p>
    </main>
  );
}
