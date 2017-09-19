import React, { Component } from 'react';
import SecondHandHouseComponent from './components/secondHandHouse/SecondHandHouseComponent';
import RentHouseComponent from './components/rentHouse/RentHouseComponent';
import SigninAndSignoutComponent from './components/userSigninAndSignout/SigninAndSignoutComponent';
import CommunityComponent from './components/community/CommunityComponent';
import SigninComponent from './components/userSigninAndSignout/SigninComponent'
import SignupComponent from './components/userSigninAndSignout/SignupComponent'

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
            signinAndSignupVisible:false,
        }
    }
    componentWillMount(){

    }



    triggerSigninAndSignup = () => {
        this.setState({
            signinAndSignupVisible:!this.state.signinAndSignupVisible
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

	test(){

        if(this.state.signinAndSignupVisible){
            return <SigninAndSignoutComponent triggerSigninAndSignup={this.triggerSigninAndSignup}  />
        }else{
            return null;
        }
	}



    render() {
    	var com = this.test();


        return (
			<Router >




				<div>


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

						<Menu.Item key="secondHandHouse">
							<Link to="/secondHandHouse" style={{color:'white'}}>二手房</Link>
						</Menu.Item>

						<Menu.Item key="rentHouse">
							<Link to="/rentHouse" style={{color:'white'}}>租房</Link>
						</Menu.Item>
						<Menu.Item key="community">
							<Link to="/community" style={{color:'white'}}>小区</Link>
						</Menu.Item>

						<Menu.Item key="2span" style={{width:'500px'}}></Menu.Item>

						<Menu.Item key="inAndUp" >
							<span onClick={this.triggerSigninAndSignup}>登录/注册</span>

						</Menu.Item>

						<Menu.Item key="3span" style={{width:'30px'}}></Menu.Item>

						<Menu.Item key="contact" >
							<Link to="/contact" style={{color:'white'}}>123456789</Link>
						</Menu.Item>

					</Menu>
					{com}


					<hr/>

					<Route exact path="/" component={Home}/>
					<Route path="/oneHandHouse" component={SigninAndSignoutComponent}/>
					<Route path="/secondHandHouse" component={SecondHandHouseComponent}/>
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