"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const tags = ["技术落地", "产品思维", "AI实战", "工作流搭建"];
type IconKind = "link" | "chip" | "book";

const cards = [
  {
    title: "链接我",
    description: "VX: xiaomu942047   X: @ai_xiaomu",
    icon: "link" as IconKind,
    action: "contact",
  },
  {
    title: "关于我",
    description: "履历、经验与能力边界",
    icon: "book" as IconKind,
    action: "about",
  },
] as const;

const contactTags = ["咨询", "合作", "定制业务", "其他"] as const;

type TabKey =
  | "主页"
  | "关于我"
  | "在线简历"
  | "项目经验"
  | "AI路线图"
  | "博客文章"
  | "联系方式";

const visibleTabs: TabKey[] = ["主页", "关于我"];

const businessItems = [
  {
    title: "X增长咨询",
    price: "199/30min",
    description: "我的X账号20多天万粉，传授增长经验给你，包含一次转帖服务。",
    footnote: "提供微信好友位，不定时回答你的问题",
  },
  {
    title: "1V1AI咨询",
    price: "199/30min",
    description: "在AI时代，比努力更重要的是方向，我告诉你AI能帮你解决什么问题，哪些是可以自动化的。",
    footnote: "咨询为主，电话or腾讯会议形式",
  },
  {
    title: "木哥OPC社群",
    price: "99/人",
    description: "一群OPC在群里交换资源，搞钱，木哥会不定时进行分享，各种社群资料也会放在这里。",
    footnote: "微信群",
  },
   {
    title: "AI 培训/Agent 定制",
    price: "详聊",
    description: "把AI装进业务流程里，让你的拥有一支ai自动化部队。",
    footnote: "购买该服务前要先进行1V1AI咨询，可承接业务落地,加v详聊。",
  }
] as const;

const businessHighlights = [
  "前腾讯 / 字节 / 顺丰 / 中科院自动化所，长期处理复杂业务系统、效率工具和团队协作问题。",
  "现在专注 AI 编程、Agent 定制、工作流落地和出海增长，服务个人与团队。",
  "不做泛泛分享，重点是判断什么值得自动化、什么值得产品化、什么能真正落地。",
] as const;

const fitForItems = [
  "想把 AI 接进现有流程，但内部没人能把需求拆成真实可执行方案的团队。",
  "想系统补齐 AI 编程、工具链、工作流能力的个人或小团队。",
  "已经有明确项目、增长或自动化目标，需要高密度一对一梳理的人。",
] as const;

const processItems = [
  {
    title: "先判断值不值得做",
    description: "先看业务目标、流程瓶颈和预期收益，避免为了用 AI 而用 AI。",
  },
  {
    title: "再确定怎么做",
    description: "把场景拆成角色、流程、工具和数据流，明确该做咨询、培训还是定制开发。",
  },
  {
    title: "最后把方案跑通",
    description: "按你的实际业务交付 Agent、工作流、培训或协作方案，让 AI 真的进入日常生产。",
  },
] as const;

const aboutParagraphs = [
  "前中科院/腾讯/顺丰 T11级工程师。2026 年 4 月正式离职，开始自由职业，专注 AI AI编程与出海增长，AI企业培训，企业AI转型陪跑，X万粉AI博主。",
  "我擅长用工程能力把想法快速落地：前端/全栈、自动化、AI 编程（Cursor / Claude Code / Codex 等）以及 SEO/SEM/Affiliate/EDM 等海外增长手段。",
  "X账号@ai_xiaomu 公众号「硅基小木」持续更新，个人品牌也从技术管理者进一步升级为 AI 编程创业者、技术作者与演讲者。",
] as const;

const socialLinks = [
  { label: "X", href: "https://x.com/ai_xiaomu" },
  { label: "GitHub", href: "https://github.com" },
  { label: "公众号", href: "https://www.zhihu.com" }, 
] as const;

const expertiseGroups = [
  {
    title: "技术开发",
    items: ["React", "Vue", "TypeScript", "Electron"],
  },
  {
    title: "AI 技术融合",
    items: ["D2C", "P2C", "Copilot", "MCP", "DeepSeek"],
  },
] as const;

