import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './component/Search'
import UserProfile from './component/UserProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* uncomment Searchto appear it */}
      {/* <Search /> */}
      <UserProfile/>
    </>
  )
}

export default App;
