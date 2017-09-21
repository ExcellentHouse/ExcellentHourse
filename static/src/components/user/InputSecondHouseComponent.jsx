import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Upload, Icon, Modal,Form,Radio,Row, Col, Menu,Input, Button, Checkbox } from 'antd';

class InputSecondHouseComponent extends Component {

    constructor(){
        super();
        this.state={
            secondHandHouseContent:[]
        }
        this.solveSecondHandHouseList = this.solveSecondHandHouseList.bind(this);
        this.render = this.render.bind(this);


    }

    componentWillMount(){
        fetch("/secondHandHouse/").then(response => response.json())
            .then(data => {
                // console.log(data['data']['secondHandHouseList']);
                this.solveSecondHandHouseList(data['data']['secondHandHouseList']);
            })
            .catch(e => console.log("Oops, error", e));
    }




    solveSecondHandHouseList(secondHandHouseList){
        var secondHandHouseContent = secondHandHouseList.map((item,i) => {
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




    render(){
        var content;
        if(this.state.secondHandHouseContent != null){
            content = this.state.secondHandHouseContent;
        }
        console.log(this.state);
        var test = this.state.secondHandHouseContent;
        return (
            <div>
                <span>本页只展示已经通过审核的房子</span>
                {content}

            </div>
        )
    }
}
export  default InputSecondHouseComponent;