import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import '../../static/css/twoHandHouse.css';
import { Upload, Icon, Modal } from 'antd';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu} from 'antd';
import { Card } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioGroup = Radio.Group;


class CommunityItemComponent extends Component{
	

  render() {
   
    return (
      <div className="clearfix" style={{margin:'10px 0px 0px 0px'}}>
	  <Card >
	  
		<Row style={{margin:'10px 0px 10px 0px'}}>
				<Col span={5}>
					<img alt="example" style={{ width: '100%',height:'140px' }} src={this.props.path}/>
				</Col>
				<Col span={1}></Col>
				
				<Col span={18} style={{background:'white',fontSize:'14px',margin:'0px 0px 0px 0px'}}>
					<Row style={{fontSize:'22px',height:'40px',fontWeight:'bold'}}>{this.props.name}</Row>
					<Row style={{height:'36px'}}>
						<Col span={12}>
							查看地图
						</Col>
						<Col span={4}><span style={{fontSize:'26px',color:'red',fontWeight:'bold'}}>{this.props.average}</span>&nbsp;元/平</Col>
						<Col span={4}><span style={{fontSize:'26px',fontWeight:'bold'}}>{this.props.houseNumber}</span>&nbsp;套在售</Col>
					</Row>
					<Row style={{height:'34px'}}>
						<Col span={18}>
							<span>{this.props.city}</span>&nbsp;&nbsp;
							<span>{this.props.district}</span>&nbsp;&nbsp;
							<span>{this.props.street}</span>&nbsp;|&nbsp;
							<span>{this.props.builtYear}年建成</span>&nbsp;
						</Col>

					</Row>
				</Col>
			</Row>
	  
      </Card>
			

          

      </div>
    );
  }
}
export default CommunityItemComponent;