/* ======================================================
   Sophia & IT — script.js
   多语言系统 / 服务渲染 / RTL 支持 / 自动年份更新
   ====================================================== */

const text = {
  zh: {
    hero_title: "Sophia & IT",
    hero_desc: "Turning Ideas into Digital Reality.",
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
    hero_desc: "Թվային լուծումներ ու տեխնոլոգիական աջակցություն:",
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
    hero_desc: "Воплощаем идеи в цифровую реальность.",
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
    hero_desc: "تحويل الأفكار إلى واقع رقمي.",
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

/* ======================================================
   设置语言
   ====================================================== */
function setLang(lang) {
  const t = text[lang];

  // RTL 支持
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  // Hero
  document.getElementById("heroTitle").textContent = t.hero_title;
  document.getElementById("heroSubtitle").textContent = t.hero_desc;
  document.getElementById("heroButton").textContent = t.cta;

  // Info
  document.getElementById("infoTitle").textContent = t.info_title;
  document.getElementById("addressLabel").textContent = t.address_label;
  document.getElementById("emailLabel").textContent = t.email_label;
  document.getElementById("dateLabel").textContent = t.date_label;

  // Contact
  document.getElementById("contactTitle").textContent = t.contact_title;
  document.getElementById("nameLabel").childNodes[0].textContent = t.name_label;
  document.getElementById("contactLabel").childNodes[0].textContent = t.contact_label;
  document.getElementById("messageLabel").childNodes[0].textContent = t.message_label;
  document.getElementById("sendBtn").textContent = t.send_btn;

  /* 生成服务卡片 */
  const serviceArea = document.getElementById("services");
  serviceArea.innerHTML = "";

  t.services.forEach(item => {
    const div = document.createElement("div");
    div.className = "service-item";
    div.textContent = item;
    serviceArea.appendChild(div);
  });
}

/* ======================================================
   自动填入年份与日期
   ====================================================== */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("date").textContent = new Date().toLocaleDateString();

/* 默认语言：英文 */
setLang("en");
