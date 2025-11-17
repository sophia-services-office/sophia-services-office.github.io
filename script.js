/* ======================================================
   Sophia & IT — script.js
   多语言（zh/en/hy/ru/ar） / 公司信息多语翻译
   服务渲染 / RTL 支持 / 自动年份更新
   说明：
   - 与 index.html 里已有 id（heroTitle, heroSubtitle, heroButton, infoTitle,
     addressLabel, address, emailLabel, emailLink, dateLabel, date, services,
     contactTitle, nameLabel, contactLabel, messageLabel, sendBtn, year）兼容
   - 会在 info 卡片内自动插入公司介绍段落（id="companyDesc"）
   ====================================================== */

(function () {
  /* ---------- 多语言文案 ---------- */
  const locales = {
    zh: {
      hero_title: "Sophia & IT",
      hero_desc: "科技引领未来 · 将创意变为数字现实",
      cta: "联系我们",

      info_title: "公司信息",
      company_desc: `Sophia & IT 是一家专注于信息技术服务与数字化解决方案的专业科技企业。
公司聚焦于 软件开发、企业网站建设、系统平台研发、数据处理与 IT 技术支持 等核心业务领域，致力于为客户提供安全、稳定、可持续的数字化服务体系。

我们秉持“以技术驱动价值”的理念，依托严谨的工程流程和行业经验，持续为企业与机构提供高质量的技术支持与定制化开发服务。
服务范围涵盖 系统架构设计、云端部署与维护、数据管理、业务流程数字化、自动化工具集成 等多个方向，旨在协助客户提升运营效率，优化管理流程，推进数字化转型。

Sophia & IT 以专业能力、服务质量与长期合作精神为基础，构建面向未来的科技服务体系。
我们将持续投入技术创新与服务优化，为客户创造可靠、透明、可扩展的技术价值，成为值得信赖的战略合作伙伴。`,

      address_label: "地址：",
      address: "亚美尼亚 埃里温市 Movses Khorenatsi 街 26a号210室",
      email_label: "邮箱：",
      email: "sophia.services.office@gmail.com",
      date_label: "日期：",
      date: "08.08.2025",

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
      hero_desc: "Technology Drives the Future · Turning Ideas into Digital Reality",
      cta: "Contact Us",

      info_title: "Company Information",
      company_desc: `Sophia & IT is a professional technology company focused on information technology services and digital solutions.
The company specializes in software development, corporate website construction, system platform development, data processing and IT technical support, committed to providing customers with secure, stable and sustainable digital service systems.

We adhere to the philosophy of "technology-driven value", leveraging rigorous engineering processes and industry experience to continuously deliver high-quality technical support and customized development services to enterprises and institutions.
Our service scope includes system architecture design, cloud deployment and maintenance, data management, business process digitalization, and automation tool integration, aiming to help clients improve operational efficiency, optimize management processes, and advance digital transformation.

Sophia & IT builds a future-ready technology service system based on professional capability, service quality, and a long-term cooperative spirit.
We continuously invest in technological innovation and service optimization to create reliable, transparent and scalable technical value for our clients and become a trusted strategic partner.`,

      address_label: "Address:",
      address: "RA, Yerevan, Movses Khorenatsi st., bld 26a, office 210",
      email_label: "Email:",
      email: "sophia.services.office@gmail.com",
      date_label: "Date:",
      date: "08.08.2025",

      services_title: "Our Services",
      services: [
        "Software Development",
        "Corporate Website Development",
        "System & Backend Development",
        "IT Technical Support",
        "Data Processing & Visualization",
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
      hero_desc: "Տեխնոլոգիաները դեպի ապագա · Գաղափարները դարձնում ենք թվային իրողություն",
      cta: "Կապ հաստատել",

      info_title: "Ընկերության մասին",
      company_desc: `Sophia & IT-ը մասնագիտացած է տեղեկատվական տեխնոլոգիաների ծառայություններում և թվային լուծումների մշակումում:
Ընկերությունը կենտրոնացած է ծրագրային ապահովման մշակման, կորպորատիվ կայքերի կառուցման, համակարգային հարթակների զարգացման, տվյալների մշակման և ՏՏ տեխնիկական օժանդակության վրա՝ ապահովելու հաճախորդներին անվտանգ, կայուն և երկարաժամկետ թվային ծառայություններ:

Մենք առաջնորդվում ենք "տեխնոլոգիաների միջոցով արժեք ստեղծելու" սկզբունքով՝ կիրառելով խիստ ինժիներական գործընթացներ և արդյունաբերական փորձ՝ բարձրորակ տեխնիկական աջակցություն և անհատականացված զարգացման ծառայություններ տրամադրելու նպատակով:
Ծառայությունների շրջանակը ներառում է համակարգային ճարտարապետության նախագծում, ամպային տեղադրում և սպասարկում, տվյալների կառավարում, բիզնես պրոցեսների թվայնացում և ավտոմատացման լուծումների ինտեգրում՝ նպատակ ունենալով բարելավել գործառնական արդյունավետությունը և արագացնել թվային փոխակերպումը:

Sophia & IT-ը հիմված է մասնագիտական կարողությունների, ծառայության որակի և երկարաժամկետ համագործակցության արժեքների վրա՝ կառուցելով ապագա համար կայուն տեխնոլոգիական ծառայությունների համակարգ:
Մենք շարունակաբար ներդրում ենք տեխնոլոգիական նորարարության մեջ՝ ստեղծելու մեր հաճախորդների համար գրավիչ, թափանցիկ և ընդլայնելի տեխնոլոգիական արժեք։`,

      address_label: "Հասցե՝",
      address: "ՀՀ, Երևան, Մովսես Խորենացի փ. 26ա, գրասենյակ 210",
      email_label: "Էլ. փոստ՝",
      email: "sophia.services.office@gmail.com",
      date_label: "Ամսաթիվ՝",
      date: "08.08.2025",

      services_title: "Մեր ծառայությունները",
      services: [
        "Ծրագրային ապահովում",
        "Կորպորատիվ կայքեր",
        "Համակարգային և բեկենդային զարգացում",
        "ՏՏ տեխնիկական աջակցություն",
        "Տվյալների մշակում և պատկերացում",
        "Ցանցերի տեղադրում և սպասարկում",
      ],

      contact_title: "Կապ",
      name_label: "Անուն՝",
      contact_label: "Էլ․ փոստ՝",
      message_label: "Հաղորդագրություն՝",
      send_btn: "Ուղարկել",
    },

    ru: {
      hero_title: "Sophia & IT",
      hero_desc: "Технологии формируют будущее · Превращаем идеи в цифровую реальность",
      cta: "Связаться с нами",

      info_title: "Информация о компании",
      company_desc: `Sophia & IT — профессиональная технологическая компания, специализирующаяся на IT-услугах и цифровых решениях.
Компания ориентирована на разработку программного обеспечения, создание корпоративных сайтов, разработку платформ, обработку данных и техническую поддержку, предоставляя клиентам безопасные, стабильные и устойчивые цифровые решения.

Мы придерживаемся принципа «технологии как источник ценности», опираясь на строгие инженерные процессы и отраслевой опыт для обеспечения высококачественной технической поддержки и индивидуальной разработки.
Сфера услуг включает проектирование архитектуры систем, развертывание и сопровождение в облаке, управление данными, цифровизацию бизнес-процессов и интеграцию автоматизации, с целью повышения операционной эффективности и поддержки цифровой трансформации.

Sophia & IT строит ориентированную на будущее систему технологических услуг на основе профессионализма, качества сервиса и долгосрочного партнерства.
Мы постоянно инвестируем в технологические инновации и совершенствование услуг, чтобы создавать для клиентов надежную, прозрачную и масштабируемую техническую ценность.`,

      address_label: "Адрес:",
      address: "РА, Ереван, ул. Мовсеса Хоренаци, д.26а, оф.210",
      email_label: "Эл. почта:",
      email: "sophia.services.office@gmail.com",
      date_label: "Дата:",
      date: "08.08.2025",

      services_title: "Наши услуги",
      services: [
        "Разработка программного обеспечения",
        "Создание корпоративных сайтов",
        "Разработка систем и бэкенда",
        "ИТ-поддержка",
        "Обработка и визуализация данных",
        "Развертывание и обслуживание сетей",
      ],

      contact_title: "Связаться",
      name_label: "Имя:",
      contact_label: "Email:",
      message_label: "Сообщение:",
      send_btn: "Отправить",
    },

    ar: {
      hero_title: "Sophia & IT",
      hero_desc: "التكنولوجيا تقود المستقبل · نحول الأفكار إلى واقع رقمي",
      cta: "اتصل بنا",

      info_title: "معلومات الشركة",
      company_desc: `تُعد Sophia & IT شركة تقنية متخصصة في خدمات تكنولوجيا المعلومات والحلول الرقمية.
تركز الشركة على تطوير البرمجيات، وبناء المواقع المؤسسية، وتطوير منصات الأنظمة، ومعالجة البيانات، والدعم الفني، وتهدف إلى تقديم نظم خدمات رقمية آمنة ومستقرة وقابلة للاستدامة للعملاء.

نحن نؤمن بمبدأ "التقنية كمحرك للقيمة"، بالاعتماد على عمليات هندسية صارمة وخبرة قطاعية لتقديم دعم فني عالي الجودة وحلول تطوير مخصصة.
تشمل نطاق خدماتنا تصميم هندسة الأنظمة، النشر والصيانة على السحابة، إدارة البيانات، رقمنة عمليات الأعمال، ودمج أدوات الأتمتة، بهدف مساعدة العملاء على تحسين الكفاءة التشغيلية وتبسيط العمليات والمضي في التحول الرقمي.

تقوم Sophia & IT ببناء نظام خدمات تقنية مستقبلي قائم على الكفاءة المهنية وجودة الخدمة وروح التعاون طويل الأمد.
سنستمر في الاستثمار في الابتكار التقني وتحسين الخدمات لخلق قيمة تقنية موثوقة وشفافة وقابلة للتطوير لعملائنا.`,

      address_label: "العنوان:",
      address: "يريفان، شارع موفسيس خوريناتسي 26a، مكتب 210",
      email_label: "البريد الإلكتروني:",
      email: "sophia.services.office@gmail.com",
      date_label: "التاريخ:",
      date: "08.08.2025",

      services_title: "خدماتنا",
      services: [
        "تطوير البرمجيات",
        "بناء مواقع الشركات",
        "تطوير الأنظمة والبنية الخلفية",
        "الدعم الفني",
        "معالجة وعرض البيانات",
        "النشر وصيانة الشبكات",
      ],

      contact_title: "اتصل بنا",
      name_label: "الاسم:",
      contact_label: "البريد الإلكتروني:",
      message_label: "الرسالة:",
      send_btn: "إرسال",
    },
  };

  /* ---------- 安全 DOM 辅助函数 ---------- */
  function $id(id) {
    return document.getElementById(id) || null;
  }

  function safeSetText(id, txt) {
    const el = $id(id);
    if (!el) return;
    el.textContent = txt;
  }

  function safeSetHTML(id, html) {
    const el = $id(id);
    if (!el) return;
    el.innerHTML = html;
  }

  /* ---------- 核心 setLang 函数（暴露为全局 setLang 以兼容 onclick） ---------- */
  window.setLang = function (lang) {
    const t = locales[lang] || locales.en;

    // RTL 支持
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    // Hero
    safeSetText("heroTitle", t.hero_title);
    safeSetText("heroSubtitle", t.hero_desc);
    safeSetText("heroButton", t.cta);

    // Info headings & labels
    safeSetText("infoTitle", t.info_title);
    safeSetText("addressLabel", t.address_label);
    safeSetText("emailLabel", t.email_label);
    safeSetText("dateLabel", t.date_label);

    // Values
    safeSetText("address", t.address || "");
    const emailEl = $id("emailLink");
    if (emailEl) {
      emailEl.textContent = t.email || "";
      emailEl.href = t.email ? "mailto:" + t.email : "";
    }
    safeSetText("date", t.date || "");

    // 插入或更新公司介绍段落（可在 info 卡片内显示）
    let descEl = $id("companyDesc");
    if (!descEl) {
      // 尝试在 infoTitle 元素后插入段落
      const infoTitleEl = $id("infoTitle");
      if (infoTitleEl && infoTitleEl.parentNode) {
        descEl = document.createElement("p");
        descEl.id = "companyDesc";
        descEl.style.whiteSpace = "pre-wrap";
        descEl.style.marginTop = "12px";
        descEl.style.color = "#253a4a";
        descEl.style.lineHeight = "1.6";
        infoTitleEl.parentNode.insertBefore(descEl, infoTitleEl.nextSibling);
      }
    }
    if (descEl) descEl.textContent = t.company_desc || "";

    // Services
    safeSetText("servicesTitle", t.services_title || "");
    const servicesEl = $id("services");
    if (servicesEl) {
      servicesEl.innerHTML = "";
      const icons = ["🖥️", "🌐", "📊", "💡", "⚙️", "🔁"];
      t.services.forEach((s, i) => {
        const wrap = document.createElement("div");
        wrap.className = "service-item";
        wrap.innerHTML = `<div class="ico" aria-hidden="true">${icons[i] || "🔹"}</div><div class="text">${s}</div>`;
        servicesEl.appendChild(wrap);
      });
    }

    // Contact labels
    const nameSpan = document.querySelector("#nameLabel .label-text");
    if (nameSpan) nameSpan.textContent = t.name_label || "";
    const contactSpan = document.querySelector("#contactLabel .label-text");
    if (contactSpan) contactSpan.textContent = t.contact_label || "";
    const messageSpan = document.querySelector("#messageLabel .label-text");
    if (messageSpan) messageSpan.textContent = t.message_label || "";
    const sendBtn = $id("sendBtn");
    if (sendBtn) sendBtn.textContent = t.send_btn || "";

    // 视觉：把当前语言按钮标记为 active（如果存在 data-lang 按钮）
    document.querySelectorAll(".lang-btn").forEach((b) => {
      if (b.dataset && b.dataset.lang) {
        b.classList.toggle("active", b.dataset.lang === lang);
        b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
      }
    });
  };

  /* ---------- 初始化（DOMContentLoaded） ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    // 自动填充年份与默认日期（若未显示）
    const y = $id("year");
    if (y) y.textContent = new Date().getFullYear();
    const dateEl = $id("date");
    if (dateEl && !dateEl.textContent) dateEl.textContent = new Date().toLocaleDateString();

    // 绑定 .lang-btn（如果有）
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const lang = btn.dataset.lang;
      if (lang) {
        btn.addEventListener("click", () => {
          window.setLang(lang);
        });
      }
    });

    // 绑定兼容：老版 index.html 可能使用 onclick="setLang('zh')" 在按钮上 —— 该函数为全局可用

    // 自动选语言：优先浏览器语言的主 language 子标签（例如 "zh" 从 "zh-CN"）；
    // 若不在支持列表则默认 en
    const supported = ["zh", "en", "hy", "ru", "ar"];
    const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    const primary = nav.split("-")[0];
    const chosen = supported.includes(primary) ? primary : "en";
    window.setLang(chosen);
  });
})();
