import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Grid from './components/Grid/Grid';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      
        <div className="wrapper__inner">
          <Routes>
            {/* <Route path="/" element={<HomeView />}></Route>
            <Route path="/blogs/details" element={<BlogDetailsView />} />
            <Route path="/login" element={<LoginView />}/>
            <Route path="/registration" element={<RegistrationView />}/>
            <Route path="*" element={<ErrorView />}/> */}
            <Route path="/" element={<Grid />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
        
      <Footer/>
    </div>
  );
}

export default App;
