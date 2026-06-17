// import * as React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import styles from "../Pages/CSS/Sidebar.module.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const Sidebar: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <div className={styles.sidebar}>

//       {/* Header */}
//       <div className={styles.sidehead}>
//         <span className={styles.logo}>SONA COMSTAR</span>
//       </div>

//       {/* User */}
//       <div className="sidehead-user" style={{ padding: "15px 20px" }}>
//         <i className="fas fa-user" style={{ marginRight: 12 }}></i>
//         Rakhi Baliyan
//       </div>

//       {/* Menu */}
//       <ul className="nav">

//         {/* Initiator Landing */}
//         <li className="nav-item" >
//           <a style={{ color: "white" }}
//             className={`nav-link ${isActive("/InitiatorLanding") ? "active" : ""}`}
//             onClick={() => navigate("/InitiatorLanding")}
//           >
//             <i className="fa fa-book"></i>
//             My Request
//           </a>
//         </li>


//         {/* My Request (submenu) */}
//         <li
//           className={`nav-item has-submenu ${["/InitiatorLanding/Approved", "/InitiatorLanding/Rejected", "/InitiatorLanding/Closed"].includes(location.pathname)
//             ? "active"
//             : ""
//             }`}
//         >
//           <a
//             className={`nav-link ${isActive("/InitiatorLanding") ? "active" : ""}`}
//             onClick={(e) => {
//               e.preventDefault();
//               navigate("/InitiatorLanding/Approved");
//             }}
//           >


//           </a>

//           {/* Sub-menu opens to the right as per your SCSS */}
//           <ul className="sub-menu" style={{ marginRight: "100px" }}>
//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Approved" ? "active" : ""}
//                 style={{ color: "white" }} onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Approved");
//                 }}
//               >
//                 Approved
//               </a>
//             </li>

//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Rejected" ? "active" : ""}
//                 style={{ color: "white" }} onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Rejected");
//                 }}
//               >
//                 Rejected
//               </a>
//             </li>

//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Closed" ? "active" : ""}
//                 style={{ color: "white" }} onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Closed");
//                 }}
//               >
//                 Closed
//               </a>
//             </li>
//           </ul>
//         </li>


//         {/* Non PO Request */}
//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/NonPoRequest") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/NonPoRequest")}
//           >
//             <i className="fa fa-folder"></i>
//             Non-PO Request
//           </a>
//         </li>

//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/MyApproval") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/MyApproval")}
//           >
//             <i className="fa fa-folder"></i>
//             My Approval
//           </a>
//         </li>

//         <ul className="sub-menu" style={{ marginRight: "100px" }}>
//           <li>
//             <a
//               className={location.pathname === "/MyApproval/Approved" ? "active" : ""}
//               style={{ color: "white" }} onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/MyApproval/Approved");
//               }}
//             >
//               Approved
//             </a>
//           </li>

//           <li>
//             <a
//               className={location.pathname === "/MyApproval/Rejected" ? "active" : ""}
//               style={{ color: "white" }} onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/MyApproval/Rejected");
//               }}
//             >
//               Rejected
//             </a>
//           </li>
//         </ul>

//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/NonPoApproval") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/NonPoApproval")}
//           >
//             <i className="fa fa-folder"></i>
//             NonPO Approval
//           </a>
//         </li>

//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/APTeam") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/APTeam")}
//           >
//             <i className="fa fa-folder"></i>
//             Pending for Acceptance
//           </a>
//         </li>

//         <ul className="sub-menu" style={{ marginRight: "100px" }}>
//           <li>
//             <a
//               className={location.pathname === "/APTeam/Pendingforvouching" ? "active" : ""}
//               style={{ color: "white" }} onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/APTeam/Pendingforvouching");
//               }}
//             >
//               Pending for Vounching
//             </a>
//           </li>

//           <li>
//             <a
//               className={location.pathname === "/APTeam/Closed" ? "active" : ""}
//               style={{ color: "white" }} onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/APTeam/Closed");
//               }}
//             >
//               Closed
//             </a>
//           </li>
//         </ul>

