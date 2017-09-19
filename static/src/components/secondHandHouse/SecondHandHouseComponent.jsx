import React, { Component } from 'react';
import { Radio,Form,Row, Col } from 'antd';
import '../../static/css/twoHandHouse.css';
import SecondHandHouseItemComponent from './SecondHandHouseItemComponent';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioGroup = Radio.Group;



class SecondHandHouseComponent extends Component {
	constructor(){
		super();
        this.cityOnChange = this.cityOnChange.bind(this);
        this.districtOnChange = this.districtOnChange.bind(this);
		this.state={
            city:'',
            district:'',
            street:'',
			price:'',
			area:'',
			room:'',
            cityOptions:[],
            districtOptions:[],
            streetOptions:[],
			priceOptions:[],
			areaOptions:[],
            roomOptions:[]
		};
		
	}


    formItemLayout = {
        labelCol: {
            lg: { span: 2 },
            sm: { span: 5 },
        },
        wrapperCol: {
            lg: { span: 22 },
            sm: { span: 12 },
        },

    };


  componentWillMount(){
      fetch("/area/").then(response => response.json())
          .then(data => {
              var cityOptions = [];
              for(var i = 0; i < data['data']['city'].length; i++){
                  cityOptions[i] = {label:data['data']['city'][i],value:data['data']['city'][i]};
              }
              console.log(cityOptions);
              this.setState({
                  cityOptions:cityOptions
              })
          })
          .catch(e => console.log("Oops, error", e));


      fetch("/secondHandHouse/").then(response => response.json())
          .then(data => {
              this.solveSecondHandHouseList(data['data']['secondHandHouseList']);
          })
          .catch(e => console.log("Oops, error", e));


	  this.setState({
			priceOptions:[
			  { label: '100万以下', value: '0-100' },
			  { label: '100-200万', value: '100-200' },
			  { label: '200-300万', value: '200-300'},
			  { label: '300-500万', value: '300-500' },
			  { label: '500-800万', value: '500-800' },
			  { label: '800万以上', value: '800'}
			],
			areaOptions:[
			  { label: '50平以下', value: '0-50' },
			  { label: '50-70平', value: '50-70' },
			  { label: '70-120平', value: '70-120'},
			  { label: '120-150平', value: '120-150' },
			  { label: '150-200平', value: '150-200平' },
			  { label: '200平以上', value: '200平以上'}
			],
          roomOptions:[
                { label: '一室', value: '1' },
                { label: '二室', value: '2' },
                { label: '三室', value: '3'},
                { label: '四室', value: '4' },
                { label: '五室', value: '5' },
                { label: '五室以上', value: '5+' }
			]
		});
  }

    solveSecondHandHouseList(secondHandHouseList){
        console.log(secondHandHouseList);
        var secondHandHouseContent = secondHandHouseList.map((item,i) => {
            console.log(i);
            return (<SecondHandHouseItemComponent
                key = {i}
                id={item['id']}
                room={item['room']}
                hall={item['hall']}
                washroom={item['washroom']}
                area={item['area']}
                floor={item['floor']}
                hasElevator={item['hasElevator']}
                city={item['city']}
                district={item['district']}
                street={item['street']}
                community={item['community']}
                builtYear={item['builtYear']}
                price={item['price']}
                average={item['average']}
                path={item['path']}
                remark={item['remark']}
            />);
        })
        this.setState({
            secondHandHouseContent:secondHandHouseContent
        })
    }

