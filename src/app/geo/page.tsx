import type { Metadata } from "next";
import styles from "./geo.module.css";

export const metadata: Metadata = {
  title: "SEO & GEO | AI 时代的搜索",
  description:
    "面向国内 GEO 与海外 SEO+GEO 的搜索增长方法页，帮助品牌被搜索引擎和 AI 推荐系统看见。",
};

const metrics = [
  { value: "6亿+", label: "中国 AI 用户", source: "CNNIC 2025.12" },
  { value: "9亿", label: "ChatGPT 周活", source: "TechCrunch 2026.2" },
  { value: "60%", label: "Google 零点击搜索", source: "SparkToro 2024" },
];

const aiPlatforms = [
  { name: "豆包", ecosystem: "字节系", channel: "头条号 / 今日头条", value: "3.45亿" },
  { name: "通义千问", ecosystem: "阿里", channel: "搜狐号 / 网易号", value: "1.66亿" },
  { name: "DeepSeek", ecosystem: "高质量社区", channel: "知乎 / 博客园", value: "1.27亿" },
  { name: "腾讯元宝", ecosystem: "腾讯系", channel: "微信公众号", value: "1.14亿" },
  { name: "Kimi", ecosystem: "开放社区", channel: "知乎 / 独立博客", value: "900万" },
];

const domesticSteps = [
  {
    title: "诊断",
    text: "用品牌词、品类词和竞品词分别问主流 AI，先看它是否知道你、怎么描述你。",
  },
  {
    title: "铺量",
    text: "在新闻站、垂直社区、百家号、知乎、公众号等位置铺可信内容，不只盯官网链接。",
  },
  {
    title: "占位",
    text: "持续维护百科、问答、短视频、公众号和行业文章，让 AI 看到稳定一致的品牌故事。",
  },
];

const seoPillars = [
  { title: "内容", text: "一个关键词对应一个深度页面，回答真实购买问题。" },
  { title: "外链", text: "来自真实权威站点的链接，胜过批量站群。" },
  { title: "技术", text: "加载速度、移动端体验和清晰站内结构是基础盘。" },
];

const globalSignals = [
  { name: "Wikipedia", fit: "ChatGPT 常引用的公开知识源" },
  { name: "Reddit", fit: "Perplexity 偏好的真实讨论场" },
  { name: "YouTube", fit: "适合让 AI 理解产品演示与专家观点" },
  { name: "PR Wire", fit: "用新闻稿形成多站点品牌信号" },
];

const warnings = [
  "承诺排名第一",
  "批量交付 1000 条外链",
  "保证一周冲上首页",
];

export default function GeoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <nav className={styles.nav} aria-label="SEO and GEO">
          <span>SEO & GEO</span>
          <a href="#action">开始诊断</a>
        </nav>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AI 时代的搜索增长</p>
            <h1>
              客户问 AI 时，
              <span>它会不会推荐你？</span>
            </h1>
            <p className={styles.lead}>
              国内做 GEO，海外做 SEO + GEO。目标不是把关键词堆满，而是让搜索引擎和生成式 AI 在关键问题里看见你、理解你、信任你。
            </p>
          </div>

          <div className={styles.signalPanel} aria-label="AI visibility dashboard">
            <div className={styles.radar}>
              <span />
              <span />
              <span />
              <strong>AI</strong>
            </div>
            <div className={styles.panelRows}>
              <div>
                <span>品牌可见度</span>
                <strong>72</strong>
              </div>
              <div>
                <span>内容一致性</span>
                <strong>86</strong>
              </div>
              <div>
                <span>权威信号</span>
                <strong>64</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.metrics}>
          {metrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>{metric.source}</small>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>先说清楚两个概念</p>
          <h2>SEO 管搜索排名，GEO 管 AI 推荐</h2>
        </div>
        <div className={styles.conceptGrid}>
          <article>
            <span>SEO</span>
            <h3>Search Engine Optimization</h3>
            <p>客户在 Google 或百度搜索你所在的品类时，你能不能排到足够靠前的位置。</p>
          </article>
          <article>
            <span>GEO</span>
            <h3>Generative Engine Optimization</h3>
            <p>客户直接问 AI “哪家好”“怎么选”时，AI 是否会把你列入答案和推荐列表。</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>国内 GEO</p>
          <h2>不同 AI 看见的是不同生态</h2>
        </div>
        <div className={styles.platformList}>
          {aiPlatforms.map((platform) => (
            <article key={platform.name}>
              <strong>{platform.value}</strong>
              <div>
                <h3>{platform.name}</h3>
                <p>{platform.ecosystem} · 优先铺 {platform.channel}</p>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          取舍的关键不是全平台撒网，而是先判断你的客户正在用哪个 AI，再去铺对应生态的可信内容。
        </p>
      </section>

      <section className={styles.band}>
        <div>
          <p>核心认知</p>
          <h2>AI 推荐的往往不是“最好”的品牌，而是它在互联网上看得最多、最一致、最可信的品牌。</h2>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>国内打法</p>
          <h2>三步建立 AI 可见度</h2>
        </div>
        <div className={styles.steps}>
          {domesticSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.splitSection}>
        <div>
          <p className={styles.eyebrow}>国内 vs 海外</p>
          <h2>国内重 GEO，海外 SEO 和 GEO 要一起做</h2>
          <p>
            国内 AI 平台更像围墙花园，内容来源受各自生态影响明显。海外市场里 Google 排名仍是基础，AI Overview、ChatGPT、Perplexity 又会重新分配流量。
          </p>
        </div>
        <div className={styles.compareBox}>
          <article>
            <strong>国内</strong>
            <span>品牌词、品类词、问答场景优先</span>
          </article>
          <article>
            <strong>海外</strong>
            <span>关键词页面、权威外链、AI 引用源同步做</span>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>海外 SEO</p>
          <h2>Google 排名先看三件事</h2>
        </div>
        <div className={styles.pillars}>
          {seoPillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>海外 GEO</p>
          <h2>让 AI 引用你的四类信号源</h2>
        </div>
        <div className={styles.signalGrid}>
          {globalSignals.map((signal) => (
            <article key={signal.name}>
              <h3>{signal.name}</h3>
              <p>{signal.fit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.warningSection}>
        <div>
          <p>避坑</p>
          <h2>三句话识别不靠谱的 SEO 服务</h2>
        </div>
        <ul>
          {warnings.map((warning) => (
            <li key={warning}>{warning}</li>
          ))}
        </ul>
      </section>

      <section id="action" className={styles.action}>
        <p>今天花 30 分钟做三件事</p>
        <h2>问 AI、搜竞品、列信号源</h2>
        <div>
          <span>1. 搜你的品牌和品类词</span>
          <span>2. 记录 AI 提到谁、怎么说</span>
          <span>3. 规划接下来要铺的内容阵地</span>
        </div>
      </section>
    </main>
  );
}
