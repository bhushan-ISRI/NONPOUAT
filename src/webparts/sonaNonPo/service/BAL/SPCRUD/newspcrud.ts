import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/folders";
import "@pnp/sp/files";
import "@pnp/sp/attachments";
//import NEWSPCRUDOPS from
import SPCRUDOPS from "../../DAL/newspcrudops";
//import SPCRUDOPS from "../../service/DAL/spcrudops";
//import  NEWInewspCrudOps  from "../../DAL/newnewspCrudOps";
import { ISonaNonPoProps } from "../../../components/ISonaNonPoProps";
 
export interface ISPCRUD {
    [x: string]: any;
    getData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: { column: string, isAscending: boolean },top:number, props: ISonaNonPoProps): Promise<any>;
    getRootData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: { column: string, isAscending: boolean },top:number, props: ISonaNonPoProps): Promise<any>;
    insertData(listName: string, data: any, props: ISonaNonPoProps): Promise<any>;
    updateData(listName: string, itemId: number, data: any, props: ISonaNonPoProps): Promise<any>;
    deleteData(listName: string, itemId: number, props: ISonaNonPoProps): Promise<any>;
    getListInfo(listName: string, props: ISonaNonPoProps): Promise<any>;
    getListData(listName: string, columnsToRetrieve: string, props: ISonaNonPoProps): Promise<any>;
    createFolder(listName: string, folderName: string, props: ISonaNonPoProps):Promise<any>;
  
    addAttchmentInList(attFiles: File, listName: string, itemId: number, fileName: string, props: ISonaNonPoProps): Promise<any>;
}

export default async function USESPCRUD(this: any): Promise<ISPCRUD> {
   // const newspCrudOps = await newspCrudOps();
    //const spCrudOps = await NEWISPCRUDOPS();
    //const newspCrudOps=await  SPCRUDOPS(ISonaNonPoProps)
    const props: ISonaNonPoProps = {
        currentSPContext: this.context,
        context: undefined,
        isDarkTheme: false,
        environmentMessage: "",
        hasTeamsContext: false,
        userDisplayName: "",
        userEmail:"",

    }; // <-- type here is fine
const newspCrudOps = SPCRUDOPS(props);
  //  const newspCrudOps =SPCRUDOPS(props: ISonaNonPoProps); //
    return {
        getData: async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
            , orderby: { column: string, isAscending: boolean },top:number, props: ISonaNonPoProps) => {
            return await newspCrudOps.getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby);
        },
        getRootData: async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
            , orderby: { column: string, isAscending: boolean },top:number, props: ISonaNonPoProps) => {
            return await newspCrudOps.getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby);
        },
        insertData: async (listName: string, data: any, props: ISonaNonPoProps) => {
            return await newspCrudOps.insertData(listName, data);
        },
        updateData: async (listName: string, itemId: number, data: any, props: ISonaNonPoProps) => {
            return await newspCrudOps.updateData(listName, itemId, data);
        },
        deleteData: async (listName: string, itemId: number, props: ISonaNonPoProps) => {
            return await newspCrudOps.deleteData(listName, itemId);
        },
        getListInfo: async (listName: string, props: ISonaNonPoProps) => {
            return await newspCrudOps.getListInfo(listName);
        },
        getListData: async (listName: string, columnsToRetrieve: string, props: ISonaNonPoProps) => {
            return await newspCrudOps.getListData(listName, columnsToRetrieve);
        },
      
        createFolder: async (listName: string, folderName: string, props: ISonaNonPoProps) => {
            return await newspCrudOps.createFolder(listName, folderName);
        },
        // uploadFile: async (folderServerRelativeUrl: string, file: File, props: ISonaNonPoProps) => {
        //     return await newspCrudOps.uploadFile(folderServerRelativeUrl, file, props);
        // },
        // deleteFile: async (fileServerRelativeUrl: string, props: ISonaNonPoProps) => {
        //     return await newspCrudOps.deleteFile(fileServerRelativeUrl, props);
        // },
       
       
        addAttchmentInList: async (attFiles: File, listName: string, itemId: number, fileName: string, props: ISonaNonPoProps) => {
            return await newspCrudOps.addAttchmentInList(attFiles, listName, itemId, fileName);
        }
    };
}