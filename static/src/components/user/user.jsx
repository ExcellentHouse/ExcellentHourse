import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Menu, Icon, Button } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;


function callback(key) {
  console.log(key);
}


class user extends Component{
	
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
   
    return (
    <div>
       <div style={{float:'left', height:'565' ,width: 180 ,background:'#fff' ,margin: '4% 0 0 10%'}}>
        <div style={{ textAlign: 'center' ,padding:'28px 30px 0 30px'}}>
        	<Avatar style={{ backgroundColor: '#87d068' ,height: '82px',width:'82px'}} shape='square' />
        </div>
        <div style={{ textAlign: 'center' ,padding:'10px'}}>
        	<span style={{fontSize:'22px'}}>Hello,klipdas</span>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="calendar" />
            Navigation Two
          </Menu.Item>
          
        </Menu>
      </div>
      <div style={{float: 'right' ,height:'630' ,width: 830 ,background:'#fff',marginTop:'4%',marginRight:'10%' ,padding:'3%'}}>
      	<div style={{fontSize:25,marginBottom:'10px' }}>
        <span> 您关注的房源/小区最新动态</span>
        </div>
      	<Tabs defaultActiveKey="1" onChange={callback}>
		   <TabPane tab="全部" key="1">全部</TabPane>
		   <TabPane tab="调价" key="2">调价</TabPane>
		   <TabPane tab="新上" key="3">新上</TabPane>
		 </Tabs>
      </div>
    </div>
    );
  }
}
export default user;