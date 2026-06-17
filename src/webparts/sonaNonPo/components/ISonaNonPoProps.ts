// export interface ISonaNonPoProps {
//   /** SPFx context objects */
//   context: any;
//   currentSPContext: any;

//   /** Optional (coming from property pane) */
//   description?: string;

//   /** Theming / environment / user */
//   isDarkTheme: boolean;
//   environmentMessage: string;
//   hasTeamsContext: boolean;
//   userDisplayName: string;
// }

// src/components/ISonaNonPoProps.ts
export interface ISonaNonPoProps {
  context: any;
  currentSPContext: any;
  description?: string;             
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  children?: React.ReactNode;
  userEmail?:any;//sn
}