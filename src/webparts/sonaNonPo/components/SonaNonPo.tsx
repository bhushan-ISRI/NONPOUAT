// // src/components/Drr.tsx
// import * as React from "react";
// import Sidebar from "../components/Pages/Sidebar";
// import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { ISonaNonPoProps } from "./ISonaNonPoProps";
// import NonPoRequest from "./Pages/NonPoRequest";

// const DrrContent: React.FC<ISonaNonPoProps> = (props) => {
//   const location = useLocation();
//   return (
//     <div className="container-fluid" style={{ display: "flex", width: "100%" }}>
//       <Sidebar {...props} />
//       <div className="main" style={{ flex: 1, minWidth: 0 }}>
//         <Routes>
//           <Route path="/NonPoRequest" element={<NonPoRequest {...props} />} />
//           <Route path="*" element={<Navigate to="/NonPoRequest" replace />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// const Drr: React.FC<ISonaNonPoProps> = (props) => (
//   <Router>
//     <DrrContent {...props} />
//   </Router>
// );

// export default Drr;


// import * as React from "react";
// import Sidebar from "../components/Pages/Sidebar";
// import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { ISonaNonPoProps } from "./ISonaNonPoProps";
// import NonPoRequest from "./Pages/NonPoRequest";
// import InitiatorLanding from "./Pages/InitiatorLanding";
// import MyApproval from "./Pages/MyApproval";
// import NonPoApproval from "./Pages/NonPoApproval";
// import APTeam from "./Pages/APTeam";
// import APTeamAcceptance from "./Pages/APTeamAcceptance";
// import Vouching from "./Pages/Vouching";
// import InitiatorApproved from "./Pages/InitiatorApproved";
// import InitiatorRejected from "./Pages/InitiatorRejected";
// import InitiatorClosed from "./Pages/InitiatorClosed";
// import MyApprovalApproved from "./Pages/MyApprovalApproved";
// import MyApprovalRejected from "./Pages/MyApprovalRejected";
// import PendingforVouching from "./Pages/PendingforVouching";
// import ClosedRequests from "./Pages/ClosedRequests";
// import { SPFI } from "@pnp/sp/presets/all";
// // import { SPFI } from "@pnp/sp";

// const DrrContent: React.FC<ISonaNonPoProps> = (props) => {
//   useLocation();
//   return (
//     <div className="container-fluid" style={{ display: "flex", width: "100%" }}>
//       <Sidebar {...props} />
//       <div className="main" style={{ flex: 1, minWidth: 0 }}>
//         <Routes>
//           <Route path="/NonPoRequest" element={<NonPoRequest {...props} />} />
//           <Route path="*" element={<Navigate to="/NonPoRequest" replace />} />

//           {/* <Route path="/InitiatorLanding" element={<InitiatorLanding sp={new SPFI} {...props} />} />
//           <Route path="*" element={<Navigate to="/InitiatorLanding" replace />} /> */}

//           <Route path="/InitiatorLanding" element={<InitiatorLanding {...props} />} />

//           <Route path="/InitiatorLanding/approved" element={<InitiatorApproved {...props} />} />
//           <Route path="/InitiatorLanding/rejected" element={<InitiatorRejected {...props} />} />
//           <Route path="/InitiatorLanding/closed" element={<InitiatorClosed {...props} />} />


//           <Route path="/MyApproval" element={<MyApproval {...props} />} />
//           <Route path="*" element={<Navigate to="/MyApproval" replace />} />


//           <Route path="/MyApproval/approved" element={<MyApprovalApproved {...props} />} />
//           <Route path="/MyApproval/rejected" element={<MyApprovalRejected {...props} />} />


//           <Route path="/NonPoApproval" element={<NonPoApproval {...props} />} />
//           {/* <Route path="*" element={<Navigate to="/NonPoApproval" replace />} /> */}

//           <Route path="/APTeam" element={<APTeam {...props} />} />
//           <Route path="*" element={<Navigate to="/APTeam" replace />} />

//           <Route path="/APTeamAcceptance" element={<APTeamAcceptance {...props} />} />
//           <Route path="*" element={<Navigate to="/APTeamAcceptance" replace />} />

//            <Route path="/PendingforVouching" element={<PendingforVouching {...props} />} />
//           <Route path="*" element={<Navigate to="/PendingforVouching" replace />} />
//               <Route path="/ClosedRequests" element={<ClosedRequests {...props} />} />
//           <Route path="*" element={<Navigate to="/ClosedRequests" replace />} />

