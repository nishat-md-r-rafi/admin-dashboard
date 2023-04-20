import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Lists from "./pages/lists/Lists";
import Login from "./pages/login/Login";
import { Sells } from './pages/sells/Sells';
import { productInputs, userInputs } from "./fromSource";
import { Todo } from "./pages/todo/Todo";
import Topbar from "./components/topbar/Topbar";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
   
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todo" element={<Todo/>}></Route>

        <Route path="users">
          <Route index element={<Lists />} />
          <Route path=":userId" element={<Single />} />
          <Route 
          path="new" 
          element={<New  inputs={userInputs} title="Add New Users"/>} />
        </Route>

        <Route path="products">
          <Route index element={<Lists />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
        </Route>

        <Route path="sells">
          <Route index element={<Sells />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>

        
      </Routes>
    </Layout>
    </BrowserRouter>
    
  );
}

export default App;