//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/APTeamAcceptance") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/APTeamAcceptance")}
//           >
//             <i className="fa fa-folder"></i>
//             AP Team Acceptance
//           </a>
//         </li>

//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/Vouching") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/Vouching")}
//           >
//             <i className="fa fa-folder"></i>
//             Vouching
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


// import * as React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import styles from "../Pages/CSS/Sidebar.module.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { sp } from "@pnp/sp"; // keep consistent with your project
// // If your project uses: import { sp } from "@pnp/sp/presets/all";

// export interface ISidebarProps {
//   /** SPFx context needed for PnPjs setup */
//   context: any;
//   /** Display name for header (fallback shown if not provided) */
//   userDisplayName?: string;
// }

// type Tab = {
//   id: number;
//   title: string;
//   seq: number;
//   url: string; // e.g., "/Route", "#/Route", or absolute "https://..."
// };

// const Sidebar: React.FC<ISidebarProps> = (props) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [tabs, setTabs] = React.useState<Tab[]>([]);
//   const [loading, setLoading] = React.useState<boolean>(true);

//   /** ---------- Setup PnPjs ---------- */
//   React.useEffect(() => {
//     if (props.context) {
//       sp.setup({ spfxContext: props.context });
//     }
//   }, [props.context]);

//   /** ---------- Helpers ---------- */

//   // Returns current route from either HashRouter or BrowserRouter
//   const getCurrentRoute = React.useCallback(() => {
//     // In HashRouter, location.hash contains "#/path"; in BrowserRouter, use pathname
//     const hash = (location as any).hash || window.location.hash || "";
//     if (hash && hash.startsWith("#")) {
//       return hash.replace("#", "") || "/";
//     }
//     return location.pathname || "/";
//   }, [location]);

//   // Extract route fragment from the tab url for active check
//   const getRouteFromTabUrl = (tabUrl: string) => {
//     if (!tabUrl) return "/";
//     // "#/path" → "/path"
//     if (tabUrl.includes("#")) return tabUrl.split("#")[1] || "/";
//     // "https://..." → not a router path
//     if (/^https?:\/\//i.test(tabUrl)) return "__external__";
//     // "/path"
//     return tabUrl.startsWith("/") ? tabUrl : `/${tabUrl}`;
//   };

//   const isActive = (tabUrl: string) => {
//     const current = getCurrentRoute();
//     const tabRoute = getRouteFromTabUrl(tabUrl);
//     if (tabRoute === "__external__") return false;
//     return current === tabRoute;
//   };

//   // Navigate based on the shape of PageUrl (absolute | hash | route)
//   const goTo = (tabUrl: string) => {
//     if (!tabUrl) return;

//     if (/^https?:\/\//i.test(tabUrl)) {
//       // Absolute URL → full navigation
//       window.location.href = tabUrl;
//       return;
//     }

//     if (tabUrl.includes("#")) {
//       // Hash route → extract and navigate
//       const route = tabUrl.split("#")[1] || "/";
//       navigate(route, { replace: false });
//       return;
//     }

//     // Assume react-router path ("/path" or "path")
//     const route = tabUrl.startsWith("/") ? tabUrl : `/${tabUrl}`;
//     navigate(route, { replace: false });
//   };

//   /** ---------- Load Tabs (filtered by SharePoint groups) ---------- */
//   const loadTabsWithAccess = React.useCallback(async () => {
//     try {
//       setLoading(true);

//       // 1) Current user's SharePoint groups
//       const userGroups = await sp.web.currentUser.groups();
//       const userGroupIds: number[] = (userGroups || []).map((g: any) => g.Id);

//       // 2) Read list items
//       //    We select both "SeqNo" and "Seqno" to be tolerant (only one may exist)
//       const items: any[] = await sp.web.lists
//         .getByTitle("Tabing")
//         .items.select(
//           "Id",
//           "Title",
//           "PageUrl",
//           "SeqNo",
//           "Seqno",
//           "TabingViewGroup/Id",
//           "TabingViewGroup/Title"
//         )
//         .expand("TabingViewGroup")();

