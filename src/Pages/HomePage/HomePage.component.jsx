import React from 'react';
import './HomePage.styles.css';
import { Switch, Route} from 'react-router-dom';

import  ManageInformation  from '../Manage/ManageInformation.component';
import {Inventory} from '../Inventory/Inventory.component';
 
import {Toolbar} from 'primereact/toolbar';

const HomePage = () => (
    <div className='homepage'>
        <Toolbar>
        <div className="p-toolbar-group-left">
            <span className="main-title">Costume Rent</span>
        </div>
        <div className="p-toolbar-group-right">
            
        </div>
        </Toolbar>
        <div className="general-container">
            <Switch>
                <Route path='/manage/general' component={ManageInformation}></Route>
                <Route path='/manage/inventory' component={Inventory}></Route>
            </Switch>
        </div>
        

    </div>
)
export default HomePage;