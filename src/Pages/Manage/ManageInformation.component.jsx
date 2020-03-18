import React from 'react';
import './ManageInformation.styles.css';
import {Panel} from 'primereact/panel';
import { useHistory } from 'react-router-dom';

import {withRouter} from 'react-router-dom';

/*class ManageInformation extends React.Component{
    constructor(){
        super();
    }*/
    
    const ManageInformation = () => {
        const history = useHistory();
        var count = 0;
            return(
            <div className="p-grid p-align-center">
            <div className="p-col"></div>
            <div className="p-col"><Panel className="panel" header="Clients"></Panel></div>
            <div className="p-col_middle"></div>
            <div onClick={() =>{count= count  + 1;console.log(count); history.push(`/manage/inventory`)}} className="p-col"><Panel className="panel" header="Inventory"></Panel></div>
            <div className="p-col"></div>
            </div>);
    };
    //}

//}

export default  withRouter(ManageInformation);