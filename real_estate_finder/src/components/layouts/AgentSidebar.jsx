import React, { useState } from 'react'
import { AgentNavbar } from './AgentNavbar'
import { Link, Outlet } from 'react-router-dom'

export const AgentSidebar = () => {
  
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };
    return (
        <>
    <AgentNavbar toggleSidebar={toggleSidebar}/>
    <aside
            className={`app-sidebar bg-body-secondary shadow ${
              isSidebarOpen ? "open" : "d-none"
            }`}
            data-bs-theme="dark"
          >
            <div className="sidebar-brand">
    
           
              
            <Link to='/user'style={{color:"white"}}> <i class="fa-solid fa-house"></i></Link>
               
            <span className="brand-text fw-light">Magics</span>
                
                
                
            
              
            </div>
    
            <div
              className=""
              data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
              tabIndex={-1}
              style={{
                marginRight: "-16px",
                marginBottom: "-16px",
                marginLeft: 0,
                top: "-8px",
                right: "auto",
                left: "-8px",
                width: "calc(100% + 16px)",
                padding: 8,
              }}
            >
              <nav className="mt-2">
                
                <ul
                  className="nav sidebar-menu flex-column"
                  data-lte-toggle="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item menu-open">
                    <a href="#" className="nav-link active">
                      <i className="nav-icon bi bi-speedometer" />
                      <p>
                        Dashboard
                        <i className="nav-arrow bi bi-chevron-right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="./index.html" className="nav-link active">
                          <i className="nav-icon bi bi-circle" />
                          <p>Dashboard v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index2.html" className="nav-link">
                          <i className="nav-icon bi bi-circle" />
                          <p>Dashboard v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./index3.html" className="nav-link">
                          <i className="nav-icon bi bi-circle" />
                          <p>Dashboard v3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <li className="nav-item d-none d-md-block">
                                <Link to='viewproperty' className="nav-link">
                                View Property
                                </Link>
                              </li>
                  </li>
                  <li className="nav-item">
                  
                    <li className="nav-item d-none d-md-block">
                                <Link to='updateproperty' className="nav-link">
                                Upadate Property
                                </Link>
                              </li>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="./widgets/small-box.html" className="nav-link">
                          <i className="nav-icon bi bi-circle" />
                          <p>Small Box</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./widgets/info-box.html" className="nav-link">
                          <i className="nav-icon bi bi-circle" />
                          <p>info Box</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./widgets/cards.html" className="nav-link">
                          <i className="nav-icon bi bi-circle" />
                          <p>Cards</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                
              </nav>
            </div>
          </aside>
    <main class="app-main">
    <Outlet></Outlet>
    </main>
    
        </>
      )
}
