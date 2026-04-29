// ============================================
// BRIGHTEN — i18n / Localization Module
// Supports: en (English), zh (中文), ms (Bahasa Melayu)
// ============================================

const I18N = (function () {
  'use strict';

  const SUPPORTED_LOCALES = ['en', 'zh', 'ms'];
  const STORAGE_KEY = 'brighten-lang';

  // ─── Translations ─────────────────────────
  const LOCALE = {
    en: {
      'nav.home': 'Home',
      'nav.careers': 'Careers',
      'nav.scan': '📷 Scan',
      'nav.scan_now': '📷 Scan Now',
      'nav.home_arrow': '← Home',
      'nav.careers_arrow': '← Careers',

      'hero.badge': '✨ AR-Powered Learning Toys',
      'hero.title': 'Scan Your Toy.<br><span class="highlight">Meet Your Hero!</span>',
      'hero.subtitle': 'Point your phone at any Brighten figure to bring it to life — then chat with your favourite career character!',
      'hero.cta': '📷 Start Scanning',
      'section.how': 'How It Works 🪄',
      'step1.title': 'Pick up your toy',
      'step1.desc': 'Grab any Brighten career figure from the set',
      'step2.title': 'Tap "Start Scanning"',
      'step2.desc': 'Open the camera and point it at your toy',
      'step3.title': 'Your hero appears!',
      'step3.desc': 'Watch the character come to life in AR',
      'step4.title': 'Ask anything!',
      'step4.desc': 'Chat with your hero and learn about their job',
      'section.heroes': 'Meet the Heroes 🌟',
      'btn.explore': 'Explore All Careers →',

      'footer': '© 2026 Brighten · For Bright Futures',

      'careers.title': 'Career Heroes 🌟',
      'careers.subtitle': 'Tap a card to learn more, then scan your toy!',

      'career.does': 'What does a {name} do? 🤔',
      'career.facts': 'Did you know? 🤩',
      'career.cta': 'Ready to meet your {name} hero? Grab your toy and scan it!',
      'career.cta_btn': '📷 Scan to Meet Me!',

      'ar.hint': '📷 Point at your toy to scan',
      'ar.test_btn': '🧪 Test',
      'ar.test_title': '✨ Select a Career to Test',
      'ar.cancel': 'Cancel',
      'ar.online': 'Online • Ready to chat!',

      'career.programmer': 'Programmer',
      'career.police': 'Police Officer',
      'career.teacher': 'Teacher',
      'career.farmer': 'Farmer',
      'career.doctor': 'Doctor',
      'career.astronaut': 'Astronaut',

      'tag.technology': 'Technology',
      'tag.public_safety': 'Public Safety',
      'tag.education': 'Education',
      'tag.agriculture': 'Agriculture',
      'tag.healthcare': 'Healthcare',
      'tag.space': 'Space',

      'desc.programmer': 'Builds apps, games, and websites with code',
      'desc.police': 'Keeps communities safe every day',
      'desc.teacher': 'Inspires children to love learning',
      'desc.farmer': 'Grows food that feeds the world',
      'desc.doctor': 'Heals people and saves lives',
      'desc.astronaut': 'Explores the universe beyond Earth',

      // Career intro
      'intro.programmer': 'Programmers write instructions for computers to follow. They build the apps, games, and websites you use every day!',
      'intro.police': 'Police officers protect people and keep communities safe. They are always ready to help when someone is in trouble!',
      'intro.teacher': 'Teachers help children learn new things every day. They make learning fun and exciting for everyone in the classroom!',
      'intro.farmer': 'Farmers grow the food that feeds the whole world. Without farmers, there would be no vegetables, fruit, or rice on our plates!',
      'intro.doctor': 'Doctors help sick people get better and keep healthy people well. They study the human body for many years to become experts!',
      'intro.astronaut': 'Astronauts travel beyond Earth to explore outer space. They live on space stations, conduct experiments, and push the limits of human discovery!',

      // Career 'does' titles
      'does.do_title.programmer.0': 'Write code',
      'does.do_desc.programmer.0': 'Type special instructions that tell computers exactly what to do',
      'does.do_title.programmer.1': 'Build games & apps',
      'does.do_desc.programmer.1': 'Turn ideas into real things people can use on phones and computers',
      'does.do_title.programmer.2': 'Fix bugs',
      'does.do_desc.programmer.2': 'Find and solve problems when something in the code goes wrong',

      'does.do_title.police.0': 'Patrol the streets',
      'does.do_desc.police.0': 'Drive or walk around to make sure everyone is safe',
      'does.do_title.police.1': 'Solve cases',
      'does.do_desc.police.1': 'Investigate what happened and find out the truth',
      'does.do_title.police.2': 'Help the community',
      'does.do_desc.police.2': 'Assist people who are lost, hurt, or in danger',

      'does.do_title.teacher.0': 'Plan lessons',
      'does.do_desc.teacher.0': 'Prepare fun and interesting activities for students to learn',
      'does.do_title.teacher.1': 'Explain ideas',
      'does.do_desc.teacher.1': 'Break down tricky topics so everyone can understand them',
      'does.do_title.teacher.2': 'Encourage students',
      'does.do_desc.teacher.2': 'Cheer students on and help them believe in themselves',

      'does.do_title.farmer.0': 'Plant crops',
      'does.do_desc.farmer.0': 'Sow seeds in the ground and care for them as they grow',
      'does.do_title.farmer.1': 'Use big machines',
      'does.do_desc.farmer.1': 'Drive tractors and harvesters to tend to large fields',
      'does.do_title.farmer.2': 'Work with nature',
      'does.do_desc.farmer.2': 'Watch the weather and seasons to know when to plant and harvest',

      'does.do_title.doctor.0': 'Examine patients',
      'does.do_desc.doctor.0': 'Check your body to understand what might be wrong',
      'does.do_title.doctor.1': 'Prescribe medicine',
      'does.do_desc.doctor.1': 'Choose the right treatment to help people feel better',
      'does.do_title.doctor.2': 'Perform operations',
      'does.do_desc.doctor.2': 'Some doctors do surgery to fix problems inside the body',

      'does.do_title.astronaut.0': 'Travel to space',
      'does.do_desc.astronaut.0': 'Launch on a rocket and orbit the Earth at 28,000 km/h',
      'does.do_title.astronaut.1': 'Run experiments',
      'does.do_desc.astronaut.1': 'Conduct science tests that can only be done in zero gravity',
      'does.do_title.astronaut.2': 'Do spacewalks',
      'does.do_desc.astronaut.2': 'Float outside the spacecraft to repair equipment',

      // Career facts
      'fact.programmer.0': '🌍 There are over 700 different programming languages in the world!',
      'fact.programmer.1': '🎮 The first video game was created in 1958 — it was a simple tennis game.',
      'fact.programmer.2': '🤖 Programmers are now teaching computers to think and learn on their own.',

      'fact.police.0': '🚨 Police sirens are designed to be heard from over 1km away!',
      'fact.police.1': '🐕 Police dogs can smell things 100,000 times better than humans.',
      'fact.police.2': '🌐 Police officers in different countries wear very different uniforms.',

      'fact.teacher.0': '📖 The average teacher reads over 1,000 student essays every year!',
      'fact.teacher.1': '🌱 Studies show a great teacher can change a student\'s life forever.',
      'fact.teacher.2': '🏫 In Finland, teachers are respected as much as doctors and lawyers.',

      'fact.farmer.0': '🌍 Farmers produce enough food to feed 8 billion people on Earth!',
      'fact.farmer.1': '🐄 One dairy cow can produce up to 30 litres of milk every single day.',
      'fact.farmer.2': '🌾 Rice is the main food for more than half the world\'s population.',

      'fact.doctor.0': '🧠 The human brain has about 86 billion neurons — doctors are still studying it!',
      'fact.doctor.1': '❤️ Your heart beats around 100,000 times every single day.',
      'fact.doctor.2': '🩺 The stethoscope was invented in 1816 using a rolled-up piece of paper!',

      'fact.astronaut.0': '🌌 Space is completely silent — sound cannot travel in a vacuum!',
      'fact.astronaut.1': '🌍 Astronauts on the ISS see 16 sunrises and sunsets every day.',
      'fact.astronaut.2': '🍕 Astronauts can\'t eat pizza in space — crumbs float and damage equipment!',

      // Preset questions (shown as quick-reply buttons)
      'preset.programmer.0': 'Can you tell me all about what programmers do every day? 💻',
      'preset.programmer.1': "What's the most exciting project you've ever worked on?",
      'preset.programmer.2': "How did you learn to code and what advice do you have for kids?",
      'preset.police.0': 'Can you share some interesting stories about helping people in your community? 🚔',
      'preset.police.1': "What does a typical day look like for a police officer?",
      'preset.police.2': "How do you train to become a police officer and what skills are important?",
      'preset.teacher.0': "What's your favorite thing about teaching and why? 📚",
      'preset.teacher.1': 'Can you share a story about a student who really inspired you?',
      'preset.teacher.2': "How do you make difficult subjects fun and easy to understand?",
      'preset.farmer.0': 'Can you tell me all about life on a farm and what you do each day? 🐄',
      'preset.farmer.1': "What's the most interesting thing about growing food and caring for animals?",
      'preset.farmer.2': "How do the seasons affect your work on the farm?",
      'preset.doctor.0': 'Can you explain what doctors do to help people stay healthy? 🩺',
      'preset.doctor.1': "What's the most rewarding part of being a doctor?",
      'preset.doctor.2': 'How does the human body work and what are some cool facts about it?',
      'preset.astronaut.0': "Can you describe what it's really like to live and work in space? 🚀",
      'preset.astronaut.1': 'What was the most amazing thing you saw in space?',
      'preset.astronaut.2': 'How do astronauts train and prepare for space missions?',
      'preset.default.0': "Can you tell me all about your job?",
      'preset.default.1': "Why is your work important for our community?",
      'preset.default.2': "What's the most interesting part of what you do every day?",

      'chat.header': '💬 Chat with {name}',
      'chat.welcome': "Hi! I'm a {name}! Ask me anything about my job! 😊",
      'chat.placeholder': 'Ask me anything...',

      'chat.fallback1': "That's a great question! Let me think... 🤔",
      'chat.fallback2': "Wow, you're so curious! I love talking about my job! 🌟",
      'chat.fallback3': "Hmm, let me tell you more about what I do every day!",
      'chat.fallback4': "That's one of my favorite things to talk about! ✨",

      'lang.switch': 'Language',
      'lang.en': 'English',
      'lang.zh': '中文',
      'lang.ms': 'Bahasa Melayu',

      'career.mini.programmer': 'Programmer',
      'career.mini.police': 'Police Officer',
      'career.mini.teacher': 'Teacher',
      'career.mini.farmer': 'Farmer',
      'career.mini.doctor': 'Doctor',
      'career.mini.astronaut': 'Astronaut',

      'careers.cta': 'Already know who you want to meet? Skip ahead and scan your toy!',
      'careers.cta_btn': '📷 Start Scanning',
    },

    zh: {
      'nav.home': '首页',
      'nav.careers': '职业',
      'nav.scan': '📷 扫描',
      'nav.scan_now': '📷 立即扫描',
      'nav.home_arrow': '← 首页',
      'nav.careers_arrow': '← 职业列表',

      'hero.badge': '✨ AR 赋能的学习玩具',
      'hero.title': '扫描你的玩具。<br><span class="highlight">认识你的英雄！</span>',
      'hero.subtitle': '用手机对准任何 Brighten 人偶，让它活起来 — 然后与你最喜欢的职业角色聊天！',
      'hero.cta': '📷 开始扫描',
      'section.how': '玩法介绍 🪄',
      'step1.title': '拿起你的玩具',
      'step1.desc': '从套件中拿出任何一个 Brighten 职业人偶',
      'step2.title': '点击「开始扫描」',
      'step2.desc': '打开摄像头对准你的人偶',
      'step3.title': '英雄出现！',
      'step3.desc': '在 AR 中看到角色活起来',
      'step4.title': '随便问！',
      'step4.desc': '和你的英雄聊天，了解他们的职业',
      'section.heroes': '认识英雄们 🌟',
      'btn.explore': '查看所有职业 →',

      'footer': '© 2026 Brighten · 点亮未来',

      'careers.title': '职业英雄 🌟',
      'careers.subtitle': '点击卡片了解更多，然后扫描你的玩具！',

      'career.does': '{name} 是做什么的？🤔',
      'career.facts': '你知道吗？🤩',
      'career.cta': '准备好见你的 {name} 英雄了吗？拿起玩具扫描吧！',
      'career.cta_btn': '📷 扫描见我！',

      'ar.hint': '📷 将摄像头对准你的玩具进行扫描',
      'ar.test_btn': '🧪 测试',
      'ar.test_title': '✨ 选择一个职业进行测试',
      'ar.cancel': '取消',
      'ar.online': '在线 · 随时聊天！',

      'career.programmer': '程序员',
      'career.police': '警察',
      'career.teacher': '老师',
      'career.farmer': '农民',
      'career.doctor': '医生',
      'career.astronaut': '宇航员',

      'tag.technology': '科技',
      'tag.public_safety': '公共安全',
      'tag.education': '教育',
      'tag.agriculture': '农业',
      'tag.healthcare': '医疗',
      'tag.space': '太空',

      'desc.programmer': '用代码构建应用、游戏和网站',
      'desc.police': '每天守护社区安全',
      'desc.teacher': '激发孩子们对学习的热爱',
      'desc.farmer': '种植粮食喂养世界',
      'desc.doctor': '治愈疾病，拯救生命',
      'desc.astronaut': '探索地球之外的宇宙',

      'intro.programmer': '程序员用计算机无法理解的「编程语言」写下指令。你每天使用的应用、游戏和网站，都是程序员建造的！',
      'intro.police': '警察保护人们的安全，维护社区的秩序。每当有人遇到麻烦，他们总是第一时间赶到！',
      'intro.teacher': '老师每天都帮助孩子们学习新知识。他们把课堂变得有趣又精彩，让每个孩子都爱上学习！',
      'intro.farmer': '农民种植粮食，养活整个世界。没有农民，我们的餐桌上就不会有蔬菜、水果和大米！',
      'intro.doctor': '医生帮助生病的人恢复健康，也帮助健康的人保持健康。他们花了多年时间研究人体，成为专家！',
      'intro.astronaut': '宇航员飞越地球，探索外太空。他们在空间站生活、做实验，不断突破人类探索的极限！',

      'does.do_title.programmer.0': '写代码',
      'does.do_desc.programmer.0': '输入特殊的指令，告诉计算机该做什么',
      'does.do_title.programmer.1': '构建游戏和应用',
      'does.do_desc.programmer.1': '把想法变成真实的手机和电脑程序',
      'does.do_title.programmer.2': '修复 Bug',
      'does.do_desc.programmer.2': '找到并解决代码中的问题',

      'does.do_title.police.0': '巡逻街道',
      'does.do_desc.police.0': '开车或步行巡视，确保每个人安全',
      'does.do_title.police.1': '破案',
      'does.do_desc.police.1': '调查发生了什么，找出真相',
      'does.do_title.police.2': '帮助社区',
      'does.do_desc.police.2': '帮助迷路、受伤或遇到危险的人',

      'does.do_title.teacher.0': '备课',
      'does.do_desc.teacher.0': '准备有趣的活动让学生们学习',
      'does.do_title.teacher.1': '讲解知识',
      'does.do_desc.teacher.1': '把复杂的问题拆解成大家都能理解的内容',
      'does.do_title.teacher.2': '鼓励学生',
      'does.do_desc.teacher.2': '为学生们加油，帮他们相信自己',

      'does.do_title.farmer.0': '种植作物',
      'does.do_desc.farmer.0': '在土地里播下种子，细心呵护它们长大',
      'does.do_title.farmer.1': '操作大型机器',
      'does.do_desc.farmer.1': '驾驶拖拉机和收割机打理广阔的田地',
      'does.do_title.farmer.2': '与自然合作',
      'does.do_desc.farmer.2': '观察天气和季节，知道何时播种和收获',

      'does.do_title.doctor.0': '检查病人',
      'does.do_desc.doctor.0': '检查你的身体，了解哪里出了问题',
      'does.do_title.doctor.1': '开药',
      'does.do_desc.doctor.1': '选择合适的治疗方法帮助病人康复',
      'does.do_title.doctor.2': '做手术',
      'does.do_desc.doctor.2': '有些医生通过手术修复身体内部的问题',

      'does.do_title.astronaut.0': '飞向太空',
      'does.do_desc.astronaut.0': '坐上火箭，以 28,000 km/h 的速度环绕地球飞行',
      'does.do_title.astronaut.1': '做实验',
      'does.do_desc.astronaut.1': '进行只能在零重力环境下完成的科学实验',
      'does.do_title.astronaut.2': '太空行走',
      'does.do_desc.astronaut.2': '飘浮在飞船外面维修设备',

      'fact.programmer.0': '🌍 世界上有超过 700 种不同的编程语言！',
      'fact.programmer.1': '🎮 第一款电子游戏诞生于 1958 年——只是一个简单的网球游戏。',
      'fact.programmer.2': '🤖 程序员们正在教计算机自己学习和思考。',

      'fact.police.0': '🚨 警笛的声音可以从 1 公里外听到！',
      'fact.police.1': '🐕 警犬的嗅觉比人类灵敏 10 万倍。',
      'fact.police.2': '🌐 不同国家的警察制服非常不一样。',

      'fact.teacher.0': '📖 平均每位老师每年要阅读超过 1,000 篇学生作文！',
      'fact.teacher.1': '🌱 研究显示，一位好老师可以改变一个学生的一生。',
      'fact.teacher.2': '🏫 在芬兰，老师的地位和医生、律师一样受尊敬。',

      'fact.farmer.0': '🌍 农民生产的粮食足以养活地球上 80 亿人！',
      'fact.farmer.1': '🐄 一头奶牛每天可以产出多达 30 升牛奶。',
      'fact.farmer.2': '🌾 大米是全世界一半以上人口的主食。',

      'fact.doctor.0': '🧠 人类大脑约有 860 亿个神经元——医生们仍在研究它！',
      'fact.doctor.1': '❤️ 你的心脏每天跳动约 10 万次。',
      'fact.doctor.2': '🩺 听诊器于 1816 年用一卷纸发明！',

      'fact.astronaut.0': '🌌 太空中完全无声——声音在真空中无法传播！',
      'fact.astronaut.1': '🌍 国际空间站上的宇航员每天看到 16 次日出和日落。',
      'fact.astronaut.2': '🍕 宇航员不能在太空吃披萨——碎屑会飘浮并损坏设备！',

      'preset.programmer.0': '你能给讲讲程序员每天都做什么吗？💻',
      'preset.programmer.1': '你做过最棒的项目是什么？',
      'preset.programmer.2': '你是怎么学会编程的？给小朋友有什么建议？',
      'preset.police.0': '能分享一些帮助社区人们的有趣故事吗？🚔',
      'preset.police.1': '警察的日常工作是什么样的？',
      'preset.police.2': '要怎么做才能成为一名警察？需要什么技能？',
      'preset.teacher.0': '你最喜欢教学的什么？📚',
      'preset.teacher.1': '有没有哪个学生让你特别感动？',
      'preset.teacher.2': '你怎么把难懂的知识变得有趣又容易理解？',
      'preset.farmer.0': '能告诉我农场生活是什么样的吗？🐄',
      'preset.farmer.1': '种食物和照顾动物最有趣的地方是什么？',
      'preset.farmer.2': '四季变化对你的工作有什么影响？',
      'preset.doctor.0': '能讲讲医生怎么帮人们保持健康吗？🩺',
      'preset.doctor.1': '做医生最让你有成就感的是什么？',
      'preset.doctor.2': '人体是怎么工作的？有什么酷知识？',
      'preset.astronaut.0': '在太空生活和工作到底是什么感觉？🚀',
      'preset.astronaut.1': '你在太空看到过最震撼的东西是什么？',
      'preset.astronaut.2': '宇航员是怎么训练和准备太空任务的？',
      'preset.default.0': '能介绍一下你的工作吗？',
      'preset.default.1': '你的工作为什么对我们的社区很重要？',
      'preset.default.2': '你工作中最有趣的部分是什么？',

      'chat.header': '💬 和 {name} 聊天',
      'chat.welcome': '嗨！我是 {name}！关于我的工作，你随便问！😊',
      'chat.placeholder': '随便问我什么...',

      'chat.fallback1': '好问题！让我想想…… 🤔',
      'chat.fallback2': '哇，你真好奇！我最喜欢聊我的工作了！🌟',
      'chat.fallback3': '嗯，让我给你讲讲我每天都做什么吧！',
      'chat.fallback4': '这是我最喜欢聊的话题之一！✨',

      'lang.switch': '语言',
      'lang.en': 'English',
      'lang.zh': '中文',
      'lang.ms': 'Bahasa Melayu',

      'career.mini.programmer': '程序员',
      'career.mini.police': '警察',
      'career.mini.teacher': '老师',
      'career.mini.farmer': '农民',
      'career.mini.doctor': '医生',
      'career.mini.astronaut': '宇航员',

      'careers.cta': '已经知道你想见谁了吗？直接跳过，扫描你的玩具吧！',
      'careers.cta_btn': '📷 开始扫描',
    },

    ms: {
      'nav.home': 'Laman Utama',
      'nav.careers': 'Kerjaya',
      'nav.scan': '📷 Imbas',
      'nav.scan_now': '📷 Imbas Sekarang',
      'nav.home_arrow': '← Laman Utama',
      'nav.careers_arrow': '← Kerjaya',

      'hero.badge': '✨ Mainan Pembelajaran Dikuasakan AR',
      'hero.title': 'Imbas Mainan Anda.<br><span class="highlight">Jumpa Wira Anda!</span>',
      'hero.subtitle': 'Arahkan telefon ke mana-mana patung Brighten untuk menghidupkannya — kemudian berbual dengan watak kerjaya kegemaran anda!',
      'hero.cta': '📷 Mulakan Imbasan',
      'section.how': 'Cara Ia Berfungsi 🪄',
      'step1.title': 'Ambil mainan anda',
      'step1.desc': 'Ambil mana-mana patung kerjaya Brighten dari set',
      'step2.title': 'Tekan "Mulakan Imbasan"',
      'step2.desc': 'Buka kamera dan arahkan ke mainan anda',
      'step3.title': 'Wira anda muncul!',
      'step3.desc': 'Saksikan watak menjadi hidup dalam AR',
      'step4.title': 'Tanya apa sahaja!',
      'step4.desc': 'Berbual dengan wira anda dan belajar tentang pekerjaan mereka',
      'section.heroes': 'Kenali Wira 🌟',
      'btn.explore': 'Terokai Semua Kerjaya →',

      'footer': '© 2026 Brighten · Untuk Masa Depan Cerah',

      'careers.title': 'Wira Kerjaya 🌟',
      'careers.subtitle': 'Ketik kad untuk ketahui lebih, kemudian imbas mainan anda!',

      'career.does': 'Apa yang {name} lakukan? 🤔',
      'career.facts': 'Tahukah anda? 🤩',
      'career.cta': 'Sedia berjumpa wira {name} anda? Ambil mainan dan imbasnya!',
      'career.cta_btn': '📷 Imbas untuk Berjumpa Saya!',

      'ar.hint': '📷 Arahkan ke mainan anda untuk imbas',
      'ar.test_btn': '🧪 Uji',
      'ar.test_title': '✨ Pilih Kerjaya untuk Diuji',
      'ar.cancel': 'Batal',
      'ar.online': 'Online • Sedia berbual!',

      'career.programmer': 'Pengaturcara',
      'career.police': 'Pegawai Polis',
      'career.teacher': 'Guru',
      'career.farmer': 'Petani',
      'career.doctor': 'Doktor',
      'career.astronaut': 'Angkasawan',

      'tag.technology': 'Teknologi',
      'tag.public_safety': 'Keselamatan Awam',
      'tag.education': 'Pendidikan',
      'tag.agriculture': 'Pertanian',
      'tag.healthcare': 'Penjagaan Kesihatan',
      'tag.space': 'Angkasa',

      'desc.programmer': 'Membina aplikasi, permainan dan laman web dengan kod',
      'desc.police': 'Menjaga keselamatan komuniti setiap hari',
      'desc.teacher': 'Memberi inspirasi kanak-kanak untuk suka belajar',
      'desc.farmer': 'Menanam makanan yang memberi makan dunia',
      'desc.doctor': 'Menyembuhkan orang dan menyelamatkan nyawa',
      'desc.astronaut': 'Meneroka alam semesta di luar Bumi',

      'intro.programmer': 'Pengaturcara menulis arahan untuk komputer ikuti. Mereka membina aplikasi, permainan, dan laman web yang anda guna setiap hari!',
      'intro.police': 'Pegawai polis melindungi orang dan menjaga keselamatan komuniti. Mereka sentiasa bersedia membantu apabila ada yang dalam kesusahan!',
      'intro.teacher': 'Guru membantu kanak-kanak belajar perkara baru setiap hari. Mereka menjadikan pembelajaran menyeronokkan dan menarik untuk semua orang di dalam bilik darjah!',
      'intro.farmer': 'Petani menanam makanan yang memberi makan seluruh dunia. Tanpa petani, tiada sayur, buah, atau nasi di atas pinggan kita!',
      'intro.doctor': 'Doktor membantu orang sakit sembuh dan menjaga orang sihat kekal sihat. Mereka mengkaji tubuh manusia selama bertahun-tahun untuk menjadi pakar!',
      'intro.astronaut': 'Angkasawan terbang melangkaui Bumi untuk meneroka angkasa lepas. Mereka tinggal di stesen angkasa, menjalankan eksperimen, dan menolak had penemuan manusia!',

      'does.do_title.programmer.0': 'Tulis kod',
      'does.do_desc.programmer.0': 'Taip arahan khas yang memberitahu komputer apa yang perlu dilakukan',
      'does.do_title.programmer.1': 'Bina permainan & aplikasi',
      'does.do_desc.programmer.1': 'Ubah idea menjadi benda nyata yang orang boleh guna di telefon dan komputer',
      'does.do_title.programmer.2': 'Baiki pepijat',
      'does.do_desc.programmer.2': 'Cari dan selesaikan masalah apabila kod tidak berfungsi',

      'does.do_title.police.0': 'Ronda jalanan',
      'does.do_desc.police.0': 'Pandu atau berjalan untuk pastikan semua orang selamat',
      'does.do_title.police.1': 'Selesaikan kes',
      'does.do_desc.police.1': 'Siasat apa yang berlaku dan cari kebenaran',
      'does.do_title.police.2': 'Bantu komuniti',
      'does.do_desc.police.2': 'Bantu orang yang tersesat, cedera, atau dalam bahaya',

      'does.do_title.teacher.0': 'Rancang pelajaran',
      'does.do_desc.teacher.0': 'Sediakan aktiviti menyeronokkan untuk murid belajar',
      'does.do_title.teacher.1': 'Terangkan idea',
      'does.do_desc.teacher.1': 'Jelaskan topik rumit supaya semua orang faham',
      'does.do_title.teacher.2': 'Galakkan murid',
      'does.do_desc.teacher.2': 'Beri semangat kepada murid dan bantu mereka percaya pada diri sendiri',

      'does.do_title.farmer.0': 'Tanam tanaman',
      'does.do_desc.farmer.0': 'Semai benih di tanah dan jaga semasa ia membesar',
      'does.do_title.farmer.1': 'Guna mesin besar',
      'does.do_desc.farmer.1': 'Pandu traktor dan penuai untuk urus ladang yang luas',
      'does.do_title.farmer.2': 'Bekerja dengan alam',
      'does.do_desc.farmer.2': 'Perhatikan cuaca dan musim untuk tahu bila menanam dan menuai',

      'does.do_title.doctor.0': 'Periksa pesakit',
      'does.do_desc.doctor.0': 'Periksa badan anda untuk faham apa yang mungkin salah',
      'does.do_title.doctor.1': 'Preskripsi ubat',
      'does.do_desc.doctor.1': 'Pilih rawatan yang sesuai untuk bantu orang berasa lebih baik',
      'does.do_title.doctor.2': 'Lakukan pembedahan',
      'does.do_desc.doctor.2': 'Sesetengah doktor melakukan pembedahan untuk baiki masalah dalam badan',

      'does.do_title.astronaut.0': 'Perjalanan ke angkasa',
      'does.do_desc.astronaut.0': 'Lancar dengan roket dan orbit Bumi pada 28,000 km/j',
      'does.do_title.astronaut.1': 'Jalankan eksperimen',
      'does.do_desc.astronaut.1': 'Lakukan ujian sains yang hanya boleh dilakukan dalam graviti sifar',
      'does.do_title.astronaut.2': 'Berjalan di angkasa',
      'does.do_desc.astronaut.2': 'Terapung di luar kapal angkasa untuk membaiki peralatan',

      'fact.programmer.0': '🌍 Terdapat lebih 700 bahasa pengaturcaraan berbeza di dunia!',
      'fact.programmer.1': '🎮 Permainan video pertama dicipta pada tahun 1958 — ia adalah permainan tenis mudah.',
      'fact.programmer.2': '🤖 Pengaturcara kini mengajar komputer untuk berfikir dan belajar sendiri.',

      'fact.police.0': '🚨 Siren polis direka untuk didengar dari jarak lebih 1km!',
      'fact.police.1': '🐕 Anjing polis boleh menghidu benda 100,000 kali lebih baik daripada manusia.',
      'fact.police.2': '🌐 Pegawai polis di negara berbeza memakai pakaian seragam yang sangat berbeza.',

      'fact.teacher.0': '📖 Rata-rata guru membaca lebih 1,000 esei pelajar setiap tahun!',
      'fact.teacher.1': '🌱 Kajian menunjukkan guru hebat boleh mengubah hidup seseorang selama-lamanya.',
      'fact.teacher.2': '🏫 Di Finland, guru dihormati setaraf dengan doktor dan peguam.',

      'fact.farmer.0': '🌍 Petani menghasilkan makanan yang mencukupi untuk 8 bilion orang di Bumi!',
      'fact.farmer.1': '🐄 Seekor lembu tenusu boleh menghasilkan sehingga 30 liter susu setiap hari.',
      'fact.farmer.2': '🌾 Padi adalah makanan utama untuk lebih separuh penduduk dunia.',

      'fact.doctor.0': '🧠 Otak manusia mempunyai kira-kira 86 bilion neuron — doktor masih mengkajinya!',
      'fact.doctor.1': '❤️ Jantung anda berdegup kira-kira 100,000 kali setiap hari.',
      'fact.doctor.2': '🩺 Stetoskop dicipta pada tahun 1816 menggunakan kertas yang digulung!',

      'fact.astronaut.0': '🌌 Angkasa senyap sepenuhnya — bunyi tidak boleh bergerak dalam vakum!',
      'fact.astronaut.1': '🌍 Angkasawan di ISS melihat 16 kali terbit dan terbenam matahari setiap hari.',
      'fact.astronaut.2': '🍕 Angkasawan tidak boleh makan pizza di angkasa — serbuknya terapung dan merosakkan peralatan!',

      'preset.programmer.0': 'Boleh awak ceritakan tentang apa yang pengaturcara buat setiap hari? 💻',
      'preset.programmer.1': 'Apa projek paling menarik yang pernah awak kerjakan?',
      'preset.programmer.2': 'Bagaimana awak belajar kod dan apa nasihat untuk kanak-kanak?',
      'preset.police.0': 'Boleh awak kongsikan cerita menarik tentang membantu orang dalam komuniti? 🚔',
      'preset.police.1': 'Bagaimanakah hari biasa seorang pegawai polis?',
      'preset.police.2': 'Bagaimana cara untuk menjadi pegawai polis dan kemahiran apa yang penting?',
      'preset.teacher.0': 'Apa perkara kegemaran awak tentang mengajar dan kenapa? 📚',
      'preset.teacher.1': 'Boleh awak kongsikan cerita tentang seorang murid yang memberi inspirasi?',
      'preset.teacher.2': 'Bagaimana awak menjadikan subjek susah itu menyeronokkan?',
      'preset.farmer.0': 'Boleh ceritakan tentang kehidupan di ladang dan apa yang awak buat setiap hari? 🐄',
      'preset.farmer.1': 'Apa perkara paling menarik tentang menanam makanan dan menjaga haiwan?',
      'preset.farmer.2': 'Bagaimana musim mempengaruhi kerja awak di ladang?',
      'preset.doctor.0': 'Boleh awak terangkan apa yang doktor buat untuk bantu orang kekal sihat? 🩺',
      'preset.doctor.1': 'Apa bahagian paling memuaskan sebagai seorang doktor?',
      'preset.doctor.2': 'Bagaimana tubuh manusia berfungsi dan apa fakta menarik?',
      'preset.astronaut.0': 'Boleh awak gambarkan bagaimana rasanya tinggal dan bekerja di angkasa? 🚀',
      'preset.astronaut.1': 'Apa perkara paling menakjubkan yang awak lihat di angkasa?',
      'preset.astronaut.2': 'Bagaimana angkasawan berlatih dan bersedia untuk misi angkasa?',
      'preset.default.0': 'Boleh ceritakan tentang kerja awak?',
      'preset.default.1': 'Kenapa kerja awak penting untuk komuniti kita?',
      'preset.default.2': 'Apa bahagian paling menarik dalam kerja awak setiap hari?',

      'chat.header': '💬 Bual dengan {name}',
      'chat.welcome': 'Hai! Saya {name}! Tanya apa sahaja tentang kerja saya! 😊',
      'chat.placeholder': 'Tanya apa-apa...',

      'chat.fallback1': 'Soalan bagus! Biar saya fikir... 🤔',
      'chat.fallback2': 'Wah, awak memang ingin tahu! Saya suka bercakap tentang kerja saya! 🌟',
      'chat.fallback3': 'Hmm, biar saya ceritakan lebih lanjut apa yang saya buat setiap hari!',
      'chat.fallback4': 'Itu salah satu topik kegemaran saya! ✨',

      'lang.switch': 'Bahasa',
      'lang.en': 'English',
      'lang.zh': '中文',
      'lang.ms': 'Bahasa Melayu',

      'career.mini.programmer': 'Pengaturcara',
      'career.mini.police': 'Pegawai Polis',
      'career.mini.teacher': 'Guru',
      'career.mini.farmer': 'Petani',
      'career.mini.doctor': 'Doktor',
      'career.mini.astronaut': 'Angkasawan',

      'careers.cta': 'Sudah tahu siapa yang nak jumpa? Teruskan dan imbas mainan anda!',
      'careers.cta_btn': '📷 Mulakan Imbasan',
    },
  };

  // ─── Locale helpers ─────────────────────────
  let currentLocale = 'en';

  function detectLocale() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
    } catch (_) { /* noop */ }
    return 'en';
  }

  function setLocale(locale) {
    if (!SUPPORTED_LOCALES.includes(locale)) return;
    currentLocale = locale;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) { /* noop */ }
    document.documentElement.lang = locale;
    window.dispatchEvent(new CustomEvent('localechange', { detail: locale }));
    applyTranslations();
  }

  function getLocale() {
    return currentLocale;
  }

  function t(key, replacements) {
    const table = LOCALE[currentLocale] || LOCALE.en;
    let val = table[key] || LOCALE.en[key] || key;
    if (replacements) {
      for (const [k, v] of Object.entries(replacements)) {
        val = val.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      }
    }
    return val;
  }

  // ─── Translate page elements ────────────────
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const replacementKey = el.getAttribute('data-i18n-replace');
      let replacements = null;
      if (replacementKey) {
        const careerId = el.getAttribute('data-i18n-career-id');
        const careerName = t(`career.${careerId}`, null) || careerId;
        replacements = { name: careerName };
      }
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t(key, replacements);
      } else {
        el.innerHTML = t(key, replacements);
      }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    // Update globe badge
    const badge = document.querySelector('.lang-globe-badge');
    if (badge) {
      const codes = { en: 'EN', zh: '中文', ms: 'BM' };
      badge.textContent = codes[currentLocale] || 'EN';
    }
    // Apply ZCOOL XiaoWei font for Chinese text
    if (document.body) {
      document.body.style.fontFamily = currentLocale === 'zh'
        ? "'Nunito','ZCOOL XiaoWei',sans-serif"
        : '';
    }
    // --font-display can't hold comma-separated font stacks via setProperty reliably.
    // Instead, set a data attribute on html and use CSS selector.
    document.documentElement.dataset.locale = currentLocale;
  }

  // ─── Globe dropdown UI (only on home page) ──
  function createGlobeDropdown() {
    const container = document.createElement('div');
    container.className = 'lang-globe-wrap';
    container.setAttribute('data-i18n-ignore', '');

    // Globe trigger button
    const btn = document.createElement('button');
    btn.className = 'lang-globe-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Switch language');
    // Earth icon using SVG inline (matches the bold/playful style)
    btn.innerHTML = `<svg class="lang-globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <ellipse cx="12" cy="12" rx="4" ry="10"/>
      <path d="M2 12h20"/>
    </svg>
    <span class="lang-globe-badge">EN</span>`;

    // Dropdown panel
    const panel = document.createElement('div');
    panel.className = 'lang-globe-panel';

    const langs = [
      { code: 'en', label: '🇬🇧 English' },
      { code: 'zh', label: '🇨🇳 中文' },
      { code: 'ms', label: '🇲🇾 Bahasa Melayu' },
    ];

    langs.forEach(l => {
      const opt = document.createElement('button');
      opt.className = 'lang-globe-opt' + (l.code === currentLocale ? ' active' : '');
      opt.setAttribute('data-lang', l.code);
      opt.textContent = l.label;
      opt.addEventListener('click', () => {
        setLocale(l.code);
        panel.querySelectorAll('.lang-globe-opt').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        closeDropdown();
      });
      panel.appendChild(opt);
    });

    container.appendChild(btn);
    container.appendChild(panel);

    let open = false;

    function openDropdown() {
      open = true;
      panel.classList.add('open');
      btn.classList.add('active');
    }

    function closeDropdown() {
      open = false;
      panel.classList.remove('open');
      btn.classList.remove('active');
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (open) closeDropdown();
      else openDropdown();
    });

    // Click outside closes
    document.addEventListener('click', (e) => {
      if (open && !container.contains(e.target)) {
        closeDropdown();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && open) closeDropdown();
    });

    return container;
  }

  // ─── Init ───────────────────────────────────
  function init() {
    currentLocale = detectLocale();
    document.documentElement.lang = currentLocale;

    // Inject styles only once
    if (!document.getElementById('lang-globe-styles')) {
      const style = document.createElement('style');
      style.id = 'lang-globe-styles';
      style.textContent = `
        .lang-globe-wrap {
          position: relative;
          display: inline-flex;
        }

        /* ── Globe trigger button ── */
        .lang-globe-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          color: var(--dark);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          padding: 6px 12px;
          border: 2px solid var(--dark);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.15s;
          position: relative;
          z-index: 2;
        }

        .lang-globe-btn:hover {
          background: var(--dark);
          color: white;
          transform: translate(-1px, -1px);
        }

        .lang-globe-btn:active {
          transform: translate(1px, 1px);
        }

        .lang-globe-btn.active {
          background: var(--yellow);
          color: var(--dark);
          border-color: var(--yellow);
        }

        .lang-globe-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .lang-globe-btn.active .lang-globe-icon {
          transform: rotate(180deg);
        }

        .lang-globe-badge {
          font-size: 11px;
          font-weight: 800;
          line-height: 1;
        }

        /* ── Dropdown panel ── */
        .lang-globe-panel {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          min-width: 170px;
          background: white;
          border: 2px solid var(--dark);
          border-radius: 16px;
          padding: 6px;
          box-shadow: 4px 4px 0 var(--dark);
          opacity: 0;
          transform: translateY(-8px) scale(0.92);
          pointer-events: none;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 300;
        }

        .lang-globe-panel.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .lang-globe-opt {
          display: block;
          width: 100%;
          padding: 10px 14px;
          background: transparent;
          border: none;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: var(--dark);
          cursor: pointer;
          text-align: left;
          transition: all 0.15s;
        }

        .lang-globe-opt:hover {
          background: #f5f0eb;
          transform: translateX(4px);
        }

        .lang-globe-opt.active {
          background: var(--yellow);
          font-weight: 800;
        }

        .lang-globe-opt:not(:last-child) {
          margin-bottom: 2px;
        }

        /* ── Entry animation — each option drops in staggered ── */
        .lang-globe-panel.open .lang-globe-opt {
          animation: langOptPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
        }
        .lang-globe-panel.open .lang-globe-opt:nth-child(1) { animation-delay: 0.02s; }
        .lang-globe-panel.open .lang-globe-opt:nth-child(2) { animation-delay: 0.07s; }
        .lang-globe-panel.open .lang-globe-opt:nth-child(3) { animation-delay: 0.12s; }

        @keyframes langOptPop {
          from {
            opacity: 0;
            transform: translateX(-12px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @media (max-width: 600px) {
          .lang-globe-btn {
            padding: 5px 10px;
            font-size: 12px;
          }
          .lang-globe-icon {
            width: 16px;
            height: 16px;
          }
          .lang-globe-panel {
            min-width: 150px;
          }
          .lang-globe-opt {
            font-size: 13px;
            padding: 8px 12px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Insert the globe dropdown ONLY if we're on the home page
    if (window.location.pathname.endsWith('home.html') || window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/pages/') || window.location.pathname === '' || /\/toy-chat\/?$/.test(window.location.pathname)) {
      const navLinks = document.querySelector('nav .nav-links');
      if (navLinks && !navLinks.querySelector('.lang-globe-wrap')) {
        navLinks.insertBefore(createGlobeDropdown(), navLinks.firstChild);
      }
    }

    applyTranslations();

    // Ensure ZCOOL XiaoWei font is loaded
    const zhFontId = 'zh-font-stylesheet';
    if (!document.getElementById(zhFontId)) {
      const link = document.createElement('link');
      link.id = zhFontId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap';
      document.head.appendChild(link);
    }
  }

  // ─── On DOM ready ───────────────────────────
  function onReady() {
    init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  // ─── Public API ─────────────────────────────
  return {
    t,
    getLocale,
    setLocale,
    applyTranslations,
    SUPPORTED_LOCALES,
  };
})();
