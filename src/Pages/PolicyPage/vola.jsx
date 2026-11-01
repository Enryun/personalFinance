import React from 'react';
import './policy.scss';

const PolicyVola = () => {
    return (
        <div className="policy">
            <strong>Privacy Policy</strong>
            <p><strong>Effective Date: November 1, 2026</strong></p>
            <p>
                This Privacy Policy explains how Vola, developed by James Thang, handles information when you use the app. The information involved depends on the features you choose to use.
            </p>

            <p><strong>1. Information We Handle and How We Use It</strong></p>
            <p>
                <strong>Recordings, imported media, and notes:</strong> Vola accesses audio you record or media you choose to import to create transcripts and notes. Recordings, imported files, transcripts, note titles, tags, and saved AI results are stored in the app on your device so you can view, edit, search, and organize them. Vola does not upload these files or notes to a Vola storage server for synchronization.
            </p>
            <p>
                <strong>Speech recognition:</strong> Live voice notes use Apple's Speech framework on the device. Transcription of imported media uses Apple's speech recognition service; depending on the language and device, Apple may process audio over a network. This is separate from the optional Google Gemini features described below.
            </p>
            <p>
                <strong>Account information:</strong> Vola uses Firebase Authentication, including anonymous accounts and, if you choose, email and password, Sign in with Apple, or Google Sign-In. Authentication information, a Firebase user ID, and available profile details such as email address, profile photo URL, and sign-in method are used to manage your account. A user profile in Cloud Firestore may also contain your subscription tier, AI credit balance, and AI availability status so Vola can provide those features.
            </p>
            <p>
                <strong>Usage and diagnostics:</strong> Google Analytics for Firebase receives app interaction events, such as screens viewed and feature use, to help us understand and improve Vola. Firebase Crashlytics receives crash reports, error details, and diagnostic information to help us find and fix problems. These services may receive device and app information, and Crashlytics may be associated with your Firebase user ID. We do not intentionally include the contents of your recordings or notes in analytics events.
            </p>

            <p><strong>2. Optional Google Gemini Processing</strong></p>
            <p>
                If you explicitly allow AI data sharing in Vola, the app uses Google Gemini through Firebase AI Logic's Vertex AI backend to generate note summaries, suggested questions, and answers about your notes. For these requests, Vola sends Google the note or transcript text, its title and language when available, and your question and relevant conversation history when applicable. Google processes this text and returns the requested result. Your audio recording is not sent to Gemini for these features.
            </p>
            <p>
                Vola asks for your permission before sending this content to Gemini. You can choose to continue without AI and still record and transcribe. You can change your choice or withdraw permission in Settings &gt; AI data sharing. Withdrawing permission stops future Gemini requests; it cannot undo requests already processed by Google. Your choice is stored on your device.
            </p>

            <p><strong>3. Services That Receive Information</strong></p>
            <ul>
                <li><strong>Google Firebase Authentication and Cloud Firestore:</strong> account and profile information needed for sign-in, subscription status, and AI credit features.</li>
                <li><strong>Google Analytics for Firebase and Firebase Crashlytics:</strong> usage events and diagnostics described above.</li>
                <li><strong>Google Gemini through Firebase AI Logic:</strong> text sent only after you allow optional AI processing, as described in Section 2.</li>
                <li><strong>Apple Speech services:</strong> audio for imported-media transcription when Apple's speech recognition requires network processing. Apple also handles Sign in with Apple and App Store purchases when you use them.</li>
                <li><strong>Google Sign-In:</strong> authentication information when you choose Google as your sign-in method.</li>
            </ul>
            <p>
                We share information with these services only for the purposes described in this policy. We use providers with documented privacy and security safeguards that provide protection for shared personal data at least equal to the protections described here. Their handling of information is also governed by their applicable terms and privacy notices. We do not sell your recordings, transcripts, or note content.
            </p>

            <p><strong>4. Storage and Security</strong></p>
            <p>
                Vola stores your recordings, imported media, transcripts, notes, and AI results locally on your device. Account and profile information is stored using Google Firebase services. Data sent to Firebase and Gemini is transmitted using the security protections provided by those services. Access to information on your device also depends on your device's security settings and any device backups you use.
            </p>

            <p><strong>5. Retention, Deletion, and Your Choices</strong></p>
            <p>
                You can delete individual notes, recordings, and imported transcriptions in Vola. Local app data remains on your device until you delete it or remove the app and its data. Turning off AI processing in Settings prevents future Gemini requests but does not delete information already processed by Google.
            </p>
            <p>
                The Delete Account action in Settings deletes your Firebase Authentication account. It does not automatically remove locally stored notes or necessarily erase an associated Cloud Firestore profile, analytics records, crash reports, or requests already processed by Google. To request deletion of other information associated with your account where available, email us at <a href="mailto:jamesthang1996@gmail.com">jamesthang1996@gmail.com</a>. We will handle requests in accordance with applicable law and the retention rules of the services involved.
            </p>

            <p><strong>6. Recording Consent</strong></p>
            <p>
                You are responsible for obtaining any consent required from other people before recording them. Vola does not monitor recordings for that consent.
            </p>

            <p><strong>7. Children's Privacy</strong></p>
            <p>
                Vola is not directed to children under 13. If you believe a child has provided personal information through Vola, contact us so we can review and address it.
            </p>

            <p><strong>8. Changes to This Policy</strong></p>
            <p>
                We may update this policy as Vola changes. We will post the updated policy here with a new effective date.
            </p>

            <p><strong>9. Contact Us</strong></p>
            <p>
                James Thang<br />
                Email: <a href="mailto:jamesthang1996@gmail.com">jamesthang1996@gmail.com</a>
            </p>
            <p>
                <strong>Terms &amp; Conditions:</strong> For the terms of service and end-user license agreement, see our <a href="/policy/vola-eula" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>.
            </p>
        </div>
    );
};

export default PolicyVola;
