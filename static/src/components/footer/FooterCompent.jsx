import React from 'react';
import {Link} from 'react-router';


class FooterComponent extends React.Component {
  

  onChange(state) {
    this.setState(state);
  }

  render() {
    

    return (
      <footer style={{bottom:'0px',backgroundColor:'#333' ,color:'#999',lineHeight:'20px',fontSize:'12px',padding:'20px',marginBottom:0,fontFamily: "Hiragino Sans GB"}}>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead' style={{color:'#999'}}>Information and Copyright</h3>
              <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2015 Sahat Yalkabov.</p>
              <img src={'http://sh.lianjia.com/public/img/gonganbeianicon.png'} class="fl" style={{width:'14px',marginTop:'3px'}}  />
              <span class="fl" style={{marginLeft:'5px',color:'#999'}}>京公网安备 11010802024019号</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}


export  default FooterComponent;

