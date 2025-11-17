/* Multi-language script for Sophia & IT
   supports: zh, en, hy, ru, ar
   - replaces text by element data-key or ids used below
   - stores selected language in localStorage
*/

(function(){
  const translations = {
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
        "系统平台开发",
        "数据处理与分析",
        "IT 技术支持",
        "云部署与维护",
        "自动化流程集成"
      ],
      contactTitle: "联系我们",
      nameLabel: "姓名：",
      contactLabel: "邮箱：",
      messageLabel: "问题：",
      sendBtn: "发送",
      footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
    },

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
        "System Platform Development",
        "Data Processing & Analysis",
        "IT Technical Support",
        "Cloud Deployment & Maintenance",
        "Automation & Workflow Integration"
      ],
      contactTitle: "Contact Us",
      nameLabel: "Name:",
      contactLabel: "Email:",
      messageLabel: "Question:",
      sendBtn: "Send",
      footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
    },

    hy: {
      langName: "Հայերեն",
      nav_home: "Գլխավոր",
      nav_services: "Սպասարկումներ",
      nav_company: "Ընկերություն",
      nav_contact: "Կապ",
      heroTitle: "Sophia & IT",
      heroSubtitle: "Տեխնոլոգիաները դեպի ապագա · Գաղափարները դարձնում ենք թվային իրականություն",
      heroButton: "Կապ հաստատել",
      infoTitle: "Ընկերության մասին",
      company_desc: `Sophia & IT-ը մասնագիտացած է տեղեկատվական տեխնոլոգիաների ծառայություններում և թվային լուծումների մշակումում:
Ընկերությունը կենտրոնացած է ծրագրային ապահովման մշակման, կորպորատիվ կայքերի կառուցման, համակարգային հարթակների զարգացման, տվյալների մշակման և ՏՏ տեխնիկական օժանդակության վրա՝ ապահովելու հաճախորդներին անվտանգ, կայուն և երկարաժամկետ թվային ծառայություններ:

Մենք առաջնորդվում ենք "տեխնոլոգիաների միջոցով արժեք ստեղծելու" սկզբունքով՝ կիրառելով խիստ ինժիներական գործընթացներ և արդյունաբերական փորձ՝ բարձրորակ տեխնիկական աջակցություն և անհատականացված զարգացման ծառայություններ տրամադրելու նպատակով:
Ծառայությունների շրջանակը ներառում է համակարգային ճարտարապետության նախագծում, ամպային տեղադրում և սպասարկում, տվյալների կառավարում, բիզնես պրոցեսների թվայնացում և ավտոմատացման լուծումների ինտեգրում՝ նպատակ ունենալով բարելավել գործառնական արդյունավետությունը և արագացնել թվային փոխակերպումը:

Sophia & IT-ը հիմնված է մասնագիտական կարողությունների, ծառայության որակի և երկարաժամկետ համագործակցության արժեքների վրա՝ կառուցելով ապագա համար կայուն տեխնոլոգիական ծառայությունների համակարգ:
Մենք շարունակաբար ներդրում ենք տեխնոլոգիական նորարարության մեջ՝ ստեղծելու մեր հաճախորդների համար գրավիչ, թափանցիկ և ընդլայնելի տեխնոլոգիական արժեք։`,
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
        "Համակարգերի զարգացում",
        "Տվյալների մշակում և վերլուծություն",
        "ՏՏ աջակցություն",
        "Ամպային տեղադրում և սպասարկում",
        "Ավտոմատացման ինտեգրում"
      ],
      contactTitle: "Կապ",
      nameLabel: "Անուն՝",
      contactLabel: "Էլ. փոստ՝",
      messageLabel: "Հարցը՝",
      sendBtn: "Ուղարկել",
      footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
    },

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
      company_desc: `Sophia & IT — профессиональная технологическая компания, специализирующаяся на IT-услугах и цифровых решениях.
Компания ориентирована на разработку программного обеспечения, создание корпоративных сайтов, разработку платформ, обработку данных и техническую поддержку, предоставляя клиентам безопасные, стабильные и устойчивые цифровые решения.

Мы придерживаемся принципа «технологии как источник ценности», опираясь на строгие инженерные процессы и отраслевой опыт для обеспечения высококачественной технической поддержки и индивидуальной разработки.
Сфера услуг включает проектирование архитектуры систем, развертывание и сопровождение в облаке, управление данными, цифровизацию бизнес-процессов и интеграцию автоматизации, с целью повышения операционной эффективности и поддержки цифровой трансформации.

Sophia & IT строит ориентированную на будущее систему технологических услуг на основе профессионализма, качества сервиса и долгосрочного партнерства.
Мы постоянно инвестируем в технологические инновации и совершенствование услуг, чтобы создавать для клиентов надежную, прозрачную и масштабируемую техническую ценность.`,
      addressLabel: "Адрес:",
      address: "РА, Ереван, ул. Мовсеса Хоренаци, д.26а, оф.210",
      emailLabel: "Эл. почта:",
      email: "sophia.services.office@gmail.com",
      dateLabel: "Дата:",
      date: "08.08.2025",
      servicesTitle: "Наши услуги",
      services: [
        "Разработка программного обеспечения",
        "Создание корпоративных сайтов",
        "Разработка систем и бэкенда",
        "Обработка и анализ данных",
        "ИТ-поддержка",
        "Развертывание и сопровождение облака",
        "Интеграция автоматизации"
      ],
      contactTitle: "Связаться",
      nameLabel: "Имя:",
      contactLabel: "Email:",
      messageLabel: "Вопрос:",
      sendBtn: "Отправить",
      footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
    },

    ar: {
      langName: "العربية",
      nav_home: "الصفحة الرئيسية",
      nav_services: "الخدمات",
      nav_company: "معلومات الشركة",
      nav_contact: "اتصل بنا",
      heroTitle: "Sophia & IT",
      heroSubtitle: "التكنولوجيا تقود المستقبل · نحول الأفكار إلى واقع رقمي",
      heroButton: "اتصل بنا",
      infoTitle: "معلومات الشركة",
      company_desc: `تُعد Sophia & IT شركة تقنية متخصصة في خدمات تكنولوجيا المعلومات والحلول الرقمية.
تركز الشركة على تطوير البرمجيات، وبناء المواقع المؤسسية، وتطوير منصات الأنظمة، ومعالجة البيانات، والدعم الفني، وتهدف إلى تقديم نظم خدمات رقمية آمنة ومستقرة وقابلة للاستدامة للعملاء.

نحن نؤمن بمبدأ "التقنية كمحرك للقيمة"، بالاعتماد على عمليات هندسية صارمة وخبرة قطاعية لتقديم دعم فني عالي الجودة وحلول تطوير مخصصة.
تشمل نطاق خدماتنا تصميم هندسة الأنظمة، النشر والصيانة على السحابة، إدارة البيانات، رقمنة عمليات الأعمال، ودمج أدوات الأتمتة، بهدف مساعدة العملاء على تحسين الكفاءة التشغيلية وتبسيط العمليات والمضي في التحول الرقمي.

تقوم Sophia & IT ببناء نظام خدمات تقنية مستقبلي قائم على الكفاءة المهنية وجودة الخدمة وروح التعاون طويل الأمد.
سنستمر في الاستثمار في الابتكار التقني وتحسين الخدمات لخلق قيمة تقنية موثوقة وشفافة وقابلة للتوسع لعملائنا.`,
      addressLabel: "العنوان:",
      address: "يريفان، شارع موفسيس خوريناتسي 26a، مكتب 210",
      emailLabel: "البريد الإلكتروني:",
      email: "sophia.services.office@gmail.com",
      dateLabel: "التاريخ:",
      date: "08.08.2025",
      servicesTitle: "خدماتنا",
      services: [
        "تطوير البرمجيات",
        "بناء مواقع الشركات",
        "تطوير الأنظمة والبنية الخلفية",
        "معالجة وتحليل البيانات",
        "الدعم الفني",
        "النشر وصيانة السحابة",
        "تكامل الأتمتة"
      ],
      contactTitle: "اتصل بنا",
      nameLabel: "الاسم:",
      contactLabel: "البريد الإلكتروني:",
      messageLabel: "السؤال:",
      sendBtn: "إرسال",
      footerText: "© {year} Sophia & IT | Powered by GitHub Pages & Formspree"
    }
  };

  /* helper */
  function $id(id){return document.getElementById(id)}
  function setText(id,txt){const el=$id(id); if(el) el.textContent=txt}
  function setHTML(id,html){const el=$id(id); if(el) el.innerHTML=html}

  /* render function */
  function render(lang){
    const t = translations[lang] || translations.en;
    // direction
    document.documentElement.lang = lang;
    document.body.dir = (lang==='ar') ? 'rtl' : 'ltr';

    // nav links (data-key)
    document.querySelectorAll('[data-key]').forEach(el=>{
      const key = el.getAttribute('data-key');
      if(key && t[key]!==undefined) el.textContent = t[key];
    });

    // ids
    setText('heroTitle', t.heroTitle);
    setText('heroSubtitle', t.heroSubtitle);
    setText('heroButton', t.heroButton);

    setText('infoTitle', t.infoTitle);
    setHTML('companyDesc', t.company_desc.replace(/\n/g,'<br><br>'));

    setText('addressLabel', t.addressLabel);
    setText('address', t.address);
    setText('emailLabel', t.emailLabel);
    const emailLink = $id('emailLink');
    if(emailLink){ emailLink.textContent = t.email; emailLink.href = 'mailto:' + t.email; }
    setText('dateLabel', t.dateLabel);
    setText('date', t.date);

    setText('servicesTitle', t.servicesTitle);
    // services grid
    const servicesEl = $id('services');
    if(servicesEl){
      servicesEl.innerHTML = '';
      t.services.forEach(s=>{
        const div = document.createElement('div');
        div.className = 'tile';
        div.textContent = s;
        servicesEl.appendChild(div);
      });
    }

    setText('contactTitle', t.contactTitle);
    // labels inside form
    const nameLabelSpan = document.querySelector('#nameLabel .label-text');
    if(nameLabelSpan) nameLabelSpan.textContent = t.nameLabel;
    const contactLabelSpan = document.querySelector('#contactLabel .label-text');
    if(contactLabelSpan) contactLabelSpan.textContent = t.contactLabel;
    const messageLabelSpan = document.querySelector('#messageLabel .label-text');
    if(messageLabelSpan) messageLabelSpan.textContent = t.messageLabel;
    const sendBtn = $id('sendBtn');
    if(sendBtn) sendBtn.textContent = t.sendBtn;

    // footer year fill
    const yearEl = $id('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
    // footer text with year
    const footerText = $id('footerText');
    if(footerText) footerText.textContent = (t.footerText || '').replace('{year}', new Date().getFullYear());

    // mark active lang button
    document.querySelectorAll('.lang-btn').forEach(b=>{
      const l = b.dataset.lang;
      if(l===lang) b.classList.add('active'); else b.classList.remove('active');
    });

    // if arabic, adjust some rtl-friendly classes (already body.dir set)
  }

  // bind buttons
  document.addEventListener('DOMContentLoaded',function(){
    // year default
    const stored = localStorage.getItem('site_lang') || (navigator.language || 'zh').split('-')[0];
    const supported = ['zh','en','hy','ru','ar'];
    const initial = supported.includes(stored) ? stored : 'zh';

    document.querySelectorAll('.lang-btn').forEach(btn=>{
      btn.addEventListener('click',function(){
        const lang = this.dataset.lang;
        if(!lang) return;
        localStorage.setItem('site_lang', lang);
        render(lang);
      });
    });

    // fallback: also allow clicking heroButton to go to contact
    const heroBtn = $id('heroButton');
    if(heroBtn){ heroBtn.addEventListener('click',()=>{ location.href = '#contact' }) }

    // initial render
    render(initial);
  });

})();
