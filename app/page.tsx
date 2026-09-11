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
    href: "/insta360/",
    visual: "/assets/scene-code.png",
  },
  {
    title: "BY-Garden",
    type: "Personal iOS App / Habit / Fitness / Journal / Widget",
    desc: "一个像素风个人生活管理 App，围绕健身、打卡、日记、照片记录、Widget 和个人角色元素，探索如何用 AI Coding 把个人习惯系统产品化。",
    highlights: ["个人习惯与成长记录", "健身打卡与照片记录", "iOS Widget", "像素风个人 IP 元素", "从真实生活需求出发的长期项目"],
    href: "/garden/",
    visual: "/assets/scene-hamster.png",
  },
  {
    title: "Interactive Campaign Lab",
    type: "Quiz / H5 Campaign / Community Engagement",
    desc: "一组面向线上活动和社区传播的小型互动实验，包括类 MBTI 测试、角色匹配测试、活动页和问卷玩法。目标是快速验证轻量互动内容在社群传播、活动引流和用户参与中的复用价值。",
    highlights: ["类 MBTI / 角色匹配测试", "适合社群传播的小型互动页", "可用于游戏社区、品牌活动、问卷引流", "快速部署到 GitHub Pages / Vercel", "运营活动经验可复用"],
    href: "/quiz/",
    visual: "/assets/scene-journey.png",
  },
  {
    title: "Market Companion for Mom",
    type: "Family Tool / Stock Dashboard / Daily Market Companion",
    desc: "一个为妈妈定制的每日市场陪伴工具，把分散的行情、板块、新闻和个股信息整理成更容易理解的日常工作台。项目目标不是做复杂交易系统，而是帮助非专业用户快速理解今天市场发生了什么、哪些板块值得关注、风险在哪里。",
    highlights: ["来自真实家庭需求", "面向非专业用户的信息设计", "每日市场信息整合", "板块趋势、新闻、个股动态归纳", "让数据变成可读、可判断的日常工具"],
    href: "http://momstock.byydoujr.cn/",
    visual: "/assets/scene-sunset.png",
  },
];