const experiences = [
  {
    company: "OPC",
    role: "独立开发",
    period: "2026.04 - 至今",
    bullets: [
      "全职创业：AI 编程 + 出海增长，小产品矩阵",
      "X万粉AI博主：@ai_xiaomu",
      "生财有术社群传术师",
    ],
  },
  {
    company: "顺丰科技",
    role: "大前端部门 · 前端技术 Leader（3-3）",
    period: "2018.07 - 2026.04",
    bullets: [
      "负责顺丰小哥App的迭代与开发",
      "负责App插件化技术的维护与迭代",
    ],
  },
  {
    company: "腾讯",
    role: "互动娱乐运营部IMSDK-高级工程师",
    period: "2015.11 - 2018.06",
    bullets: [
      "负责王者荣耀、穿越火线等手游的登录SDK相关技术业务，国内用户数量过亿",
      "负责IMSDK 出海登录系统&支付系统SDK的迭代与优化，业务遍布东南亚",
    ],
  },
  {
    company: "迅雷",
    role: "迅雷云播技术负责人",
    period: "2014.03 - 2015.10",
    bullets: [
      "负责迅雷看看&迅雷云播的技术迭代工作",
    ],
  },
  {
    company: "中科院",
    role: "中科院自动化研究所 安卓开发",
    period: "2011.07 - 2014.02",
    bullets: [
      "负责语音识别技术的安卓端呈现工作",
      "参与了2013年阿里双11语音识别接入手套app的工作",
    ],
  },
] as const;

const education = {
  school: "武汉科技大学",
  major: "计算机科学与技术 · 本科",
  period: "2007 - 2011",
} as const;

const tabContent: Record<
  Exclude<TabKey, "主页">,
  {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  }
> = {
  关于我: {
    eyebrow: "About Me",
    title: "产品、增长与个人系统交叉型选手",
    description:
      "从一线现场转到 AI 产品，习惯把复杂问题拆成可执行动作，也把自己的方法论持续产品化。",
    items: ["关注真实用户需求", "擅长从 0 到 1 搭建流程", "偏长期主义与复利思维"],
  },
  在线简历: {
    eyebrow: "Resume",
    title: "一页式展示能力与履历",
    description:
      "聚焦 AI 产品、业务理解、项目推进与内容表达四条主线，适合做对外介绍和合作参考。",
    items: ["AI 产品线负责人", "具备方案、推进、复盘能力", "兼顾个人 IP 与业务表达"],
  },
  项目经验: {
    eyebrow: "Projects",
    title: "围绕产品化与增长的实战项目",
    description:
      "包括 AI 产品设计、工作流落地、知识体系沉淀和内容转化相关项目，强调落地结果。",
    items: ["产品方案设计", "业务流程自动化", "知识内容产品化"],
  },
  AI路线图: {
    eyebrow: "Roadmap",
    title: "从工具使用到系统构建的进阶路径",
    description:
      "不是堆工具清单，而是围绕认知、工作流、产品思维和商业化路径构建成长路线图。",
    items: ["工具层", "工作流层", "系统层"],
  },
  博客文章: {
    eyebrow: "Blog",
    title: "持续输出 AI 与个人成长文章",
    description:
      "围绕 AI 实战、产品思维、认知升级和个体商业化输出，逐步沉淀为个人知识资产。",
    items: ["方法论拆解", "案例复盘", "观点与趋势观察"],
  },
  联系方式: {
    eyebrow: "Contact",
    title: "合作、交流与资源链接",
    description:
      "支持社群合作、咨询交流、项目探讨和内容联动，优先对接有明确目标和执行意愿的人。",
    items: ["微信：jayce2047", "合作方向：咨询 / 社群 / 内容", "可扩展独立联系页或二维码"],
  },
};