    cityOnChange(e){
        var city = e['target']['value'];
        fetch("/area/"+city).then(response => response.json())
            .then(data => {
                var districtOptions = [];
                for(var i = 0; i < data['data']['district'].length; i++){
                    districtOptions[i] = {label:data['data']['district'][i],value:data['data']['district'][i]};
                }
                this.setState({city:city,district:'',street:'',districtOptions:districtOptions,streetOptions:[]},()=>{this.filter()});
            })
            .catch(e => console.log("Oops, error", e));

    }
    districtOnChange(e){
        var district = e['target']['value'];
        fetch("/area/"+this.state.city+"/"+district).then(response => response.json())
            .then(data => {
                var streetOptions = [];
                for(var i = 0; i < data['data']['street'].length; i++){
                    streetOptions[i] = {label:data['data']['street'][i],value:data['data']['street'][i]};
                }
                this.setState({district:district,street:'',streetOptions:streetOptions,},()=>{this.filter()});
            })
            .catch(e => console.log("Oops, error", e));
    }
    filter(){
        var options = {
            city:this.state.city,
            district:this.state.district,
            street:this.state.street,
			price:this.state.price,
			area:this.state.area,
			room:this.state.room,
            index:'0',
            count:'10',

        }
        console.log(options);
        var url = "/secondHandHouse/filter?";
        for(var key in options){
            if(options[key] == ''){
                continue ;
            }
            url = url+key+"="+options[key]+"&";
        }
        console.log(url);
        fetch(url, { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } }).then(response => response.json())
            .then(data => {
                this.solveSecondHandHouseList(data['data']['secondHandHouseList']);

            })
            .catch(e => console.log("Oops, error", e));
    }
	
	
	render(){
        let citySingleSelect = (
			<FormItem
                {...this.formItemLayout}
				label="城市"
				style={{marginBottom:"3px"}}>
				<RadioGroup options={this.state.cityOptions} size="large" onChange={this.cityOnChange}></RadioGroup>
			</FormItem>
        );
        let districtSingleSelect;
        if(this.state.districtOptions.length != 0){
            districtSingleSelect = (
				<FormItem
                    {...this.formItemLayout}
					label="区"
					style={{marginBottom:"3px"}}>
					<RadioGroup options={this.state.districtOptions} size="large" onChange={this.districtOnChange}></RadioGroup>
				</FormItem>
            )
        }
        let streetSingleSelect;
        if(this.state.streetOptions.length != 0){
            streetSingleSelect = (
				<FormItem
                    {...this.formItemLayout}
					label="街道"
					style={{marginBottom:"3px"}}>
					<RadioGroup options={this.state.streetOptions} size="large" onChange={(e) =>{
                        var street = e['target']['value'];
                        this.setState({street:street},()=>{this.filter()});
                    }}></RadioGroup>
				</FormItem>
            )
        }


		
		return (
			<div style={{margin:'120px 250px 120px 250px',color:'#394042'}} >

				<div id="filterBox" style={{background:'#F5F5F5',padding:'25px'}}>
					<Form>
                        {citySingleSelect}
                        {districtSingleSelect}
                        {streetSingleSelect}
						<FormItem
							{...this.formItemLayout}
							label="售价"
							style={{marginBottom:"3px"}}>
							<RadioGroup options={this.state.priceOptions} size="large" onChange={(e) =>{
                                var price = e['target']['value'];
                                this.setState({price:price},()=>{this.filter()});
                            }}></RadioGroup>
						</FormItem>
						<FormItem
                            {...this.formItemLayout}
							label="面积"
							style={{marginBottom:"3px"}}>
							<RadioGroup options={this.state.areaOptions} size="large" onChange={(e) =>{
                                var area = e['target']['value'];
                                this.setState({area:area},()=>{this.filter()});
                            }}></RadioGroup>
						</FormItem>
						<FormItem
                            {...this.formItemLayout}
							label="户型"
						>
							<RadioGroup options={this.state.roomOptions} size="large" onChange={(e) =>{
                                var room = e['target']['value'];
                                this.setState({room:room},()=>{this.filter()});
                            }}></RadioGroup>
						</FormItem>
					</Form>
				</div>
				<div id="123" style={{color:'#00ae66',fontSize:'22px',fontWeight:'bold',margin:'0px 0px 35px 0px'}}>共找到<span style={{color:'#00ae66',fontSize:22}}>72900</span>套上海二手房源</div>
				<div id="sort" style={{border:'1px solid #F5F5F5'}}>
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
                    {this.state.secondHandHouseContent}
				</div>
				
			</div>
		)
	}
	
	
	
}

export  default SecondHandHouseComponent;