const experiences = [
  {
    company: "腾讯",
    role: "产品运营实习生",
    time: "2026 年 6 月至今",
    direction: "海外社区运营 · 产品支持 · 运营工具建设",
    desc: (
      <div className="space-y-4">
        <p>
          在 Market Growth 团队担任产品运营实习生，参与 <strong className="font-black text-[#2f241c]">Crownstone Survival 从 Soft Launch 至 Global Launch 阶段</strong>的海外社区运营与产品支持工作，负责 Discord、Facebook 等海外社区从 0 到 1 的体系建设、用户沟通及运营机制设计。围绕新用户理解、社区活跃与长期内容沉淀，推进新手攻略、FAQ、公告及社区内容规划，并设计 UGC 攻略征集、社区互动活动及内容复用机制，支持 Discord 与 Facebook 社区规模分别从 0 增长至 <strong className="font-black text-[#2f241c]">12,000+ 用户</strong>。
        </p>
        <p>
          结合实际运营场景，<strong className="font-black text-[#2f241c]">独立完成两套 Discord Bot 的方案设计与搭建</strong>，从需求定义、功能拆解、交互流程到上线验证完整推进，将答题、互动、活动管理等运营需求转化为可复用的社区工具，降低活动执行成本并丰富社区互动场景。同时持续参与社区活动机制、玩家参与路径及运营流程优化，使社区运营逐步从单次内容与活动执行，沉淀为可重复使用的运营能力。
        </p>
        <p>
          在用户洞察与运营策略方面，通过社区满意度调研、玩家反馈及运营数据分析，持续识别不同平台用户在内容偏好、活动参与、问题反馈及社区功能上的核心需求。阶段性调研显示，<strong className="font-black text-[#2f241c]">Discord 社区满意度达到 69.8%，Facebook 社区满意度达到 65.2%</strong>；其中 Discord 官方攻略满意度为 <strong className="font-black text-[#2f241c]">77.8%</strong>，官方公告满意度为 <strong className="font-black text-[#2f241c]">71.4%</strong>。进一步结合玩家活动偏好、活跃时段及参与障碍分析，推动内容发布时间、活动触达、Bot 功能及社区服务机制的持续优化，为产品从 Soft Launch 到 Global Launch 阶段的社区增长与用户运营提供支持。
        </p>
      </div>
    ),
    points: ["Crownstone Survival 海外发行与产品运营支持", "Discord、Facebook 社区从 0 到 1 搭建", "两端社区规模分别增长至 12,000+ 用户", "独立设计并上线 2 套 Discord Bot", "建立 UGC 攻略征集与内容复用机制", "结合调研、反馈与数据迭代社区服务"],
  },
  {
    company: "网易游戏",
    role: "海外市场实习生",
    time: "2026 年 1 月至 4 月",
    direction: "全球社区运营 · 用户增长 · 商业化探索",
    desc: (
      <div className="space-y-4">
        <p>以 Discord 全球社区运营为核心，参与海外用户增长、内容生态建设与商业化探索。</p>
        <p>
          <strong className="font-black text-[#2f241c]">《燕云十六声》社区运营：</strong>
          参与搭建三方支付及积分商城闭环，第一季度累计拉动 Discord 侧 <strong className="font-black text-[#2f241c]">100 万元以上流水</strong>，核心频道发言任务数增长 <strong className="font-black text-[#2f241c]">259%</strong>；协助建立分层私信回流模型，触达 <strong className="font-black text-[#2f241c]">36.6 万</strong>流失玩家，实现 <strong className="font-black text-[#2f241c]">1.5 万人以上</strong>单次召回，7 至 14 天核心流失用户回流率达到 <strong className="font-black text-[#2f241c]">26.14%</strong>。
        </p>
        <p>
          参与从 0 到 1 搭建“大鹅订阅号”双通道内容触达矩阵，获得近 <strong className="font-black text-[#2f241c]">3000 名</strong>高粘性订阅用户；主笔深度长图文 UGC 活动回应剧情争议，实现 <strong className="font-black text-[#2f241c]">95.8%</strong>的正向情感转化，为海外社区舆情管理提供缓冲。
        </p>
        <p>
          <strong className="font-black text-[#2f241c]">《蛋仔派对》国际服运营：</strong>
          结合派对游戏特性，参与策划“双人社交绑定”“节日阵营对抗”等活动，利用社区关系链带动端内活跃，活动期核心频道发言量环比提升 <strong className="font-black text-[#2f241c]">24.9%</strong>；结合海外热点及《小马宝莉》等 IP 联动，协助建立“主题周活动 + 玩家二创激励”机制，串联社区内容、端内游玩与作者获量。
        </p>
        <p>
          <strong className="font-black text-[#2f241c]">《漫威争锋》运营支持：</strong>
          利用网易积木完成营销活动网页前后端搭建，负责全链路用户行为数据埋点，为活动漏斗和转化率优化提供数据依据。
        </p>
      </div>
    ),
    points: ["《燕云十六声》商业化闭环与流失召回", "第一季度拉动 Discord 侧 100 万元以上流水", "触达 36.6 万流失用户，单次召回 1.5 万人以上", "《蛋仔派对》活动带动频道发言量提升 24.9%", "《漫威争锋》活动页搭建与全链路数据埋点", "持续维护社区数据看板与每周分析报告"],
  },
  {
    company: "深圳新东方",
    role: "新媒体运营实习生",
    time: "2025 年 10 月至 2026 年 1 月",
    direction: "内容矩阵 · 账号增长 · 留资转化",
    desc: (
      <div className="space-y-4">
        <p>负责垂直社交媒体矩阵运营，围绕内容选题、账号增长和留资转化开展微信公众号及小红书运营。</p>
        <p>
          <strong className="font-black text-[#2f241c]">矩阵规划与内容打造：</strong>
          负责小红书“屠鸭计划”与微信公众号运营，策划产出 <strong className="font-black text-[#2f241c]">40 余篇</strong>图文内容，累计获得 <strong className="font-black text-[#2f241c]">2 万以上曝光</strong>；通过测试封面和文案表达，打造单篇 <strong className="font-black text-[#2f241c]">150 余次收藏</strong>的高表现笔记。
        </p>
        <p>
          <strong className="font-black text-[#2f241c]">线索孵化与转化：</strong>
          通过评论区互动和私信引导建立标准化留资路径，将内容流量转化为高意向潜在客户线索。
        </p>
      </div>
    ),
    points: ["独立运营“大学城 weekly”微信公众号", "负责“深圳大学生屠鸭计划”小红书账号", "两端累计产出 40 余篇图文内容", "累计获得 2 万以上曝光", "打造单篇 150 余次收藏的高表现笔记", "通过评论与私信建立标准化留资路径"],
  },
  {
    company: "极氪",
    role: "市场运营实习生",
    time: "2025 年 7 月至 10 月",
    direction: "整合营销 · 销售转化 · 市场洞察",
    desc: (
      <div className="space-y-4">
        <p>聚焦线上线下整合营销与区域市场洞察，通过内容运营和线下渠道拓展支持销售转化。</p>
        <p>
          <strong className="font-black text-[#2f241c]">线上内容与销售转化：</strong>
          统筹运营汽车之家、懂车帝及抖音等平台内容矩阵，策划垂类专栏与短视频内容，获得 <strong className="font-black text-[#2f241c]">1 万以上订阅与播放</strong>；将线上流量引导至线下门店，协助转化 <strong className="font-black text-[#2f241c]">50 余次试驾</strong>及 <strong className="font-black text-[#2f241c]">10 余笔成交</strong>，带动销售额超过 <strong className="font-black text-[#2f241c]">300 万元</strong>。
        </p>
        <p>
          <strong className="font-black text-[#2f241c]">线下活动与市场调研：</strong>
          协同落地 <strong className="font-black text-[#2f241c]">10 余场</strong>跨界异业合作及大型外展，筛选高意向线索 <strong className="font-black text-[#2f241c]">2000 余条</strong>；主笔完成 <strong className="font-black text-[#2f241c]">6 份</strong>商业洞察报告，并优化汽车金融报价测算表，后被采纳为深圳战区统一报价单模板。
        </p>
      </div>
    ),
    points: ["运营汽车之家、懂车帝及抖音内容矩阵", "垂类内容获得 1 万以上订阅与播放", "协助转化 50 余次试驾及 10 余笔成交", "带动销售额超过 300 万元", "落地 10 余场外展与异业合作，筛选 2000 余条线索", "完成 6 份洞察报告，报价表成为深圳战区模板"],
  },
  {
    company: "深圳金泰谊电子",
    role: "市场运营顾问实习生",
    time: "2024 年 6 月至 8 月",
    direction: "线下推广 · 客户线索 · 竞品研究",
    desc: (
      <div className="space-y-4">
        <p>围绕消费电子产品的线下推广、客户线索整理和竞品研究，为产品宣传与销售工作提供市场支持。</p>
        <p>
          <strong className="font-black text-[#2f241c]">线下推广与客户沟通：</strong>
          参与 <strong className="font-black text-[#2f241c]">5 场</strong>线下活动，沟通客户超过 <strong className="font-black text-[#2f241c]">500 位</strong>，整理 <strong className="font-black text-[#2f241c]">300 余位</strong>潜在客户名单，并协助完成 5G 移动热点产品秋季订单任务。
        </p>
        <p>
          <strong className="font-black text-[#2f241c]">竞品研究与市场建议：</strong>
          分析 <strong className="font-black text-[#2f241c]">5 款以上</strong>竞品的功能特性与市场定位，整理市场报告并提出优化建议，协助品牌部门制定差异化营销策略。
        </p>
      </div>
    ),
    points: ["参与 5 场消费电子产品线下活动", "现场沟通客户超过 500 位", "整理 300 余位潜在客户名单", "协助完成 5G 移动热点产品秋季订单任务", "分析 5 款以上竞品的功能与定位", "输出市场建议并支持差异化营销策略制定"],
  },
];

