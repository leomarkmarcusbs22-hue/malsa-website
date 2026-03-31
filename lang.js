// ═══ MALSA Corporation — Bilingual System (EN ↔ BM) ═══

const T = {
  // Nav
  nav_home:    { en: "Home",           bm: "Utama" },
  nav_about:   { en: "About Us",       bm: "Tentang Kami" },
  nav_ops:     { en: "Operations",     bm: "Operasi" },
  nav_sustain: { en: "Sustainability", bm: "Kelestarian" },
  nav_contact: { en: "Contact",        bm: "Hubungi" },

  // Hero
  hero_eyebrow:  { en: "Sandakan, Sabah · Malaysia",    bm: "Sandakan, Sabah · Malaysia" },
  hero_title:    { en: "Rooted in Sabah,<br>Growing with Purpose", bm: "Berakar di Sabah,<br>Berkembang dengan Tujuan" },
  hero_subtitle: { en: "MALSA Corporation Sdn. Bhd. is an upstream palm oil company based in Sandakan, Sabah — engaged in oil palm cultivation, estate management, and palm oil milling from our operations at Man Choon Estate.", bm: "MALSA Corporation Sdn. Bhd. adalah syarikat kelapa sawit huluan yang berpusat di Sandakan, Sabah — terlibat dalam penanaman kelapa sawit, pengurusan estet, dan pengilangan minyak sawit dari operasi kami di Man Choon Estate." },
  hero_cta1:     { en: "Discover Our Story",  bm: "Kenali Kami" },
  hero_cta2:     { en: "Get in Touch",         bm: "Hubungi Kami" },
  hero_scroll:   { en: "Scroll",               bm: "Tatal" },

  // Stats
  stat_sites:   { en: "Collecting Sites",   bm: "Pusat Pengumpulan" },
  stat_ffb:     { en: "MT FFB Processed",   bm: "MT BTS Diproses" },
  stat_trace:   { en: "% FFB Traceability", bm: "% Kebolehkesanan BTS" },
  stat_workers: { en: "Employees",          bm: "Pekerja" },

  // About preview
  about_eyebrow: { en: "Who We Are",  bm: "Siapa Kami" },
  about_title:   { en: "Upstream Palm Oil Excellence from Sabah", bm: "Kecemerlangan Kelapa Sawit Huluan dari Sabah" },
  about_p1:      { en: "MALSA Corporation Sdn. Bhd. is a Malaysia-based plantation company principally engaged in upstream palm oil activities. Headquartered in Sandakan, Sabah, our core business comprises oil palm cultivation, estate management, harvesting operations, agronomic management, and palm oil milling at our facility in Man Choon Estate along Jalan Beluran.", bm: "MALSA Corporation Sdn. Bhd. adalah syarikat perladangan yang berpangkalan di Malaysia, terlibat terutamanya dalam aktiviti kelapa sawit huluan. Beribu pejabat di Sandakan, Sabah, perniagaan teras kami merangkumi penanaman kelapa sawit, pengurusan estet, operasi penuaian, pengurusan agronomik, dan pengilangan minyak sawit di kemudahan kami di Man Choon Estate, Jalan Beluran." },
  about_p2:      { en: "Our mill — Malsa POM (MPOB License No. 500266-704000) — processes FFB sourced from our own plantations, third-party estates, dealers, and smallholders, achieving 100% traceability across all supply sources.", bm: "Kilang kami — Malsa POM (Lesen MPOB No. 500266-704000) — memproses BTS yang diperoleh daripada ladang sendiri, estet pihak ketiga, peniaga, dan pekebun kecil, mencapai 100% kebolehkesanan merentasi semua sumber bekalan." },
  about_link:    { en: "Learn more about us", bm: "Ketahui lebih lanjut" },

  // Sites
  sites_title:    { en: "Our FFB Collecting Sites",  bm: "Pusat Pengumpulan BTS Kami" },
  sites_subtitle: { en: "Operating across three strategic collecting sites in the Labuk-Sugut and Beluran districts of Sabah, we manage FFB purchasing, transportation, and delivery to our mill with efficiency and full traceability.", bm: "Beroperasi di tiga pusat pengumpulan strategik di daerah Labuk-Sugut dan Beluran, Sabah, kami menguruskan pembelian, pengangkutan, dan penghantaran BTS ke kilang kami dengan cekap dan kebolehkesanan penuh." },
  site_label:     { en: "Collecting Site",  bm: "Pusat Pengumpulan" },
  site1_desc:     { en: "Primary collecting site with weighbridge facilities, loading ramp, and dedicated transport fleet serving estates and smallholders in the district.", bm: "Pusat pengumpulan utama dengan kemudahan jambatan timbang, jeti pemuatan, dan armada pengangkutan khusus melayani estet dan pekebun kecil di daerah ini." },
  site2_desc:     { en: "Strategic site equipped with modern weighing systems and efficient loading infrastructure, serving surrounding estates and smallholders.", bm: "Lokasi strategik dilengkapi sistem timbangan moden dan infrastruktur pemuatan yang cekap, melayani estet dan pekebun kecil sekitar." },
  site3_desc:     { en: "Our largest collecting operation by FFB volume, handling comprehensive purchasing and transport services with full support infrastructure.", bm: "Operasi pengumpulan terbesar kami mengikut jumlah BTS, mengendalikan perkhidmatan pembelian dan pengangkutan menyeluruh dengan infrastruktur sokongan penuh." },
  site_details:   { en: "View Details",     bm: "Lihat Butiran" },

  // Values
  values_title:    { en: "Why Choose MALSA",  bm: "Mengapa Pilih MALSA" },
  values_subtitle: { en: "Quality, traceability, and community in the Sabah palm oil industry.", bm: "Kualiti, kebolehkesanan, dan komuniti dalam industri kelapa sawit Sabah." },
  val1_title: { en: "MPOB Licensed",          bm: "Berlesen MPOB" },
  val1_desc:  { en: "Fully licensed palm oil mill (MPOB No. 500266-704000) with rigorous quality control at every stage of operations.", bm: "Kilang minyak sawit berlesen penuh (MPOB No. 500266-704000) dengan kawalan kualiti ketat di setiap peringkat operasi." },
  val2_title: { en: "100% Traceable",          bm: "100% Boleh Dikesan" },
  val2_desc:  { en: "Full traceability to plantation level across all FFB sources — own estates, third-party plantations, dealers, and smallholders.", bm: "Kebolehkesanan penuh ke peringkat ladang merentasi semua sumber BTS — estet sendiri, ladang pihak ketiga, peniaga, dan pekebun kecil." },
  val3_title: { en: "Community First",          bm: "Komuniti Diutamakan" },
  val3_desc:  { en: "Empowering local communities and smallholders through fair partnerships, employment, and skills development in Sabah.", bm: "Memperkasa komuniti tempatan dan pekebun kecil melalui perkongsian adil, pekerjaan, dan pembangunan kemahiran di Sabah." },
  val4_title: { en: "Trusted Supply Chain",     bm: "Rantaian Bekalan Dipercayai" },
  val4_desc:  { en: "Direct and indirect supplier to leading refiners including IOI Corporation and Mewah Group, ensuring reliable market access.", bm: "Pembekal langsung dan tidak langsung kepada penapis terkemuka termasuk IOI Corporation dan Kumpulan Mewah, memastikan akses pasaran yang boleh dipercayai." },

  // Partners
  partners_label: { en: "Trusted by Industry Leaders", bm: "Dipercayai oleh Peneraju Industri" },
  partner_ioi:    { en: "Edible Oils — Sandakan",      bm: "Minyak Makan — Sandakan" },
  partner_mewah:  { en: "Mewah Datu — Lahad Datu",     bm: "Mewah Datu — Lahad Datu" },
  partner_mpob:   { en: "Licensed & Regulated",         bm: "Berlesen & Dikawal Selia" },

  // CTA
  cta_title: { en: "Interested in Working with Us?",  bm: "Berminat untuk Bekerjasama?" },
  cta_text:  { en: "Whether you're a supplier, dealer, smallholder, or potential partner — do not hesitate to reach out.", bm: "Sama ada anda pembekal, peniaga, pekebun kecil, atau rakan kongsi berpotensi — jangan teragak-agak untuk menghubungi kami." },
  cta_btn:   { en: "Contact Us Today",  bm: "Hubungi Kami Hari Ini" },

  // Footer
  footer_desc:    { en: "Upstream palm oil cultivation, estate management, and FFB milling operations based in Sandakan, Sabah, Malaysia.", bm: "Penanaman kelapa sawit huluan, pengurusan estet, dan operasi pengilangan BTS berpusat di Sandakan, Sabah, Malaysia." },
  footer_links:   { en: "Quick Links",     bm: "Pautan Pantas" },
  footer_contact: { en: "Contact Us",      bm: "Hubungi Kami" },
  footer_mill:    { en: "<strong>Mill:</strong> Man Choon Estate, KM 7,<br>Jalan Beluran, Off KM58 Jalan Labuk,<br>Labuk Sugut, Sandakan, Sabah", bm: "<strong>Kilang:</strong> Man Choon Estate, KM 7,<br>Jalan Beluran, Off KM58 Jalan Labuk,<br>Labuk Sugut, Sandakan, Sabah" },
  footer_rights:  { en: "All rights reserved.", bm: "Hak cipta terpelihara." },
  footer_dev:     { en: "Developed by",    bm: "Dibangunkan oleh" },

  // About page - core values
  values_core_title: { en: "Our Core Values", bm: "Nilai Teras Kami" },
  values_core_sub: { en: "The principles that guide every decision we make \u2014 from the field to the boardroom.", bm: "Prinsip yang membimbing setiap keputusan kami \u2014 dari ladang ke bilik mesyuarat." },
  core_integrity: { en: "Integrity", bm: "Integriti" },
  core_integrity_d: { en: "We conduct our business with honesty and transparency, honouring our commitments to partners, employees, and the communities we serve.", bm: "Kami menjalankan perniagaan dengan kejujuran dan ketelusan, menghormati komitmen kami kepada rakan kongsi, pekerja, dan komuniti yang kami layani." },
  core_efficiency: { en: "Efficiency", bm: "Kecekapan" },
  core_efficiency_d: { en: "From agronomic practices to mill operations and budget management, we work to improve productivity and reduce waste at every level.", bm: "Dari amalan agronomik hingga operasi kilang dan pengurusan bajet, kami berusaha meningkatkan produktiviti dan mengurangkan pembaziran di setiap peringkat." },
  core_partnership: { en: "Partnership", bm: "Perkongsian" },
  core_partnership_d: { en: "We value strong relationships \u2014 with our workers, smallholders, dealers, and downstream partners like IOI and Mewah who depend on our reliable supply.", bm: "Kami menghargai hubungan yang kukuh \u2014 dengan pekerja, pekebun kecil, peniaga, dan rakan hiliran seperti IOI dan Mewah yang bergantung pada bekalan kami yang boleh dipercayai." },
  core_safety: { en: "Safety", bm: "Keselamatan" },
  core_safety_d: { en: "The health and safety of our workforce is a top priority. We enforce strict safety protocols across all estate and mill operations.", bm: "Kesihatan dan keselamatan tenaga kerja kami adalah keutamaan utama. Kami menguatkuasakan protokol keselamatan yang ketat di semua operasi estet dan kilang." },
  core_sustain: { en: "Sustainability", bm: "Kelestarian" },
  core_sustain_d: { en: "We are committed to balancing economic performance with environmental stewardship, ensuring our operations protect the natural heritage of Sabah.", bm: "Kami komited untuk mengimbangi prestasi ekonomi dengan pengurusan alam sekitar, memastikan operasi kami melindungi warisan semula jadi Sabah." },
  core_growth: { en: "Growth", bm: "Pertumbuhan" },
  core_growth_d: { en: "We invest in our people, our infrastructure, and our processes to ensure MALSA Corporation continues to grow and create value for generations to come.", bm: "Kami melabur dalam pekerja, infrastruktur, dan proses kami untuk memastikan MALSA Corporation terus berkembang dan mencipta nilai untuk generasi akan datang." },
  leadership_title: { en: "Leadership", bm: "Kepimpinan" },
  leadership_sub: { en: "The people driving MALSA Corporation forward.", bm: "Individu yang memacu MALSA Corporation ke hadapan." },
  gallery_title: { en: "Gallery", bm: "Galeri" },
  gallery_sub: { en: "A glimpse of our operations and people.", bm: "Sekilas pandang operasi dan pekerja kami." },

  // Operations page extras
  mill_details: { en: "Mill Details", bm: "Butiran Kilang" },
  downstream_title: { en: "Downstream Partners", bm: "Rakan Hiliran" },
  downstream_sub: { en: "Our CPO and palm kernel supply downstream refiners and processors across Sabah.", bm: "CPO dan isirong sawit kami membekalkan penapis dan pemproses hiliran di seluruh Sabah." },
  ds_ioi: { en: "Edible Oils Division, Sandakan", bm: "Bahagian Minyak Makan, Sandakan" },
  ds_ioi_type: { en: "Direct \u0026 Indirect Supply", bm: "Bekalan Langsung \u0026 Tidak Langsung" },
  ds_mewah: { en: "Mewah Datu Sdn Bhd, Lahad Datu", bm: "Mewah Datu Sdn Bhd, Lahad Datu" },
  ds_mewah_type: { en: "Direct Supply", bm: "Bekalan Langsung" },

  // Sustainability extras
  reg_title: { en: "Regulatory Compliance", bm: "Pematuhan Peraturan" },
  reg_mpob: { en: "MPOB", bm: "MPOB" },
  reg_mpob_d: { en: "Licensed under Malaysian Palm Oil Board \u2014 Mill License No. 500266-704000", bm: "Berlesen di bawah Lembaga Minyak Sawit Malaysia \u2014 Lesen Kilang No. 500266-704000" },
  reg_ttp: { en: "TTP Verified", bm: "TTP Disahkan" },
  reg_ttp_d: { en: "Traceability to Plantation independently assessed by downstream partners", bm: "Kebolehkesanan ke Ladang dinilai secara bebas oleh rakan hiliran" },
  reg_mspo: { en: "MSPO", bm: "MSPO" },
  reg_mspo_d: { en: "Malaysian Sustainable Palm Oil compliance", bm: "Pematuhan Minyak Sawit Mampan Malaysia" },

  // Contact extras
  contact_form_sub: { en: "We\u0027ll get back to you as soon as possible.", bm: "Kami akan menghubungi anda secepat mungkin." },

  // Nav - careers
  nav_careers: { en: "Careers", bm: "Kerjaya" },

  // News section (homepage)
  news_title: { en: "Latest Updates", bm: "Berita Terkini" },
  news_subtitle: { en: "News and developments from MALSA Corporation.", bm: "Berita dan perkembangan daripada MALSA Corporation." },
  news_cat_ops: { en: "Operations", bm: "Operasi" },
  news_cat_sustain: { en: "Sustainability", bm: "Kelestarian" },
  news_cat_community: { en: "Community", bm: "Komuniti" },
  news1_title: { en: "FFB Collection Exceeds Annual Target", bm: "Pengumpulan BTS Melebihi Sasaran Tahunan" },
  news1_desc: { en: "Our three collecting sites recorded strong performance this financial year, with total FFB intake surpassing projected volumes across Mile 21, Mile 12, and Matanggar.", bm: "Tiga pusat pengumpulan kami mencatatkan prestasi kukuh tahun kewangan ini, dengan jumlah pengambilan BTS melebihi unjuran di Batu 21, Batu 12, dan Matanggar." },
  news2_title: { en: "MSPO Compliance Progress Update", bm: "Kemaskini Kemajuan Pematuhan MSPO" },
  news2_desc: { en: "MALSA continues to work towards full MSPO certification, with ongoing improvements to our environmental management and traceability systems across all operations.", bm: "MALSA terus berusaha ke arah pensijilan MSPO penuh, dengan penambahbaikan berterusan terhadap sistem pengurusan alam sekitar dan kebolehkesanan di semua operasi." },
  news3_title: { en: "Community Engagement in Labuk-Sugut", bm: "Penglibatan Komuniti di Labuk-Sugut" },
  news3_desc: { en: "MALSA participated in local community programmes in the Labuk-Sugut district, reinforcing our commitment to supporting smallholders and local residents in Sabah.", bm: "MALSA menyertai program komuniti tempatan di daerah Labuk-Sugut, mengukuhkan komitmen kami dalam menyokong pekebun kecil dan penduduk tempatan di Sabah." },

  // Careers page
  careers_eyebrow: { en: "Join Our Team", bm: "Sertai Pasukan Kami" },
  careers_hero_title: { en: "Careers at MALSA", bm: "Kerjaya di MALSA" },
  careers_hero_sub: { en: "Build a career in Sabah\u0027s palm oil industry with a company that values its people.", bm: "Bina kerjaya dalam industri kelapa sawit Sabah bersama syarikat yang menghargai pekerjanya." },
  careers_intro_title: { en: "Work with Us", bm: "Bekerja Bersama Kami" },
  careers_intro_p1: { en: "MALSA Corporation is one of the key employers in the Labuk-Sugut and Beluran districts of Sandakan, Sabah. We offer stable employment in plantation management, mill operations, transport and logistics, administration, and field operations.", bm: "MALSA Corporation adalah salah satu majikan utama di daerah Labuk-Sugut dan Beluran, Sandakan, Sabah. Kami menawarkan pekerjaan stabil dalam pengurusan ladang, operasi kilang, pengangkutan dan logistik, pentadbiran, dan operasi lapangan." },
  careers_intro_p2: { en: "We provide housing quarters for estate-based staff, competitive wages in line with Malaysian labour standards, and a working environment that prioritises safety and professional development.", bm: "Kami menyediakan kuarters perumahan untuk kakitangan estet, gaji kompetitif selaras dengan piawaian buruh Malaysia, dan persekitaran kerja yang mengutamakan keselamatan dan pembangunan profesional." },
  careers_intro_p3: { en: "Whether you are an experienced plantation professional or starting your career in the agricultural sector, we welcome applications from motivated individuals who share our commitment to quality and responsibility.", bm: "Sama ada anda seorang profesional perladangan berpengalaman atau baru memulakan kerjaya dalam sektor pertanian, kami mengalu-alukan permohonan daripada individu bermotivasi yang berkongsi komitmen kami terhadap kualiti dan tanggungjawab." },
  careers_areas_title: { en: "Areas We Hire", bm: "Bidang Pengambilan" },
  careers_areas_sub: { en: "Opportunities across our plantation, mill, and corporate operations.", bm: "Peluang di seluruh operasi perladangan, kilang, dan korporat kami." },
  area_plantation: { en: "Plantation \u0026 Estate", bm: "Perladangan \u0026 Estet" },
  area_plantation_d: { en: "Field supervisors, estate assistants, harvesters, agronomists, and general estate workers across our oil palm operations.", bm: "Penyelia lapangan, pembantu estet, penuai, ahli agronomi, dan pekerja am estet di seluruh operasi kelapa sawit kami." },
  area_mill: { en: "Mill Operations", bm: "Operasi Kilang" },
  area_mill_d: { en: "Mill operators, process technicians, quality control staff, and maintenance engineers at Malsa POM in Man Choon Estate.", bm: "Operator kilang, juruteknik proses, kakitangan kawalan kualiti, dan jurutera penyelenggaraan di Malsa POM di Man Choon Estate." },
  area_transport: { en: "Transport \u0026 Logistics", bm: "Pengangkutan \u0026 Logistik" },
  area_transport_d: { en: "Drivers, logistics coordinators, and weighbridge operators supporting FFB collection and delivery from our three sites to the mill.", bm: "Pemandu, penyelaras logistik, dan operator jambatan timbang yang menyokong pengumpulan dan penghantaran BTS dari tiga pusat kami ke kilang." },
  area_admin: { en: "Administration \u0026 Finance", bm: "Pentadbiran \u0026 Kewangan" },
  area_admin_d: { en: "Administrative staff, accounts personnel, HR officers, and budget management roles at our Sandakan head office.", bm: "Kakitangan pentadbiran, pegawai akaun, pegawai HR, dan peranan pengurusan bajet di ibu pejabat Sandakan kami." },
  area_safety: { en: "Safety \u0026 Compliance", bm: "Keselamatan \u0026 Pematuhan" },
  area_safety_d: { en: "Safety officers, environmental compliance personnel, and MSPO coordinators ensuring our operations meet all regulatory standards.", bm: "Pegawai keselamatan, kakitangan pematuhan alam sekitar, dan penyelaras MSPO memastikan operasi kami memenuhi semua piawaian peraturan." },
  area_intern: { en: "Internship \u0026 Training", bm: "Latihan Industri \u0026 Latihan" },
  area_intern_d: { en: "Internship placements for students in agriculture, engineering, and business disciplines from local and national institutions.", bm: "Penempatan latihan industri untuk pelajar dalam bidang pertanian, kejuruteraan, dan perniagaan dari institusi tempatan dan kebangsaan." },
  careers_apply_title: { en: "How to Apply", bm: "Cara Memohon" },
  careers_apply_sub: { en: "Interested candidates may submit their application by post or email.", bm: "Calon yang berminat boleh menghantar permohonan melalui pos atau emel." },
  apply_step1_title: { en: "Prepare Documents", bm: "Sediakan Dokumen" },
  apply_step1_desc: { en: "Resume / CV, copies of academic certificates, IC copy, and a recent passport-sized photograph.", bm: "Resume / CV, salinan sijil akademik, salinan IC, dan gambar berukuran pasport terkini." },
  apply_step2_title: { en: "Send Application", bm: "Hantar Permohonan" },
  apply_step2_desc: { en: "Email or post your documents to our head office:", bm: "Emel atau poskan dokumen anda ke ibu pejabat kami:" },
  apply_step3_title: { en: "Selection Process", bm: "Proses Pemilihan" },
  apply_step3_desc: { en: "Shortlisted candidates will be contacted for an interview. Only successful applicants will be notified.", bm: "Calon yang disenarai pendek akan dihubungi untuk temu duga. Hanya pemohon yang berjaya akan dimaklumkan." },

  // About page
  about_hero_title: { en: "About MALSA Corporation", bm: "Tentang MALSA Corporation" },
  about_hero_sub:   { en: "Our story, our people, our commitment to Sabah's palm oil industry.", bm: "Cerita kami, pekerja kami, komitmen kami terhadap industri kelapa sawit Sabah." },
  about_story_title: { en: "Our Story", bm: "Cerita Kami" },
  about_story_p1:   { en: "MALSA Corporation Sdn. Bhd. is a Malaysia-based plantation company principally engaged in upstream palm oil activities, with operations centred in Sandakan, Sabah. Our core business covers the full cycle of oil palm cultivation — from field upkeep and crop husbandry to harvesting, agronomic management, and yield optimisation.", bm: "MALSA Corporation Sdn. Bhd. adalah syarikat perladangan yang berpangkalan di Malaysia, terlibat dalam aktiviti kelapa sawit huluan, dengan operasi berpusat di Sandakan, Sabah. Perniagaan teras kami merangkumi kitaran penuh penanaman kelapa sawit — daripada penjagaan ladang dan pengurusan tanaman kepada penuaian, pengurusan agronomik, dan pengoptimuman hasil." },
  about_story_p2:   { en: "Beyond cultivation, we operate our own palm oil mill — Malsa POM — at Man Choon Estate, KM 7 Jalan Beluran, processing FFB from our estates, third-party plantations, dealers, and smallholders. This vertical integration from field to mill ensures quality control and supply reliability.", bm: "Selain penanaman, kami mengendalikan kilang minyak sawit sendiri — Malsa POM — di Man Choon Estate, KM 7 Jalan Beluran, memproses BTS daripada estet kami, ladang pihak ketiga, peniaga, dan pekebun kecil. Integrasi menegak dari ladang ke kilang ini memastikan kawalan kualiti dan kebolehpercayaan bekalan." },
  about_vision_title: { en: "Our Vision", bm: "Visi Kami" },
  about_vision_text:  { en: "To be a leading and sustainable upstream palm oil company in Sabah, recognised for operational excellence, community partnership, and environmental responsibility.", bm: "Menjadi syarikat kelapa sawit huluan yang terkemuka dan mampan di Sabah, diiktiraf untuk kecemerlangan operasi, perkongsian komuniti, dan tanggungjawab alam sekitar." },
  about_mission_title: { en: "Our Mission", bm: "Misi Kami" },
  about_mission_text:  { en: "To cultivate and process palm oil with integrity, maximise yields through best agricultural practices, maintain full traceability, support local communities, and deliver reliable supply to our downstream partners.", bm: "Menanam dan memproses minyak sawit dengan integriti, memaksimumkan hasil melalui amalan pertanian terbaik, mengekalkan kebolehkesanan penuh, menyokong komuniti tempatan, dan menyampaikan bekalan yang boleh dipercayai kepada rakan hiliran kami." },

  // Operations page
  ops_hero_title: { en: "Our Operations", bm: "Operasi Kami" },
  ops_hero_sub:   { en: "From estate to mill — an integrated upstream palm oil operation in Sabah.", bm: "Dari estet ke kilang — operasi kelapa sawit huluan bersepadu di Sabah." },
  ops_mill_title: { en: "Malsa Palm Oil Mill (POM)", bm: "Kilang Minyak Sawit Malsa (POM)" },
  ops_mill_desc:  { en: "Our palm oil mill at Man Choon Estate processes fresh fruit bunches into crude palm oil (CPO) and palm kernel. Licensed under MPOB (No. 500266-704000), the mill receives FFB from multiple sources with full traceability.", bm: "Kilang minyak sawit kami di Man Choon Estate memproses buah tandan segar menjadi minyak sawit mentah (CPO) dan isirong sawit. Berlesen di bawah MPOB (No. 500266-704000), kilang menerima BTS daripada pelbagai sumber dengan kebolehkesanan penuh." },
  ops_collect_title: { en: "FFB Collecting Operations", bm: "Operasi Pengumpulan BTS" },
  ops_collect_desc:  { en: "Our three collecting sites — Mile 21, Mile 12, and Matanggar — serve as strategic hubs for FFB purchasing and logistics across the Labuk-Sugut and Beluran districts.", bm: "Tiga pusat pengumpulan kami — Batu 21, Batu 12, dan Matanggar — berfungsi sebagai hab strategik untuk pembelian dan logistik BTS di seluruh daerah Labuk-Sugut dan Beluran." },
  ops_ffb_sources: { en: "FFB Sources", bm: "Sumber BTS" },
  ops_src_own:     { en: "Own Plantations / Estates", bm: "Ladang / Estet Sendiri" },
  ops_src_third:   { en: "Third-Party Estates", bm: "Estet Pihak Ketiga" },
  ops_src_dealer:  { en: "Dealers", bm: "Peniaga" },
  ops_src_small:   { en: "Smallholders", bm: "Pekebun Kecil" },

  // Sustainability page
  sus_hero_title: { en: "Sustainability", bm: "Kelestarian" },
  sus_hero_sub:   { en: "Our commitment to responsible palm oil production.", bm: "Komitmen kami terhadap pengeluaran minyak sawit yang bertanggungjawab." },
  sus_trace_title: { en: "Supply Chain Traceability", bm: "Kebolehkesanan Rantaian Bekalan" },
  sus_trace_desc:  { en: "MALSA achieves 100% traceability to plantation level across all FFB sources. This transparency ensures responsible sourcing and allows our downstream partners — including IOI Corporation and Mewah Group — to verify the origin of every tonne of palm oil.", bm: "MALSA mencapai 100% kebolehkesanan ke peringkat ladang merentasi semua sumber BTS. Ketelusan ini memastikan penyumberan bertanggungjawab dan membolehkan rakan hiliran kami — termasuk IOI Corporation dan Kumpulan Mewah — mengesahkan asal usul setiap tan minyak sawit." },
  sus_env_title: { en: "Environmental Responsibility", bm: "Tanggungjawab Alam Sekitar" },
  sus_env_desc:  { en: "We are committed to minimising our environmental impact through responsible estate management, waste management, and compliance with Malaysian environmental regulations. Our operations are oriented toward sustainable production volumes while maintaining the ecological balance of our surroundings.", bm: "Kami komited untuk meminimumkan kesan alam sekitar melalui pengurusan estet yang bertanggungjawab, pengurusan sisa, dan pematuhan peraturan alam sekitar Malaysia. Operasi kami berorientasikan jumlah pengeluaran mampan sambil mengekalkan keseimbangan ekologi persekitaran kami." },
  sus_community_title: { en: "Community Development", bm: "Pembangunan Komuniti" },
  sus_community_desc:  { en: "As a significant employer in the Labuk-Sugut and Beluran districts, MALSA contributes to local economic development through employment opportunities, fair dealings with smallholders and dealers, and community engagement initiatives.", bm: "Sebagai majikan penting di daerah Labuk-Sugut dan Beluran, MALSA menyumbang kepada pembangunan ekonomi tempatan melalui peluang pekerjaan, urusan adil dengan pekebun kecil dan peniaga, serta inisiatif penglibatan komuniti." },

  // Contact page
  contact_hero_title: { en: "Contact Us", bm: "Hubungi Kami" },
  contact_hero_sub:   { en: "Get in touch with our team in Sandakan, Sabah.", bm: "Hubungi pasukan kami di Sandakan, Sabah." },
  contact_hq_title:   { en: "Head Office", bm: "Ibu Pejabat" },
  contact_mill_title:  { en: "Palm Oil Mill (POM)", bm: "Kilang Minyak Sawit (POM)" },
  contact_form_title:  { en: "Send Us a Message", bm: "Hantar Mesej kepada Kami" },
  contact_name:  { en: "Your Name", bm: "Nama Anda" },
  contact_email: { en: "Email Address", bm: "Alamat Emel" },
  contact_subj:  { en: "Subject", bm: "Subjek" },
  contact_msg:   { en: "Your Message", bm: "Mesej Anda" },
  contact_send:  { en: "Send Message", bm: "Hantar Mesej" },
};

let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'bm' : 'en';
  document.documentElement.setAttribute('data-lang', currentLang);
  document.getElementById('langFlag').textContent = currentLang === 'en' ? '🇬🇧' : '🇲🇾';
  document.getElementById('langLabel').textContent = currentLang === 'en' ? 'EN' : 'BM';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[key]) {
      el.style.opacity = '0';
      setTimeout(() => {
        el.innerHTML = T[key][currentLang];
        el.style.opacity = '1';
      }, 150);
    }
  });
}
