import Text from "antd/es/typography/Text";
import {Col, Row} from "antd";
import {MailOutlined, PhoneOutlined} from "@ant-design/icons";
import React from "react";

export default function (){
    return <div className={'bottom'}>
        <Text strong>
            <Row>
                <Col span={24}>
                    2018-2021 corp. "Disk"
                </Col>
            </Row>
            <Row style={{marginTop:'10px', marginBottom: '10px', padding:'1px'}}>
                <Col span={12}>
                    <Row>
                        <Col span={5}>
                            <MailOutlined /> Gmail:
                        </Col>
                        <Col span={17}>
                            <a href={'mail:vadym.bundza@gmail.com'}>     vadym.bundza@gmail.com</a>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={12}>
                            <PhoneOutlined /> Tel:
                        </Col>
                        <Col span={12}>
                            <a href={'tel:0665122500'}>+380(66)5122500</a>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Text>
    </div>
}