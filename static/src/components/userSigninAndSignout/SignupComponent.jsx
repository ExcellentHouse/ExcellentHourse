import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Radio,Form,Row, Col, Menu, Icon,Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioGroup = Radio.Group;

class SignupComponent extends Component {

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
        this.register = this.register.bind(this);
        this.confirmedChange = this.confirmedChange.bind(this);
        this.nicknameChange = this.nicknameChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.sexChange = this.sexChange.bind(this);
        this.idNumberChange = this.idNumberChange.bind(this);


        this.state = {
            username:{
                value:'',
                help:'',
                validateStatus:''
            },password:{
                value:'',
                help:'',
                validateStatus:''
            },confirmedPassword:{
                value:'',
                help:'',
                validateStatus:''
            },nickname:{
                value:'',
                help:'',
                validateStatus:''
            },name:{
                value:'',
                help:'',
                validateStatus:''
            },email:{
                value:'',
                errMsg:'',
            },idNumber:{
                value:'',
                errMsg:'',
            },sex:{
                value:'',
                errMsg:'',
            }


        };
    }
    usernameChange(e){
        if(e.target.value.length < 6){
            this.setState({
                username:{
                    value:e.target.value,
                    help:'用户名长度至少6位',
                    validateStatus:'error'
                }
            })
        }else if(e.target.value.length > 18){
            this.setState({
                username:{
                    value:e.target.value,
                    help:'用户名长度应少于18位',
                    validateStatus:'error'
                }
            })
        }else{
            this.setState({
                username:{
                    value:e.target.value,
                    help:'',
                    validateStatus:'success'
                }
            })
        }
        console.log(e.target.value.length);
    }
    passwordChange(e){
        if(e.target.value.length < 6){
            this.setState({
                password:{
                    value:e.target.value,
                    help:'用户密码不得少于6位',
                    validateStatus:'error'
                }
            })
        }else if(e.target.value.length > 18){
            this.setState({
                password:{
                    value:e.target.value,
                    help:'用户名长度应少于18位',
                    validateStatus:'error'
                }
            })
        }else {
            this.setState({
                password:{
                    value:e.target.value,
                    help:'',
                    validateStatus:'success'
                }
            })
        }
        console.log(e.target.value.length);
    }
    confirmedChange(e){
        if(e.target.value != this.state.password.value){
            this.setState({
                password:{
                    value:this.state.password.value,
                    help:'两次输入的密码不一致',
                    validateStatus:'error'
                }
            })
        }
    }
    nicknameChange(e){
        if(e.target.value.length > 6){
            this.setState({
                nickname:{
                    value:e.target.value,
                    help:'昵称过长',
                    validateStatus:'error'
                }
            })
        }else{
            this.setState({
                nickname:{
                    value:e.target.value,
                    help:'',
                    validateStatus:'success'
                }
            })
        }
    }
    nameChange(e){
        this.setState({
            name:{
                value:e.target.value,
                help:'',
                validateStatus:'success'
            }
        })
    }
    emailChange(e){
        this.setState({
            email:{
                value:e.target.value,
                help:'',
                validateStatus:'success'
            }
        })
    }
    idNumberChange(e){
        this.setState({
            idNumber:{
                value:e.target.value,
                help:'',
                validateStatus:'success'
            }
        })
    }
    sexChange(e){
        this.setState({
            sex:{
                value:e.target.value,
                help:'',
                validateStatus:'success'
            }
        })
    }
    register(){

        var data = {
            username:this.state.username.value,
            password:this.state.password.value,
            nickname:this.state.nickname.value,
            email:this.state.email.value,
            name:this.state.name.value,
            idNumber:this.state.idNumber.value,
            sex:this.state.sex.value,
        }
        console.log(this.state);
        console.log(data);
        console.log(document.cookie);
        fetch('/auth/register', {
        method: 'POST',
            headers: {
            withCredientials:true,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.props.ok();

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
                {...this.formItemLayout}
                label="确认密码"
            >
                <Input placeholder="请在此输入您的确认密码" onChange={this.confirmedChange} />
            </FormItem>
            <FormItem
                {...this.formItemLayout}
                label="昵称"
                help={this.state.nickname.help}
                validateStatus={this.state.nickname.validateStatus}
            >
                <Input placeholder="请在此输入您的昵称" onChange={this.nicknameChange} />
            </FormItem>
            <FormItem
                {...this.formItemLayout}
                label="姓名"
                hasFeedback
                validateStatus="success"
            >
                <Input placeholder="请在此输入您的姓名" onChange={this.nameChange} />

            </FormItem>
            <FormItem
                {...this.formItemLayout}
                label="身份证号"
                hasFeedback
                validateStatus="success"
            >
                <Input placeholder="请在此输入您的身份证号" onChange={this.idNumberChange} />
            </FormItem>
            <FormItem
                {...this.formItemLayout}
                label="邮箱"
                hasFeedback
                validateStatus="success"
            >
                <Input placeholder="请在此输入您的邮箱" onChange={this.emailChange} />
            </FormItem>
            <FormItem
                {...this.formItemLayout}
                label="性别"
                hasFeedback
                validateStatus="success"
            >
                <Input placeholder="请在此输入您的性别" onChange={this.sexChange} />
            </FormItem>
            <FormItem
                {...this.formButtonLayout}
            >
                <Button onClick={this.register}>来个号</Button>
            </FormItem>
        </Form>)


    }
}
export default SignupComponent;