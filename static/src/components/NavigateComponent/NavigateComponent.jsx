import React, { Component } from 'react';
import './navigate.css';
import { Input } from 'antd';
const Search = Input.Search;


class NavigateComponent extends Component {
  render() {
    return (
      <div className="header" >
        <div className="Reglog">
          
        </div>
        <div className="title">
          优购房-购上未来的家
        </div>
        <div className="search">
        <Search
          placeholder="请输入区域，模块或者小区名开始找房"
          style={{ width:400,height:40}}
          onSearch={value => console.log(value)}
         />
        </div>
      </div>
    );
  }
}

export default NavigateComponent;