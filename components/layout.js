import Head from 'next/head'
import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const name = 'Angga Prasetya W'
export const jobTitle = 'Junior Full Stack Developer'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home, about,journal }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {/* {home ? (
                    <>
                        <ul className={styles.unorderedList}>
                            <li className={styles.list}>Home</li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </>
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/profile.jpg"
                                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )} */}
                <>
                    <ul className={styles.ul}>
                        <li className={styles.list}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/about">
                                <a>About Me</a>
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/journal">
                                <a>Journal</a>
                            </Link>
                        </li>
                    </ul>
                </>
            </header>
            <main>{children}</main>
            {!home && !about && !journal && (
                <div className={styles.backToHome}>
                    <Link href="/journal">
                        <a>← Back to journal</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
