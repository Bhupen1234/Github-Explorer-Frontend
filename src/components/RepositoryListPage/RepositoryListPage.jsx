import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './RepositoryListPage.module.css'; 
import GitContext from '../../context/gitContext';

const RepositoryListPage = () => {
    const { repositoryListData, getParticularRepoDetail , } = useContext(GitContext);
    
    return (
        <div className={styles.wrapper}>
            <ul className={styles.repositoryList}>
                {repositoryListData.map((repo) => (
                    <li key={repo.id} onClick={() => getParticularRepoDetail(repo.id)}>
                        <Link to="/repoDetail" className={styles.repoItem}>
                            <img src={repo.image} alt="Repository Avatar" className={styles.repoAvatar} />
                            <p>{repo.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepositoryListPage;

