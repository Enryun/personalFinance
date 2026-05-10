import React from 'react';
import './policy.scss';

const PolicyFolio = () => {
  return (
    <div className="policy">
      <strong>Privacy Policy</strong>
      <p>
        James Thang built <strong>Folio: Markdown Library</strong> for macOS as a local-first Markdown reader. This
        SERVICE is provided as-is.
      </p>

      <p>
        Folio is designed to help you build a <strong>local Markdown library</strong>, organize it with folders/tags,
        and find documents quickly—while keeping your content on your Mac.
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
        Folio does not ask you to provide personal information for core functionality. Any content you read, organize,
        search, or import is intended to remain on your Mac.
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
      <p>This policy is effective as of {new Date().toLocaleDateString()}.</p>

      <p>
        <strong>Contact Us</strong>
      </p>
      <p>If you have questions about this Privacy Policy, contact me at jamesthang1996@gmail.com.</p>
    </div>
  );
};

export default PolicyFolio;

