import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { getAllMonthsName } from '../../lib/month'


export async function getStaticProps() {
  const AllMonths = getAllMonthsName()

  return {
    props: {
      AllMonths
    }
  }
}

export default function Months({ AllMonths }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monthly Music</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Choose the Month
        </h1>



      <ul className='hello'>
          {AllMonths.map(({ id }) => (
            <li  key={id}>
              <Link href= {`month/${id}`} >
                <a>{id.replace(/\d+$/, "")}</a>
              </Link>
            </li>
          ))}
      </ul>
      </main>
    </div>
  )
}
