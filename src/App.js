import { useContext } from 'react';
import { BrowserRouter ,Route ,Routes ,Navigate } from 'react-router-dom';
import Comments from './components/comments';
import LogIn from './components/login';
import Messages from './components/message';
import Posts from './components/posts/index';
import Profile from './components/profile';
import Setting from './components/setting';
import SingUp from './components/singup';
import { AuthCotext } from './context/authContext';
import './styles.css'


function App() {
  const {currentUser} = useContext(AuthCotext)

  const RequireAuth = ({children})=>{
    return currentUser ? (children) : <Navigate to="/"/>
}

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path="/home" element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          } />
        <Route path='/profile' element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
        }/>
        <Route path='/singup' element={
            <SingUp/>
        }/>
        <Route path='/setting' element={
          <RequireAuth>
            <Setting/>
          </RequireAuth>
        }/>
        <Route path='/messages' element={
          <RequireAuth>
            <Messages/>
          </RequireAuth>
        }/>
        <Route path='/comments' element={
          <RequireAuth>
            <Comments/>
          </RequireAuth>
        }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
