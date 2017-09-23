import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Upload, Icon, Modal,Form,Radio,Row, Col, Menu,Input, Button, Checkbox,InputNumber,Cascader,Select } from 'antd';
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

    handleChange(value) {
        console.log(`selected ${value}`);
    }



    constructor(){
        super();
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            areaOptions:[],
            communityOptions:[],
            defaultCommunity:''
        };
        this.areaCascaderChange = this.areaCascaderChange.bind(this);

    }


    areaCascaderChange(value) {

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
    }


    componentWillMount(){
        fetch("/area/all").then(response => response.json())
            .then(data => {
                this.setState({areaOptions:data['data']['areaList']});

            })
            .catch(e => console.log("Oops, error", e));
    }



    render() {



        return (
            <div>
                <Form>
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
                        <Select  placeholder="请选择小区"  style={{ width: 120 }} onChange={this.handleChange}>
                            {this.state.communityOptions}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="详细地址:"
                    >
                        <TextArea rows={2} />
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="价格:"
                    >
                        <Col span={3}>
                            <Input  addonAfter="万" defaultValue="0" />
                        </Col>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="基础信息:"
                    >
                        <Col span={3}>
                            <Input  addonAfter="平" defaultValue="0" />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Input  addonAfter="室" defaultValue="0" />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Input  addonAfter="厅" defaultValue="0" />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Input  addonAfter="卫" defaultValue="0" />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Input  addonAfter="层" defaultValue="0" />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={4}>
                            <Input  addonAfter="年竣工" defaultValue="0" />
                        </Col>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="有无电梯:"
                    >
                        <Radio.Group >
                            <Radio value="有">有</Radio>
                            <Radio value="无">无</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        {...this.formItemLayout}
                        label="备注:"
                    >
                        <TextArea rows={2} />
                    </Form.Item>
                </Form>

            </div>


        );
    }
}
export  default InputSecondHouseComponent;