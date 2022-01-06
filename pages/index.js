import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hi, I’m <strong>Billy</strong>. I’m a father, husband, and analytics engineer based out of Orlando, FL. I've spent my career working in-house and with agencies across a variety of industries for some of the most well known brands.
                </p>
                <p>
                    If you'd like to get in touch, feel free to <a href="mailto:contact@billylinder.com">Email</a> me, or reach out on <a href="https://twitter.com/billylinder">Twitter</a> or <a href="https://www.linkedin.com/in/billylinder/">LinkedIn</a>.
                </p>
            </section>
            {/* {allPostsData.length > 0 && (
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
            )} */}
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
