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


class RentHouseItemComponent extends Component{


    render() {

        return (
            <div className="clearfix" style={{margin:'10px 0px 0px 0px'}}>
                <Card >

                    <Row style={{margin:'10px 0px 10px 0px'}}>
                        <Col span={5}>
                            <img alt="example" style={{ width: '100%',height:'140px' }} src={this.props.path}/>
                        </Col>
                        <Col span={1}></Col>

                        <Col span={13} style={{background:'white',fontSize:'14px',margin:'0px 0px 0px 0px'}}>
                            <Row style={{fontSize:'22px',height:'40px',fontWeight:'bold'}}>{this.props.remark}</Row>
                            <Row style={{height:'36px'}}>
                                <Col span={18}>
                                    <Icon type="home" />&nbsp;
                                    <span>
								<span>{this.props.room}</span>室
								<span>{this.props.hall}</span>厅
								<span>{this.props.washroom}</span>卫
							</span>&nbsp;|&nbsp;
                                    <span>
								{this.props.area}
							</span>平&nbsp;|&nbsp;
                                    <span>
								<span>{this.props.floor}</span>层&nbsp;
                                        <span style={{color:'red'}}>{this.props.hasElevator}</span>电梯
							</span>&nbsp;&nbsp;
                                </Col>
                                <Col span={6}><span style={{fontSize:'26px',color:'red',fontWeight:'bold'}}>{this.props.price}00</span>&nbsp;元/月</Col>
                            </Row>
                            <Row style={{height:'34px'}}>
                                <Col span={18}>
                                    <Icon type="tag-o" />&nbsp;
                                    <span>{this.props.city}</span>&nbsp;|&nbsp;
                                    <span>{this.props.district}</span>&nbsp;|&nbsp;
                                    <span>{this.props.street}</span>&nbsp;|&nbsp;
                                    <span>{this.props.community}</span>&nbsp;|&nbsp;
                                    <span>{this.props.builtYear}</span>年建&nbsp;
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Card>




            </div>
        );
    }
}
export default RentHouseItemComponent;