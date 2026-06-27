import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-label="敬请期待">
        <p className={styles.eyebrow}>imhxm.com</p>
        <h1 className={styles.title}>敬请期待</h1>
        <p className={styles.description}>网站内容正在重新整理中。</p>
      </section>
    </main>
  );
}
