// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Layout.css";
// import Writing from "../Writing/Writing";
// import Speaking from "../Speaking/Speaking";
// import SnapTalk from "../SnapTalk/SnapTalk";
// import Dashboard from "../Dashboard/Dashboard";

// const Layout = () => {
//   const [activeItem, setActiveItem] = useState("Writing");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (activeItem === "Dashboard") {
//       navigate("/dashboard");
//     }
//   }, [activeItem, navigate]);

//   const handleNavClick = (item) => {
//     setActiveItem(item);
//   };

//   const renderContent = () => {
//     switch (activeItem) {
//       case "Dashboard":
//         return <Dashboard />;
//       case "Writing":
//         return <Writing />;
//       case "Speaking":
//         return <Speaking />;
//       case "Snap Talk":
//         return <SnapTalk />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="layout">

//       <div className="content">
//         <div className="editor">
//           <h3>{activeItem}</h3>
//           {renderContent()}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Layout;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Layout.css";
import Writing from "../Writing/Writing";
import Speaking from "../Speaking/Speaking";
import SnapTalk from "../SnapTalk/SnapTalk";
import Dashboard from "../Dashboard/Dashboard";

const Layout = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(
    location.state?.activeItem || "Writing"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (activeItem === "Dashboard") {
      navigate("/dashboard");
    }
  }, [activeItem, navigate]);

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  const renderContent = () => {
    switch (activeItem) {
      case "Dashboard":
        return <Dashboard />;
      case "Writing":
        return <Writing />;
      case "Speaking":
        return <Speaking />;
      case "Snap Talk":
        return <SnapTalk />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <div>
          <h2
            className="layout-header"
            onClick={() => handleNavClick("Dashboard")}
          >
            Snap Talk Analyzer
          </h2>
          <nav>
            <div className="sidebar-p">
              <p
                className={activeItem === "Dashboard" ? "active" : ""}
                onClick={() => handleNavClick("Dashboard")}
              >
                Dashboard
              </p>
            </div>
            <div className="sidebar-p">
              <p
                className={activeItem === "Writing" ? "active" : ""}
                onClick={() => handleNavClick("Writing")}
              >
                Writing
              </p>
            </div>
            <div className="sidebar-p">
              <p
                className={activeItem === "Speaking" ? "active" : ""}
                onClick={() => handleNavClick("Speaking")}
              >
                Speaking
              </p>
            </div>
            <div className="sidebar-p">
              <p
                className={activeItem === "Snap Talk" ? "active" : ""}
                onClick={() => handleNavClick("Snap Talk")}
              >
                Snap Talk
              </p>
            </div>
          </nav>
        </div>
      </div>
      <div className="content">
        <div className="editor">
          <h3>{activeItem}</h3>
          {renderContent()}
        </div>
      </div>
      <div className="history-sidebar">
        <h4>Tasks</h4>
        <ul>
          <li>Create welcome form</li>
          <li>Instructions</li>
          <li>Career</li>
          <li>Onboarding</li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
