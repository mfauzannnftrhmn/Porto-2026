// ─── Personal Info from CV ─────────────────────────────────────
export const personalInfo = {
  name: "Muhammad Fauzan Faturrohman",
  firstName: "Muhammad",
  lastName: "Fauzan",
  role: "Software Engineer, Front-End Developer & UI/UX Designer",
  tagline: "Mahasiswa S1 Teknik Informatika UBP Karawang yang berfokus membangun produk digital modern, intuitif, dan berdampak nyata melalui perpaduan desain grafis, UI/UX, dan clean performant code.",
  email: "fauzanf2808@gmail.com",
  location: "Karawang, Indonesia",
  photo: "/fauzan-profile.jpg",
  linkedin: "https://linkedin.com/in/mfauzannnf",
  instagram: "https://instagram.com/mpauzanf",
};

// ─── Navigation ────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Organization", href: "#organization" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ─── Stats ─────────────────────────────────────────────────────
export const stats = [
  { value: "3.88", label: "IPK / GPA (S1 Informatika)" },
  { value: "500K+", label: "Social Media Reach" },
  { value: "30+", label: "UI/UX App Screens" },
  { value: "10+", label: "Teknologi & Tools" },
];

export const aboutBio = [
  "Saya adalah mahasiswa Program Studi S1 Teknik Informatika di Universitas Buana Perjuangan Karawang, Saya memiliki ketertarikan mendalam pada Software Engineering, Front-End Development, dan User Interface (UI/UX) Design.",
  "Sejak jenjang kejuruan, saya aktif mengasah keterampilan desain grafis, fotografi, videografi, hingga pemrograman web dan mobile. Saya telah merancang antarmuka sistem absensi perusahaan, membangun aplikasi surat-menyurat berbasis framework, hingga menciptakan platform web e-commerce seni.",
  "Saya pribadi berorientasi pada detail, komunikatif, adaptif, terbiasa bekerja dalam tim maupun mandiri, serta selalu antusias mempelajari teknologi baru untuk menghadirkan pengalaman digital terbaik.",
];

// ─── Education ─────────────────────────────────────────────────
export interface Education {
  school: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  highlights: string[];
}

export const educationList: Education[] = [
  {
    school: "Universitas Buana Perjuangan Karawang",
    degree: "S1 Teknik Informatika",
    period: "Agustus 2023 — Sekarang",
    grade: "",
    location: "Karawang, Indonesia",
    highlights: [
      "Fokus pada Software Engineering, UI/UX Design, dan Front-End Web/Mobile Development.",
      "Aktif membangun berbagai projek mandiri dan projek semester terintegrasi framework modern.",
      "Anggota aktif UKM Malaka UBP Karawang di Divisi Jaringan & Komunikasi.",
    ],
  },
  {
    school: "SMKN 1 Cikampek",
    degree: "Teknik Instalasi Tenaga Listrik",
    period: "Juli 2020 — Mei 2023",
    grade: "",
    location: "Karawang, Indonesia",
    highlights: [
      "Certificate Of Competency Assessment: Three Phase Lighting and Power Installation (2023).",
      "Ketua Divisi Sosial Media YouTube di Ekstrakurikuler Jurnalistik SMKN 1 Cikampek (2021 — 2022).",
      "Praktek Kerja Industri (Prakerin) di PT. Meiji Rubber Indonesia.",
    ],
  },
];

