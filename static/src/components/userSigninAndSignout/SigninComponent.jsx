import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Radio,Form,Row, Col, Menu, Icon,Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioGroup = Radio.Group;

class SigninComponent extends Component {

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
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            username:{
                value:'',
                help:'',
                validateStatus:''
            },password:{
                value:'',
                help:'',
                validateStatus:''
            }
        };
    }
    usernameChange(e){
        this.setState({
            username:{
                value:e.target.value,
                help:'',
                validateStatus:'success'
            }
        })
    }
    passwordChange(e){
        this.setState({
            password:{
                value:e.target.value,
                help:'',
                validateStatus:'success'
            }
        })
    }

    login(){

        var data = {
            username:this.state.username.value,
            password:this.state.password.value,
        }
        console.log(this.state);
        console.log(data);
        console.log(document.cookie);
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                withCredientials:true,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                if(data['status'] == 200){
                    console.log(data);
                    var token = data['data']['token'];
                    var nickname = data['data']['nickname'];
                    console.log(token);
                    console.log(nickname);
                    localStorage.token=token;
                    localStorage.nickname=nickname;
                }

                // this.props.ok();

            })


    }



    render(){
        return (
            <Form>
                <FormItem
                    {...this.formItemLayout}
                    label="用户名"
                    help={this.state.username.help}
                    validateStatus={this.state.username.validateStatus}
                >
                    <Input placeholder="请在此输入您用户名" onChange={this.usernameChange} />
                </FormItem>
                <FormItem
                    {...this.formItemLayout}
                    label="密码"
                    help={this.state.password.help}
                    validateStatus={this.state.password.validateStatus}
                >
                    <Input placeholder="请在此输入您的密码" onChange={this.passwordChange} />
                </FormItem>
                <FormItem
                    {...this.formButtonLayout}
                >
                    <Button onClick={this.login}>登录</Button>
                </FormItem>
            </Form>)


    }
}
export default SigninComponent;