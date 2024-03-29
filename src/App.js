import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Lists from "./pages/lists/Lists";
import Login from "./pages/login/Login";
import { Sells } from './pages/sells/Sells';
import { productInputs, userInputs } from "./fromSource";
import { Todo } from "./pages/todo/Todo";
import { Layout } from "./components/layout/Layout";
import { userColumns, userRows, productsColumns, productsRows, ordersRows, ordersColumns } from "./../src/datatablesource";
import User from "./pages/user/User";
import { Stats } from "./pages/stats/Stats";

function App() {
  return (
   
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todo" element={<Todo/>}></Route>

        <Route path="users">
          <Route index element={<Lists columns={userColumns} rows={userRows}/>} />
          <Route path=":userId" element={<Single />} />
          <Route 
          path="new" 
          element={<New  inputs={userInputs} title="Add New Users"/>} />
        </Route>

        <Route path="products">
          <Route index element={<Lists columns={productsColumns} rows={productsRows}/>} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
        </Route>

        <Route path="orders">
          <Route index element={<Lists columns={ordersColumns} rows={ordersRows} />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path="user">
          <Route index element={<User />} />
        </Route>

        <Route path="/delivery" element={<Sells/>}/>
        <Route path="/stats" element={<Stats/>}/>
        
      </Routes>
    </Layout>
    </BrowserRouter>
    
  );
}

export default App;