// ─── Projects with Images ──────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  year: string;
  description: string;
  bullets: string[];
  image: string;
  themeColor: string;
  themeBadge: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "sintas-absensi",
    title: "Aplikasi Absensi Karyawan PT. Sintas Kurama Perdana",
    subtitle: "UI/UX Design System & Mobile App",
    category: "Corporate UI/UX Design",
    tags: ["UI/UX Design", "Figma", "Wireframing", "Use Case Diagram", "Design System"],
    year: "2025 — 2026",
    description: "Perancangan UI/UX menyeluruh untuk aplikasi absensi karyawan di PT. Sintas Kurama Perdana. Meliputi pembuatan user flow, use case diagram, wireframing, dan desain high-fidelity 15+ halaman interaktif.",
    bullets: [
      "Membuat wireframe dan use case diagram sistem absensi perusahaan",
      "Mendesain UI/UX 15+ halaman lengkap (clock-in/out, rekap presensi, profil, izin/cuti)",
      "Menerapkan desain yang ramah pengguna dengan panduan desain sistem modern",
    ],
    image: "/sintas-absensi.jpg",
    themeColor: "#76C457",
    themeBadge: "bg-[#76C457]/10 text-[#478730] border-[#76C457]/30",
  },
  {
    id: "ecopilah-game",
    title: "EcoPilah — Website Game Memilah Sampah",
    subtitle: "Program KKN 9 UBP Karawang Desa Sarimulya",
    category: "Web & Interactive Game (Project KKN)",
    tags: ["Vue 3", "Vite", "Tailwind CSS", "MediaPipe Vision", "Laravel", "Fullstack"],
    year: "2026",
    description: "Website edukasi interaktif pemilahan sampah berbasis game yang dirancang untuk program KKN 9 UBP Karawang di Desa Sarimulya. Mengedukasi konsep 3R (Reduce, Reuse, Recycle) dan kategori sampah (organik, anorganik, B3) melalui gameplay inovatif berfitur sensor gestur tangan via kamera web (MediaPipe) serta kuis edukasi.",
    bullets: [
      "Membangun antarmuka web interaktif dan responsif menggunakan Vue 3, Vite, Tailwind CSS, dan Laravel",
      "Mengintegrasikan sensor computer vision Google MediaPipe untuk mendeteksi gestur tangan pemain via kamera secara real-time",
      "Menyediakan mode kontrol alternatif keyboard, sistem leaderboard skor tertinggi, serta audio interaktif",
      "Merancang materi edukasi pemilahan sampah dan kuis interaktif sebagai sarana sosialisasi kepada siswa dan masyarakat",
    ],
    image: "/ecopilah.png",
    themeColor: "#10B981",
    themeBadge: "bg-[#10B981]/10 text-[#059669] border-[#10B981]/30",
  },
  {
    id: "snapolla-photobooth",
    title: "Snapolla — Digital Photobooth Web App",
    subtitle: "Creative Digital Tool (Self Project)",
    category: "Creative Web Application (Self Project)",
    tags: ["React", "JavaScript", "HTML5 Canvas", "Webcam API", "Tailwind CSS", "Vercel"],
    year: "2025",
    description: "Ruang digital estetik untuk mengabadikan momen bergaya photobooth instan secara daring. Terinspirasi dari estetika kamera Polaroid dengan sentuhan retro-modern, menyajikan ragam pilihan bingkai photostrip, filter warna dramatis, preview cermin, dan ekspor foto beresolusi tinggi.",
    bullets: [
      "Mengembangkan aplikasi web photobooth dengan akses webcam langsung dan tangkapan multi-frame berwaktu otomatis",
      "Menyediakan variasi filter visual estetik (Dramatic Cool, Dramatic Warm, B&W) dan format template strip foto Polaroid",
      "Mengimplementasikan manipulasi grafis Canvas API untuk penggabungan frame, border kustom, dan unduh foto instan",
      "Mendesain antarmuka playful nan minimalis yang responsif serta mendeploy aplikasi ke platform Vercel",
    ],
    image: "/snapollaweb.png",
    themeColor: "#8B5CF6",
    themeBadge: "bg-[#8B5CF6]/10 text-[#7C3AED] border-[#8B5CF6]/30",
    link: "https://snapolla.vercel.app",
  },
  {
    id: "simpap-mobile-web",
    title: "Simpap — Sistem Informasi & Pengajuan Surat",
    subtitle: "Final Projek Semester 4",
    category: "Mobile & Web Application",
    tags: ["Ionic", "Angular", "Laravel", "REST API", "Fullstack", "Figma"],
    year: "2025",
    description: "Aplikasi mobile dan web terintegrasi untuk layanan persuratan dan administrasi karyawan. Dilengkapi fitur autentikasi, pengajuan surat izin/tugas secara daring, verifikasi berkas, dan histori surat real-time.",
    bullets: [
      "Membangun Front-End aplikasi mobile dengan Ionic + Angular untuk akses karyawan",
      "Mengembangkan Front-End dan portal web menggunakan Framework Laravel",
      "Membuat RESTful API backend untuk autentikasi login, modul pengajuan surat, dan tracking status surat",
      "Merancang UI/UX komprehensif di Figma sebelum tahap implementasi kode",
    ],
    image: "/simpap-project.jpg",
    themeColor: "#06B6D4",
    themeBadge: "bg-[#06B6D4]/10 text-[#0891B2] border-[#06B6D4]/30",
  },
  {
    id: "piye-app-uiux",
    title: "UI/UX Piye APP — Food Delivery Mobile App",
    subtitle: "End-to-End Mobile UI/UX Case Study (Self Project)",
    category: "Mobile UI/UX Design (Self Project)",
    tags: ["UI/UX Design", "Figma", "Mobile App", "Wireframing", "Prototyping", "Design System"],
    year: "2024 — 2025",
    description: "Perancangan UI/UX komprehensif untuk aplikasi pemesanan makanan daring (food delivery). Menghadirkan alur transaksi ringkas, hierarki visual menu yang menggugah selera, navigasi checkout yang intuitif, serta simulasi pelacakan kurir secara real-time.",
    bullets: [
      "Merancang user flow, wireframe, dan high-fidelity mockup untuk 15+ screen aplikasi mobile food delivery di Figma",
      "Mendesain alur lengkap mulai dari onboarding, login, pencarian kuliner, menu favorit, keranjang, hingga status pengantaran",
      "Menerapkan design system terstruktur dengan palet warna sage-teal yang segar, tipografi proporsional, dan komponen reusable",
      "Membangun prototipe interaktif dengan micro-interactions untuk menguji kenyamanan navigasi dan efisiensi alur pemesanan",
    ],
    image: "/piyeapp.png",
    themeColor: "#FF9E2C",
    themeBadge: "bg-[#FF9E2C]/10 text-[#D97706] border-[#FF9E2C]/30",
  },
  {
    id: "azzaleart-website",
    title: "Azalleart — Penyewaan Kostum Dan Jasa Makeup",
    subtitle: "Final Projek Semester 3",
    category: "Web Development",
    tags: ["PHP Native", "HTML5", "CSS3", "JavaScript", "MySQL", "ERD", "UML"],
    year: "2024 — 2025",
    description: "Website galeri dan etalase karya seni digital. Mengembangkan fitur katalog interaktif, perancangan basis data relasional (ERD), diagram analisis sistem UML, dan antarmuka responsif.",
    bullets: [
      "Analisis dan pemodelan sistem menggunakan Use Case, Class Diagram, dan Activity Diagram",
      "Mengembangkan fitur website menggunakan PHP Native, HTML5, CSS3, dan JavaScript interaktif",
      "Merancang skema basis data dan diagram ERD (Entity Relationship Diagram)",
      "Mendesain antarmuka website yang memikat di Figma dengan nuansa galeri modern",
    ],
    image: "/azzaleart-web.jpg",
    themeColor: "#FF6B8B",
    themeBadge: "bg-[#FF6B8B]/10 text-[#E11D48] border-[#FF6B8B]/30",
  },
];

