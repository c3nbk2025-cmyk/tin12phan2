
import type { Question } from '../types';

export const gameQuestions: Question[] = [
    {
        id: 1,
        statement: "Trong giao tiếp trên không gian mạng, các bên tham gia bắt buộc phải có mặt cùng một thời điểm (đồng bộ) mới có thể trao đổi thông tin.",
        isTrue: false,
        explanation: "Sai. Giao tiếp mạng có cả hình thức đồng bộ (chat, video call) và không đồng bộ (email, diễn đàn), không bắt buộc phải có mặt cùng lúc."
    },
    {
        id: 2,
        statement: "Do không gặp mặt trực tiếp, thông tin trao đổi trên mạng không có khả năng gây ảnh hưởng đến suy nghĩ và hành động thực tế của con người.",
        isTrue: false,
        explanation: "Sai. Thông tin trên mạng (tin tức, mạng xã hội) có ảnh hưởng rất lớn đến quan điểm và hành vi của con người trong đời thực."
    },
    {
        id: 3,
        statement: "Việc sử dụng quá nhiều biểu tượng cảm xúc trong các văn bản hành chính hoặc trang trọng được khuyến khích để tạo sự thân thiện.",
        isTrue: false,
        explanation: "Sai. Trong văn bản hành chính, trang trọng, cần sử dụng ngôn ngữ chính xác, chuyên nghiệp. Biểu tượng cảm xúc chỉ phù hợp với giao tiếp không trang trọng."
    },
    {
        id: 4,
        statement: "Giao tiếp qua Email luôn an toàn tuyệt đối và không bao giờ bị lộ lọt thông tin bí mật của doanh nghiệp.",
        isTrue: false,
        explanation: "Sai. Email có thể bị hack, bị nghe lén nếu không có các biện pháp bảo mật mạnh như mã hóa. Không có phương thức giao tiếp nào là an toàn tuyệt đối."
    },
    {
        id: 5,
        statement: "Để bảo vệ tài khoản, Lan nên nhấp vào đường link lạ trong email và cung cấp thông tin ngay để bảo vệ tài khoản của mình theo hướng dẫn.",
        isTrue: false,
        explanation: "Sai. Đây là dấu hiệu của tấn công Phishing. Không bao giờ nhấp vào link lạ và cung cấp thông tin nhạy cảm. Cần kiểm tra kỹ người gửi."
    },
    {
        id: 6,
        statement: "Việc viết toàn bộ bằng CHỮ IN HOA trong giao tiếp mạng thường được hiểu là đang hét lớn hoặc giận dữ.",
        isTrue: true,
        explanation: "Đúng. Theo Netiquette (văn hóa giao tiếp mạng), viết in hoa toàn bộ được coi là hành động la hét và có thể bị xem là thô lỗ."
    },
    {
        id: 7,
        statement: "Chế độ 'Công khai' trên mạng xã hội giúp bảo vệ thông tin cá nhân tốt hơn so với chế độ 'Bạn bè' hoặc 'Chỉ mình tôi'.",
        isTrue: false,
        explanation: "Sai. Chế độ 'Công khai' làm thông tin của bạn hiển thị với tất cả mọi người, tiềm ẩn nhiều rủi ro. Chế độ 'Chỉ mình tôi' là an toàn nhất."
    },
    {
        id: 8,
        statement: "Trong nhóm chat học tập, các thành viên được quyền tự do gửi bất kỳ nội dung giải trí nào mà không cần quan tâm đến mục đích chính của nhóm.",
        isTrue: false,
        explanation: "Sai. Nhóm chat học tập cần tập trung vào chủ đề chính. Gửi nội dung không liên quan (spam) sẽ gây loãng thông tin và làm phiền người khác."
    },
    {
        id: 9,
        statement: "Thông tin trên mạng xã hội luôn được kiểm duyệt chặt chẽ nên có độ tin cậy tuyệt đối.",
        isTrue: false,
        explanation: "Sai. Mạng xã hội chứa rất nhiều tin giả (fake news). Người dùng cần có tư duy phản biện và kiểm tra nguồn tin trước khi tin tưởng."
    },
    {
        id: 10,
        statement: "Khi gặp sự cố đường truyền khi học online, giáo viên và học sinh không có cách nào khác để khắc phục và buổi học bắt buộc phải hủy bỏ ngay lập tức.",
        isTrue: false,
        explanation: "Sai. Có nhiều phương án dự phòng như ghi hình lại buổi học, gửi tài liệu, hoặc dời buổi học sang thời điểm khác."
    },
    {
        id: 11,
        statement: "Bắt nạt qua mạng chỉ xảy ra trên môi trường ảo nên không gây tổn thương thực sự về tinh thần cho nạn nhân.",
        isTrue: false,
        explanation: "Sai. Bắt nạt qua mạng (Cyberbullying) gây ra những tổn thương tinh thần nghiêm trọng, thậm chí còn nặng nề hơn bắt nạt ngoài đời thực."
    },
    {
        id: 12,
        statement: "Chatbot hiện nay đã thông minh đến mức có thể giải quyết mọi vấn đề phức tạp của con người giống hệt như một nhân viên tư vấn thực thụ.",
        isTrue: false,
        explanation: "Sai. Chatbot rất hữu ích cho các câu hỏi thường gặp nhưng vẫn còn hạn chế trong việc xử lý các vấn đề phức tạp, cần sự thấu cảm và linh hoạt của con người."
    },
    {
        id: 13,
        statement: "Trong giao tiếp qua Email, phần chữ ký (Signature) là không cần thiết vì địa chỉ email đã hiển thị tên người gửi.",
        isTrue: false,
        explanation: "Sai. Chữ ký chuyên nghiệp trong email cung cấp thêm thông tin liên hệ quan trọng (chức danh, công ty, số điện thoại) và tạo sự tin cậy."
    },
    {
        id: 14,
        statement: "Giao tiếp trực tuyến giúp con người kết nối nhiều hơn nên chắc chắn sẽ làm giảm cảm giác cô đơn trong cuộc sống thực.",
        isTrue: false,
        explanation: "Sai. Việc lạm dụng mạng xã hội có thể làm tăng cảm giác cô đơn và trầm cảm do so sánh bản thân với người khác và giảm tương tác thực tế."
    },
    {
        id: 15,
        statement: "Cộng đồng mạng có quyền tự do ngôn luận nên việc bình luận chỉ trích dựa trên hình ảnh riêng tư bị rò rỉ là hoàn toàn hợp pháp và đạo đức.",
        isTrue: false,
        explanation: "Sai. Tự do ngôn luận không đồng nghĩa với việc xâm phạm quyền riêng tư, phỉ báng, hay bắt nạt người khác. Hành vi này là vi phạm pháp luật và đạo đức."
    },
    {
        id: 16,
        statement: "Khi tham gia các cuộc họp trang trọng, người dùng nên chọn hình nền ảo (Virtual Background) sặc sỡ, nhiều chi tiết động để tạo không khí vui vẻ.",
        isTrue: false,
        explanation: "Sai. Trong môi trường trang trọng, nên chọn hình nền ảo chuyên nghiệp, gọn gàng, không gây mất tập trung cho người khác."
    },
    {
        id: 17,
        statement: "Thông tin vị trí địa lý không được coi là dữ liệu cá nhân nhạy cảm nên có thể chia sẻ thoải mái.",
        isTrue: false,
        explanation: "Sai. Thông tin vị trí là dữ liệu cá nhân rất nhạy cảm. Chia sẻ công khai có thể bị kẻ xấu lợi dụng để theo dõi, gây nguy hiểm cho an toàn cá nhân."
    },
    {
        id: 18,
        statement: "Không gian mạng là thế giới ảo nên mọi hành vi ở đó không ảnh hưởng gì đến giá trị nhân văn thực tế của con người.",
        isTrue: false,
        explanation: "Sai. Hành vi trong không gian mạng là phản ánh con người thật và có ảnh hưởng trực tiếp đến người khác cũng như xã hội."
    },
    {
        id: 19,
        statement: "Một người có sức ảnh hưởng (KOL) có quyền tự do sáng tạo nội dung, miễn là có nhiều người xem thì nội dung đó được coi là có giá trị tích cực.",
        isTrue: false,
        explanation: "Sai. KOL có trách nhiệm xã hội. Việc tạo ra nội dung tiêu cực, nguy hiểm để câu view là hành vi vô trách nhiệm, ảnh hưởng xấu đến cộng đồng."
    },
    {
        id: 20,
        statement: "Việc AI liên tục đề xuất các nội dung tiêu cực là hoàn toàn vô hại vì người dùng có quyền không bấm vào xem.",
        isTrue: false,
        explanation: "Sai. Việc tiếp xúc liên tục với nội dung tiêu cực, sai lệch có thể vô tình định hình suy nghĩ, gây ảnh hưởng xấu đến sức khỏe tinh thần và thể chất."
    },
    {
        id: 21,
        statement: "Trước khi quyên góp từ thiện online, người dùng cần kiểm tra kỹ nguồn gốc thông tin và tính xác thực của trường hợp cần giúp đỡ.",
        isTrue: true,
        explanation: "Đúng. Lòng tốt cần đặt đúng chỗ. Cần xác minh để đảm bảo sự giúp đỡ đến đúng người và tránh bị kẻ xấu lừa đảo, lợi dụng lòng nhân ái."
    },
    {
        id: 22,
        statement: "Trong các nhóm kín (Private Group), người dùng có quyền tự do ngôn luận tuyệt đối nên việc chê bai người khác là bình thường.",
        isTrue: false,
        explanation: "Sai. Dù là nhóm kín, các hành vi như body shaming, miệt thị, bắt nạt vẫn là sai trái, thiếu văn hóa và có thể gây tổn thương cho người khác."
    },
    {
        id: 23,
        statement: "Chỉ những người nổi tiếng hoặc giàu có mới cần bảo mật tài khoản, học sinh bình thường không cần quan tâm.",
        isTrue: false,
        explanation: "Sai. Bất kỳ ai cũng có thể trở thành mục tiêu của tin tặc. Mất tài khoản có thể dẫn đến lừa đảo bạn bè, người thân và nhiều hệ lụy khác."
    },
    {
        id: 24,
        statement: "Người dùng mạng có quyền 'thay trời hành đạo', tự do phán xét và trừng phạt người khác bằng lời nói nếu thấy họ sai.",
        isTrue: false,
        explanation: "Sai. Đây là hành vi tự cho mình quyền phán xét, thường dẫn đến bắt nạt hội đồng và lan truyền thù ghét. Mọi việc cần được xử lý bởi pháp luật."
    },
    {
        id: 25,
        statement: "Việc bố mẹ cài phần mềm kiểm soát và chặn web đen là vi phạm nghiêm trọng quyền tự do tiếp cận thông tin của con cái và cần bị loại bỏ.",
        isTrue: false,
        explanation: "Sai. Đây là biện pháp cần thiết để bảo vệ trẻ em khỏi các nội dung độc hại, không phù hợp. Cha mẹ có trách nhiệm định hướng và bảo vệ con cái."
    },
    {
        id: 26,
        statement: "Vì là ảnh giả (Deepfake) do AI tạo ra nên hành vi phát tán ảnh nhạy cảm giả mạo không gây hậu quả gì nghiêm trọng cho nạn nhân.",
        isTrue: false,
        explanation: "Sai. Deepfake gây ra những tổn thương tâm lý cực kỳ nặng nề, ảnh hưởng đến danh dự, nhân phẩm và có thể hủy hoại cuộc sống của nạn nhân."
    },
    {
        id: 27,
        statement: "Việc sử dụng danh tính thật trên mạng xã hội giúp nâng cao trách nhiệm của người dùng đối với từng phát ngôn và hành động của mình.",
        isTrue: true,
        explanation: "Đúng. Khi dùng danh tính thật, người ta có xu hướng hành xử cẩn trọng và văn minh hơn vì lời nói và hành động gắn liền với danh tiếng của họ."
    },
    {
        id: 28,
        statement: "Văng tục, chửi bậy là 'đặc sản' của văn hóa game nên cần được chấp nhận và cổ vũ.",
        isTrue: false,
        explanation: "Sai. Hành vi toxic không phải là văn hóa mà là vấn đề tiêu cực cần loại bỏ để xây dựng một cộng đồng game lành mạnh và văn minh."
    },
    {
        id: 29,
        statement: "Khi nhận được email bôi nhọ người khác, bạn vô can vì bạn không phải là người viết ra email đó, chỉ là người chia sẻ lại.",
        isTrue: false,
        explanation: "Sai. Việc chuyển tiếp thông tin sai sự thật, bôi nhọ là hành vi gián tiếp tiếp tay cho cái xấu, lan truyền tin giả và có thể bị xem là đồng phạm."
    },
    {
        id: 30,
        statement: "Chỉ cần tuân thủ pháp luật là đủ, không cần quan tâm đến đạo đức hay tính nhân văn vì chúng không bắt buộc.",
        isTrue: false,
        explanation: "Sai. Pháp luật là khung tối thiểu. Một không gian mạng văn minh cần cả pháp luật và các chuẩn mực đạo đức, sự tôn trọng và lòng tốt."
    },
    {
        id: 31,
        statement: "Quy định 'Cấm phân biệt vùng miền, tôn giáo và giới tính' trên diễn đàn vi phạm quyền tự do ngôn luận của thành viên.",
        isTrue: false,
        explanation: "Sai. Đây là quy định cần thiết để duy trì sự bình đẳng, tôn trọng và một môi trường thảo luận lành mạnh, không thù ghét."
    },
    {
        id: 32,
        statement: "Các nền tảng mạng xã hội dựa hoàn toàn vào AI để lọc nội dung nên hành động báo cáo (report) của người dùng là không cần thiết.",
        isTrue: false,
        explanation: "Sai. AI không hoàn hảo. Việc người dùng chủ động báo cáo nội dung xấu, độc hại là cực kỳ quan trọng để giúp nền tảng làm sạch môi trường mạng."
    }
];
