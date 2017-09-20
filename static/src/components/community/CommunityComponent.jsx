import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import CommunityItemComponent from './CommunityItemComponent';
import { Radio,Form,Row, Col, Menu, Icon } from 'antd';




import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';





const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioGroup = Radio.Group;

class CommunityComponent extends Component {
    constructor(){
        super();
        this.state={
            city:'',
            district:'',
            street:'',
            average:'',
            houseAge:'',
            houseType:'',
            cityOptions:[],
            districtOptions:[],
            streetOptions:[],
            averageOptions:[],
            houseAgeOptions:[],
            houseTypeOptions:[],
            communityContent:[],
        };
        this.cityOnChange = this.cityOnChange.bind(this);
        this.districtOnChange = this.districtOnChange.bind(this);
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

        fetch("/community/").then(response => response.json())
            .then(data => {
                data = data['data'];
                var communityList = data['communityList'];
                this.solveCommunityList(communityList);

            })
            .catch(e => console.log("Oops, error", e));


        this.setState({
            averageOptions:[
                { label: '5000以下', value: '0-5000' },
                { label: '5000-8000元', value: '5000-8000' },
                { label: '8000-12000元', value: '8000-12000'},
                { label: '12000-15000元', value: '12000-15000' },
                { label: '15000-20000元', value: '15000-20000' },
                { label: '20000元以上', value: '20000'}
            ],
            houseAgeOptions:[
                { label: '2年内', value: '0-2' },
                { label: '2-5年', value: '2-5' },
                { label: '5-10年', value: '5-10'},
                { label: '10-20年', value: '10-20' },
                { label: '20年以上', value: '20' },
            ],
            nullTest:[],
        });
    }

    solveCommunityList(communityList){
        var communityContent = [];
        communityContent = communityList.map((item,i) => {
            console.log(i);
            return (<CommunityItemComponent key = {i} path={communityList[i]['path']} name={communityList[i]['name']} city={communityList[i]['area']['city']}
                                            discrict={communityList[i]['area']['discrict']}
                                            street={communityList[i]['area']['street']}
                                            average={communityList[i]['average']}
                                            houseNumber={communityList[i]['houseNumber']}
                                            builtYear={communityList[i]['builtYear']}
            />);
        })
        this.setState({
            communityContent:communityContent
        })
    }
    filter(){
        var options = {
            city:this.state.city,
            district:this.state.district,
            street:this.state.street,
            average:this.state.average,
            houseAge:this.state.houseAge,
        }
        console.log(options);
        var url = "/community/filter?";
        for(var key in options){
            if(options[key] == ''){
                continue ;
            }
            url = url+key+"="+options[key]+"&";
        }
        console.log(url);
        fetch(url, { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } }).then(response => response.json())
            .then(data => {
                data = data['data'];
                var communityList = data['communityList'];
                this.solveCommunityList(communityList);

            })
            .catch(e => console.log("Oops, error", e));
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
                            label="均价"
                            style={{marginBottom:"3px"}}>
                            <RadioGroup options={this.state.averageOptions} size="large" onChange={(e) =>{
                                var average = e['target']['value'];
                                this.setState({average:average},()=>{this.filter()});
                            }}></RadioGroup>
                        </FormItem>

                        <FormItem
                            {...this.formItemLayout}
                            label="房龄"
                            style={{marginBottom:"3px"}}>
                            <RadioGroup options={this.state.houseAgeOptions} size="large" onChange={(e) =>{
                                var houseAge = e['target']['value'];
                                this.setState({houseAge:houseAge},()=>{this.filter()});
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
                    {this.state.communityContent}
                </div>

            </div>
        )
    }



}

export  default CommunityComponent;