import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/MegaMenu.css';
import menuData from '../data/menuData';
import Login from '../pages/Login';
function NavBar() {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTabs, setActiveTabs] = useState({});

  return (
 <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm" style={{boxShadow:"8px 8px solid black"}}>
      <div className="container">
        <Link className="navbar-brand" to="/">
       <img src='https://theindiadeals.com/wp-content/uploads/2024/07/Indiadeals-Logo_-image-1-2048x1178.jpg' height={"70px"} width={"100px"} />
        
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMega">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMega">
          <ul className="navbar-nav me-auto">
            {menuData.map((menu, index) => (
              <li
                key={index}
                className={`nav-item dropdown position-static`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {menu.tabs ? (
                  <span className="nav-link dropdown-toggle" role="button">{menu.title}</span>
                ) : (
                  <Link className="nav-link" to={menu.link}>{menu.title}</Link>
                )}

                {menu.tabs && hoveredIndex === index && (
                  <div className="dropdown-menu w-100 p-3 mega-menu">
                    <div className="row">
                      {/* Tabs */}
                      <div className="col-md-3 border-end">
                        <ul className="nav flex-column">
                          {menu.tabs.map((tab, tabIndex) => (
                            <li
                              key={tabIndex}
                              className={`nav-link ${activeTabs[index] === tab.name || (!activeTabs[index] && tabIndex === 0) ? 'active' : ''}`}
                              onMouseEnter={() => setActiveTabs({ ...activeTabs, [index]: tab.name })}
                              style={{ cursor: 'pointer' }}
                            >
                              {tab.name}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tab Content */}
                      <div className="col-md-9">
                        {menu.tabs.map((tab, tabIndex) => {
                          const isActive = activeTabs[index] === tab.name || (!activeTabs[index] && tabIndex === 0);
                          return (
                            <div key={tabIndex} className={isActive ? 'd-block' : 'd-none'}>
                              <h6 className="text-uppercase">{tab.name}</h6>
                              <ul className="list-unstyled">
                                {tab.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link className="dropdown-item" to={item.link}>{item.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  SignIn / SignUp
</button>
        </div>
      
      </div>
    </nav>
    <Login></Login>
 </>
  )
}

export default NavBar




