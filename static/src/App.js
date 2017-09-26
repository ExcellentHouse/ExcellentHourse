import React, { Component } from 'react';
import SecondHandHouseComponent from './components/secondHandHouse/SecondHandHouseComponent';
import RentHouseComponent from './components/rentHouse/RentHouseComponent';
import SigninAndSignoutComponent from './components/userSigninAndSignout/SigninAndSignoutComponent';
import CommunityComponent from './components/community/CommunityComponent';
import FooterCompent from './components/footer/FooterCompent';
import FindHouseComponent from './components/FindHouseComponent/FindHouseComponent' ;
import NavigateComponent from './components/NavigateComponent/NavigateComponent'
import BackComponent from './components/back/BackComponent';

import Logout from './components/user/Logout';
import User from './components/user/User';
import { Row, Col } from 'antd';	
import 'antd/dist/antd.css';
import './static/css/common.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter
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
        this.logout = this.logout.bind(this);

        this.state={
            current: 'home',
			nickname:null,
            signinAndSignupVisible:false,
        }
    }
    componentWillMount(){

		if(localStorage.nickname != null){
			this.setState({nickname:localStorage.nickname})
		}
    }



    triggerSigninAndSignup = () => {
        this.setState({
            signinAndSignupVisible:!this.state.signinAndSignupVisible
        });
        if(localStorage.nickname != null){
            this.setState({nickname:localStorage.nickname})
        }

    }
    logout(){
        localStorage.clear();
        this.setState({
            nickname:null,
        })
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
		var personal;
    	if(this.state.nickname != null){
            personal = (
				<SubMenu key="sub4" title={<span><span>{this.state.nickname}</span></span>}>
					<Menu.Item key="9">
                        <Link to="/user/profile" >主页</Link>
                    </Menu.Item>
					<Menu.Item key="10">
                        <span onClick={this.logout}>
							<Link to="/logout" >注销</Link>
                        </span>

                    </Menu.Item>
				</SubMenu>
			)
		}else{
            personal = (
            	<Menu.Item key="inAndUp" >
					<span onClick={this.triggerSigninAndSignup}>登录/注册</span>
				</Menu.Item>
			);
		}


        return (
			<Router >




				<div>



					<Menu
						selectedKeys={[this.state.current]}
						mode="horizontal"
						className="menuClass">
						<Menu.Item key="1span" style={{width:'300px'}}></Menu.Item>

						<Menu.Item key="home" >
							<Link to="/home" style={{color:'white'}}>主页</Link>
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


						{personal}

						<Menu.Item key="3span" style={{width:'30px'}}></Menu.Item>

						<Menu.Item key="contact" >
							<Link to="/contact" style={{color:'white'}}>123456789</Link>
						</Menu.Item>

					</Menu>
					
					{com}


					<hr/>					
					<Route path="/home" component={NavigateComponent}/>
					<Route path="/home" component={FindHouseComponent}/>
					<Route path="/secondHandHouse" component={SecondHandHouseComponent}/>
					<Route path="/rentHouse" component={RentHouseComponent}/>
					<Route path="/community" component={CommunityComponent}/>
					<Route path="/contact" component={BackComponent}/>
                    <Route path="/user" component={User} />
					<Route path="/logout" component={Logout} />


					<div>
						<FooterCompent />
					</div>

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