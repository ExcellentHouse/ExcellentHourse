import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import '../../static/css/twoHandHouse.css';
import TwoHandHouseItemComponent from './TwoHandHouseItemComponent';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioGroup = Radio.Group;



class TwoHandHouseComponent extends Component {
	constructor(){
		super();
		this.state={
			priceOptions:[],
			areaOptions:[],
			houseTypeOptions:[]
		};
		
	}
	
  componentWillMount(){
	  this.setState({
			priceOptions:[
			  { label: '200万以下', value: '200万以下' },
			  { label: '200-300万', value: '200-300万' },
			  { label: '300-400万', value: '300-400万'},
			  { label: '400-500万', value: '400-500万' },
			  { label: '500-600万', value: '500-600万' },
			  { label: '600万以上', value: '600万以上'}
			],
			areaOptions:[
			  { label: '50平米以下', value: '50平米以下' },
			  { label: '50-70平', value: '50-70平' },
			  { label: '70-90平', value: '70-90平'},
			  { label: '90-110平', value: '90-110平' },
			  { label: '110-130平', value: '110-130平' },
			  { label: '150平以上', value: '150平以上'}
			]
		});
  }
  
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
	
	
	
	render(){
		
		return (
			<div style={{margin:'120px 250px 120px 250px',border:'1px solid blue'}} >
				<div id="filterBox" style={{margin:'0px 0px 70px 0px'}}>
					<Row >	
							<Col span={1}><label>售价</label></Col>
							<Col span={22}>
								<RadioGroup options={this.state.priceOptions} size="large"></RadioGroup>
							</Col>
							
					</Row>
					<Row>	
							<Col span={1}><label>面积</label></Col>
							<Col span={21}>
								<RadioGroup options={this.state.areaOptions}></RadioGroup>
							</Col>
							
					</Row>
					<Row>	
							<Col span={1}><label>户型</label></Col>
							<Col span={21}>
								<RadioGroup onChange={this.onChange} value={this.state.value}>
									<Radio value={1}>一室</Radio>
									<Radio value={2}>二室</Radio>
									<Radio value={3}>三室</Radio>
									<Radio value={4}>四室</Radio>
								</RadioGroup>
							</Col>  
					</Row>
				</div>
				<div id="123" style={{color:'#00ae66',fontSize:'22px',fontWeight:'bold'}}>共找到<span style={{color:'#00ae66',fontSize:22}}>72900</span>套上海二手房源</div>
				<div id="sort" style={{border:'1px solid red'}}>
					<Menu
						onClick={this.handleClick}
						selectedKeys={[this.state.current]}
						mode="horizontal"
					>
						<Menu.Item key="sort" disabled>
							排序
						</Menu.Item>
						<SubMenu title={<span>房价</span>}>
							<Menu.Item key="setting:1">房价由低到高</Menu.Item>
							<Menu.Item key="setting:2">房价由高到低</Menu.Item>
						</SubMenu>
						<SubMenu title={<span>面积</span>}>
							<Menu.Item key="setting:3">面积由低到高</Menu.Item>
							<Menu.Item key="setting:4">面积由高到低</Menu.Item>
						</SubMenu>
						<Menu.Item key="sortByPopularity" disabled>
							热门
						</Menu.Item>
					</Menu>
				</div>
				<div id='content' >
					<TwoHandHouseItemComponent />
					<TwoHandHouseItemComponent />					
				</div>
				
			</div>
		)
	}
	
	
	
}

export  default TwoHandHouseComponent;