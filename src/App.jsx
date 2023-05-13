import { Route, Routes } from "react-router-dom";

// App Components
import Header from "./components/Header";
import Home from "./Components/Home";
import UserSignIn from "./Components/UserSignIn";
import UserSignOut from "./Components/UserSignOut";
import Settings from "./Components/Settings";
import NotFound from "./Components/NotFound";

function App() {
  

  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={
          <UserSignIn />
        } />
        <Route path="signout" element={<UserSignOut />} />
        <Route path="settings" element={
          <Settings />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    
  );
}

export default App;
