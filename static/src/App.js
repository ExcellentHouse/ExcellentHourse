import React, { Component } from 'react';
import TwoHandHouseComponent from './components/twoHandHouse/twoHandHouseComponent';
import 'antd/dist/antd.css';
import './static/css/common.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
	
	
	
	
	state = {
		current: 'home'
	}
	
	
	
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
  
	
  render() {
    return (
		<Router>	
			<div>
				<Menu
				onClick={this.handleClick}
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
				
				<Menu.Item key="2span" style={{width:'500px'}}></Menu.Item>
				
				<Menu.Item key="inAndUp">
				  <Link to="/inAndUp" style={{color:'white'}}>登录/注册</Link>
				</Menu.Item>
				
				<Menu.Item key="3span" style={{width:'30px'}}></Menu.Item>
				
				<Menu.Item key="contact" >
				  <Link to="/contact" style={{color:'white'}}>123456789</Link>
				</Menu.Item>
				
			  </Menu>
			  
			<hr/>

		  <Route exact path="/" component={Home}/>
		  <Route path="/oneHandHouse" component={About}/>
		  <Route path="/twoHandHouse" component={TwoHandHouseComponent}/>
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