//       // 3) Normalize and filter per access
//       const allowed = (items || [])
//         .filter((it: any) => {
//           const groups = it.TabingViewGroup || [];
//           // Public tab (no group assigned) → show to everyone
//           if (!groups || groups.length === 0) return true;
//           // Otherwise show only if user is in any of those groups
//           return groups.some((g: any) => userGroupIds.includes(g.Id));
//         })
//         .map((it: any) => {
//           // PageUrl can be a Hyperlink field → object { Url, Description } or raw string
//           const rawUrl = typeof it.PageUrl === "object" ? it.PageUrl?.Url : it.PageUrl;
//           const cleanedUrl = (rawUrl || "").replace(/\s+/g, ""); // remove spaces

//           // Support both SeqNo and Seqno; default to a large number if missing
//           const seqValue =
//             (typeof it.SeqNo !== "undefined" ? it.SeqNo : it.Seqno) ?? 999;

//           // Ensure number (if stored as text)
//           const seq =
//             typeof seqValue === "number"
//               ? seqValue
//               : Number.parseInt(`${seqValue}`, 10) || 999;

//           return {
//             id: it.Id as number,
//             title: it.Title as string,
//             seq,
//             url: cleanedUrl,
//           } as Tab;
//         })
//         .sort((a: Tab, b: Tab) => a.seq - b.seq);

//       setTabs(allowed);
//     } catch (err) {
//       // eslint-disable-next-line no-console
//       console.error("Load Tabs Error:", err);
//       setTabs([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   React.useEffect(() => {
//     loadTabsWithAccess();
//   }, [loadTabsWithAccess]);

//   /** ---------- Render ---------- */
//   return (
//     <div className={styles.sidebar}>
//       {/* Header */}
//       <div className={styles.sidehead}>
//         <span className={styles.logo}>SONA COMSTAR</span>
//       </div>

//       {/* User */}
//       <div className="sidehead-user" style={{ padding: "15px 20px" }}>
//         <i className="fas fa-user" style={{ marginRight: 12 }} />
//         {props.userDisplayName || "User"}
//       </div>

//       {/* Menu */}
//       <ul className="nav">
//         {loading && (
//           <li className="nav-item" style={{ padding: "8px 16px", color: "#aaa" }}>
//             Loading…
//           </li>
//         )}

//         {!loading && tabs.length === 0 && (
//           <li className="nav-item" style={{ padding: "8px 16px", color: "#aaa" }}>
//             No tabs available
//           </li>
//         )}

//         {!loading &&
//           tabs.map((tab) => (
//             <li className="nav-item" key={tab.id}>
//               {/* Anchor for semantics; we control navigation via onClick */}
//               <a
//                 href={tab.url || "#"}
//                 className={`nav-link ${isActive(tab.url) ? "active" : ""}`}
//                 style={{ color: "white", cursor: "pointer" }}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   goTo(tab.url);
//                 }}
//               >
//                 {/* You can map icons by title/metadata if you store an icon name in the list */}
//                 <i className="fa fa-folder" style={{ marginRight: 8 }} />
//                 {tab.title}
//               </a>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



// old file where all pages are there till 16 march 2026
// import * as React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import styles from "../Pages/CSS/Sidebar.module.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const Sidebar: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <div className={styles.sidebar}>

//       {/* Header */}
//       <div className={styles.sidehead}>
//         <span className={styles.logo}>SONA COMSTAR</span>
//       </div>

//       {/* User */}
//       <div className="sidehead-user" style={{ padding: "15px 20px" }}>
//         <i className="fas fa-user" style={{ marginRight: 12 }}></i>
       
//       </div>

//       {/* Menu */}
//       <ul className="nav">

//         {/* Initiator Landing */}
//         <li className="nav-item" >
//           <a style={{ color: "white" }}
//             className={`nav-link ${isActive("/InitiatorLanding") ? "active" : ""}`}
//             onClick={() => navigate("/InitiatorLanding")}
//           >
//             <i className="fa fa-book"></i>
//             My Request
//           </a>
//         </li>


