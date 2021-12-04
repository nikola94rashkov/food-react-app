import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>

     {/* <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/blogs/details" element={<BlogDetailsView />} />
        <Route path="/login" element={<LoginView />}/>
        <Route path="/registration" element={<RegistrationView />}/>
        <Route path="*" element={<ErrorView />}/>
      </Routes> */}

      <Footer/>
    </>
  );
}

export default App;
