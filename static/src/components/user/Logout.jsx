import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
class Logout extends Component {

    render(){
        return (<div>
            <Redirect to="/"/>

        </div>)
    }

}
export  default Logout;