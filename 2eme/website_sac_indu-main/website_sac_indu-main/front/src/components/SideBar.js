import React from "react";
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.2/mdb.min.js"
></script>;

const SideBar = () => {
  return (
    <div style={{ paddingRight: "20px" }}>
      <header style={{ width: "150px", display: "flex" }}>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
          style={{ border: "solid" }}
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <a
                href="/admin/addactualites"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-lock fa-fw me-3"></i>
                <span>Ajouter actualites</span>
              </a>
              <a
                href="/admin/updateactualite"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>Update actualites</span>
              </a>
              <a
                href="/admin/addproduits"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span>Ajouter produits</span>
              </a>
              <a
                href="/admin/updateproduits"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-bar fa-fw me-3"></i>
                <span>Update produits</span>
              </a>
              <a
                href="/admin/adduser"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-globe fa-fw me-3"></i>
                <span>Add User</span>
              </a>
              <a
                href="/admin/manageuser"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-building fa-fw me-3"></i>
                <span>Manage User</span>
              </a>
              <a
                href="/admin/Contactus"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-calendar fa-fw me-3"></i>
                <span>Demandes de contacts</span>
              </a>
              <a
                href="/admin/logout"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-users fa-fw me-3"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
      </main>
    </div>
  );
};

export default SideBar;
