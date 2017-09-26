import React, { Component } from 'react';
import { Radio,Form,Row, Col } from 'antd';
import '../../static/css/twoHandHouse.css';
import CheckSecondHandHouseItem from './CheckSecondHandHouseItem';
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



class CheckSecondHandHouse extends Component {
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



        fetch("/secondHandHouse/").then(response => response.json())
            .then(data => {
                this.solveSecondHandHouseList(data['data']['secondHandHouseList']);
            })
            .catch(e => console.log("Oops, error", e));



    }

    solveSecondHandHouseList(secondHandHouseList){
        console.log(secondHandHouseList);
        var secondHandHouseContent = secondHandHouseList.map((item,i) => {
            console.log(i);
            return (<CheckSecondHandHouseItem
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

        return (
            <div >

                <div id='content' >
                    {this.state.secondHandHouseContent}
                </div>

            </div>
        )
    }



}

export  default CheckSecondHandHouse;