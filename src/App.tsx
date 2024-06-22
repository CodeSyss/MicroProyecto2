import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./Pages/LoginForm.tsx";
import RegisterForm from "./Pages/RegisterForm.tsx";
function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          <Route index  element={<LoginForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
