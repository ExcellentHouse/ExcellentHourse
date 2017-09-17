import React, { Component } from 'react';
import TwoHandHouseComponent from './components/twoHandHouse/TwoHandHouseComponent';
import RentHouseComponent from './components/rentHouse/RentHouseComponent';
import SigninAndSignoutComponent from './components/userSigninAndSignout/SigninAndSignoutComponent';
import CommunityComponent from './components/community/CommunityComponent';
import User from './components/user/user';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './static/css/common.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Modal} from 'antd';
import { Menu, Icon } from 'antd';
import { Form,Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {



    constructor(){
        super();
        this.state={
            current: 'home',
            signinVisible:false,
            signupVisible:false
        }
    }
    componentWillMount(){

    }


    handleSigninAndSignupCancle = (e) => {
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





    render() {
        return (
			<Router>




				<div>
					<Modal
						title="大泽帅买房子之登录"
						visible={this.state.signinVisible}
						onCancel={this.handleSigninAndSignupCancle}
						footer={[
							<Row>
								<Col span={2}><a onClick={this.handleSignup}>注册</a></Col>
								<Col span={12}></Col>
							</Row>
                        ]}
					>
						<Form>
							<FormItem
                                {...this.formItemLayout}
								label="用户名"
								validateStatus="error"
								help="账号或密码错误">
								<Input placeholder="请在此输入您的用户名" id="error" />
							</FormItem>
							<FormItem
                                {...this.formItemLayout}
								label="密码"
								hasFeedback
								validateStatus="success"
							>
								<Input placeholder="请在此输入您的密码" id="success" />
							</FormItem>
							<FormItem
                                {...this.formButtonLayout}
							>
								<Button>登录</Button>
							</FormItem>

						</Form>
					</Modal>


					<Modal
						title="大泽帅买房子之注册"
						visible={this.state.signupVisible}
						onCancel={this.handleSigninAndSignupCancle}
						footer={[
							<Row>
								<Col span={6}><a onClick={this.handleSignin}>有账号就快来登录呗</a></Col>
								<Col span={12}></Col>
							</Row>
                        ]}
					>
						<Form>
							<FormItem
                                {...this.formItemLayout}
								label="用户名"
								validateStatus="error"
								help="账号或密码错误">
								<Input placeholder="请在此输入您的用户名" id="error" />
							</FormItem>
							<FormItem
                                {...this.formItemLayout}
								label="密码"
								hasFeedback
								validateStatus="success"
							>
								<Input placeholder="请在此输入您的密码" id="success" />
							</FormItem>
							<FormItem
                                {...this.formItemLayout}
								label="昵称"
								hasFeedback
								validateStatus="success"
							>
								<Input placeholder="请在此输入您的昵称" id="success" />
							</FormItem>
							<FormItem
                                {...this.formItemLayout}
								label="姓名"
								hasFeedback
								validateStatus="success"
							>
								<Input placeholder="请在此输入您的姓名" id="success" />
							</FormItem>
							<FormItem
                                {...this.formItemLayout}
								label="手机号"
								hasFeedback
								validateStatus="success"
							>
								<Input placeholder="请在此输入您的手机号" id="success" />
							</FormItem>
							<FormItem
                                {...this.formButtonLayout}
							>
								<Button>来个号</Button>
							</FormItem>
						</Form>
					</Modal>



					<Menu
						selectedKeys={[this.state.current]}
						mode="horizontal"
						className="menuClass">
						<Menu.Item key="1span" style={{width:'300px'}}></Menu.Item>

						<Menu.Item key="home" >
							<Link to="/" style={{color:'white'}}>主页</Link>
						</Menu.Item>

						<Menu.Item key="oneHandHouse">
							<Link to="/oneHandHouse" style={{color:'white'}}>新房</Link>
						</Menu.Item>

						<Menu.Item key="twoHandHouse">
							<Link to="/twoHandHouse" style={{color:'white'}}>二手房</Link>
						</Menu.Item>

						<Menu.Item key="rentHouse">
							<Link to="/rentHouse" style={{color:'white'}}>租房</Link>
						</Menu.Item>
						<Menu.Item key="community">
							<Link to="/community" style={{color:'white'}}>小区</Link>
						</Menu.Item>

						<Menu.Item key="2span" style={{width:'500px'}}></Menu.Item>

						<Menu.Item key="inAndUp">
							<Link to="/inAndUp" style={{color:'white'}} onClick={this.handleSignin}>登录/注册</Link>
						</Menu.Item>

						<Menu.Item key="3span" style={{width:'30px'}}></Menu.Item>

						<Menu.Item key="contact" >
							<Link to="/contact" style={{color:'white'}}>123456789</Link>
						</Menu.Item>

					</Menu>

					<hr/>

					<Route exact path="/" component={Home}/>
					<Route path="/oneHandHouse" component={SigninAndSignoutComponent}/>
					<Route path="/twoHandHouse" component={TwoHandHouseComponent}/>
					<Route path="/rentHouse" component={RentHouseComponent}/>
					<Route path="/community" component={CommunityComponent}/>
					<Route path="/contact" component={User}/>
				</div>
			</Router>

        );
    }
}

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)



export default App;