const data = {
  en:{
    heroTitle:"Sophia & IT",heroSubtitle:"Turning Ideas into Digital Reality.",heroButton:"Contact Us",
    infoTitle:"Business Info",addressLabel:"Address:",
    address:"RA, Yerevan, Movses Khorenatsi st., bld 26a, 210 office",
    emailLabel:"Email:",email:"sophia.services.office@gmail.com",
    dateLabel:"Date of registration:",date:"08.08.2025",
    servicesTitle:"Services",
    services:[
      "Software Development & Maintenance: Web/Mobile/Desktop Apps, System Upgrades & Optimization",
      "Websites & E-commerce: Corporate Website, Online Store, Maintenance",
      "Data Processing & Analysis: Data Entry, Cleaning, Visualization, DB Development",
      "IT Consulting & Support: Solutions, Cloud Services, Training",
      "Other IT Services: API Development, Automation, UI/UX Design"
    ],
    contactTitle:"Contact Us",nameLabel:"Name:",contactLabel:"Email:",messageLabel:"Message:",sendBtn:"Send"},
  zh:{
    heroTitle:"Sophia & IT",heroSubtitle:"将创意转化为数字现实",heroButton:"联系我们",
    infoTitle:"公司信息",addressLabel:"地址：",
    address:"亚美尼亚 埃里温市 Movses Khorenatsi 街 26a号210室",
    emailLabel:"邮箱：",email:"sophia.services.office@gmail.com",
    dateLabel:"注册日期：",date:"08.08.2025",
    servicesTitle:"服务项目",
    services:[
      "软件开发与维护：定制化应用（Web / Mobile / Desktop）、系统升级与优化",
      "网站与电商平台建设：企业官网、电商平台搭建、网站维护",
      "数据处理与分析：数据录入、清洗、可视化、数据库维护",
      "IT 咨询与技术支持：解决方案、云服务、培训与远程支持",
      "其他信息技术服务：API 对接、自动化脚本、UI/UX 设计优化"
    ],
    contactTitle:"联系我们",nameLabel:"姓名：",contactLabel:"邮箱：",messageLabel:"留言：",sendBtn:"发送"},
  ru:{
    heroTitle:"Sophia & IT",heroSubtitle:"Воплощаем идеи в цифровую реальность",heroButton:"Связаться с нами",
    infoTitle:"Информация о компании",addressLabel:"Адрес:",
    address:"РА, Ереван, ул. Мовсеса Хоренаци, д.26а, оф.210",
    emailLabel:"Эл. почта:",email:"sophia.services.office@gmail.com",
    dateLabel:"Дата регистрации:",date:"08.08.2025",
    servicesTitle:"Услуги",
    services:[
      "Разработка и поддержка ПО: Web/Mobile/Desktop приложения, обновления и оптимизация",
      "Веб-сайты и e-commerce: корпоративные сайты, интернет-магазины, поддержка",
      "Обработка данных: ввод, очистка, визуализация, базы данных",
      "ИТ-консалтинг и поддержка: решения, облачные сервисы, обучение",
      "Прочие ИТ-услуги: API, автоматизация, UI/UX дизайн"
    ],
    contactTitle:"Связаться с нами",nameLabel:"Имя:",contactLabel:"Email:",messageLabel:"Сообщение:",sendBtn:"Отправить"},
  hy:{
    heroTitle:"Sophia & IT",heroSubtitle:"Գաղափարները վերածում ենք թվային իրականության",heroButton:"Կապ մեզ հետ",
    infoTitle:"Տեղեկություններ",addressLabel:"Հասցե՝",
    address:"ՀՀ, Երևան, Մովսես Խորենացի փ․ 26ա, գրասենյակ 210",
    emailLabel:"Էլ․ փոստ՝",email:"sophia.services.office@gmail.com",
    dateLabel:"Գրանցման ամսաթիվ՝",date:"08.08.2025",
    servicesTitle:"Ծառայություններ",
    services:[
      "Ծրագրային ապահովման մշակում և սպասարկում՝ Web/Mobile/Desktop ծրագրեր, թարմացումներ",
      "Վեբկայքեր և էլ․ առևտուր՝ կորպորատիվ կայքեր, խանութներ, սպասարկում",
      "Տվյալների մշակում և վերլուծություն՝ մուտքագրում, մաքրում, պատկերավորում, տվյալների բազաներ",
      "ՏՏ խորհրդատվություն և աջակցություն՝ լուծումներ, ամպային ծառայություններ, ուսուցում",
      "Այլ ՏՏ ծառայություններ՝ API, ավտոմատացում, UI/UX դիզայն"
    ],
    contactTitle:"Կապ մեզ հետ",nameLabel:"Անուն՝",contactLabel:"Էլ․ փոստ՝",messageLabel:"Նշում՝",sendBtn:"Ուղարկել"},
  ar:{
    heroTitle:"Sophia & IT",heroSubtitle:"تحويل الأفكار إلى واقع رقمي",heroButton:"اتصل بنا",
    infoTitle:"معلومات العمل",addressLabel:"العنوان:",
    address:"يريفان، شارع موفسيس خوريناتسي 26a، مكتب 210",
    emailLabel:"البريد الإلكتروني:",email:"sophia.services.office@gmail.com",
    dateLabel:"تاريخ التسجيل:",date:"08.08.2025",
    servicesTitle:"الخدمات",
    services:[
      "تطوير وصيانة البرمجيات: تطبيقات Web / Mobile / Desktop، تحديثات وتحسينات",
      "المواقع والتجارة الإلكترونية: مواقع الشركات، المتاجر الإلكترونية، الصيانة",
      "معالجة البيانات والتحليل: إدخال البيانات، التنظيف، التصور، قواعد البيانات",
      "الاستشارات والدعم: الحلول، الخدمات السحابية، التدريب",
      "خدمات تقنية أخرى: تطوير API، الأتمتة، تصميم UI/UX"
    ],
    contactTitle:"اتصل بنا",nameLabel:"الاسم:",contactLabel:"البريد الإلكتروني:",messageLabel:"الرسالة:",sendBtn:"إرسال"}
};

