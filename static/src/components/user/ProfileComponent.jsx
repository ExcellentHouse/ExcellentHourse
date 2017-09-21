import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Upload, Icon, Modal,Form,Radio,Row, Col, Menu,Input, Button, Checkbox } from 'antd';

class ProfileComponent extends Component {
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


    componentWillMount(){
        fetch("/people/profile/"+localStorage.username).then(response => response.json())
            .then(data => {
                var personalInformation = data['data']['personalInformation'];

                this.setState({
                    username:personalInformation['username'],
                    nickname:personalInformation['nickname'],
                    name:personalInformation['name'],
                    email:personalInformation['email'],
                    sex:personalInformation['sex'],
                    avatar:personalInformation['avatar'],
                    idNumber:personalInformation['idNumber'],
                    fileList: [{
                        uid: -1,
                        name: 'xxx.png',
                        status: 'done',
                        url: personalInformation['avatar'],
                    }],
                })
                console.log(this.state);
            })
            .catch(e => console.log("Oops, error", e));
    }



    state = {
        username:'',
        nickname:'',
        name:'',
        email:'',
        sex:'',
        avatar:'',
        idNumber:'',
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
    };

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Form>
                    <Form.Item
                        {...this.formItemLayout}
                        label="头像"
                        >

                        <Upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 1 ? null : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="用户名"
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input value={this.state.username} onChange={this.sexChange} />
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="昵称"
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input value={this.state.nickname} onChange={this.sexChange} />
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="真实姓名"
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input value={this.state.name} onChange={this.sexChange} />
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="email"
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input value={this.state.email} onChange={this.sexChange} />
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="身份证号"
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input value={this.state.idNumber} onChange={this.sexChange} />
                    </Form.Item>

                </Form>


                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>


            </div>
        );
    }

}
export  default ProfileComponent;