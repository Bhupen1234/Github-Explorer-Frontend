import React, { useContext, useState } from 'react'
import styles from "./HomePage.module.css" 
import axios from 'axios'
import { API_BASE_URL } from '../../config'
import { useSnackbar } from 'notistack'
import GitContext from "../../context/gitContext"
import RepositoryListPage from '../RepositoryListPage/RepositoryListPage'

const HomePage = () => {
  const [username,setUsername] = useState("")
  const { repositoryListData, fetchGitUserData ,getFollowersOfUser } = useContext(GitContext)
  const [loading ,setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (username.trim() === '') {
      enqueueSnackbar('Please enter a valid GitHub username', { variant: 'warning' });
      return;
    }

    await fetchGitUserData(username);
    setLoading(false)
    setUsername("");

  }


  const handleFollowerButton=()=>{
    
    getFollowersOfUser(repositoryListData[0].username)
    
  }

  return (
    <div className={styles.wrapper}>
      <h1>Welcome to GitHub Repository Explorer</h1>
      <form onSubmit={async(e)=>await handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">{loading?"Searching...":"Search"}</button>
      </form>
      
      {repositoryListData.length > 0 && (
        <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"} }>
          <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
          <h2>Repositories for {repositoryListData[0].username}</h2>
          <button className={styles.viewFollowersButton} onClick={()=>handleFollowerButton()}>View Followers</button>
          </div>
          
          <RepositoryListPage/>
        </div>
      )}
    </div>
  )
}

export default HomePage

