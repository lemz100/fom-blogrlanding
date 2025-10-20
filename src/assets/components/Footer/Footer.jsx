import styles from './Footer.module.less';
import logo from './logo.svg';

function App() {

  return (
    <footer className={styles.footer}>
        <section>
            <img src={logo} alt="logo" />
            <article className={styles.content}>
                <article>
                    <p className={styles.title}>Product</p>
                    <span>
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>Marketplace</p>
                        <p>Features</p>
                        <p>Integrations</p>
                    </span>
                </article>
                <article>
                    <p className={styles.title}>Company</p>
                    <span>
                        <p>About</p>
                        <p>Team</p>
                        <p>Blogs</p>
                        <p>Careers</p>
                    </span>
                </article>
                <article>
                    <p className={styles.title}>Connect</p>
                    <span>
                        <p>Contact</p>
                        <p>Newsletter</p>
                        <p>LinkedIn</p>
                    </span>
                </article>
            </article>
        </section>
    </footer>
  );
}

export default App
