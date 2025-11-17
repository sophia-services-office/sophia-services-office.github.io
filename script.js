/* ==========================================
   MULTI-LANGUAGE SCRIPT (5 LANGUAGES)
   WITH SERVICE ICONS + POPUP MODAL
   ========================================== */

(function(){

/* ----------------------------------------------------------------
   1) 五语种翻译（完全保留你的所有内容）
------------------------------------------------------------------*/

const translations = {

  /* ---------------------- 中文 ---------------------- */
  zh: {
    langName: "中文",
    nav_home: "首页",
    nav_services: "服务项目",
    nav_company: "公司信息",
    nav_contact: "联系我们",
    heroTitle: "Sophia & IT",
    heroSubtitle: "科技引领未来 · 将创意变为数字现实",
    heroButton: "联系我们",
    infoTitle: "公司信息",
    company_desc: `Sophia & IT 是一家专注于信息技术服务与数字化解决方案的专业科技企业。
公司聚焦于 软件开发、企业网站建设、系统平台研发、数据处理与 IT 技术支持 等核心业务领域，
致力于为客户提供安全、稳定、可持续的数字化服务体系。

我们秉持“以技术驱动价值”的理念，依托严谨的工程流程和行业经验，持续为企业与机构提供高质量的技术支持与定制化开发服务。
服务范围涵盖 系统架构设计、云端部署与维护、数据管理、业务流程数字化、自动化工具集成 等多个方向，
旨在协助客户提升运营效率，优化管理流程，推进数字化转型。

Sophia & IT 以专业能力、服务质量与长期合作精神为基础，构建面向未来的科技服务体系。
我们将持续投入技术创新与服务优化，为客户创造可靠、透明、可扩展的技术价值，
成为值得信赖的战略合作伙伴.`,
    addressLabel: "地址：",
    address: "亚美尼亚 埃里温市 Movses Khorenatsi 街 26a号210室",
    emailLabel: "邮箱：",
    email: "sophia.services.office@gmail.com",
    dateLabel: "日期：",
    date: "08.08.2025",

    servicesTitle: "我们的服务",
    services: [
      "软件开发",
      "企业网站建设",
      "系统平台后端开发",
      "IT 技术支持",
      "数据分析与可视化",
      "云部署与维护"
    ],

    contactTitle: "联系我们",
    nameLabel: "姓名：",
    contactLabel: "邮箱：",
    messageLabel: "问题：",
    sendBtn: "发送",
    footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
  },


  /* ---------------------- 英文 ---------------------- */
  en: {
    langName: "English",
    nav_home: "Home",
    nav_services: "Services",
    nav_company: "Company",
    nav_contact: "Contact",
    heroTitle: "Sophia & IT",
    heroSubtitle: "Technology Drives the Future · Turning Ideas into Digital Reality",
    heroButton: "Contact Us",
    infoTitle: "Company Information",
    company_desc: `Sophia & IT is a professional technology company focused on information technology services and digital solutions.
The company specializes in software development, corporate website construction, system platform development, data processing and IT technical support, committed to providing customers with secure, stable and sustainable digital service systems.

We adhere to the philosophy of "technology-driven value", leveraging rigorous engineering processes and industry experience to continuously deliver high-quality technical support and customized development services to enterprises and institutions.
Our service scope includes system architecture design, cloud deployment and maintenance, data management, business process digitalization, and automation tool integration, aiming to help clients improve operational efficiency, optimize management processes, and advance digital transformation.

Sophia & IT builds a future-ready technology service system based on professional capability, service quality, and a long-term cooperative spirit.
We continuously invest in technological innovation and service optimization to create reliable, transparent and scalable technical value for our clients and become a trusted strategic partner.`,
    addressLabel: "Address:",
    address: "RA, Yerevan, Movses Khorenatsi st., bld 26a, office 210",
    emailLabel: "Email:",
    email: "sophia.services.office@gmail.com",
    dateLabel: "Date:",
    date: "08.08.2025",

    servicesTitle: "Our Services",
    services: [
      "Software Development",
      "Corporate Website Development",
      "Backend Platform Development",
      "IT Technical Support",
      "Data Analytics & Visualization",
      "Cloud Deployment & Maintenance"
    ],

    contactTitle: "Contact Us",
    nameLabel: "Name:",
    contactLabel: "Email:",
    messageLabel: "Question:",
    sendBtn: "Send",
    footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
  },


  /* ---------------------- 亚美尼亚语 ---------------------- */
  hy: {
    langName: "Հայերեն",
    nav_home: "Գլխավոր",
    nav_services: "Սպասարկումներ",
    nav_company: "Ընկերություն",
    nav_contact: "Կապ",
    heroTitle: "Sophia & IT",
    heroSubtitle: "Տեխնոլոգիաները ձևավորում են ապագան · Գաղափարները թվային իրականություն ենք դարձնում",
    heroButton: "Կապ հաստատել",
    infoTitle: "Ընկերության մասին",
    company_desc: `Sophia & IT-ը մասնագիտացած է տեղեկատվական տեխնոլոգիաների ծառայություններում և թվային լուծումների մշակման մեջ:
Ընկերությունը կենտրոնացած է ծրագրային ապահովման մշակման, կորպորատիվ կայքերի կառուցման, համակարգային հարթակների զարգացման, տվյալների մշակման և ՏՏ տեխնիկական աջակցության վրա՝ ապահովելով անվտանգ և կայուն թվային ծառայություններ:

Մենք առաջնորդվում ենք «տեխնոլոգիաների միջոցով արժեք ստեղծելու» սկզբունքով՝ կիրառելով խիստ ինժեներական գործընթացներ և փորձառություն՝ ապահովելու բարձրակարգ տեխնիկական աջակցություն:
Ծառայությունների շրջանակը ներառում է համակարգային ճարտարապետություն, ամպային տեղադրում, տվյալների կառավարում, թվայնացում և ավտոմատացման ինտեգրում:

Sophia & IT-ը կառուցում է ապագայի համար նախատեսված տեխնոլոգիական ծառայությունների համակարգ՝ հիմնված մասնագիտական հմտությունների և որակի վրա։`,
    addressLabel: "Հասցե՝",
    address: "ՀՀ, Երևան, Մովսես Խորենացի փ. 26ա, գրասենյակ 210",
    emailLabel: "Էլ. փոստ՝",
    email: "sophia.services.office@gmail.com",
    dateLabel: "Ամսաթիվ՝",
    date: "08.08.2025",

    servicesTitle: "Մեր ծառայությունները",
    services: [
      "Ծրագրային ապահովում",
      "Կորպորատիվ կայքերի կառուցում",
      "Համակարգերի backend զարգացում",
      "ՏՏ աջակցություն",
      "Տվյալների վերլուծություն",
      "Ամպային ծառայություններ"
    ],

    contactTitle: "Կապ",
    nameLabel: "Անուն՝",
    contactLabel: "Էլ. փոստ՝",
    messageLabel: "Հարց՝",
    sendBtn: "Ուղարկել",
    footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
  },


  /* ---------------------- 俄语 ---------------------- */
  ru: {
    langName: "Русский",
    nav_home: "Главная",
    nav_services: "Услуги",
    nav_company: "Компания",
    nav_contact: "Контакты",
    heroTitle: "Sophia & IT",
    heroSubtitle: "Технологии формируют будущее · Превращаем идеи в цифровую реальность",
    heroButton: "Связаться с нами",
    infoTitle: "Информация о компании",
    company_desc: `Sophia & IT — технологическая компания, специализирующаяся на IT-услугах и цифровых решениях.
Компания ориентирована на разработку ПО, корпоративных сайтов, платформ, обработку данных и IT-поддержку, предоставляя стабильные и безопасные цифровые сервисы.

Мы придерживаемся принципа «технологии создают ценность» и обеспечиваем высококачественную техническую поддержку и разработку.
Наши услуги включают архитектуру систем, облачные решения, цифровизацию процессов и интеграцию автоматизации.

Sophia & IT строит инновационную технологическую систему, основанную на профессионализме и качестве. `,
    addressLabel: "Адрес:",
    address: "РА, Ереван, ул. Мовсеса Хоренаци 26а, офис 210",
    emailLabel: "Эл. почта:",
    email: "sophia.services.office@gmail.com",
    dateLabel: "Дата:",
    date: "08.08.2025",

    servicesTitle: "Наши услуги",
    services: [
      "Разработка программного обеспечения",
      "Создание корпоративных сайтов",
      "Backend-разработка",
      "IT-поддержка",
      "Аналитика данных",
      "Облачные сервисы"
    ],

    contactTitle: "Связаться",
    nameLabel: "Имя:",
    contactLabel: "Email:",
    messageLabel: "Вопрос:",
    sendBtn: "Отправить",
    footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
  },


  /* ---------------------- 阿拉伯语 ---------------------- */
  ar: {
    langName: "العربية",
    nav_home: "الرئيسية",
    nav_services: "الخدمات",
    nav_company: "الشركة",
    nav_contact: "اتصل بنا",
    heroTitle: "Sophia & IT",
    heroSubtitle: "التكنولوجيا تقود المستقبل · نحول الأفكار إلى واقع رقمي",
    heroButton: "اتصل بنا",
    infoTitle: "معلومات الشركة",
    company_desc: `Sophia & IT هي شركة تقنية متخصصة في خدمات تكنولوجيا المعلومات والحلول الرقمية.
تركز الشركة على تطوير البرمجيات، إنشاء المواقع، المنصات الخلفية، تحليل البيانات والدعم الفني.

نلتزم بمبدأ «التقنية تصنع القيمة» ونوفر خدمات عالية الجودة وحلولاً مخصصة.
تشمل خدماتنا تصميم الأنظمة، الحوسبة السحابية، الرقمنة وتكامل الأتمتة.

نهدف إلى بناء منظومة تقنية موثوقة وقابلة للتطوير.`,
    addressLabel: "العنوان:",
    address: "يريفان، شارع موفسيس خوريناتسي 26a، مكتب 210",
    emailLabel: "البريد الإلكتروني:",
    email: "sophia.services.office@gmail.com",
    dateLabel: "التاريخ:",
    date: "08.08.2025",

    servicesTitle: "خدماتنا",
    services: [
      "تطوير البرمجيات",
      "تطوير مواقع الشركات",
      "تطوير الأنظمة الخلفية",
      "الدعم التقني",
      "تحليل البيانات",
      "الخدمات السحابية"
    ],

    contactTitle: "اتصل بنا",
    nameLabel: "الاسم:",
    contactLabel: "البريد الإلكتروني:",
    messageLabel: "السؤال:",
    sendBtn: "إرسال",
    footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
  }

}; // translations END



/* ----------------------------------------------------------------
   2) 服务项目图标
------------------------------------------------------------------*/
const serviceIcons = ["💻", "🌐", "⚙️", "🛠", "📊", "☁️"];



/* ----------------------------------------------------------------
   3) 工具函数
------------------------------------------------------------------*/
function $id(id){ return document.getElementById(id); }
function setText(id, val){ const el=$id(id); if(el) el.textContent=val; }
function setHTML(id,val){ const el=$id(id); if(el) el.innerHTML=val; }



/* 保存当前语言 */
window.currentLanguage = "zh";



/* ----------------------------------------------------------------
   4) 页面渲染（核心功能）
------------------------------------------------------------------*/
function render(lang){

  window.currentLanguage = lang;

  const t = translations[lang];
  if(!t) return;

  document.documentElement.lang = lang;
  document.body.dir = (lang==="ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-key]").forEach(el=>{
    const key = el.getAttribute("data-key");
    if(t[key]!==undefined) el.textContent = t[key];
  });

  setText("heroTitle", t.heroTitle);
  setText("heroSubtitle", t.heroSubtitle);
  setText("heroButton", t.heroButton);

  setText("infoTitle", t.infoTitle);
  setHTML("companyDesc", t.company_desc.replace(/\n/g,"<br><br>"));

  setText("addressLabel", t.addressLabel);
  setText("address", t.address);

  const emailLink = $id("emailLink");
  if(emailLink){
    emailLink.textContent = t.email;
    emailLink.href = "mailto:" + t.email;
  }

  setText("dateLabel", t.dateLabel);
  setText("date", t.date);


  /* --------------------------
        ★ 生成“服务项目”图标方块
  ---------------------------*/
  const box = $id("services");
  box.innerHTML = "";

  t.services.forEach((s, index)=>{

    const div = document.createElement("div");
    div.className = "tile";

    div.innerHTML = `
      <div class="service-icon">${serviceIcons[index]}</div>
      <div class="service-title">${s}</div>
    `;

    div.onclick = ()=> openModal("service" + (index+1));

    box.appendChild(div);
  });


  setText("contactTitle", t.contactTitle);

  const nameLabel = document.querySelector("#nameLabel .label-text");
  if(nameLabel) nameLabel.textContent = t.nameLabel;

  const contactLabel = document.querySelector("#contactLabel .label-text");
  if(contactLabel) contactLabel.textContent = t.contactLabel;

  const messageLabel = document.querySelector("#messageLabel .label-text");
  if(messageLabel) messageLabel.textContent = t.messageLabel;

  const sendBtn = $id("sendBtn");
  if(sendBtn) sendBtn.textContent = t.sendBtn;


  const yearEl = $id("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const footerText = $id("footerText");
  if(footerText) 
    footerText.textContent = t.footerText.replace("{year}", new Date().getFullYear());


  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang===lang);
  });

}



