import logo from './logo.svg';
import './App.css';
import HomPage from './components/HomePage/HomPage';
import { Route, Routes } from 'react-router-dom';
import RepositoryDetail from './components/RepositoryDetail/RepositoryDetail';
import FollowersPage from './components/FollowersPage/FollowersPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomPage />} />
        <Route  path="/repoDetail" element={<RepositoryDetail />} />
        <Route  path="/followers" element={<FollowersPage />} />
      </Routes>
    </div>
  );
}

export default App;
