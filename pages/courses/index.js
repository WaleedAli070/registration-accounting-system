import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Courses.module.css'

export default function Courses() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Efficiency Training Institute</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className={styles.main}> */}
        <p className={styles.description}>
          Courses being offered at Efficiency Training Institue
        </p>

        <div className={styles.grid}>
          <Link href="/courses/abc">
            <a className={styles.card}>
              <h3>Course ABC &rarr;</h3>
              <p>Some Course Description here.</p>
            </a>
          </Link>
        </div>
      {/* </div> */}
    </div>
  )
}