"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const personalDetails = [
  ["姓名", "李邦一 / BY"],
  ["生日", "2006 年 6 月"],
  ["年龄", "20"],
  ["学校", "西交利物浦大学 XJTLU"],
  ["专业", "市场营销 Marketing"],
  ["GPA", "3.8 / 4.0"],
  ["预计毕业", "2028 年 6 月"],
  ["所在地", "苏州 / 深圳 / 上海，按实际场景流动"],
  ["邮箱", "vinbk361@gmail.com"],
  ["手机号", "18123818973"],
];

const profileStats = [
  ["Level", "20"],
  ["Major", "Marketing"],
  ["School", "XJTLU"],
  ["GPA", "3.8 / 4.0"],
  ["Focus", "Overseas Growth + Product Operation"],
  ["Tools", "Codex / VS Code / AI Workflow"],
];

const roleTags = ["Marketing Student", "Product Operation", "Overseas Growth", "AI Builder"];
const keywords = ["市场增长", "社区运营", "Vibe Coding", "海外营销", "个人产品", "AI Workflow"];

const projects = [
  {
    title: "Insta360 Intelligence",
    type: "Overseas Growth / Market Intelligence / API Dashboard",
    desc: "一个面向海外增长和营销决策的实时情报系统。它通过 API 自动获取公开市场数据，并经过关键词过滤、质量评分和策略归纳，自动抓取和筛选海外市场中与 Insta360、GoPro、DJI、运动相机、360 相机相关的公开信息，把零散的新闻、竞品信号和创作者内容整理成一个可以快速判断方向的工作台。",
    highlights: ["API 自动获取公开市场数据", "关键词过滤与质量评分", "竞品、新闻、创作者内容监测", "将零散信息转化为市场判断和行动建议", "已沉淀可复用 Dashboard Workflow"],
    href: "http://byydoujr.cn/insta360/",
    visual: "/assets/scene-code.png",
  },
  {
    title: "BY-Garden",
    type: "Personal iOS App / Habit / Fitness / Journal / Widget",
    desc: "一个像素风个人生活管理 App，围绕健身、打卡、日记、照片记录、Widget 和个人角色元素，探索如何用 AI Coding 把个人习惯系统产品化。",
    highlights: ["个人习惯与成长记录", "健身打卡与照片记录", "iOS Widget", "像素风个人 IP 元素", "从真实生活需求出发的长期项目"],
    href: "http://byydoujr.cn/garden/",
    visual: "/assets/scene-hamster.png",
  },
  {
    title: "Interactive Campaign Lab",
    type: "Quiz / H5 Campaign / Community Engagement",
    desc: "一组面向线上活动和社区传播的小型互动实验，包括类 MBTI 测试、角色匹配测试、活动页和问卷玩法。目标是快速验证轻量互动内容在社群传播、活动引流和用户参与中的复用价值。",
    highlights: ["类 MBTI / 角色匹配测试", "适合社群传播的小型互动页", "可用于游戏社区、品牌活动、问卷引流", "快速部署到 GitHub Pages / Vercel", "运营活动经验可复用"],
    href: "http://byydoujr.cn/quiz/",
    visual: "/assets/scene-journey.png",
  },
  {
    title: "Market Companion for Mom",
    type: "Family Tool / Stock Dashboard / Daily Market Companion",
    desc: "一个为妈妈定制的每日市场陪伴工具，把分散的行情、板块、新闻和个股信息整理成更容易理解的日常工作台。项目目标不是做复杂交易系统，而是帮助非专业用户快速理解今天市场发生了什么、哪些板块值得关注、风险在哪里。",
    highlights: ["来自真实家庭需求", "面向非专业用户的信息设计", "每日市场信息整合", "板块趋势、新闻、个股动态归纳", "让数据变成可读、可判断的日常工具"],
    href: "http://byydoujr.cn/",
    visual: "/assets/scene-sunset.png",
  },
];