function setLang(lang){
  const t=data[lang];
  document.body.dir=(lang==="ar")?"rtl":"ltr";
  document.getElementById("heroTitle").textContent=t.heroTitle;
  document.getElementById("heroSubtitle").textContent=t.heroSubtitle;
  document.getElementById("heroButton").textContent=t.heroButton;
  document.getElementById("infoTitle").textContent=t.infoTitle;
  document.getElementById("addressLabel").textContent=t.addressLabel;
  document.getElementById("address").textContent=t.address;
  document.getElementById("emailLabel").textContent=t.emailLabel;
  document.getElementById("emailLink").textContent=t.email;
  document.getElementById("emailLink").href="mailto:"+t.email;
  document.getElementById("dateLabel").textContent=t.dateLabel;
  document.getElementById("date").textContent=t.date;
  document.getElementById("servicesTitle").textContent=t.servicesTitle;

  // 🃏 服务 - 卡片模式输出
  const icons = ["🖥️","🌐","📊","💡","⚙️"];
  document.getElementById("services").innerHTML = t.services.map((s,i)=>
    `<div><span class="icon">${icons[i] || "🔹"}</span> ${s}</div>`
  ).join("");

  document.getElementById("contactTitle").textContent=t.contactTitle;
  document.getElementById("nameLabel").childNodes[0].textContent=t.nameLabel+" ";
  document.getElementById("contactLabel").childNodes[0].textContent=t.contactLabel+" ";
  document.getElementById("messageLabel").childNodes[0].textContent=t.messageLabel+" ";
  document.getElementById("sendBtn").textContent=t.sendBtn;
}

// 默认语言
setLang("en");
document.getElementById("year").textContent=new Date().getFullYear();
