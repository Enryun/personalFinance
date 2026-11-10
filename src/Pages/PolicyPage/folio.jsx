import React from 'react';
import './policy.scss';

const PolicyFolio = () => {
  return (
    <div className="policy">
      <strong>Privacy Policy</strong>
      <p>
        James Thang built <strong>Folio: Markdown Library</strong> for iPhone and Mac as a local-first Markdown editor and organizer. This
        SERVICE is provided as-is.
      </p>

      <p>
        Folio is designed to help you build a <strong>local Markdown library</strong>, organize it with folders/tags,
        and find documents quickly—while keeping your content on your device.
      </p>

      <p>
        <strong>Local-first &amp; Privacy</strong>
      </p>
      <p>
        Your Markdown files and library content are intended to be stored locally on your device. Folio does not require
        creating an account to use core reading, organizing, and searching workflows.
      </p>

      <p>
        <strong>Git Import</strong>
      </p>
      <p>
        If you choose to import from a Git repository, Folio will extract Markdown and save it locally so you can browse
        docs offline as part of your library.
      </p>

      <p>
        <strong>In-App Purchases</strong>
      </p>
      <p>
        Folio offers a <strong>one-time Pro package</strong> purchase. It is not a subscription. Purchases are processed
        by Apple through the App Store and are subject to Apple’s payment terms.
      </p>

      <p>
        <strong>Information Collection and Use</strong>
      </p>
      <p>
        Folio does not ask you to provide personal information for core functionality. Your document library is stored locally on your device. The on-device Writing Assistant processes document text using a local model. Model downloads and Git imports require network connections to their respective providers.
      </p>

      <p><strong>Usage Analytics and Diagnostics</strong></p>
      <p>
        The Mac version of Folio uses Mixpanel for usage analytics, including app launches, screen views, import outcomes,
        search query lengths and result counts, and sharing or export events. Analytics can include app
        and operating system versions, file extensions, import host names, timings, and error details.
        This policy does not claim that Folio has no network activity or collects no data.
        The App Store privacy disclosure also lists usage and diagnostic data not linked to your identity.
      </p>

      <p>
        <strong>Security</strong>
      </p>
      <p>
        We aim to keep your data safe by keeping it local, but remember that no method of electronic storage is 100%
        secure.
      </p>

      <p>
        <strong>Changes to This Privacy Policy</strong>
      </p>
      <p>
        This Privacy Policy may be updated from time to time. Any changes will be posted on this page.
      </p>
      <p>Last updated: November 11, 2026.</p>

      <p>
        <strong>Contact Us</strong>
      </p>
      <p>If you have questions about this Privacy Policy, contact me at jamesthang1996@gmail.com.</p>
    </div>
  );
};

export default PolicyFolio;

