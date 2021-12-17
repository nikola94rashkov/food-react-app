import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Grid from './components/Grid/Grid';
import GridItemDetails from './components/GridItemDetails/GridItemDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Error from './components/Error/Error';
import CreateForm from './components/CreateForm/CreateForm';
import EditForm from './components/EditForm/EditForm';

import RequireGuest from './components/RequireGuest/RequireGuest';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="wrapper">
      <AuthProvider>
        <Header/>
      
        <div className="wrapper__inner">
          <Routes>
            <Route path="/:recipeId" element={<GridItemDetails />} />
            <Route path="/" element={<Grid />}/>
            <Route path="/login" element={
              <RequireGuest>
                <Login />
              </RequireGuest>
            }/>
            <Route path="/register" element={
              <RequireGuest>
                <Register />
              </RequireGuest>
            }/>
            <Route path="/dashboard/*" element={
              <RequireAuth redirectTo="/login">
                <Dashboard />
              </RequireAuth>
            }>
                <Route path="add" element={<CreateForm/>} />
                <Route path="edit/:recipeId" element={<EditForm/>}/>
            </Route>
            <Route path="*" element={<Error />}/>
          </Routes>
        </div>
        
        <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
