import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import reqwest from 'request';
import React, { Component } from 'react';
import { Upload, message,Icon, Modal,Form,Radio,Row, Col, Menu,Input, Button, Checkbox,InputNumber,Cascader,Select, notification } from 'antd';
const { TextArea } = Input;






class AddAdmin extends Component {

    formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
    };
    formButtonLayout = {
        wrapperCol:{offset:5}
    }


    input(){
        var data = {
            username:this.state.username,
            password:this.state.password,
            nickname:this.state.nickname,
            email:this.state.email,
            name:this.state.name,
            idNumber:this.state.idNumber,
            sex:this.state.sex,
        }


        fetch('/admin/add', {
            method: 'POST',
            headers: {
                withCredientials:true,
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    username:'',
                    password:'',
                    nickname:'',
                    email:'',
                    name:'',
                    idNumber:'',
                    sex:'女',
                })
                notification.open({
                    message: 'Success',
                    description: '添加成功',
                    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />

                });
                console.log(data);
            })
    }



    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            nickname:'',
            email:'',
            name:'',
            idNumber:'',
            sex:'女',
        };
        this.input = this.input.bind(this);

    }







    componentWillMount(){
        // fetch("/area/all").then(response => response.json())
        //     .then(data => {
        //         this.setState({areaOptions:data['data']['areaList']});
        //
        //     })
        //     .catch(e => console.log("Oops, error", e));
    }








    render(){



        return (
            <div>
                <Form>


                    <Form.Item
                        {...this.formItemLayout}
                        label="搜索:"
                    >
                        <Row>
                            <Col span={12}>
                                <Input   placeholder="用户名" value={this.state.username} onChange={(e) => {
                                    this.setState({username:e.target.value})
                                }} />
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        {...this.formButtonLayout}
                    >
                        <Button onClick={this.input}>上传</Button>
                    </Form.Item>

                </Form>

            </div>


        );
    }
}
export  default AddAdmin;