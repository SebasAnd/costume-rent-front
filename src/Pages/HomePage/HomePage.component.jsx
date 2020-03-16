import React from 'react';
import './HomePage.styles.css';
import { Switch, Route} from 'react-router-dom';

import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';

const TestPagesss = () =>(
    <div>
      TESTTTTTTTTTTTTTTT2
    </div>
  );

const HomePage = () => (
    <div className='homepage'>
        <Toolbar>
        <div className="p-toolbar-group-left">
            Costume Rent
        </div>
        <div className="p-toolbar-group-right">
            
        </div>
        </Toolbar>
        <Switch>
        <Route path='/home/test2' component={TestPagesss}/>
      </Switch>

    </div>
)
export default HomePage;