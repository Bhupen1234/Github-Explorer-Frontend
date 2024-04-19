import React, { useContext } from 'react'
import styles from "./FollowersPage.module.css"
import GitContext from '../../context/gitContext'
import { Link } from 'react-router-dom';

const FollowersPage = () => {
  const {followers,username,fetchGitUserData} = useContext(GitContext);

  const handleClick=async(username)=>{
      await fetchGitUserData(username)
  }
  console.log(followers)
  return (

      
      followers.length===0 ? (
        <div className={styles.wrapper}>
          <h1>No Followers for {username}</h1>
        </div>
      )
     :
      (<div className={styles.wrapper}>
         <h1>Followers of {username}</h1>
            <ul className={styles.followerList}>
                {followers.map((follower) => (
                    <li key={follower.id} onClick={()=>handleClick(follower.name)}>
                        <Link to="/" className={styles.followerItem} >
                            <img src={follower.image} alt="Avatar" className={styles.repoAvatar} />
                            <p>{follower.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>)

      
  )
}

export default FollowersPage
