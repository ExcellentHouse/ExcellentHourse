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


class TwoHandHouseItem extends Component{
	

  render() {
   
    return (
      <div className="clearfix" style={{margin:'10px 0px 0px 0px'}}>
	  <Card >
	  
		<Row style={{margin:'10px 0px 10px 0px'}}>
				<Col span={5}>
					<img alt="example" style={{ width: '100%',height:'140px' }} src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'/>
				</Col>
				<Col span={1}></Col>
				
				<Col span={13} style={{background:'white',fontSize:'14px',margin:'0px 0px 0px 0px'}}>
					<Row style={{fontSize:'22px',height:'40px',fontWeight:'bold'}}>稀罕南北通,带飘窗,交通方便,楼层好</Row>
					<Row style={{height:'36px'}}>
						<Col span={18}>
							<span>3室2厅</span>&nbsp;|&nbsp;
							<span>109.85平</span>&nbsp;|&nbsp;
							<span>中区/6层</span>&nbsp;|&nbsp;
							<span>朝南北</span>
						</Col>
						<Col span={6}><span style={{fontSize:'26px',color:'red',fontWeight:'bold'}}>450</span>&nbsp;万</Col>
					</Row>
					<Row style={{height:'34px'}}>
						<Col span={18}>
							<span>共富二村</span>&nbsp;|&nbsp;
							<span>宝山</span>&nbsp;|&nbsp;
							<span>共富</span>&nbsp;|&nbsp;
							<span>2006年建</span>&nbsp;
						</Col>
						<Col span={6}>单价<span>40964</span>元/平</Col>
					</Row>
				</Col>
			</Row>
	  
      </Card>
			

          

      </div>
    );
  }
}
export default TwoHandHouseItem;