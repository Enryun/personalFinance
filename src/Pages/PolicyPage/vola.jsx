import React from 'react';
import './policy.scss';

const PolicyVola = () => {
    return (
        <div className="policy">
            <strong>Privacy Policy</strong>
            <p><strong>Effective Date: March 06, 2026</strong></p>
            <p>
                This Privacy Policy describes how Vola ("we," "our," or "the Application"), created by James Thang, collects, uses, and shares information when you use our services. We are committed to protecting your privacy and ensuring your audio data remains secure.
            </p>
            
            <p><strong>1. Information Collection and Use</strong></p>
            <p>
                To provide our core services, we collect the following types of information:
            </p>
            <p>
                <strong>Audio Data:</strong> We process audio recordings you provide for transcription and analysis.
            </p>
            <p>
                <strong>Transcripts &amp; Chat History:</strong> We store the text generated from your audio to allow you to search, edit, and chat with your notes.
            </p>
            <p>
                <strong>Device Information:</strong> We may collect basic information about your device (model, OS version) to ensure compatibility and performance.
            </p>
            
            <p><strong>2. AI Data Processing</strong></p>
            <p>
                Vola uses Artificial Intelligence to power live transcription, summaries, and chat features.
            </p>
            <p>
                <strong>Third-Party Processors:</strong> Your audio and text data are securely transmitted to industry-leading AI providers (such as OpenAI and Google Gemini).
            </p>
            <p>
                <strong>Privacy Guard:</strong> We ensure that these providers do not use your personal data to train their public AI models. Data is used solely to provide the services requested within Vola.
            </p>
            
            <p><strong>3. Third-Party Services</strong></p>
            <p>
                The Application uses third-party services that may collect information used to identify you:
            </p>
            <ul>
                <li>Google Analytics for Firebase: Used to understand app usage and improve features.</li>
                <li>Firebase Crashlytics: Used to monitor app stability and fix bugs.</li>
                <li>AI Service Providers: Securely process audio-to-text and text-to-insight.</li>
            </ul>
            
            <p><strong>4. Data Storage and Security</strong></p>
            <p>
                <strong>Storage:</strong> Your transcripts and audio files are stored securely. We use encryption to protect your data during transmission and at rest.
            </p>
            <p>
                <strong>User Responsibility:</strong> You are responsible for maintaining the security of your device. We recommend against "jailbreaking" or "rooting" your device, as it compromises the Application's security features.
            </p>
            
            <p><strong>5. Data Retention and Deletion</strong></p>
            <p>
                We believe you should have full control over your data:
            </p>
            <p>
                <strong>Manual Deletion:</strong> You can delete individual recordings or transcripts at any time.
            </p>
            <p>
                <strong>Account Deletion:</strong> You may initiate a full account and data deletion within the App Settings. Once confirmed, all your data will be permanently purged from our servers within 30 days.
            </p>
            
            <p><strong>6. Recording Consent</strong></p>
            <p>
                Vola is a tool for productivity. It is your responsibility to ensure you have obtained the necessary legal consent from all parties involved in a recording. We do not monitor your audio files for consent; the legal obligation rests entirely with the User.
            </p>
            
            <p><strong>7. Children's Privacy</strong></p>
            <p>
                Vola does not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we will immediately delete this from our servers.
            </p>
            
            <p><strong>8. Changes to This Policy</strong></p>
            <p>
                We may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            
            <p><strong>9. Contact Us</strong></p>
            <p>
                If you have any questions or suggestions regarding our Privacy Policy, please contact:
            </p>
            <p>
                <strong>James Thang</strong><br />
                Email: jamesthang1996@gmail.com
            </p>
            
            <p>
                <strong>Terms &amp; Conditions:</strong> For information about terms of service and end-user license agreement, please review our <a href="/policy/vola-eula" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>.
            </p>
        </div>
    );
};

export default PolicyVola;