//         {/* My Request (submenu) */}
//         <li
//           className={`nav-item has-submenu ${["/InitiatorLanding/Approved", "/InitiatorLanding/Rejected", "/InitiatorLanding/Closed"].includes(location.pathname)
//             ? "active"
//             : ""
//             }`}
//         >
//           <a
//             className={`nav-link ${isActive("/InitiatorLanding") ? "active" : ""}`}
//             onClick={(e) => {
//               e.preventDefault();
//               navigate("/InitiatorLanding/Approved");
//             }}
//           >


//           </a>

//           {/* Sub-menu opens to the right as per your SCSS */}
//           <ul className="sub-menu" style={{ marginRight: "100px" }}>
//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Approved" ? "active" : ""}
//                 style={{ color: "white" }} onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Approved");
//                 }}
//               >
//                 Approved
//               </a>
//             </li>

//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Rejected" ? "active" : ""}
//                 style={{ color: "white" }} onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Rejected");
//                 }}
//               >
//                 Rejected
//               </a>
//             </li>

//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Closed" ? "active" : ""}
//                 style={{ color: "white" }} onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Closed");
//                 }}
//               >
//                 Closed
//               </a>
//             </li>
//           </ul>
//         </li>


//         {/* Non PO Request */}
//         {/* <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/NonPoRequest") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/NonPoRequest")}
//           >
//             <i className="fa fa-folder"></i>
//             Non-PO Request
//           </a>
//         </li> */}

//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/MyApproval") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/MyApproval")}
//           >
//             <i className="fa fa-folder"></i>
//             My Approval
//           </a>
//         </li>

//         <ul className="sub-menu" style={{ marginRight: "100px" }}>
//           <li>
//             <a
//               className={location.pathname === "/MyApproval/Approved" ? "active" : ""}
//               style={{ color: "white" }} onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/MyApproval/Approved");
//               }}
//             >
//               Approved
//             </a>
//           </li>

//           <li>
//             <a
//               className={location.pathname === "/MyApproval/Rejected" ? "active" : ""}
//               style={{ color: "white" }} onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/MyApproval/Rejected");
//               }}
//             >
//               Rejected
//             </a>
//           </li>
//         </ul>

//         {/* <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/NonPoApproval") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/NonPoApproval")}
//           >
//             <i className="fa fa-folder"></i>
//             NonPO Approval
//           </a>
//         </li> */}

//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/APTeam") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/APTeam")}
//           >
//             <i className="fa fa-folder"></i>
//             Pending for Acceptance
//           </a>
//         </li>

//         <ul className="sub-menu" style={{ marginRight: "100px" }}>
//           <li>
//             <a
//               className={location.pathname === "/APTeam/Pendingforvouching" ? "active" : ""}
//               style={{ color: "white" }} onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/APTeam/Pendingforvouching");
//               }}
//             >
//               Pending for Vounching
//             </a>
//           </li>

//           <li>
//             <a
//               className={location.pathname === "/APTeam/Closed" ? "active" : ""}
//               style={{ color: "white" }} onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/APTeam/Closed");
//               }}
//             >
//               Closed
//             </a>
//           </li>
//         </ul>

//         {/* <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/APTeamAcceptance") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/APTeamAcceptance")}
//           >
//             <i className="fa fa-folder"></i>
//             AP Team Acceptance
//           </a>
//         </li> */}

//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/Vouching") ? "active" : ""}`}
//             style={{ color: "white" }} onClick={() => navigate("/Vouching")}
//           >
//             <i className="fa fa-folder"></i>
//             Vouching
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;





// ------------------------  commented by Sachin only this part    ----------------------



// import * as React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import styles from "../Pages/CSS/Sidebar.module.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const Sidebar: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   /** ========== Fullscreen Detection (3 ways) ========== */
//   const fromState = (location.state as any)?.fullscreen === true;

//   const params = new URLSearchParams(location.search);
//   const fromQuery = params.get("fs") === "1";

//   const path = location.pathname.toLowerCase();
//   const isFormRoute =
//     path.startsWith("/nonpoapproval") ||
//     path.startsWith("/nonporequest") ||
//     path.startsWith("/apteamacceptance") ||
//     path.startsWith("/vouching");

//   const isFullscreen = fromState || fromQuery || isFormRoute;

//   if (isFullscreen) return null;

