import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ProfileComponent from './ProfileComponent';
import MySecondHouseComponent from './MySecondHouseComponent';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class User extends Component{








  componentDidMount(){
    var url = "/check/jwt/"+localStorage.token;
    fetch(url, { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } }).then(response => response.json())
        .then(data => {
        })
        .catch(e => console.log("Oops, error", e));


  }

  render() {

    return (
        <Router >
            <div style={{margin:'70px 70px 120px 70px'}} >
                <Layout>
                    <Sider >
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="people" title={<span><Icon type="user" />用户</span>}>
                                <Menu.Item key="profile">
                                    <Link to="/user/profile" style={{color:'white'}}>个人信息</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="myHouse" title={<span><Icon type="laptop" />我的房子</span>}>
                                <Menu.Item key="mySecondHouse">
                                    <Link to="/user/mySecondHouse" style={{color:'white'}}>我的二手房</Link>
                                </Menu.Item>
                                <Menu.Item key="sellSecondHouse">发布二手房</Menu.Item>
                            </SubMenu>
                            <SubMenu key="checkInformation" title={<span><Icon type="notification" />审核信息</span>}>
                                <Menu.Item key="secondHandCheck">二手房审核</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Route exact path="/user/profile" component={ProfileComponent}/>
                            <Route exact path="/user/mySecondHouse" component={MySecondHouseComponent}/>
                        </Content>
                    </Layout>
                </Layout>
            </div>


        </Router>


    );
  }
}
export default User;