// ─── Work & Professional Experiences with Images ───────────────
export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Work" | "Internship" | "Project-Based";
  description: string;
  achievements: string[];
  image: string;
  images?: string[];
  badgeColor: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: "sintas-kurama",
    company: "PT. Sintas Kurama Perdana",
    role: "UI/UX Desainer",
    period: "Oktober 2025 — Januari 2026",
    location: "Karawang, Indonesia",
    type: "Work",
    description: "Bertanggung jawab atas perancangan antarmuka dan user experience aplikasi absensi internal karyawan perusahaan untuk meningkatkan efisiensi pencatatan kehadiran.",
    achievements: [
      "Membuat Wireframe desain untuk Aplikasi absensi di PT. Sintas Kurama Perdana",
      "Membuat Usecase diagram Aplikasi Absensi untuk memetakan alur interaksi pengguna",
      "Mendesain UI/UX Desain Aplikasi Absensi 15+ Halaman (dashboard, clock-in, history, cuti)",
    ],
    image: "/sintas1.jpeg",
    images: ["/sintas1.jpeg", "/sintas2.jpeg", "/sintas3.jpeg", "/sintas-absensi.jpg"],
    badgeColor: "bg-[#76C457]/15 text-[#478730] border-[#76C457]/40",
  },
  {
    id: "simpap-role",
    company: "Simpap (Final Projek Semester 4)",
    role: "Mobile Developer & UI/UX Desainer",
    period: "Maret 2025 — Juni 2025",
    location: "Karawang, Indonesia",
    type: "Project-Based",
    description: "Mengembangkan aplikasi mobile dan web surat-menyurat perusahaan untuk mempermudah birokrasi dan administrasi karyawan.",
    achievements: [
      "Membuat Front End mobile dengan Ionic + Angular untuk akses karyawan secara responsif",
      "Membuat Front End website manajemen surat menggunakan Framework Laravel",
      "Membuat backend API untuk login, pengajuan surat, verifikasi, dan histori surat",
      "Memahami dan mengimplementasikan konsep Pemrograman Berbasis Framework secara terstruktur",
    ],
    image: "/simpap-project.jpg",
    images: ["/simpap1.jpeg", "/simpap2.jpeg", "/simpap3.jpeg", "/simpap-project.jpg"],
    badgeColor: "bg-[#06B6D4]/15 text-[#0891B2] border-[#06B6D4]/40",
  },
  {
    id: "azzaleart-role",
    company: "Azzaleart Website (Final Projek Semester 3)",
    role: "Web Developer & UI/UX Designer",
    period: "Oktober 2024 — Januari 2025",
    location: "Karawang, Indonesia",
    type: "Project-Based",
    description: "Perancangan dan pengembangan aplikasi web galeri & e-commerce karya seni digital dari tahap analisis hingga deployment prototipe.",
    achievements: [
      "Membuat analisis dan desain sistem: use case diagram, class diagram, dan activity diagram",
      "Mengembangkan fitur website menggunakan PHP Native, HTML, CSS, dan Javascript",
      "Membuat desain basis data relasional dan diagram ERD (Entity Relationship Diagram)",
      "Mendesain UI/UX website dengan Figma berstandar responsif",
    ],
    image: "/azzaleart-web.jpg",
    images: ["/azzaleart-web.jpg"],
    badgeColor: "bg-[#FF6B8B]/15 text-[#E11D48] border-[#FF6B8B]/40",
  },
  {
    id: "meiji-rubber",
    company: "PT. Meiji Rubber Indonesia",
    role: "Quality Control & Finishing Rubber Intern",
    period: "April 2022 — Juli 2022",
    location: "Karawang, Indonesia",
    type: "Internship",
    description: "Praktik kerja industri pada lini manufaktur komponen karet otomotif presisi, menerapkan kontrol kualitas berstandar Jepang 5S.",
    achievements: [
      "Mempelajari spesifikasi material dan standar rubber part otomotif di PT. Meiji Rubber Indonesia",
      "Bekerja teliti dalam membersihkan dan memeriksa rubber part agar tidak cacat / Not Justified (NJ)",
      "Melakukan quality control pada rubber part yang siap dikirim ke kantor pusat di Cikarang",
      "Menerapkan prinsip 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) di lingkungan kerja pabrik",
    ],
    image: "",
    images: [],
    badgeColor: "bg-[#FF9E2C]/15 text-[#D97706] border-[#FF9E2C]/40",
  },
];