//   const isActive = (p: string) => location.pathname === p;

//   return (
    
//     <div className={styles.sidebar} data-sidebar="true">
//       {/* Header */}
//       <div className={styles.sidehead}>
//         <span className={styles.logo}>SONA COMSTAR</span>
//       </div>

//       {/* User */}
//       <div className="sidehead-user" style={{ padding: "15px 20px" }}>
//         <i className="fas fa-user" style={{ marginRight: 12 }} />
//       </div>

//       {/* Menu */}
//       <ul className="nav">
//         {/* Initiator Landing */}
//         <li className="nav-item">
//           <a
//             style={{ color: "white" }}
//             className={`nav-link ${isActive("/InitiatorLanding") ? "active" : ""}`}
//             onClick={() => navigate("/InitiatorLanding")}
//           >
//             <i className="fa fa-book" />
//             My Request
//           </a>
//         </li>

//         {/* My Request (submenu) */}
//         <li
//           className={`nav-item has-submenu ${
//             ["/InitiatorLanding/Approved", "/InitiatorLanding/Rejected", "/InitiatorLanding/Closed"].includes(
//               location.pathname
//             )
//               ? "active"
//               : ""
//           }`}
//         >
//           <a
//             className={`nav-link ${isActive("/InitiatorLanding") ? "active" : ""}`}
//             onClick={(e) => {
//               e.preventDefault();
//               navigate("/InitiatorLanding/Approved");
//             }}
//           ></a>

//           {/* Sub-menu opens */}
//           <ul className="sub-menu" style={{ marginRight: "100px" }}>
//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Approved" ? "active" : ""}
//                 style={{ color: "white" }}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Approved");
//                 }}
//               >
//                 Approved
//               </a>
//             </li>

//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Rejected" ? "active" : ""}
//                 style={{ color: "white" }}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Rejected");
//                 }}
//               >
//                 Rejected
//               </a>
//             </li>

//             <li>
//               <a
//                 className={location.pathname === "/InitiatorLanding/Closed" ? "active" : ""}
//                 style={{ color: "white" }}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/InitiatorLanding/Closed");
//                 }}
//               >
//                 Closed
//               </a>
//             </li>
//           </ul>
//         </li>

//         {/* My Approval */}
//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/MyApproval") ? "active" : ""}`}
//             style={{ color: "white" }}
//             onClick={() => navigate("/MyApproval")}
//           >
//             <i className="fa fa-folder" />
//             My Approval
//           </a>
//         </li>

//         <ul className="sub-menu" style={{ marginRight: "100px" }}>
//           <li>
//             <a
//               className={location.pathname === "/MyApproval/Approved" ? "active" : ""}
//               style={{ color: "white" }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/MyApproval/Approved");
//               }}
//             >
//               Approved
//             </a>
//           </li>

//           <li>
//             <a
//               className={location.pathname === "/MyApproval/Rejected" ? "active" : ""}
//               style={{ color: "white" }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/MyApproval/Rejected");
//               }}
//             >
//               Rejected
//             </a>
//           </li>
//         </ul>

//         {/* Pending for Acceptance */}
//         <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/APTeam") ? "active" : ""}`}
//             style={{ color: "white" }}
//             onClick={() => navigate("/APTeam")}
//           >
//             <i className="fa fa-folder" />
//             Pending for Acceptance
//           </a>
//         </li>

//         <ul className="sub-menu" style={{ marginRight: "100px" }}>
//           <li>
//             <a
//               className={location.pathname === "/APTeam/PendingforVouching" ? "active" : ""}
//               style={{ color: "white" }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/APTeam/PendingforVouching");
//               }}
//             >
//               Pending for Vounhing
//             </a>
//           </li>

//           <li>
//             <a
//               className={location.pathname === "/APTeam/ClosedRequests" ? "active" : ""}
//               style={{ color: "white" }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 navigate("/APTeam/ClosedRequests");
//               }}
//             >
//               Closed
//             </a>
//           </li>
//         </ul>

