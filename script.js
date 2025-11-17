/* ======================================================
   Sophia & IT — script.js
   多语言系统 / 服务渲染 / RTL 支持 / 自动年份更新
   增强：自动检测浏览器语言 + 更稳健的 DOM 操作
   ====================================================== */

const text = {
  zh: {
    hero_title: "Sophia & IT",
    hero_desc: "让创意成为数字现实。",
    cta: "联系我们",

    info_title: "公司信息",
    address_label: "地址：",
    email_label: "邮箱：",
    date_label: "日期：",

    services_title: "我们的服务",
    services: [
      "软件开发",
      "企业网站建设",
      "系统平台与后台开发",
      "IT 技术支持",
      "数据分析与可视化",
      "网络部署与维护",
    ],

    contact_title: "联系我们",
    name_label: "姓名：",
    contact_label: "邮箱：",
    message_label: "留言：",
    send_btn: "发送",
  },

  en: {
    hero_title: "Sophia & IT",
    hero_desc: "Turning Ideas into Digital Reality.",
    cta: "Contact Us",

    info_title: "Company Information",
    address_label: "Address:",
    email_label: "Email:",
    date_label: "Date:",

    services_title: "Our Services",
    services: [
      "Software Development",
      "Business Websites",
      "System & Backend Development",
      "IT Technical Support",
      "Data Analysis & Visualization",
      "Network Deployment & Maintenance",
    ],

    contact_title: "Contact Us",
    name_label: "Name:",
    contact_label: "Email:",
    message_label: "Message:",
    send_btn: "Send",
  },

  hy: {
    hero_title: "Sophia & IT",
    hero_desc: "Գաղափարները վերածում ենք թվային REALITY։",
    cta: "Կապ հաստատել",

    info_title: "Մեր մասին",
    address_label: "Հասցե՝",
    email_label: "Էլ. փոստ՝",
    date_label: "Ամսաթիվ՝",

    services_title: "Մեր ծառայությունները",
    services: [
      "Ծրագրային ապահովում",
      "Վեբ կայքերի մշակում",
      "Համակարգերի նախագծում",
      "ՏՏ տեխնիկական աջակցություն",
      "Տվյալների վերլուծություն",
      "Ցանցերի տեղադրում և սպասարկում",
    ],

    contact_title: "Կապ",
    name_label: "Անուն՝",
    contact_label: "Էլ. փոստ՝",
    message_label: "Հաղորդագրություն՝",
    send_btn: "Ուղարկել",
  },

  ru: {
    hero_title: "Sophia & IT",
    hero_desc: "Превращаем идеи в цифровую реальность.",
    cta: "Связаться с нами",

    info_title: "Информация о компании",
    address_label: "Адрес:",
    email_label: "Email:",
    date_label: "Дата:",

    services_title: "Наши услуги",
    services: [
      "Разработка ПО",
      "Создание сайтов",
      "Системная разработка",
      "IT поддержка",
      "Анализ данных",
      "Настройка сетей",
    ],

    contact_title: "Связаться",
    name_label: "Имя:",
    contact_label: "Email:",
    message_label: "Сообщение:",
    send_btn: "Отправить",
  },

  ar: {
    hero_title: "Sophia & IT",
    hero_desc: "نحوّل الأفكار إلى واقع رقمي.",
    cta: "اتصل بنا",

    info_title: "معلومات الشركة",
    address_label: "العنوان:",
    email_label: "البريد الإلكتروني:",
    date_label: "التاريخ:",

    services_title: "خدماتنا",
    services: [
      "تطوير البرمجيات",
      "مواقع الشركات",
      "الأنظمة و البنية الخلفية",
      "الدعم التقني",
      "تحليل البيانات",
      "إعداد وصيانة الشبكات",
    ],

    contact_title: "اتصل بنا",
    name_label: "الاسم:",
    contact_label: "البريد:",
    message_label: "الرسالة:",
    send_btn: "إرسال",
  },
};

/* safe helpers */
function $(id){ return document.getElementById(id) || null; }
function qs(selector){ return document.querySelector(selector); }
function qsa(selector){ return Array.from(document.querySelectorAll(selector)); }

/* render language content */
function setLang(lang){
  const t = text[lang] || text.en;

  // RTL
  document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // hero
  const heroTitle = $('heroTitle');
  if(heroTitle) heroTitle.textContent = t.hero_title;
  const heroSub = $('heroSubtitle');
  if(heroSub) heroSub.textContent = t.hero_desc;
  const heroBtn = $('heroButton');
  if(heroBtn) heroBtn.textContent = t.cta;

  // info
  const infoTitle = $('infoTitle');
  if(infoTitle) infoTitle.textContent = t.info_title;
  const addressLabel = $('addressLabel'); if(addressLabel) addressLabel.textContent = t.address_label;
  const address = $('address'); if(address) address.textContent = (t.address || "");
  const emailLabel = $('emailLabel'); if(emailLabel) emailLabel.textContent = t.email_label;
  const emailLink = $('emailLink'); if(emailLink){ emailLink.textContent = t.email || ""; emailLink.href = t.email ? ("mailto:" + t.email) : ""; }
  const dateLabel = $('dateLabel'); if(dateLabel) dateLabel.textContent = t.date_label;
  const dateEl = $('date'); if(dateEl) dateEl.textContent = (t.date || new Date().toLocaleDateString());

  // services
  const servicesTitle = $('servicesTitle'); if(servicesTitle) servicesTitle.textContent = t.services_title || "";
  const servicesEl = $('services'); if(servicesEl){
    servicesEl.innerHTML = "";
    const icons = ["🖥️","🌐","📊","💡","⚙️","🔁"];
    t.services.forEach((s,i) => {
      const div = document.createElement('div');
      div.className = 'service-item';
      div.innerHTML = `<div class="ico" aria-hidden="true">${icons[i] || "🔹"}</div><div class="text">${s}</div>`;
      servicesEl.appendChild(div);
    });
  }

  // contact labels
  const nameSpan = qs('#nameLabel .label-text'); if(nameSpan) nameSpan.textContent = t.name_label;
  const contactSpan = qs('#contactLabel .label-text'); if(contactSpan) contactSpan.textContent = t.contact_label;
  const messageSpan = qs('#messageLabel .label-text'); if(messageSpan) messageSpan.textContent = t.message_label;
  const sendBtn = $('sendBtn'); if(sendBtn) sendBtn.textContent = t.send_btn;

  // mark active lang button
  qsa('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
    b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
  });

  // small visual flourish: subtle hero logo pulse when language changes
  const heroLogo = qs('.hero-logo');
  if(heroLogo){
    heroLogo.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.03)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'ease-out' });
  }
}

/* attach language buttons and behaviors */
document.addEventListener('DOMContentLoaded', () => {
  // safe: set year & date
  const y = $('year'); if(y) y.textContent = new Date().getFullYear();
  const d = $('date'); if(d && !d.textContent) d.textContent = new Date().toLocaleDateString();

  // language buttons
  qsa('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.dataset.lang || 'en';
      setLang(lang);
      // small scroll into view for mobile if needed
      if(window.innerWidth < 600) window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // auto-detect browser language (prefer full match then primary subtag)
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const primary = browserLang.split('-')[0];
  const supported = ['en','zh','hy','ru','ar'];
  const chosen = supported.includes(primary) ? primary : (supported.includes(browserLang) ? browserLang : 'en');
  setLang(chosen);
});