const hobbies = [
  ["篮球", "喜欢篮球，也喜欢从竞技体育里理解节奏、对抗和长期训练。", "/assets/element-basketball.png"],
  ["羽毛球", "日常运动之一，保持身体状态和专注力。", "/assets/element-badminton.png"],
  ["电吉他 / 音乐", "西交利物浦大学海瑟西兰花乐队队长、电吉他手，组织和参与校内外演出 15+ 场。", "/assets/clean-guitar.png"],
  ["跑步 / 健身", "保持每周运动习惯，用训练对抗焦虑和拖延。", "/assets/cascade-fullbody.png"],
  ["仓鼠大爷", "生活里的陪伴角色，也是个人网站里的温暖彩蛋。", "/assets/avatar-hamster.png"],
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
    <div className={`border-2 border-[#2f241c] bg-[#fff8e9] shadow-pixel ${className}`}>
      {children}
    </div>
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

          <div className="text-center lg:text-left">
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
          </div>

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
            </div>
            <img className="w-full border-2 border-[#2f241c] bg-[#f7edda] object-contain" src="/assets/by-world-banner.png" alt="BY 个人网站视觉海报" />
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
                <a className="mt-5 w-fit border-2 border-[#2f241c] bg-white px-4 py-2 font-black shadow-pixel-sm transition hover:bg-[#e89f38]" href={project.href ?? "#"}>
                  {project.href ? "Open ↗" : "Coming Soon"}
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle no="03" title="实习经历" sub="真实业务中的运营实践" />
          <div className="space-y-5">
            {experiences.map((item, index) => (
              <Card key={`${item.company}-${item.time}`} className="overflow-hidden">
                <div className="border-b-2 border-[#2f241c] bg-[#f3dfbb] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Badge>经历 {String(index + 1).padStart(2, "0")}</Badge>
                    <p className="text-sm font-black text-[#76501f]">{item.time}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-2xl font-black sm:text-3xl">{item.company}</h3>
                    <p className="font-black text-[#9b5f16]">{item.role}</p>
                  </div>
                  {item.direction && <p className="mt-2 text-sm font-bold text-[#685845]">{item.direction}</p>}
                </div>

                <div className="p-4 sm:p-6">
                  <div className="max-w-[980px] text-[15px] leading-7 text-[#5f5042] sm:text-base sm:leading-8">{item.desc}</div>
                  {item.points.length > 0 && (
                    <div className="mt-6 border-t-2 border-dashed border-[#b99b72] pt-4">
                      <p className="mb-3 text-xs font-black text-[#9b5f16]">KEY OUTPUTS / 成果速览</p>
                      <ul className="grid gap-x-8 gap-y-1 md:grid-cols-2">
                        {item.points.map((point, pointIndex) => (
                          <li key={point} className="flex min-h-12 items-start gap-3 border-b border-[#dcc9aa] py-3 text-sm font-bold leading-6 sm:text-[15px]">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center border border-[#2f241c] bg-[#f6c453] text-[10px] font-black">
                              {String(pointIndex + 1).padStart(2, "0")}
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
