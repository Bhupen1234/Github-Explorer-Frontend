import React, {  useContext } from 'react'
import styles from "./RepositoryDetail.module.css"

import GitContext from '../../context/gitContext'
const RepositoryDetail = () => {
    const{repoDetail} = useContext(GitContext)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {repoDetail.image && <img src={repoDetail.image} alt="Repository Avatar" className={styles.avatar} />}
        <div className={styles.info}>
          <h1 className={styles.title}>{repoDetail.name}</h1>
          <p className={styles.description}>{repoDetail.description!==null ?repoDetail.description : "Not available"}</p>
        </div>
      </div>
      <div className={styles.language}>
        <h3>Language Used:</h3>
        <span className={styles.languagePill}>{repoDetail.language!==null ?repoDetail.language : "Not available"}</span>
      </div>
    </div>
  )
}

export default RepositoryDetail
