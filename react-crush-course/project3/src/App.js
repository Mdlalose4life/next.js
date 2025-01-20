import './App.css';
import {Route, Routes } from 'react-router-dom';
import AllMeetUpPage from './pages/AllMeetUps';
import FavouritePage from './pages/Favourite';
import NewMeetUpPage from './pages/NewMeetUP';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