function CardIcon({ type }: { type: IconKind }) {
  if (type === "chip") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
      </svg>
    );
  }

  if (type === "book") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 6.5A2.5 2.5 0 0 1 8 4h11v15H8a2.5 2.5 0 0 0-2.5 2.5" />
        <path d="M5.5 6.5V20A2 2 0 0 0 7.5 22H19" />
        <path d="M12 7h4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m10 14 6-6" />
      <path d="M8.5 7H17v8.5" />
      <path d="M14 10 7.5 16.5a3 3 0 1 1-4-4L10 6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.72 5.28l-1.56 1.56M6.84 17.16l-1.56 1.56M18.72 18.72l-1.56-1.56M6.84 6.84 5.28 5.28" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.1 14.2A8.7 8.7 0 1 1 9.8 3.9a7.3 7.3 0 0 0 10.3 10.3Z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7Z" />
      <path d="M18.5 3.5 19 5l1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5L18 5ZM6 16l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 9.5A2.5 2.5 0 0 1 11.5 7H18a2 2 0 0 1 2 2v6.5A2.5 2.5 0 0 1 17.5 18H11a2 2 0 0 1-2-2Z" />
      <path d="M6.5 15A2.5 2.5 0 0 1 4 12.5V6a2 2 0 0 1 2-2h6.5A2.5 2.5 0 0 1 15 6.5" />
    </svg>
  );
}

