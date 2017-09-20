import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ProfileComponent from './ProfileComponent';
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
            <div style={{margin:'120px 250px 120px 250px'}} >
                <Layout>
                    <Sider >
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />用户</span>}>
                                <Menu.Item key="1">
                                    <Link to="/user/profile" style={{color:'white'}}>个人信息</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />我的房子</span>}>
                                <Menu.Item key="5">我的二手房</Menu.Item>
                                <Menu.Item key="5">我的出租房</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />审核信息</span>}>
                                <Menu.Item key="9">二手房审核</Menu.Item>
                                <Menu.Item key="12">出租房审核</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Route exact path="/user/profile" component={ProfileComponent}/>
                        </Content>
                    </Layout>
                </Layout>
            </div>


        </Router>


    );
  }
}
export default User;