/* ----------------------------------------------------------------
   5) 初始化
------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function(){

  const stored = localStorage.getItem("site_lang") || "zh";
  render(stored);

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.onclick = function(){
      const lang = this.dataset.lang;
      localStorage.setItem("site_lang", lang);
      render(lang);
    };
  });

  const heroButton = $id("heroButton");
  if(heroButton) heroButton.onclick = ()=> location.href="#contact";
});



/* ----------------------------------------------------------------
   6) 弹窗内容（保留你的完整内容）
------------------------------------------------------------------*/

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

const modalContentData = {

  zh: {
    service1:{ title:"软件开发", body:"我们提供企业级软件系统开发，包括架构设计、前后端开发、数据库设计、API 设计、云端部署、性能优化及长期维护。" },
    service2:{ title:"企业网站建设", body:"构建高质量企业官网，支持品牌设计、响应式布局、SEO 优化、内容管理后台等功能。" },
    service3:{ title:"系统平台后端开发", body:"提供高并发后台架构设计、服务器端开发、数据库优化、微服务、API 网关等解决方案。" },
    service4:{ title:"IT 技术支持", body:"企业 IT 环境托管、技术故障排查、服务器维护、信息安全管理与技术支持服务。" },
    service5:{ title:"数据分析与可视化", body:"提供报表可视化、商业智能分析（BI）、数据清洗、数据仓库建设等数据解决方案。" },
    service6:{ title:"云部署与维护", body:"基于 AWS / Azure / Google Cloud 的云架构部署、监控、自动化 CI/CD、容器化（Docker/K8s）。" }
  },

  en: {
    service1:{ title:"Software Development", body:"Enterprise-level software engineering including architecture design, backend/frontend development, API integration and cloud deployment." },
    service2:{ title:"Corporate Website Development", body:"Professional corporate websites with brand-aligned UI/UX, SEO optimization, backend CMS and performance optimization." },
    service3:{ title:"Backend Platform Development", body:"High-performance backend architecture, API gateway, microservices, database engineering and systems integration." },
    service4:{ title:"IT Technical Support", body:"System maintenance, network support, troubleshooting, security monitoring and enterprise IT services." },
    service5:{ title:"Data Analytics & Visualization", body:"BI dashboards, data modeling, visualization, reporting automation and decision-support analytics." },
    service6:{ title:"Cloud Deployment & DevOps", body:"AWS / Azure / GCP deployment, monitoring, CI/CD automation, containerization and cloud optimization." }
  },

  hy: {
    service1:{ title:"Ծրագրային ապահովում", body:"Ձեռնարկությունների համար նախատեսված ծրագրային լուծումներ, ճարտարապետություն և ամպային տեղակայում։" },
    service2:{ title:"Կորպորատիվ կայքերի կառուցում", body:"Պրոֆեսիոնալ կորպորատիվ կայքեր, SEO և կառավարման վահանակ։" },
    service3:{ title:"Backend զարգացում", body:"Բարձր կատարողականությամբ backend, բազաներ և API համակարգեր։" },
    service4:{ title:"ՏՏ աջակցություն", body:"Տեխնիկական սպասարկում, սերվերի կարգավորում և անվտանգություն։" },
    service5:{ title:"Տվյալների վերլուծություն", body:"Տեսողական վահանակներ, վերլուծություններ և հաշվետվություններ։" },
    service6:{ title:"Ամպային ծառայություններ", body:"AWS / Azure / GCP, ավտոմատացում, կոնտեյներացում և DevOps։" }
  },

  ru: {
    service1:{ title:"Разработка ПО", body:"Корпоративная разработка ПО, архитектура, интеграции API и облачное развертывание." },
    service2:{ title:"Корпоративные сайты", body:"Профессиональные сайты с SEO, адаптивным дизайном и CMS." },
    service3:{ title:"Backend-разработка", body:"Высоконагруженные серверные системы, базы данных и API." },
    service4:{ title:"IT-поддержка", body:"Техническая поддержка, обслуживание серверов, мониторинг и безопасность." },
    service5:{ title:"Аналитика данных", body:"BI-панели, визуализация данных, аналитические решения." },
    service6:{ title:"Облачные сервисы", body:"AWS / Azure / GCP, CI/CD, контейнеризация и DevOps." }
  },

  ar: {
    service1:{ title:"تطوير البرمجيات", body:"تطوير أنظمة برمجية مؤسسية مع التصميم المعماري والتكامل السحابي." },
    service2:{ title:"تطوير مواقع الشركات", body:"مواقع احترافية مع SEO ولوحة تحكم محتوى." },
    service3:{ title:"تطوير الأنظمة الخلفية", body:"خوادم عالية الأداء، قواعد البيانات وواجهات API." },
    service4:{ title:"الدعم التقني", body:"صيانة الأنظمة، الدعم الفني، الأمن الرقمي." },
    service5:{ title:"تحليل البيانات", body:"تحليل الأعمال، النمذجة واللوحات التفاعلية." },
    service6:{ title:"الخدمات السحابية", body:"تنفيذ CI/CD، نشر سحابي، وحاويات." }
  }
};



/* ----------------------------------------------------------------
   7) 弹窗控制
------------------------------------------------------------------*/
function openModal(id){
  const lang = window.currentLanguage;
  modalTitle.innerText = modalContentData[lang][id].title;
  modalBody.innerText = modalContentData[lang][id].body;
  modal.style.display = "flex";
}

function closeModal(e){
  if(e.target === modal || e.target.classList.contains("close")){
    modal.style.display = "none";
  }
}

window.openModal = openModal;
window.closeModal = closeModal;

