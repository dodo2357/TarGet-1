import React from 'react';

import {
    BrowserRouter as Router , 
    Switch, 
    Route,
} from 'react-router-dom';

import MainPage from './MainPage';
import UserLogin from './UserLogin';

export default function RouterPage(){

    return (

        <Router>
            <div>
                <Switch>
                    <Route exact paht="/">
                        <MainPage/>
                    </Route>
                    <Route exact paht="/UserLogin">
                        <UserLogin/>
                    </Route>
                    <Route exact paht="/">
                        <MainPage/>
                    </Route>
                    <Route exact paht="/">
                        <MainPage/>
                    </Route>


                </Switch>
            </div>

        </Router>




    );


}