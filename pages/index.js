import Head from 'next/head'
import Layout, { name, jobTitle, siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const github = 'https://github.com/anggapw'
const linkedin = 'https://www.linkedin.com/in/anggapw'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.name}>{name}</p>
        <p className={utilStyles.jobTitle}>{jobTitle}</p>
        <div className={utilStyles.socialIcon}>
          <a target="_blank" href={github}>
            <img src="/images/github.png" className={utilStyles.logo}></img>
          </a>

          <a target="_blank" href={linkedin}>
            <img src="/images/linkedin.png" className={utilStyles.logo}></img>
          </a>
        </div>
      </section>
    </Layout>
  )
}