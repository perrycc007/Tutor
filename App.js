import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import AllTutor from './pages/AllTutor';
import ApplyTutor from './pages/ApplyTutor';
import FavoritesPage from './pages/Favorites';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import ProfilePage from './pages/ProfilePage';
import ApplyCasePage from './pages/ApplyCase';
import Layout from './components/layout/Layout';
import RequireAuth from "./components/Auth/RequireAuth";
import AllCase from "./pages/AllCase";
import { alertTitleClasses } from "@mui/material";


function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path='/'  element={<HomePage max/>}/>
        <Route path='/Alltutor'  element={<AllTutor />}/>
        <Route path='/Case'  element={<AllCase />}/>
        <Route path='/apply-tutor' element={<ApplyTutor />}/>
        <Route path='/apply-case' element={<ApplyCasePage />}/>
        <Route path='/favorites' element={<FavoritesPage />}/>
        {!authCtx.isLoggedIn && (
          <Route path='/auth' element={<AuthPage />}/>
        )}
        <Route
          path="/profile"
          element={
            //<RequireAuth>
              <ProfilePage />
            //</RequireAuth>
          }
        />
        <Route path='*'element= { <Navigate to='/' />}/>
      </Routes>
    </Layout>
  );
}

export default App;