function ContactModal({
  onClose,
  onCopy,
  copied,
}: {
  onClose: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className={styles.modalOverlay} role="presentation" onClick={onClose}>
      <section
        className={styles.contactModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.modalClose} aria-label="关闭弹窗" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className={styles.modalHeader}>
          <h2 id="contact-modal-title">链接我</h2>
          <p>添加微信建立深度链接</p>
        </div>

        <div className={styles.contactCard}>
          <div>
            <span className={styles.contactLabel}>WECHAT ID</span>
            <strong className={styles.contactValue}>Jayce2047</strong>
          </div>

          <button type="button" className={styles.copyButton} onClick={onCopy} aria-label="复制微信号">
            <CopyIcon />
            <span>{copied ? "已复制" : "复制"}</span>
          </button>
        </div>

        <div className={styles.contactTips}>
          <p>验证信息可简单说明来意：</p>
          <div className={styles.contactTagList}>
            {contactTags.map((tag) => (
              <span key={tag} className={styles.contactTag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HomePanel({
  onOpenContact,
  onOpenAbout,
}: {
  onOpenContact: () => void;
  onOpenAbout: () => void;
}) {
  return (
    <>
      <header className={styles.identity}>
        <div className={styles.avatar} aria-hidden="true">
          <div className={styles.avatarHalo} />
          <div className={styles.avatarCore}>
            <img src="/profile-photo.png" alt="黄小木头像" className={styles.avatarImage} />
          </div>
        </div>

        <div className={styles.headingBlock}>
          <h1 className={styles.name}>JayceHuang | 黄小木</h1>
          <p className={styles.meta}>前大厂T11级技术Leader | AI编程创业者 | 出海产品实践者 |  演讲者</p>
        </div>
      </header>

      <div className={styles.copy}>
        <h2 className={styles.title}>
          把 <span>AI</span> 装进你的业务流程，而不是只停留在演示里。
        </h2>
        <p className={styles.description}>
          我提供咨询、Agent 定制、培训和增长实战，帮个人与团队把 AI 真正接进工作流。
        </p>
      </div>

      <ul className={styles.tags} aria-label="核心标签">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <section className={styles.cardGrid} aria-label="主页入口">
        {cards.map((card) => (
          <button
            key={card.title}
            type="button"
            className={`${styles.card} ${styles.cardButton}`}
            onClick={
              card.action === "contact" ? onOpenContact : onOpenAbout
            }
          >
            <div className={styles.cardIcon}>
              <CardIcon type={card.icon} />
            </div>
            <div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </button>
        ))}
      </section>


      <section className={styles.homeSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>Services</span>
          <h3>我能提供的服务</h3>
        </div>

        <div className={styles.businessGrid}>
          {businessItems.map((item) => (
            <article key={item.title} className={styles.businessCard}>
              <div className={styles.businessCardTop}>
                <h3>{item.title}</h3>
                <span className={styles.businessPrice}>{item.price}</span>
              </div>
              <p className={styles.businessDescription}>{item.description}</p>
              <div className={styles.businessDivider} />
              <div className={styles.businessFootnote}>
                <span className={styles.businessSpark}>
                  <SparkleIcon />
                </span>
                <p>{item.footnote}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.homeMetaGrid}>
        <article className={styles.infoPanel}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Fit For</span>
            <h3>适合什么人来找我</h3>
          </div>
          <div className={styles.infoList}>
            {fitForItems.map((item) => (
              <article key={item} className={styles.infoItem}>
                <span className={styles.panelDot} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </article>

        <article className={styles.infoPanel}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Process</span>
            <h3>合作方式</h3>
          </div>
          <div className={styles.processList}>
            {processItems.map((item) => (
              <article key={item.title} className={styles.processItem}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

function AboutPanel() {
  return (
    <section className={styles.aboutPage}>
      <header className={styles.aboutHero}>
        <div className={styles.aboutProfileImage} aria-hidden="true">
          <div className={styles.aboutPhotoInner}>
            <span>JH</span>
          </div>
        </div>

        <div className={styles.aboutProfileInfo}>
          <h2 className={styles.aboutName}>黄小木</h2>
          <p className={styles.aboutHeadline}>Ex-SF T11 · 技术作者 · 出海创业者</p>
          <div className={styles.aboutLinks}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className={styles.aboutResume}>
        <aside className={styles.aboutSidebar}>
          <div className={styles.aboutBlock}>
            <span className={styles.aboutBlockLabel}>个人简介</span>
            <div className={styles.aboutSummary}>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.aboutBlock}>
            <span className={styles.aboutBlockLabel}>技术专长</span>
            <div className={styles.expertiseGroups}>
              {expertiseGroups.map((group) => (
                <div key={group.title} className={styles.expertiseGroup}>
                  <h3>{group.title}</h3>
                  <div className={styles.expertiseTags}>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aboutBlock}>
            <span className={styles.aboutBlockLabel}>教育背景</span>
            <article className={styles.educationInline}>
              <h3>{education.school}</h3>
              <p>{education.major}</p>
              <span>{education.period}</span>
            </article>
          </div>
        </aside>

        <div className={styles.aboutMain}>
          <div className={styles.aboutBlock}>
            <span className={styles.aboutBlockLabel}>工作经历</span>
            <div className={styles.experienceTimeline}>
              {experiences.map((item) => (
                <article key={`${item.company}-${item.role}`} className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h3>{item.company}</h3>
                      <p>{item.role}</p>
                    </div>
                    <span>{item.period}</span>
                  </div>
                  <ul className={styles.timelineList}>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function ContentPanel({ tab }: { tab: Exclude<TabKey, "主页"> }) {
  if (tab === "关于我") {
    return <AboutPanel />;
  }

  const section = tabContent[tab];

  return (
    <section className={styles.panel}>
      <p className={styles.panelEyebrow}>{section.eyebrow}</p>
      <h2 className={styles.panelTitle}>{section.title}</h2>
      <p className={styles.panelDescription}>{section.description}</p>
      <div className={styles.panelList}>
        {section.items.map((item) => (
          <article key={item} className={styles.panelItem}>
            <span className={styles.panelDot} />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("主页");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopyWechat() {
    try {
      await navigator.clipboard.writeText("Jayce2047");
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className={theme === "light" ? `${styles.page} ${styles.lightTheme}` : styles.page}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.orbOne} />
        <div className={styles.orbTwo} />
        <div className={styles.grid} />
        <div className={styles.glow} />
        <span className={`${styles.spark} ${styles.sparkOne}`} />
        <span className={`${styles.spark} ${styles.sparkTwo}`} />
        <span className={`${styles.spark} ${styles.sparkThree}`} />
        <span className={`${styles.spark} ${styles.sparkFour}`} />
      </div>

      <section className={styles.hero}>
        <header className={styles.topbar}>
          <nav className={styles.tabs} aria-label="页面导航">
            {visibleTabs.map((tab) => {
              const active = tab === activeTab;

              return (
                <button
                  key={tab}
                  type="button"
                  className={active ? `${styles.tab} ${styles.tabActive}` : styles.tab}
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            className={styles.themeButton}
            aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
            onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </header>

        <div className={styles.contentWrap}>
          {activeTab === "主页" ? (
            <HomePanel
              onOpenContact={() => setContactOpen(true)}
              onOpenAbout={() => setActiveTab("关于我")}
            />
          ) : (
            <ContentPanel tab={activeTab} />
          )}
        </div>
      </section>

      {contactOpen ? (
        <ContactModal
          onClose={() => setContactOpen(false)}
          onCopy={handleCopyWechat}
          copied={copied}
        />
      ) : null}
    </main>
  );
}
