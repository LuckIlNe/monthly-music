import {getAllMonths, getMonthData} from '../../lib/month'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticPaths() {
    const paths = getAllMonths() 
    return {
        paths, 
        fallback: false
    }
}
  
  export async function getStaticProps({ params }) {
    
    const monthData = getMonthData(params.id)
    console.log(monthData)
    return {
        props: {
            name: monthData.id,
            playlists: monthData.data
        }
    }
}

export default function Month({ name, playlists }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Monthly Music</title>
            </Head>
            <main className={styles.main}>
                <ul className='hello'>
                    {playlists.map(({ name, author, url }) => (
                      <li>
                        <div>
                            {author}  
                        </div>
                        <iframe src={url} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                      </li>
                    ))}
                </ul>
            </main>

        </div>
    )
}