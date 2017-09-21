import '../../static/css/twoHandHouse.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Upload, Icon, Modal,Form,Radio,Row, Col, Menu,Input, Button, Checkbox,InputNumber } from 'antd';
const { TextArea } = Input;
class InputSecondHouseComponent extends Component {



    render() {

        return (
            <div>
                <Row>
                    <Col span={2}>有无电梯:</Col>
                    <Col >
                        <Radio.Group >
                            <Radio value="有">有</Radio>
                            <Radio value="无">无</Radio>
                        </Radio.Group>
                    </Col>

                </Row>

                <Row>
                    <Col span={2}>基础信息:</Col>
                    <Col span={2}>
                        <Input  addonAfter="平" defaultValue="0" />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={2}>
                        <Input  addonAfter="室" defaultValue="0" />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={2}>
                        <Input  addonAfter="厅" defaultValue="0" />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={2}>
                        <Input  addonAfter="卫" defaultValue="0" />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={2}>
                        <Input  addonAfter="层" defaultValue="0" />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>详细地址:</Col>
                    <Col span={12}>
                        <TextArea rows={4} />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>备注:</Col>
                    <Col span={12}>
                        <TextArea rows={4} />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>竣工时间:</Col>
                    <Col span={2}>
                        <Input  addonAfter="年" defaultValue="0" />
                    </Col>
                </Row>
            </div>


        );
    }
}
export  default InputSecondHouseComponent;