//           <Route path="/Vouching" element={<Vouching {...props} />} />
//           <Route path="*" element={<Navigate to="/Vouching" replace />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// const Drr: React.FC<ISonaNonPoProps> = (props) => (
//   <Router>
//     <DrrContent {...props} />
//   </Router>
// );

// export default Drr;


import * as React from "react";
import { useEffect } from "react";
import Sidebar from "../components/Pages/Sidebar";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ISonaNonPoProps } from "./ISonaNonPoProps";
import NonPoRequest from "./Pages/NonPoRequest";
import InitiatorLanding from "./Pages/InitiatorLanding";
import MyApproval from "./Pages/MyApproval";

import { NonPoApproval } from "./Pages/NonPoApproval";
//import NonPoApproval from "./Pages/NonPoApproval";

//import NonPoApproval from "./Pages/NonPoApproval"
import APTeam from "./Pages/APTeam";
import { APTeamAcceptance } from "./Pages/APTeamAcceptance";
import { Vouching } from "./Pages/Vouching";
import { InitiatorApproved } from "./Pages/InitiatorApproved";
import { InitiatorRejected } from "./Pages/InitiatorRejected";
import { InitiatorClosed } from "./Pages/InitiatorClosed";
import { MyApprovalApproved } from "./Pages/MyApprovalApproved";
import { MyApprovalRejected } from "./Pages/MyApprovalRejected";
import { ViewRequest } from "./Pages/ViewRequest";
import PendingforVouching from "./Pages/PendingforVouching";
import ClosedRequests from "./Pages/ClosedRequests";
import { ViewRequestSendBack } from "./Pages/ViewRequestSendBack";

const DrrContent: React.FC<ISonaNonPoProps> = (props) => {
  const location = useLocation()

  useEffect(() => {

    const leftNav =
      document.getElementById("spLeftNav");

    if (leftNav) {
      leftNav.style.display = "none";
    }

  }, []);

  const hideSidebar =
    location.pathname.startsWith("/NonPoRequest") ||
    location.pathname.startsWith("/ViewRequest/") || 
    location.pathname.startsWith("/NonPoApproval/") ||
    location.pathname.startsWith("/ViewMonPo/") ||
    location.pathname.startsWith("/APTeamAcceptance/") ||
    location.pathname.startsWith("/Vouching/") ||
    location.pathname.startsWith("/ViewRequest/") ||
    location.pathname.startsWith("/ViewRequestSendBack/");

  return (
    <div className="container-fluid" style={{ display: "flex", width: "100%" }}>
      {/* <Sidebar {...props} /> */}
      {!hideSidebar && <Sidebar {...props} />}
      
      <div className="main" style={{
        width: hideSidebar ? "100%" : "calc(100% - 250px)",
        transition: "width 0.3s ease"
      }}>
        <Routes>
          {/* Initiator */}
          <Route path="/NonPoRequest" element={<NonPoRequest {...props} />} />
          <Route path="/" element={<InitiatorLanding {...props} />} />
          <Route path="/InitiatorApproved" element={<InitiatorApproved {...props} />} />
          <Route path="/InitiatorRejected" element={<InitiatorRejected {...props} />} />
          <Route path="/InitiatorClosed" element={<InitiatorClosed {...props} />} />

          {/* Approvals */}
          <Route path="/MyApproval" element={<MyApproval {...props} />} />
          <Route path="MyApprovalApproved" element={<MyApprovalApproved {...props} />} />
          <Route path="/MyApprovalRejected" element={<MyApprovalRejected {...props} />} />
          <Route path="/NonPoApproval/:id" element={<NonPoApproval {...props} />} />
          <Route path="/ViewMonPo:id" element={<NonPoApproval {...props} />} />

          {/* AP Team */}
          <Route path="/APTeam" element={<APTeam {...props} />} />
          <Route path="/APTeamAcceptance/:id" element={<APTeamAcceptance {...props} />} />

          {/*  AP Team sub-dashboards */}
          <Route path="/APTeam/PendingforVouching" element={<PendingforVouching {...props} />} />
          <Route path="/APTeam/ClosedRequests" element={<ClosedRequests {...props} />} />

          {/* Vouching form */}g
          <Route path="/Vouching/:id" element={<Vouching {...props} />} />
          <Route path="/ViewRequest/:id" element={<ViewRequest {...props} />} />
          <Route path="/ViewRequestSendBack/:id" element={<ViewRequestSendBack {...props} />} />



          {/*  Single catch-all at the very end */}
          <Route path="*" element={<Navigate to="/NonPoRequest" replace />} />
        </Routes>
      </div>
    </div>
  );
};

const Drr: React.FC<ISonaNonPoProps> = (props) => (
  <Router>
    <DrrContent {...props} />
  </Router>
);

export default Drr;