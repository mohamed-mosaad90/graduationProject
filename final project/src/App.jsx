import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Forgetpassword from './pages/forgetPassword'
import Login from './pages/login'
import Resetpassword from './pages/resetpassword'
import Signup from './pages/signup'
import Verificationcode from './pages/verificationSignup'
import Createprofile from './pages/createprofile'
import Verificationforget from './pages/verisicationForgetpassword'
import UserProfile from './components/UserProfile'
import Main from "./pages/main"
import Home from './pages/Home'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/verificationcode" element={<Verificationcode />} />
          <Route path="/createprofile" element={<Createprofile/>} />
          <Route path="/verificationforget" element={<Verificationforget/>} />
          <Route path="/userProfile" element={<UserProfile/>} />
          <Route path="/main" element={<Main/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
