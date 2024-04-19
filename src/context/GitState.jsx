import React, { useEffect, useState } from 'react'
import GitContext from './gitContext'
import axios from 'axios'
import { API_BASE_URL } from '../config'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'



const GitState = ({children}) => {
    const [repositoryListData,setRepositoryListData] = useState([])
    const [followers,setFollowers] = useState([])
    const [username,setUsername] = useState("")
    
    
    const [repoDetail,setRepoDetail] = useState({})

    const {enqueueSnackbar} = useSnackbar()

    const navigate = useNavigate()

    const fetchGitUserData =async (username)=>{
        try{
            setRepositoryListData([])
            const userData =await axios.get(`${API_BASE_URL}/users/save-user/${username}`)
            setRepositoryListData(userData.data.githubrepos)
        
           
        }
        catch(err){
            enqueueSnackbar("User not found",{variant:"error"})

            console.log(err);
        }

       

    }


   


    const getParticularRepoDetail = (id)=>{
           setRepoDetail(repositoryListData.find((repo)=> repo.id === id));
    }


    const getFollowersOfUser = async(username)=>{
        try{

            console.log(username)
            const followersData =await axios.get(`https://api.github.com/users/${username}/followers`)

          
            let followersName = followersData.data.map((follower)=>({id : follower.id ,name:follower.login,image:follower.avatar_url}));
            
            setFollowers(followersName);
            setUsername(username)
            navigate('/followers')
        }
        catch(err){

            console.log(err)
            enqueueSnackbar("User not found",{variant:"error"})
        }
    }







    return(
        <GitContext.Provider value={{repositoryListData,fetchGitUserData,repoDetail,getParticularRepoDetail,getFollowersOfUser,followers,username}}>
           {children}
        </GitContext.Provider>
    )
}

export default GitState
