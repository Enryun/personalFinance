import React from 'react';
import './policy.scss';

const PolicyHorologyStudio = () => (
  <div className="policy">
    <strong>Horology Studio Privacy Policy</strong>
    <p>James Thang built <strong>Horology Studio</strong> as a free-to-download application with optional one-time in-app purchases. This SERVICE is provided as-is.</p>

    <p><strong>Information Collection and Use</strong></p>
    <p>Horology Studio does not require an account and does not collect personal information for its core watch, collection, customization, widget, alarm, or countdown features. Watch configurations, collection state, alarms, and countdown settings are stored locally on your device and, where supported by the operating system, may be included in your device backups.</p>

    <p><strong>Alarms, Countdown Timers, and Widgets</strong></p>
    <p>On iOS 26 or later, Horology Studio uses Apple AlarmKit to schedule system-backed alarms and countdown timers. The app requests alarm access only when you choose to use these features. Home Screen widgets read the watch and timezone configuration needed to display your selected timepiece. These features do not send your alarm schedule, location, or widget configuration to James Thang.</p>

    <p><strong>Location and Time Zones</strong></p>
    <p>If you choose a city or time zone for a watch or World Time widget, Horology Studio uses the selected time-zone identifier to calculate the displayed time. The app does not request or collect your device’s precise location.</p>

    <p><strong>In-App Purchases</strong></p>
    <p>Horology Studio offers optional non-consumable purchases for individual watch models and a Complete Collection unlock. Purchases are processed by Apple through the App Store. James Thang does not receive your payment card details. Purchase entitlements are managed through Apple’s StoreKit services and can be restored using the Restore Purchases action in the app.</p>

    <p><strong>Analytics and Third-Party Services</strong></p>
    <p>The app does not use advertising, sign-in providers, or cloud storage for core functionality. The distributed app uses Firebase Analytics for aggregated feature-usage events and Firebase Crashlytics to help diagnose crashes. These services may process pseudonymous app or device information and diagnostic data under Google’s privacy policy. Horology Studio does not send precise location, contacts, or the contents of your watch configuration to these services. The app also uses Apple system services such as StoreKit, AlarmKit, and WidgetKit, which are governed by Apple’s own privacy policies.</p>

    <p><strong>Security</strong></p>
    <p>We use reasonable measures to keep app data local and protected, but no method of electronic storage is completely secure.</p>

    <p><strong>Children’s Privacy</strong></p>
    <p>Horology Studio does not knowingly collect personal information from children. Because the app does not require an account or collect personal information for its core features, no child-specific profile is created.</p>

    <p><strong>Changes to This Privacy Policy</strong></p>
    <p>This Privacy Policy may be updated from time to time. Changes will be posted on this page with a new effective date.</p>
    <p>This policy is effective as of {new Date().toLocaleDateString()}.</p>

    <p><strong>Contact Us</strong></p>
    <p>If you have questions about this Privacy Policy, contact James Thang at <a href="mailto:jamesthang1996@gmail.com">jamesthang1996@gmail.com</a>.</p>
  </div>
);

export default PolicyHorologyStudio;
