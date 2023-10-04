
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Component/Login';
// import Registration from './Component/Registration';
// import User from './Component/User';
// import Read from './Component/Read';
// import Edit from './Component/Edit';
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Login />} />
//           <Route path='/user' element={<User />} />
//           <Route path='/registration' element={<Registration />} />
//           <Route path='/read/:id' element={<Read />} />
//           <Route path='/edit/:id' element={<Edit />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// ------------------------- other API ---------------------

import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './otherApi/User';
import Registration from './otherApi/Registration';
import Edit from './otherApi/Edit';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