//         {/* Vouching */}
//         {/* <li className="nav-item">
//           <a
//             className={`nav-link ${isActive("/Vouching") ? "active" : ""}`}
//             style={{ color: "white" }}
//             onClick={() => navigate("/Vouching")}
//           >
//             <i className="fa fa-folder" />
//             Vouching
//           </a>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



// -----------------------------------------------------------------------------------







import * as React from "react";
import { useLocation } from "react-router-dom";
import "../Pages/CSS/Sidebar.scss";
import { ISonaNonPoProps } from "../ISonaNonPoProps";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/SonaPNGLogo.png";

// ✅ PnPJS v3 Imports
import { spfi, SPFI } from "@pnp/sp";
import { SPFx } from "@pnp/sp/behaviors/spfx";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";

type TabItem = {
  id: number;
  title: string;
  seq: number;
  url: string;
};

const Sidebar = (props: ISonaNonPoProps) => {
  const location = useLocation();

  const [tabs, setTabs] = React.useState<TabItem[]>([]);
  const [selectedTabUrl, setSelectedTabUrl] = React.useState<string>("");

  const username = props.userDisplayName;

  // ✅ UseRef for SP instance (best practice)
  const spRef = React.useRef<SPFI | null>(null);

  /** ---------------------------------------------------------
   * Initialize PnPJS
   * --------------------------------------------------------- */
  React.useEffect(() => {
    spRef.current = spfi().using(SPFx(props.context));
  }, [props.context]);

  /** ---------------------------------------------------------
   * Load tabs with access control
   * --------------------------------------------------------- */
  const loadTabsWithAccess = async () => {
    try {
      if (!spRef.current) return;

      // ✅ Get current user's SharePoint groups
      const userGroups = await spRef.current.web.currentUser.groups();

      const userGroupIds = userGroups.map((g: { Id: number }) => g.Id);

      // ✅ Get all tabs from SharePoint list
      const items: any[] = await spRef.current.web.lists
        .getByTitle("NONPOTabbing")
        .items.select(
          "Id",
          "Title",
          "SeqNo",
          "PageUrl",
          "TabingViewGroup/Id",
          "TabingViewGroup/Title"
        )
        .expand("TabingViewGroup")();

      // ✅ Filter tabs based on group access
      const allowedTabs: TabItem[] = items
        .filter((tab) => {
          const groups: { Id: number }[] = tab.TabingViewGroup || [];

          // ✅ Public tab (no group assigned)
          if (groups.length === 0) return true;

          // ✅ User belongs to group
          return groups.some((g) => userGroupIds.includes(g.Id));
        })
        .map((tab) => ({
          id: tab.Id,
          title: tab.Title,
          seq: tab.SeqNo || 999,
          url: tab.PageUrl ? tab.PageUrl.replace(/\s+/g, "") : "",
        }))
        .sort((a, b) => a.seq - b.seq);

      setTabs(allowedTabs);

      if (allowedTabs.length > 0) {
        setSelectedTabUrl(allowedTabs[0].url);
      }
    } catch (err) {
      console.error("Load Tabs Error:", err);
    }
  };

  /** ---------------------------------------------------------
   * Get active class
   * --------------------------------------------------------- */
  const getActiveClass = (tabUrl: string) => {
    const currentRoute = window.location.hash.replace("#", "") || "/InitiatorLanding";
    const tabRoute = tabUrl.split("#")[1] || "/InitiatorLanding";

    return currentRoute === tabRoute ? "active" : "";
  };

  /** ---------------------------------------------------------
   * Initial Load
   * --------------------------------------------------------- */
  React.useEffect(() => {
    loadTabsWithAccess();
  }, []);

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidehead">
        <div className="logo">
          <img src={logo} width="25px" height="25px" alt="logo" />
        </div>
        <div className="sidehead-right">SONA COMSTAR</div>
      </div>

      {/* User */}
      <div className="sidehead-user">
        <i
          className="fas fa-user"
          style={{ marginLeft: "20px", marginRight: "15px" }}
        ></i>
        {username}
      </div>

      {/* Navigation */}
      <ul className="nav">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <a
              href={tab.url}
              className={`nav-link ${getActiveClass(tab.url)}`}
              style={{ cursor: "pointer" }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;