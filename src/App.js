import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Grid from './components/Grid/Grid';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Error from './components/Error/Error';
import CreateForm from './components/CreateForm/CreateForm';
import EditForm from './components/EditForm/EditForm';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      
        <div className="wrapper__inner">
          <Routes>
            {/* <Route path="/recipe/:recipeId" element={<Recipe />} /> */}
            <Route path="/" element={<Grid />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard/*" element={<Dashboard />}>
                <Route path="add" element={<CreateForm/>} />
                <Route path="edit" element={<EditForm/>}/>
            </Route>
            <Route path="*" element={<Error />}/>
          </Routes>
        </div>
        
      <Footer/>
    </div>
  );
}

export default App;