const experiences = [
  {
    company: "Tencent",
    role: "Market Growth Intern",
    time: "2026.06 - 至今",
    direction: "Overseas Publishing / Product Operation / Social Media Operation",
    desc: "主要参与天美旗下游戏产品的海外发行、产品运营与社媒运营工作，围绕 Discord、Facebook、内容排期、社区活动、玩家反馈和运营资产建设进行执行与优化。",
    points: ["天美旗下游戏产品海外发行支持", "Discord / Facebook 社媒与社区运营", "海外玩家反馈整理", "社区内容排期与活动贴文", "问卷活动与用户 UID 收集", "社区基建与运营流程优化"],
  },
  {
    company: "NetEase Games",
    role: "Overseas Marketing",
    time: "2026.01 - 2026.05",
    desc: "以 Discord 社区运营、活动全链路执行和前端搭建为核心，参与海外游戏用户增长与内容生态建设。",
    points: ["《漫威争锋》活动网页搭建与用户行为数据埋点", "《蛋仔派对》国际服 Discord 主题周活动与玩家二创激励", "每月策划并撰写 20+ 条本地化社区内容", "《燕云十六声》Discord 社区基建优化", "Excel 社区看板与每周数据分析报告", "后续活动参与率提升约 15%"],
  },
  {
    company: "Shenzhen New Oriental",
    role: "Market Operation Intern",
    time: "2025.10 - 2026.01",
    desc: "负责微信公众号与小红书账号内容运营，通过推文、笔记和平台内容优化获取阅读、互动与潜在客户。",
    points: ["独立运营“大学城 weekly”微信公众号", "撰写发布 20+ 篇推文，累计阅读 10000+", "运营“深圳大学生屠鸭计划”小红书账号", "发布 20+ 篇内容，获赞 2000+，阅读量 10000+", "涨粉 100+"],
  },
  {
    company: "ZEEKR",
    role: "Market Operation Intern",
    time: "2025.07 - 2025.10",
    desc: "参与汽车门店市场运营、内容策划、线索收集、客户转化与区域市场数据分析。",
    points: ["负责懂车帝、汽车之家专栏内容规划，上线后专栏订阅量 1w+", "转化潜在客户到店试驾 30+ 人", "协助主播通过小风车转化 50+ 试驾、10+ 成交", "总计销售额超过 300w", "协同落地 10+ 场外展 / 入企 / 异业活动", "累计收集并转化潜在客户线索 2000+", "独立完成 6 份市场调研报告", "完成极氪汽车与金融报价单，成为深圳战区统一报价单模板"],
  },
  {
    company: "Shenzhen Jintaiyi Electronics",
    role: "Market Operation Consultant Intern",
    time: "2024.06 - 2024.08",
    desc: "参与消费电子产品外展活动、客户沟通、竞品分析和市场报告，为公司产品宣传与销售目标提供支持。",
    points: ["参与 5 场线下活动", "沟通客户 500+ 位", "整合 300+ 潜在客户名单", "协助 5G MiFi 产品秋季订单任务完成", "分析 5 款以上竞品功能特性与市场定位", "输出市场优化建议，助力品牌部门制定差异化营销策略"],
  },
];

const hobbies = [
  ["篮球", "喜欢篮球，也喜欢从竞技体育里理解节奏、对抗和长期训练。", "/assets/element-basketball.png"],
  ["羽毛球", "日常运动之一，保持身体状态和专注力。", "/assets/element-badminton.png"],
  ["电吉他 / 音乐", "西交利物浦大学海瑟西兰花乐队队长、电吉他手，组织和参与校内外演出 15+ 场。", "/assets/clean-guitar.png"],
  ["跑步 / 健身", "保持每周运动习惯，用训练对抗焦虑和拖延。", "/assets/cascade-fullbody.png"],
  ["仓鼠大爷", "生活里的陪伴角色，也是 BY Pixel IP 里的温暖彩蛋。", "/assets/avatar-hamster.png"],
  ["阅读与思考", "保持阅读与记录，关注故事、叙事、人文和自我成长。", "/assets/element-learning.png"],
  ["AI 工具探索", "持续学习 Codex、VS Code、AI Workflow，把想法变成可运行的小系统。", "/assets/element-coding.png"],
  ["出海与全球市场", "关注海外增长、跨文化社区、全球消费品牌和游戏出海。", "/assets/clean-thinking.png"],
];

const flow = ["Idea", "Prompt", "Code", "Preview", "Iterate", "Deploy"];
const waterfall = [
  "/assets/cascade-neutral.png",
  "/assets/cascade-smile.png",
  "/assets/cascade-laughing.png",
  "/assets/cascade-thinking.png",
  "/assets/cascade-surprised.png",
  "/assets/cascade-shy.png",
  "/assets/cascade-determined.png",
  "/assets/cascade-coding.png",
  "/assets/cascade-basketball.png",
  "/assets/cascade-badminton.png",
  "/assets/cascade-guitar.png",
  "/assets/cascade-learning.png",
  "/assets/cascade-fullbody.png",
];
const ambient = ["/assets/ambient-racket-clean.png", "/assets/ambient-heart-clean.png", "/assets/ambient-shuttle-clean.png", "/assets/ambient-ball-clean.png", "/assets/ambient-code-clean.png"];

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45 }} className={`border-2 border-[#2f241c] bg-[#fff8e9] shadow-pixel ${className}`}>
      {children}
    </motion.div>
  );
}

