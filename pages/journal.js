import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import Link from 'next/link'
import Date from '../components/date'

export default function Journal({ allPostsData, allProjectsData }) {
    return (
        <Layout journal>
            <div className={utilStyles.journalContent}>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.contentSection}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>

                        ))}
                    </ul>
                </section>

                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.contentSection}`}>
                    <h2 className={utilStyles.headingLg}>Project</h2>
                    <ul className={utilStyles.list}>
                        {allProjectsData.map(({ id, date, title, stack, image, link }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <a target="_blank" href={link}>{title}</a>
                                <div>
                                    <p className={utilStyles.stack}>{stack}</p>
                                </div>
                                <br />
                                <img src={image} alt={title}></img>
                            </li>

                        ))}
                    </ul>
                </section>

            </div>
        </Layout >
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allPostsData, allProjectsData
        }
    }
}

