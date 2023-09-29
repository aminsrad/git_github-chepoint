import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Accueil from "./components/Accueil";
import Admin from "./components/Admin";
import AddProduits from "./components/AddProduits";
import Historique from "./components/Historique";
import LoginPage from "./components/LoginPage";
import { Fragment } from "react";
import LogOut from "./components/LogOut";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "./components/ProductsList";
import Actualitelist from "./components/Actualitelist";
import AddActualites from "./components/AddActualites";
import Updateactualite from "./components/Updateactualite";
import Uplateproduct from "./components/Uplateproduct";
import GridList from "./components/GridList";
import AddUser from "./components/AddUser";
import ManageUser from "./components/ManageUser";
import { Navbar } from "./components/Navbar";
import AdminNav from "./components/AdminNav";
import Contact from "./components/Contact";
import ContactUsDisplay from "./components/ContactUsDisplay";
import SideBar from "./components/SideBar";

const ProtectedAdminRoute = () => {
  const isAuthenticated = localStorage.getItem("token"); // Check if token exists in localStorage

  return isAuthenticated ? <Admin /> : <Link to="/login" />;
};

function App() {
  return (
    <div>
      <div
        className="App"
        style={{
          paddingLeft: "344px",
          paddingRight: "324px",
          marginBottom: "40px",
        }}
      >
        <Routes>
          <Fragment>
            <Route path="/" element={<Accueil />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/listactualite" element={<Actualitelist />} />
            <Route path="/listproduits" element={<ProductsList />} />
            <Route path="/histoire" element={<Historique />} />
            <Route path="/admin" element={<ProtectedAdminRoute />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/adduser" element={<AddUser />} />
            <Route path="/admin/manageuser" element={<ManageUser />} />
            <Route path="/admin/logout" element={<LogOut />} />
            <Route path="/admin/addactualites" element={<AddActualites />} />
            <Route path="/admin/addproduits" element={<AddProduits />} />
            <Route path="/admin/Contactus" element={<ContactUsDisplay />} />
            <Route path="/admin/Sidebar" element={<SideBar />} />
            <Route
              path="/admin/updateactualite"
              element={<Updateactualite />}
            />
            <Route path="/admin/updateproduits" element={<Uplateproduct />} />
            <Route path="/listgrid" element={<GridList />} />
          </Fragment>
        </Routes>
      </div>
    </div>
  );
}

export default App;