function SectionTitle({ no, title, sub }: { no: string; title: string; sub: string }) {
  return (
    <div className="mb-6 flex items-end gap-3">
      <span className="border-2 border-[#2f241c] bg-[#e89f38] px-3 py-1 font-black shadow-pixel-sm">{no}</span>
      <div>
        <h2 className="text-2xl font-black md:text-3xl">{title}</h2>
        <p className="text-sm text-[#766653]">{sub}</p>
      </div>
    </div>
  );
}

function VisualWaterfall() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      <div className="ambient-field">
        {[...ambient, ...ambient, ...ambient].map((src, index) => (
          <img key={`${src}-${index}`} src={src} alt="" style={{ maxWidth: 90, maxHeight: 72, objectFit: "contain" }} />
        ))}
      </div>
      {[0, 1, 2].map((col) => (
        <div key={col} className={`waterfall-column waterfall-column-${col + 1}`}>
          <div className="waterfall-track">
            {[...waterfall, ...waterfall].map((src, index) => (
              <span key={`${src}-${index}`} className="waterfall-item">
                <img src={src} alt="" style={{ width: "100%", maxHeight: 104, objectFit: "contain" }} />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="border-2 border-[#2f241c] bg-[#f6c453] px-2 py-1 text-xs font-black shadow-pixel-sm">{children}</span>;
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 md:px-8">
      <VisualWaterfall />
      <div className="relative z-10 mx-auto max-w-[1200px] space-y-16">
        <section className="relative grid min-h-[88vh] items-center gap-6 py-8 lg:grid-cols-[280px_1fr_260px]">
          <div className="absolute left-6 top-8 rotate-[-8deg] border-2 border-[#2f241c] bg-[#f6c453] px-3 py-1 text-sm font-black shadow-pixel-sm">PLAYER INFO</div>

          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between text-xs font-black">
              <span>PLAYER CARD</span>
              <span>LV.20</span>
            </div>
            <img className="mx-auto h-72 w-full object-contain" src="/assets/full-body-by.png" alt="李邦一像素角色" />
            <div className="mt-4 space-y-2 text-sm">
              {personalDetails.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[74px_1fr] gap-2 border-b border-[#d8c6aa] pb-1">
                  <span className="font-black text-[#9b5f16]">{label}</span>
                  <span className="font-bold text-[#2f241c]">{value}</span>
                </div>
              ))}
            </div>
          </Card>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center lg:text-left">
            <p className="mb-3 inline-block border-2 border-[#2f241c] bg-white px-3 py-1 text-sm font-black shadow-pixel-sm">市场营销学生 · 产品运营 · Vibe Coding Builder</p>
            <h1 className="text-5xl font-black leading-none md:text-7xl">个人网站</h1>
            <p className="mt-4 text-2xl font-bold">把想法做成能用的小系统。</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5f5042]">我喜欢从真实问题出发：先把需求想清楚，再用运营经验、AI 工具和一点点代码，把它做成能跑、能看、能复用的东西。</p>
            <p className="mt-5 font-black">A System. A Story.<br />Building ideas, one pixel at a time.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {roleTags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {[
                ["查看项目", "#projects"],
                ["查看简历", "#contact"],
                ["联系我", "#contact"],
              ].map(([label, href], index) => (
                <a key={label} href={href} className={`border-2 border-[#2f241c] px-5 py-3 font-black shadow-pixel-sm transition hover:-translate-y-1 ${index === 0 ? "bg-[#e89f38]" : "bg-[#fff8e9]"}`}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-3">
            {["Projects 04", "Internships 05", "GPA 3.8/4.0", "Current Focus AI Workflow"].map((item) => (
              <Card key={item} className="p-4 font-black transition hover:-translate-y-1">
                <span className="mr-2 text-[#e89f38]">◆</span>{item}
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="overflow-hidden p-3">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-2">
              <p className="font-black">BY World Archive</p>
              <p className="text-xs font-bold text-[#766653]">一张给网站定调的像素海报</p>
            </div>
            <img className="w-full border-2 border-[#2f241c] bg-[#f7edda] object-contain" src="/assets/by-world-banner.png" alt="BY Pixel IP visual banner" />
          </Card>
        </section>

        <section>
          <SectionTitle no="01" title="Personal Info" sub="基本信息 / Formal profile card" />
          <Card className="grid gap-5 p-6 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h3 className="text-3xl font-black">李邦一 / BY</h3>
              <p className="mt-2 leading-7 text-[#5f5042]">我现在在 XJTLU 学市场营销，主要关注海外增长、社区运营和产品运营。最近也在练习用 Codex 和 VS Code，把实习、生活里遇到的问题做成小工具。</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {keywords.map((item) => <Badge key={item}>{item}</Badge>)}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {profileStats.map(([label, value]) => (
                <div key={label} className="border-2 border-[#2f241c] bg-[#f7edda] p-3">
                  <p className="text-xs font-black text-[#9b5f16]">{label}</p>
                  <p className="mt-1 font-black">{value}</p>
                </div>
              ))}
              <div className="border-2 border-[#2f241c] bg-[#f6c453] p-3 font-bold sm:col-span-2">方向：市场增长 / 社区运营 / 海外营销 / 产品运营 / AI Builder</div>
            </div>
          </Card>
        </section>

        <section id="projects">
          <SectionTitle no="02" title="Vibe Coding Projects" sub="一些从真实需求里长出来的小工具" />
          <Card className="mb-5 p-5">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {flow.map((item) => <motion.div whileHover={{ y: -4 }} key={item} className="border-2 border-[#2f241c] bg-[#f6c453] p-3 text-center font-black shadow-pixel-sm">{item}</motion.div>)}
            </div>
          </Card>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={project.title} className="flex flex-col p-5 transition hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-between">
                  <Badge>PROJECT {index + 1}</Badge>
                  <span className="text-2xl">▣</span>
                </div>
                <div className="mb-4 flex h-48 items-center justify-center border-2 border-[#2f241c] bg-[#f7edda] p-3">
                  <img className="max-h-full w-full object-contain" src={project.visual} alt={`${project.title} visual`} />
                </div>
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="mt-2 text-sm font-black text-[#9b5f16]">{project.type}</p>
                <p className="mt-4 leading-7 text-[#5f5042]">{project.desc}</p>
                <ul className="mt-4 grid gap-2">
                  {project.highlights.map((item) => <li key={item} className="border-l-4 border-[#e89f38] bg-[#f7edda] px-3 py-2 text-sm font-bold">{item}</li>)}
                </ul>
                <a className="mt-5 w-fit border-2 border-[#2f241c] bg-white px-4 py-2 font-black shadow-pixel-sm transition hover:bg-[#e89f38]" href={project.href ?? "#"} target={project.href ? "_blank" : undefined}>
                  {project.href ? "Open ↗" : "Coming Soon"}
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle no="03" title="Experience Timeline" sub="实习经历 / Real-world operation quests" />
          <div className="space-y-5">
            {experiences.map((item, index) => (
              <Card key={`${item.company}-${item.time}`} className="p-5">
                <div className="grid gap-4 lg:grid-cols-[130px_1fr]">
                  <div>
                    <Badge>QUEST {index + 1}</Badge>
                    <p className="mt-3 text-sm font-black text-[#9b5f16]">{item.time}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-black">{item.company}</h3>
                        <p className="mt-1 font-black">{item.role}</p>
                        {item.direction && <p className="mt-1 text-sm font-bold text-[#9b5f16]">{item.direction}</p>}
                      </div>
                    </div>
                    <p className="mt-4 leading-7 text-[#5f5042]">{item.desc}</p>
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {item.points.map((point) => <div key={point} className="border-2 border-[#2f241c] bg-[#f7edda] px-3 py-2 text-sm font-bold">{point}</div>)}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="world">
          <SectionTitle no="04" title="Personal World" sub="兴趣、习惯与个人能量来源" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hobbies.map(([title, desc, src], index) => (
              <motion.div whileHover={{ rotate: index % 2 ? 2 : -2, y: -4 }} key={title} className="border-2 border-[#2f241c] bg-[#fff8e9] p-4 shadow-pixel-sm">
                <img className="mx-auto mb-3 h-24 w-full object-contain" src={src} alt={`${title} sticker`} />
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5042]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-10">
          <SectionTitle no="05" title="Contact & Resume" sub="联系我 / Let's build the next tiny system" />
          <Card className="p-6">
            <div className="grid gap-3 md:grid-cols-2">
              <a className="font-black underline" href="mailto:vinbk361@gmail.com">Email: vinbk361@gmail.com</a>
              <a className="font-black underline" href="tel:18123818973">Phone: 18123818973</a>
              <a className="font-black underline" href="https://github.com/byoasis" target="_blank">GitHub: BYoasis</a>
              <span className="font-black">Location: Suzhou / Shenzhen / Shanghai</span>
              <span className="font-black">Resume: Coming Soon</span>
              <span className="font-black">Feishu / Workflow Notes: Coming Soon</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="border-2 border-[#2f241c] bg-[#e89f38] px-4 py-2 font-black shadow-pixel-sm" href="#">下载简历 · Coming Soon</a>
              <a className="border-2 border-[#2f241c] bg-white px-4 py-2 font-black shadow-pixel-sm" href="https://github.com/byoasis" target="_blank">查看 GitHub</a>
              <a className="border-2 border-[#2f241c] bg-white px-4 py-2 font-black shadow-pixel-sm" href="#projects">查看项目</a>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
