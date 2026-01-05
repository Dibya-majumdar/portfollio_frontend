
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Link } from "react-router-dom";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Body from './Body';
import Admin from './components/Admin';
import Footer from './components/Footer';
import AdminWork from './components/AdminWork';
import EditProjectPage from './components/EditProjectPage';
import AdminAddProject from './components/AdminAddProjects';
import Journey from './components/Journey';
import  Video from './components/Video';
import AdminMessageFromUsers from './components/AdminMessageFromUsers';



function App() {
  return (
   <>
   <BrowserRouter basename='/'>
   <Routes>
    <Route path='/' element={<Body/>}>
    <Route path='/' element={
      <>
      {/* <NavBar/> */}
      <Home />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Journey/>
      <Contact/>
      <Footer/>
      </>} />       
      
 <Route path='/admin' element={ <Admin/>}> </Route>
 <Route path='/admin/works' element={ <AdminWork/>}> </Route>
 <Route path='/admin/works/projects/:id' element={ <EditProjectPage/>}> </Route>
 <Route path='/admin/works/AddProjects' element={ <AdminAddProject/>}> </Route>
 <Route path='/projects/video/:id/:pid' element={ <Video/>}> </Route>
 <Route path='/admin/works/message' element={ <AdminMessageFromUsers/>}> </Route>
    </Route>
   </Routes>
   </BrowserRouter> 
 
    {/* <NavBar/>
     <Home/>
     <AboutMe/>
     <Skills/>
     <Projects/>
     <Contact/> */}
 
 
  
 
   </>
  );
}

export default App;





  