// ─── Organization & Committee Experiences ──────────────────────
export interface OrgExperience {
  organization: string;
  role: string;
  period: string;
  category: "Organisasi" | "Kepanitiaan";
  bullets: string[];
  image?: string;
  images?: string[];
}

export const orgExperiences: OrgExperience[] = [
  {
    organization: "KKN 9 UBP Karawang Desa Sarimulya",
    role: "Divisi Publikasi, Desain & Dokumentasi",
    period: "Juli 2026 — Agustus 2026",
    category: "Organisasi",
    bullets: [
      "Memproduksi dan mempublikasikan kegiatan KKN Desa Sarimulya ke berbagai media sosial",
      "Bertanggung jawab mendokumentasikan foto dan video di seluruh rangkaian kegiatan KKN",
      "Mengedit postingan informasi feed/story Instagram dan memproduksi video TikTok kreatif",
      "Mencapai 500K+ insight postingan Instagram dalam kurun waktu 40 hari",
    ],
    image: "/kkn1.png",
    images: ["/kkn1.png", "/kkn2.png", "/kkn3.png", "/kkn4.png", "/kkn5.png", "/kkn6.png", "/kkn7.png", "/kkn8.png", "/kkn9.png"],
  },
  {
    organization: "Malaka UBP Karawang",
    role: "Divisi Jaringan & Komunikasi",
    period: "Oktober 2025 — Sekarang",
    category: "Organisasi",
    bullets: [
      "Memproduksi dan mempublish kegiatan Malaka UBP Karawang ke media sosial",
      "Mendokumentasikan kegiatan serta membuat poster informasi untuk feed/story Instagram",
      "Mengkampanyekan edukasi bahaya narkotika di lingkungan kampus dan masyarakat",
      "Menyusun content plan terencana untuk UKM Malaka UBP Karawang",
    ],
    image: "/malaka1.png",
    images: ["/malaka1.png", "/malaka2.png", "/malaka3.png", "/malaka4.png", "/malaka5.jpg"],
  },
  {
    organization: "Jurnalistik SMKN 1 Cikampek",
    role: "Ketua Divisi Sosial Media YouTube, Tim Editor & Reporter",
    period: "2021 — 2022",
    category: "Organisasi",
    bullets: [
      "Memimpin produksi dan publikasi konten video liputan sekolah ke channel YouTube",
      "Mengedit video kegiatan sekolah dan mendokumentasikan berbagai acara resmi",
      "Mendesain poster informasi dan konten visual feed Instagram jurnalistik",
      "Mendalami teknik fotografi dan videografi profesional sesuai standar operasional",
    ],
    image: "/jurnalistik.png",
    images: ["/jurnalistik.png"],
  },
  {
    organization: "Seminar 'The Art Of Self Control' Psikologi X Malaka",
    role: "Operator Teknis",
    period: "Mei 2026",
    category: "Kepanitiaan",
    bullets: [
      "Bertanggung jawab sebagai operator teknis selama pelaksanaan seminar",
      "Mengelola presentasi, tata suara, dan video display agar acara berjalan tanpa hambatan",
    ],
    image: "/malaka2.png",
    images: ["/malaka2.png", "/seminarpsi.png", "/seminarpsi1.png"],
  },
  {
    organization: "Mustang Malaka 2025",
    role: "Publikasi, Desain & Dokumentasi",
    period: "Desember 2025",
    category: "Kepanitiaan",
    bullets: [
      "Membuat poster informasi dan materi visual promosi acara Mustang Malaka 2025",
      "Mendokumentasikan foto dan video sepanjang acara serta mengelola aset publikasi",
    ],
    image: "/malaka4.png",
    images: ["/malaka4.png", "/mustang.png"],
  },
  {
    organization: "Sosialisasi MBKM FIK UBP Karawang",
    role: "Social Media Designer",
    period: "November 2023 — Desember 2023",
    category: "Kepanitiaan",
    bullets: [
      "Mendesain rangkaian poster dan banner media sosial untuk sosialisasi program MBKM",
      "Menyukseskan kegiatan hingga dihadiri oleh lebih dari 200+ mahasiswa aktif FIK",
    ],
    image: "/mbkm1.png",
    images: ["/mbkm1.png", "/mbkm2.png"],
  },
  {
    organization: "Peringatan Sumpah Pemuda SMKN 1 Cikampek",
    role: "Reporter & Editor",
    period: "Oktober 2022",
    category: "Kepanitiaan",
    bullets: [
      "Mendokumentasikan dan memproduksi video liputan acara Sumpah Pemuda",
      "Membuat poster informasi/pamflet publikasi acara dan mengawal kelancaran teknis kegiatan",
    ],
  },
];

// ─── Skills ────────────────────────────────────────────────────
export const skillCategories = [
  {
    name: "Front-End & Mobile",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Ionic", "Angular", "Tailwind CSS", "HTML5 / CSS3"],
    color: "#76C457",
  },
  {
    name: "Back-End & Database",
    skills: ["PHP", "Laravel", "Python", "RESTful API", "MySQL", "Database Design / ERD"],
    color: "#06B6D4",
  },
  {
    name: "UI/UX & Creative Tools",
    skills: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Adobe Photoshop", "Canva", "Capcut"],
    color: "#FF6B8B",
  },
  {
    name: "Multimedia & Soft Skills",
    skills: ["Fotografi & Videografi", "Kamera DSLR/Mirrorless", "Manajemen Waktu", "Berpikir Kritis & Logis", "Team Collaboration"],
    color: "#8B5CF6",
  },
];



// ─── Social Links ──────────────────────────────────────
export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/mfauzannnf" },
  { label: "Instagram", href: "https://instagram.com/mpauzanf" },
  { label: "Email", href: "mailto:fauzanf2808@gmail.com" },
];
