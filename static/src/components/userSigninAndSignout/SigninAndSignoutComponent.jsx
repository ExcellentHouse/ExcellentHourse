import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import SigninComponent from './SigninComponent'
import SignupComponent from './SignupComponent'
import React, { Component } from 'react';
import { Radio,Form,Row, Col, Menu, Icon,Input, Button, Checkbox } from 'antd';
import { Modal} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioGroup = Radio.Group;






class SigninAndSignoutComponent extends Component{


    constructor(){
        super();
        this.state={
            current: 'home',
            signinVisible:true,
            signupVisible:false
        }
    }
    componentWillMount(){

    }


    handleSigninAndSignupCancel = (e) => {
        this.props.triggerSigninAndSignup();
        this.setState({
            signinVisible:false,
            signupVisible:false
        });
    }

    handleSignin = (e) => {
        this.setState({
            signinVisible:true,
            signupVisible:false
        });
    }
    handleSignup = (e) => {

        console.log(e);
        this.setState({
            signinVisible:false,
            signupVisible:true
        });
    }


    render(){
        return (
            <div>
                <Modal
                    title="大泽帅买房子之登录"
                    visible={this.state.signinVisible}
                    onCancel={this.handleSigninAndSignupCancel}
                    footer={[
                        <Row>
                            <Col span={2}><a onClick={this.handleSignup}>注册</a></Col>
                            <Col span={12}></Col>
                        </Row>
                    ]}
                >
                    <SigninComponent ok={this.handleSigninAndSignupCancel}/>
                </Modal>

                <Modal
                    title="大泽帅买房子之注册"
                    visible={this.state.signupVisible}
                    onCancel={this.handleSigninAndSignupCancel}
                    footer={[
                        <Row>
                            <Col span={6}><a onClick={this.handleSignin}>有账号就快来登录呗</a></Col>
                            <Col span={12}></Col>
                        </Row>
                    ]}
                >
                    <SignupComponent ok={this.handleSigninAndSignupCancel} />
                </Modal>
            </div>
        )
    }
}
export  default SigninAndSignoutComponent;