import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import reqwest from 'request';
import React, { Component } from 'react';
import { Upload, message,Icon, Modal,Form,Radio,Row, Col, Menu,Input, Button, Checkbox,InputNumber,Cascader,Select } from 'antd';
const { TextArea } = Input;






class InputSecondHouseComponent extends Component {

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

    handleCommunitySelectChange(value) {
        this.setState({
            community_id:value
        })
    }



    constructor(){
        super();
        this.state = {
            fileList: [],
            city:'',
            district:'',
            street:'',
            community_id:'',
            detailedAddress:'',
            price:'',
            area:'',
            room:'',
            hall:'',
            washroom:'',
            floor:'',
            builtYear:'',
            hasElevator:'',
            remark:'',
            previewVisible: false,
            previewImage: '',
            areaOptions:[],
            communityOptions:[],
            defaultCommunity:''
        };
        this.areaCascaderChange = this.areaCascaderChange.bind(this);
        this.input = this.input.bind(this);
        this.handleCommunitySelectChange = this.handleCommunitySelectChange.bind(this);


    }


    areaCascaderChange(value) {
        this.setState({
            city:value[0],
            district:value[1],
            street:value[2]
        },() => {
            fetch(`/community/filter?city=${value[0]}&district=${value[1]}&street=${value[2]}`).then(response => response.json())
                .then(data => {
                    var communityList = data['data']['communityList'];
                    var communityContent = communityList.map((item,i) => {
                        return (<Select.Option key = {i} value={item['id']}>{item['name']}</Select.Option>);
                    })

                    this.setState({
                        communityOptions:communityContent
                    })

                })
                .catch(e => console.log("Oops, error", e));
        });
        console.log(this.state);


    }


    componentWillMount(){
        fetch("/area/all").then(response => response.json())
            .then(data => {
                this.setState({areaOptions:data['data']['areaList']});

            })
            .catch(e => console.log("Oops, error", e));
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    }

    input(){
        const formData = new FormData();




        this.state.fileList.forEach((file) => {
            formData.append('files', file['originFileObj']);
        });
        formData.append('one',123);


        fetch("/secondHandHouse/batchupload", {
            method: "POST",
            credentials: "include",
            headers: {
            },
            body:formData
        })

    }






    render(){

        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );


        return (
            <div>
                <Form>




                    <Form.Item
                        {...this.formItemLayout}
                        label="房屋图片:"
                    >


                        <Upload
                            action="/file/upload"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 5 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                        <Button onClick={this.input}>test</Button>
                    </Form.Item>






                    <Form.Item
                        {...this.formItemLayout}
                        label="地址:"
                    >
                        <Row>
                            <Col span={12}>
                                <Cascader options={this.state.areaOptions} size="large" onChange={this.areaCascaderChange} placeholder="请选择地址" />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="小区:"
                    >
                        <Select  placeholder="请选择小区"  style={{ width: 120 }} onChange={this.handleCommunitySelectChange}>
                            {this.state.communityOptions}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="详细地址:"

                    >
                        <TextArea rows={2} onChange={(value) => {this.setState({detailedAddress:value.target.value})}} />
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="价格:"
                    >
                        <Col span={3}>
                            <Input  addonAfter="万" defaultValue="0" onChange={(e) => {this.setState({price:e.target.value})}} />
                        </Col>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="基础信息:"
                    >
                        <Col span={3}>
                            <Input  addonAfter="平" defaultValue="0" onChange={(e) => {this.setState({area:e.target.value})}} />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Input  addonAfter="室" defaultValue="0" onChange={(e) => {this.setState({room:e.target.value})}} />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Input  addonAfter="厅" defaultValue="0" onChange={(e) => {this.setState({hall:e.target.value})}} />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Input  addonAfter="卫" defaultValue="0" onChange={(e) => {this.setState({washroom:e.target.value})}} />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Input  addonAfter="层" defaultValue="0" onChange={(e) => {this.setState({floor:e.target.value})}} />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={4}>
                            <Input  addonAfter="年竣工" defaultValue="0" onChange={(e) => {this.setState({builtYear:e.target.value})}} />
                        </Col>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="有无电梯:"
                    >
                        <Radio.Group onChange={ (e) => {
                            this.setState({hasElevator:e.target.value})
                        }}>
                            <Radio value="有">有</Radio>
                            <Radio value="无">无</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="备注:"
                    >
                        <TextArea rows={2} onChange={(value) => {this.setState({remark:value.target.value})}} />
                    </Form.Item>
                    <Form.Item
                        {...this.formButtonLayout}
                    >
                        <Button onClick={ this.input}>上传</Button>
                    </Form.Item>
                </Form>

            </div>


        );
    }
}
export  default InputSecondHouseComponent;