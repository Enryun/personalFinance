import { translatedContent, makeVolaUi } from './translations';
export const VOLA_STORE = 'https://apps.apple.com/app/id6758566739';
export const volaContent = {
  en: {
    title: 'Vola: On-Device Speech to Text & AI Voice Notes',
    description: 'Vola transcribes live speech on your iPhone or iPad. Organize recordings, search notes, and use optional cloud AI for summaries and questions. Free download.',
    eyebrow: 'VOICE NOTES · iPHONE & iPAD',
    heading: 'On-device speech to text. Notes you can use.',
    intro: 'Vola is an iPhone and iPad voice note app. Transcribe live speech on-device, with optional cloud AI summaries and questions.',
    download: 'Get Vola',
    price: 'Free download with limited usage. Paid subscriptions unlock additional features and allowances.',
    compatibility: 'Requires iOS 26 or iPadOS 26 or later.',
    local: 'Live transcription, on your device.',
    localText: 'Live voice notes use Apple’s on-device speech recognition. Your recordings and notes are stored locally. You can record and transcribe without enabling AI data sharing.',
    cloud: 'AI when you choose it.',
    cloudText: 'With your permission, summaries and questions send note text to Google Gemini. Audio is not sent to Gemini. Imported-media transcription may use Apple’s network service, depending on language and device.',
    privacy: 'Read the privacy policy',
    featuresLabel: 'From spoken words to useful notes',
    features: [
      { image: 'summary', title: 'Review the key points, without starting over.', text: 'Turn a transcript into an AI summary of topics, decisions, and action items. Keep the original recording nearby to check important details.', detail: 'Optional cloud AI requires sign-in, internet, available credits, and permission to share note text.', alt: 'Vola on iPhone showing a meeting transcript and AI summary with launch action items' },
      { image: 'ask', title: 'Ask your notes a question.', text: '“What are the next steps?” Ask about a deadline or revisit a decision in your note. Use the answer as a starting point, then check it against the recording.', detail: 'AI-generated answers can contain errors. Review important details before relying on them.', alt: 'Vola Ask AI panel answering a question about next steps in a recorded meeting' },
      { image: 'search', title: 'Find the thought you wanted to keep.', text: 'Search saved notes and transcriptions, then use tags and favorites to keep related ideas together. Edit text and highlight passages you want to revisit.', detail: 'Translate supported languages and export notes or summaries as PDF or text. Availability depends on your device, language, and plan.', alt: 'Vola search screen on iPhone displaying matching saved voice notes' }
    ],
    importHeading: 'Already have the recording?',
    importText: 'Import a supported audio or video file on iPhone or iPad and turn its spoken content into text you can read, edit, and search. Imported-media speech recognition may use network processing by Apple.',
    importAlt: 'Vola on iPad displaying an imported customer interview video and its transcript',
    stepsHeading: 'How Vola works',
    steps: [['Record or import', 'Start a live voice note, or bring in a supported audio or video file.'], ['Review and organize', 'Read the transcript, correct text, highlight useful passages, and add tags.'], ['Go further with optional AI', 'Generate a summary or ask about your note after allowing AI data sharing.']],
    audienceHeading: 'Make room to listen.',
    audiences: [['Meetings', 'Keep a searchable record of discussions and review decisions afterward.'], ['Lectures', 'Capture explanations and turn a long transcript into a useful study recap.'], ['Interviews', 'Revisit what was said and check quotes against the original recording.'], ['Language learning', 'Read along with live speech and use translation where supported.']],
    consent: 'Ask for any required permission before recording other people.',
    faqHeading: 'Questions before you record?',
    faqs: [
      ['Does Vola work offline?', 'Live voice notes use on-device speech recognition. Language and device support still apply. AI summaries and chat require internet; imported-media transcription may also need Apple’s network service. Vola is not an entirely offline app.'],
      ['Is my audio uploaded?', 'Vola stores recordings and notes on your device and does not upload them to a Vola storage server for synchronization. Live voice transcription runs on-device. Imported-media transcription may send audio to Apple for recognition. Optional Gemini features send note text, not audio, after permission.'],
      ['What does optional AI receive?', 'When you allow AI data sharing, Gemini receives note or transcript text, the title and language when available, and your question and relevant conversation history when applicable. You can withdraw permission in Settings > AI data sharing to stop future requests.'],
      ['Which languages are supported?', 'Speech recognition and translation support depend on your device, system, and selected language. Check the language choices available in Vola on your device. App interface languages are separate from transcription and translation availability.'],
      ['Is Vola free?', 'Vola is free to download with limited usage. Paid subscriptions provide more features and usage allowances. Recording, transcription, and export depend on your plan. AI summaries and chat require a signed-in account, internet, and available AI credits. Check current plans in the app.'],
      ['Can I import and share notes?', 'You can import supported audio or video files and export notes and summaries as PDF or text. Feature availability and usage allowances depend on your plan.']
    ],
    finalHeading: 'Your next conversation, easier to revisit.',
    finalText: 'Start with a voice note. Keep a transcript you can return to.',
    developer: 'Built by James Thang', walkthrough: 'Explore the Vola product walkthrough',
    terms: 'Terms of use (English)', home: 'James Thang’s website', liveAlt: 'Vola recording screen on iPhone with a live speech-to-text transcript'
  },
  vi: {
    title: 'Vola: Chuyển giọng nói thành văn bản trên iPhone',
    description: 'Vola chép lời nói trực tiếp trên iPhone và iPad. Lưu, tìm kiếm ghi chú và tùy chọn dùng AI đám mây để tóm tắt, hỏi đáp. Tải miễn phí trên App Store.',
    eyebrow: 'GHI CHÚ GIỌNG NÓI · iPHONE & iPAD',
    heading: 'Chuyển giọng nói thành văn bản ngay trên thiết bị.',
    intro: 'Vola là ứng dụng ghi chú giọng nói cho iPhone và iPad, với tính năng chép lời trực tiếp ngay trên thiết bị. Ghi lại cuộc trò chuyện, sắp xếp bản chép lời và tùy chọn dùng AI để xem lại những điều quan trọng.',
    download: 'Tải Vola',
    price: 'Tải miễn phí với hạn mức sử dụng. Các gói trả phí cung cấp thêm tính năng và hạn mức.',
    compatibility: 'Yêu cầu iOS 26 hoặc iPadOS 26 trở lên.',
    local: 'Chép lời trực tiếp, ngay trên thiết bị.',
    localText: 'Ghi chú giọng nói trực tiếp dùng tính năng nhận dạng giọng nói trên thiết bị của Apple. Bản ghi và ghi chú được lưu cục bộ. Bạn có thể ghi âm và chép lời mà không bật chia sẻ dữ liệu AI.',
    cloud: 'Dùng AI khi bạn lựa chọn.',
    cloudText: 'Khi được bạn cho phép, tính năng tóm tắt và hỏi đáp gửi văn bản ghi chú đến Google Gemini, không gửi bản ghi âm. Việc chép lời tệp nhập có thể dùng dịch vụ mạng của Apple, tùy ngôn ngữ và thiết bị.',
    privacy: 'Đọc chính sách quyền riêng tư (tiếng Anh)',
    featuresLabel: 'Từ lời nói thành ghi chú hữu ích',
    features: [
      { image: 'summary', title: 'Xem lại ý chính, không cần bắt đầu lại.', text: 'Dùng AI để tóm tắt chủ đề, quyết định và việc cần làm từ bản chép lời. Giữ bản ghi gốc để kiểm tra các chi tiết quan trọng.', detail: 'AI đám mây là tùy chọn, cần đăng nhập, kết nối mạng, tín dụng AI và quyền chia sẻ văn bản ghi chú.', alt: 'Vola trên iPhone hiển thị bản chép lời cuộc họp và bản tóm tắt AI với các việc cần làm' },
      { image: 'ask', title: 'Đặt câu hỏi cho ghi chú.', text: '“Các bước tiếp theo là gì?” Hỏi về thời hạn hoặc xem lại một quyết định trong ghi chú. Dùng câu trả lời làm gợi ý rồi đối chiếu với bản ghi.', detail: 'Câu trả lời do AI tạo có thể có sai sót. Hãy kiểm tra lại các chi tiết quan trọng.', alt: 'Bảng Hỏi AI của Vola trả lời câu hỏi về các bước tiếp theo trong cuộc họp' },
      { image: 'search', title: 'Tìm lại ý tưởng bạn muốn giữ.', text: 'Tìm kiếm ghi chú và bản chép lời đã lưu, dùng thẻ và mục yêu thích để nhóm các ý liên quan. Chỉnh sửa văn bản và tô sáng những đoạn cần xem lại.', detail: 'Dịch các ngôn ngữ được hỗ trợ và xuất ghi chú hoặc tóm tắt thành PDF hay văn bản. Khả năng sử dụng tùy thiết bị, ngôn ngữ và gói dịch vụ.', alt: 'Màn hình tìm kiếm Vola trên iPhone hiển thị các ghi chú giọng nói phù hợp' }
    ],
    importHeading: 'Bạn đã có bản ghi?',
    importText: 'Nhập tệp âm thanh hoặc video được hỗ trợ trên iPhone hay iPad để chuyển lời nói thành văn bản có thể đọc, sửa và tìm kiếm. Việc nhận dạng giọng nói từ tệp nhập có thể được Apple xử lý qua mạng.',
    importAlt: 'Vola trên iPad hiển thị video phỏng vấn khách hàng đã nhập cùng bản chép lời',
    stepsHeading: 'Cách sử dụng Vola',
    steps: [['Ghi âm hoặc nhập tệp', 'Bắt đầu ghi chú giọng nói trực tiếp hoặc nhập tệp âm thanh, video được hỗ trợ.'], ['Xem lại và sắp xếp', 'Đọc bản chép lời, sửa văn bản, tô sáng nội dung hữu ích và thêm thẻ.'], ['Tùy chọn dùng AI', 'Tạo bản tóm tắt hoặc hỏi về ghi chú sau khi cho phép chia sẻ dữ liệu AI.']],
    audienceHeading: 'Dành sự tập trung cho người nói.',
    audiences: [['Cuộc họp', 'Lưu lại nội dung có thể tìm kiếm và xem lại các quyết định sau cuộc họp.'], ['Bài giảng', 'Ghi lại lời giải thích và dùng bản tóm tắt để hỗ trợ ôn tập.'], ['Phỏng vấn', 'Xem lại nội dung trao đổi và đối chiếu trích dẫn với bản ghi gốc.'], ['Học ngôn ngữ', 'Đọc theo lời nói trực tiếp và sử dụng tính năng dịch khi được hỗ trợ.']],
    consent: 'Xin sự đồng ý cần thiết trước khi ghi âm người khác.',
    faqHeading: 'Bạn muốn biết thêm trước khi ghi âm?',
    faqs: [
      ['Vola có hoạt động khi không có mạng không?', 'Ghi chú giọng nói trực tiếp dùng nhận dạng giọng nói trên thiết bị, tùy khả năng hỗ trợ của ngôn ngữ và thiết bị. Tóm tắt và trò chuyện AI cần mạng; chép lời tệp nhập cũng có thể cần dịch vụ mạng của Apple. Vola không phải ứng dụng hoàn toàn ngoại tuyến.'],
      ['Âm thanh của tôi có được tải lên không?', 'Vola lưu bản ghi và ghi chú trên thiết bị, không tải lên máy chủ lưu trữ của Vola để đồng bộ. Chép lời giọng nói trực tiếp chạy trên thiết bị. Chép lời tệp nhập có thể gửi âm thanh đến Apple. Tính năng Gemini tùy chọn gửi văn bản ghi chú sau khi được cho phép, không gửi âm thanh.'],
      ['AI tùy chọn nhận dữ liệu gì?', 'Khi bạn cho phép chia sẻ dữ liệu AI, Gemini nhận văn bản ghi chú hoặc bản chép lời, tiêu đề và ngôn ngữ nếu có, cùng câu hỏi và lịch sử hội thoại liên quan khi cần. Bạn có thể rút quyền trong Cài đặt > Chia sẻ dữ liệu AI để dừng các yêu cầu tiếp theo.'],
      ['Vola hỗ trợ những ngôn ngữ nào?', 'Khả năng nhận dạng giọng nói và dịch tùy thiết bị, hệ thống và ngôn ngữ đã chọn. Hãy kiểm tra các lựa chọn ngôn ngữ trong Vola trên thiết bị của bạn. Ngôn ngữ giao diện khác với khả năng hỗ trợ chép lời và dịch.'],
      ['Vola có miễn phí không?', 'Vola miễn phí tải về với hạn mức sử dụng. Các gói trả phí cung cấp thêm tính năng và hạn mức. Ghi âm, chép lời và xuất tệp tùy gói. Tóm tắt và trò chuyện AI cần tài khoản đã đăng nhập, kết nối mạng và tín dụng AI. Xem các gói hiện tại trong ứng dụng.'],
      ['Tôi có thể nhập và chia sẻ ghi chú không?', 'Bạn có thể nhập tệp âm thanh hoặc video được hỗ trợ và xuất ghi chú, bản tóm tắt thành PDF hoặc văn bản. Tính năng và hạn mức sử dụng tùy gói dịch vụ.']
    ],
    finalHeading: 'Dễ dàng xem lại cuộc trò chuyện tiếp theo.',
    finalText: 'Bắt đầu với một ghi chú giọng nói. Giữ lại bản chép lời để xem khi cần.',
    developer: 'Phát triển bởi James Thang', walkthrough: 'Khám phá quá trình xây dựng Vola (tiếng Anh)',
    terms: 'Điều khoản sử dụng (tiếng Anh)', home: 'Trang web của James Thang', liveAlt: 'Màn hình ghi âm Vola trên iPhone với bản chép lời nói trực tiếp'
  }
};

Object.assign(volaContent, translatedContent);
volaContent.en.ui = makeVolaUi(['Skip to content','Vola navigation','Language','Choose language','See how it works','CLEAR ABOUT YOUR DATA','QR code opening Vola on the App Store','Less typing, more listening']);
volaContent.vi.ui = makeVolaUi(['Đến nội dung chính','Điều hướng Vola','Ngôn ngữ','Chọn ngôn ngữ','Xem cách hoạt động','RÕ RÀNG VỀ DỮ LIỆU','Mã QR mở Vola trên App Store','Ít gõ hơn, lắng nghe nhiều hơn']);
