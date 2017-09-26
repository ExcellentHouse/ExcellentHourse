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




    constructor(){
        super();
        this.state = {
            username:'',
            people:null
        };
        this.search = this.search.bind(this);
        this.delete = this.delete.bind(this);

    }

    search(e){

        fetch("/admin/delete/"+this.state.username, { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } }).then(response => response.json())
            .then(data => {
                var people = data['data']['people'];
                this.setState({people:people});
            })
            .catch(e => console.log("Oops, error", e));
    }
    delete(e){
        notification.open({
            message: 'Success',
            description: '删除成功',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />

        });
        this.setState({
            people:null
        })
    }











    render(){
        var userProfile;
        if(this.state.people != null ){
            userProfile = (
                <div>
                    <Form.Item
                        {...this.formItemLayout}
                        label="用户ID:"
                    >
                        {this.state.people.id}
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="用户名:"
                    >
                        {this.state.people.username}
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="加密后密码:"
                    >
                        {this.state.people.password}
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="用户昵称:"
                    >
                        {this.state.people.nickname}
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="用户真实姓名:"
                    >
                        {this.state.people.name}
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="email:"
                    >
                        {this.state.people.email}
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="身份证号:"
                    >
                        {this.state.people.idNumber}
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="性别:"
                    >
                        {this.state.people.sex}
                    </Form.Item>
                    <Form.Item
                        {...this.formButtonLayout}
                    >
                        <Button　type="danger" onClick={ this.delete}>删除</Button>
                    </Form.Item>
                </div>


            )
        }else{
            console.log(null);
        }



        return (




            <div>
                <Form>





                    <Form.Item
                        {...this.formItemLayout}
                        label="搜索:"
                    >
                        <Row>
                            <Col span={12}>
                                <Input   placeholder="请输入要被删除用户的用户名" value={this.state.username} onChange={(e) => {
                                    this.setState({username:e.target.value})
                                }} />
                            </Col>
                            <Col span={6}>
                                <Button type="primary" icon="search"　onClick={this.search}>Search</Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    {userProfile}

                </Form>

            </div>


        );
    }
}
export  default AddAdmin;