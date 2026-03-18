const TRANSLATIONS = {
    // Navbar
    'nav.home': { vi: 'Trang chủ', en: 'Home' },
    'nav.about': { vi: 'Giới thiệu', en: 'About' },
    'nav.research': { vi: 'Nghiên cứu', en: 'Research' },
    'nav.projects': { vi: 'Dự án', en: 'Projects' },
    'nav.publications': { vi: 'Công bố', en: 'Publications' },
    'nav.members': { vi: 'Thành viên', en: 'Members' },
    'nav.contact': { vi: 'Liên hệ', en: 'Contact' },

    // Footer
    'footer.about.title': { vi: 'ICN Lab - PTIT', en: 'ICN Lab - PTIT' },
    'footer.about.desc': { vi: 'Intelligently Connected Networks Lab – nghiên cứu các giải pháp cho hệ thống mạng thế hệ mới.', en: 'Intelligently Connected Networks Lab – researching solutions for next-generation networked systems.' },
    'footer.links.title': { vi: 'Liên kết', en: 'Quick Links' },
    'footer.contact.title': { vi: 'Liên hệ', en: 'Contact Us' },
    'footer.address.room': { vi: '📍 Phòng 06/B15, PTIT', en: '📍 Room 06/B15, PTIT' },
    'footer.address.street': { vi: '📍 96A Trần Phú, Hà Đông, Hà Nội', en: '📍 96A Tran Phu, Ha Dong, Hanoi' },
    'footer.copyright': { vi: '© 2026 Intelligently Connected Networks Lab - PTIT', en: '© 2026 Intelligently Connected Networks Lab - PTIT' },

    // Home Page (hero & sections)
    'home.hero.subtitle': { vi: 'Khám phá các giải pháp tiên tiến cho hệ thống mạng thế hệ mới thông qua Điện toán biên (Edge Computing), IoT, và Công nghệ 5G/6G', en: 'Pioneering innovative solutions for next-generation networked systems through Edge Computing, IoT, and 5G/6G Technologies' },
    'home.stats.pubs': { vi: 'Công bố', en: 'Publications' },
    'home.stats.projects': { vi: 'Dự án', en: 'Projects' },
    'home.stats.researchers': { vi: 'Nghiên cứu viên', en: 'Researchers' },
    'home.intro.title': { vi: 'Giới thiệu', en: 'Introduction' },
    'home.intro.desc': { vi: 'ICN Lab tập trung nghiên cứu các giải pháp tiên tiến cho hệ thống mạng thế hệ mới, đặc biệt là Edge Computing, IoT và công nghệ 5G/6G.', en: 'ICN Lab focuses on researching advanced solutions for next-generation systems, particularly Edge Computing, IoT, and 5G/6G technologies.' },
    'home.intro.link': { vi: 'Xem thêm →', en: 'Learn more →' },
    'home.news.title': { vi: 'Tin tức mới nhất', en: 'Latest News' },
    'home.news.subtitle': { vi: 'Cập nhật hoạt động và sự kiện của lab', en: 'Updating lab activities and events' },
    'home.news.loading': { vi: 'Đang tải tin tức...', en: 'Loading news...' },
    'home.news.empty': { vi: 'Chưa có tin tức nào.', en: 'No news available.' },
    'home.news.error': { vi: 'Không tải được tin tức. Kiểm tra Backend đã chạy chưa.', en: 'Cannot load news. Make sure Backend is running.' },

    // Contact Page
    'contact.title': { vi: 'Liên hệ với chúng tôi', en: 'Contact Us' },
    'contact.subtitle': { vi: 'Chúng tôi luôn sẵn sàng lắng nghe và hợp tác', en: 'We are always ready to listen and collaborate' },
    'contact.info.title': { vi: 'Thông tin liên hệ', en: 'Contact Information' },
    'contact.info.desc': { vi: 'ICN Lab luôn chào đón sinh viên tài năng và các đối tác quan tâm đến nghiên cứu.', en: 'ICN Lab welcomes talented students and partners interested in research.' },
    'contact.info.address.title': { vi: 'Địa chỉ', en: 'Address' },
    'contact.info.address.value': { vi: 'Phòng 06, Tòa nhà B15<br>Học viện Công nghệ Bưu chính Viễn thông<br>96A Trần Phú, Hà Đông, Hà Nội', en: 'Room 06, Building B15<br>Posts and Telecommunications Institute of Technology<br>96A Tran Phu, Ha Dong, Hanoi' },
    'contact.info.email.title': { vi: 'Email', en: 'Email' },
    'contact.info.social.title': { vi: 'Mạng xã hội', en: 'Social Media' },
    'contact.form.title': { vi: 'Gửi tin nhắn', en: 'Send a Message' },
    'contact.form.name': { vi: 'Họ và tên', en: 'Full Name' },
    'contact.form.email': { vi: 'Email', en: 'Email' },
    'contact.form.subject': { vi: 'Tiêu đề', en: 'Subject' },
    'contact.form.message': { vi: 'Nội dung tin nhắn', en: 'Message Content' },
    'contact.form.submit': { vi: 'Gửi Tin Nhắn', en: 'Send Message' },
    
    // About Page
    'about.title': { vi: 'Giới thiệu về ICN Lab', en: 'About ICN Lab' },
    'about.subtitle': { vi: 'Intelligently Connected Networks Lab (ICN Lab) tại PTIT', en: 'Intelligently Connected Networks Lab (ICN Lab) at PTIT' },
    'about.mission.title': { vi: 'Tầm nhìn & Sứ mệnh', en: 'Vision & Mission' },
    'about.mission.p1': { vi: 'ICN Lab được thành lập với mục tiêu trở thành một trung tâm nghiên cứu hàng đầu...', en: 'ICN Lab was established with the goal of becoming a leading research center...' },
    'about.mission.p2': { vi: 'Chúng tôi tập trung vào việc áp dụng trí tuệ nhân tạo (AI)...', en: 'We focus on applying artificial intelligence (AI)...' },
    'about.focus.title': { vi: 'Định hướng nghiên cứu', en: 'Research Focus' },
    // About Page missing keys
    'about.intro.title': { vi: 'Về chúng tôi', en: 'About Us' },
    'about.intro.p1': { vi: 'Intelligently Connected Networks Lab (ICN Lab) thuộc Học viện Công nghệ Bưu chính Viễn thông (PTIT), tập trung vào nghiên cứu các giải pháp tiên tiến cho hệ thống mạng thế hệ mới.', en: 'Intelligently Connected Networks Lab (ICN Lab) at Posts and Telecommunications Institute of Technology (PTIT) focuses on researching advanced solutions for next-generation systems.' },
    'about.intro.p2': { vi: 'Chúng tôi xây dựng môi trường nghiên cứu hợp tác, hướng tới các đổi mới trong Edge Computing, Internet of Things (IoT) và công nghệ truyền thông không dây thế hệ 5G/6G.', en: 'We build a collaborative research environment targeting innovations in Edge Computing, IoT, and 5G/6G wireless communication technologies.' },
    'about.intro.p3': { vi: 'Nghiên cứu của lab được tổ chức theo ba trụ cột chính: tối ưu hiệu năng, bảo mật, và các mô hình mới cho mạng thế hệ tiếp theo trong môi trường hạn chế tài nguyên.', en: 'Our research is organized around three main pillars: performance optimization, security, and novel models for next-generation networks in resource-constrained environments.' },
    'about.vision.title': { vi: 'Tầm nhìn', en: 'Vision' },
    'about.vision.subtitle': { vi: 'Định hướng phát triển và đóng góp', en: 'Development orientation and contribution' },
    'about.focus.1.title': { vi: 'Nghiên cứu chất lượng cao', en: 'High-quality Research' },
    'about.focus.1.desc': { vi: 'Công bố các bài báo trên tạp chí và hội nghị quốc tế uy tín, góp phần thúc đẩy khoa học và công nghệ mạng.', en: 'Publishing articles in prestigious international journals and conferences, contributing to the advancement of network science and technology.' },
    'about.focus.2.title': { vi: 'Hợp tác quốc tế', en: 'International Cooperation' },
    'about.focus.2.desc': { vi: 'Liên kết với các trường đại học, viện nghiên cứu và doanh nghiệp trong và ngoài nước.', en: 'Partnering with universities, research institutes, and enterprises domestically and internationally.' },
    'about.focus.3.title': { vi: 'Đào tạo nguồn nhân lực', en: 'Human Resource Training' },
    'about.focus.3.desc': { vi: 'Đào tạo sinh viên, học viên cao học và nghiên cứu sinh trong lĩnh vực mạng và truyền thông.', en: 'Training students, graduate students, and PhD candidates in networks and communications.' },

    // Research Page
    'research.title': { vi: 'Lĩnh vực nghiên cứu', en: 'Research Areas' },
    'research.subtitle': { vi: 'Định hướng nghiên cứu chính tại ICN Lab', en: 'Main research focuses at ICN Lab' },
    
    // Projects Page
    'projects.title': { vi: 'Dự án', en: 'Projects' },
    'projects.subtitle': { vi: 'Các đề tài nghiên cứu đã và đang thực hiện', en: 'Ongoing and completed research projects' },
    'projects.loading': { vi: 'Đang tải dự án...', en: 'Loading projects...' },

    // Publications Page
    'publications.title': { vi: 'Công bố khoa học', en: 'Publications' },
    'publications.subtitle': { vi: 'Các bài báo và công trình nghiên cứu của Lab', en: 'Research papers and publications from our Lab' },
    'publications.filter.all': { vi: 'Tất cả', en: 'All' },
    'publications.filter.journal': { vi: 'Tạp chí (Journal)', en: 'Journal' },
    'publications.filter.conference': { vi: 'Hội nghị (Conference)', en: 'Conference' },
    'publications.loading': { vi: 'Đang tải danh sách công bố...', en: 'Loading publications...' },
    'publications.download': { vi: 'Download PDF', en: 'Download PDF' },
    'publications.link': { vi: 'Link', en: 'Link' },

    // Members Page
    'members.title': { vi: 'Thành viên nghiên cứu', en: 'Research Members' },
    'members.subtitle': { vi: 'Đội ngũ nòng cốt tại ICN Lab', en: 'Core team at ICN Lab' },
    'members.loading': { vi: 'Đang tải danh sách thành viên...', en: 'Loading members...' },
    'members.role.pi': { vi: 'Trưởng nhóm (PI)', en: 'Principal Investigator (PI)' },
    'members.role.phd': { vi: 'Tiến sĩ / Học viên cao học', en: 'PhD / Graduate Students' },
    'members.role.alumni': { vi: 'Cựu thành viên', en: 'Alumni' },
    'members.role.student': { vi: 'Sinh viên nghiên cứu', en: 'Undergraduate Researchers' },
    // Research Page - focus cards
    'research.focus.1.title': { vi: 'Edge Computing & IoT Performance', en: 'Edge Computing & IoT Performance' },
    'research.focus.1.desc': { vi: 'Tối ưu hóa TinyML cho thiết bị IoT hạn chế tài nguyên trong nông nghiệp và công nghiệp: mô hình ML nhẾ cho vi điều khiển, thuật toán phân tích thời gian thực tiết kiệm năng lượng, và phân bổ tài nguyên tối ưu giữa edge và cloud.', en: 'Optimizing TinyML for resource-constrained IoT devices in agriculture and industry: lightweight ML models for microcontrollers, energy-efficient real-time analytics, and optimal resource allocation between edge and cloud.' },
    'research.focus.2.title': { vi: 'Edge Security for IoT', en: 'Edge Security for IoT' },
    'research.focus.2.desc': { vi: 'Xây dựng hệ thống bảo mật tốt hơn: công cụ AI phát hiện mối đe dọa thời gian thực, phương thức xác thực đơn giản cho thiết bị hạn chế tài nguyên, và phương pháp bảo vệ quyền riêng tư sử dụng federated learning và differential privacy.', en: 'Building better security systems: AI tools for real-time threat detection, simple authentication for resource-constrained devices, and privacy protection using federated learning and differential privacy.' },
    'research.focus.3.title': { vi: '5G/6G Networks', en: '5G/6G Networks' },
    'research.focus.3.desc': { vi: 'Nghiên cứu đổi mới hướng edge: khung truyền thông ngữ nghĩa ưu tiên truyền thông tin có ý nghĩa, hệ thống ISAC (Integrated Sensing and Communication), và kiến trúc mạng tối ưu cho edge.', en: 'Edge-oriented research: semantic communication frameworks prioritizing meaningful information, ISAC (Integrated Sensing and Communication) systems, and optimized network architectures for edge computing.' },

    // Members Page - categories
    'members.cat.leaders': { vi: 'Lãnh đạo phòng thí nghiệm', en: 'Leadership' },
    'members.cat.faculty': { vi: 'Cộng tác & Giáo sư hợp tác', en: 'Collaborators' },
    'members.cat.students': { vi: 'Nghiên cứu sinh & Sinh viên', en: 'PhD, MSc & Undergraduate Students' },

    // Members Page - positions (lab roles)
    'members.position.professor': {
        vi: 'Trưởng phòng thí nghiệm',
        en: 'Head of Laboratory'
    },
    'members.position.associate_professor': {
        vi: 'Phó trưởng phòng thí nghiệm',
        en: 'Deputy Head of Laboratory'
    },
    'members.position.assistant_professor': {
        vi: 'Giảng viên / Nhà nghiên cứu hợp tác',
        en: 'Collaborating Faculty / Researcher'
    },
    'members.position.postdoc': {
        vi: 'Nghiên cứu viên sau tiến sĩ (cộng tác)',
        en: 'Postdoctoral Collaborator'
    },
    'members.position.phd_student': {
        vi: 'Nghiên cứu sinh (PhD Student)',
        en: 'PhD Student'
    },
    'members.position.master_student': {
        vi: 'Học viên cao học (MSc Student)',
        en: 'MSc Student'
    },
    'members.position.undergraduate': {
        vi: 'Sinh viên đại học',
        en: 'Undergraduate Student'
    },
    'members.position.research_assistant': {
        vi: 'Trợ lý nghiên cứu',
        en: 'Research Assistant'
    },
    'members.position.collaborator': {
        vi: 'Giáo sư/nhà nghiên cứu cộng tác',
        en: 'Collaborating Professor / Researcher'
    },

    // Members Page - academic titles
    'members.title.prof': { vi: 'GS.', en: 'Prof.' },
    'members.title.assoc_prof': { vi: 'PGS.', en: 'Assoc. Prof.' },
    'members.title.dr': { vi: 'TS.', en: 'Dr.' },
    'members.title.msc': { vi: 'ThS.', en: 'MSc' },
    'members.title.bsc': { vi: 'CN.', en: 'BSc' },

    // Contact Page - missing keys
    'contact.info.address.room': { vi: 'Phòng 06/B15, Tòa B15, Học viện Công nghệ Bưu chính Viễn thông', en: 'Room 06/B15, Building B15, Posts and Telecommunications Institute of Technology' },
    'contact.info.address.street': { vi: '96A Trần Phú, Hà Đông, Hà Nội', en: '96A Tran Phu, Ha Dong, Hanoi' },
    'contact.map.label': { vi: 'Bản đồ: PTIT - 96A Trần Phú, Hà Đông, Hà Nội', en: 'Map: PTIT - 96A Tran Phu, Ha Dong, Hanoi' },
    'research.subtitle': { vi: 'Ba trụ cột chính thúc đẩy đổi mới trong hệ thống mạng thế hệ mới', en: 'Three main pillars driving innovation in next-generation network systems' },
    'projects.subtitle': { vi: 'Các dự án đang thực hiện của ICN Lab', en: 'Ongoing research projects at ICN Lab' },
    'publications.subtitle': { vi: 'Đóng góp mới nhất của ICN Lab cho cộng đồng nghiên cứu', en: 'ICN Lab\'s latest contributions to the research community' },
    'members.subtitle': { vi: 'Gặp gỡ các thành viên của ICN Lab', en: 'Meet the members of ICN Lab' },
    'contact.subtitle': { vi: 'Kết nối với ICN Lab', en: 'Get in touch with ICN Lab' },

};

