import {IProducts, IViewProduct} from "../../../types/inext";
import {Card, Col, Row} from "antd";
import moment from "moment";
import {EyeOutlined, LikeOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import React, {Props} from "react";
import Meta from "antd/es/card/Meta";
import {Link} from "react-router-dom";

const Content = ({ data } : { data: IProducts | IViewProduct} ) => {
    //const { data } = props;
    return <>
        <Row>
            <Col span={24}>
                {data.description && data.description.length > 100 ? data.description.substr(0,100)+'...': data.description }
            </Col>
        </Row>
        <Row className={'product-details'}>
            <Col span={12}>
                Created at:
            </Col>
            <Col span={12}>
                {moment(data.createdAt).format('DD MMMM')}
            </Col>
        </Row>
        <Row className={'product-details'}>
            <Col span={12} style={{textAlign: 'center'}}>
                <Row>
                    <Col span={12}><LikeOutlined/> { data.likes && data.dislike ? data.likes - data.dislike : 0}</Col>
                    <Col span={12}>
                        <EyeOutlined />  { data.views}
                    </Col>
                </Row>

            </Col>
            <Col span={12}>
                <Row>
                    <Col span={5}>
                        <ShoppingCartOutlined />
                    </Col>
                    <Col span={17}>
                        {data.count+' '}
                        items
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
}

function RenderItem({data} : { data: IProducts | IViewProduct}) {
    return <div className={'block'}>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" width={'240px'} height={'150px'} src={data.headImg} />}
        >
            <Meta description={<Content data={data}/>} title={data.name}>{data.description}</Meta>

        </Card>
    </div>
}

export default function Product ({ data } : { data: IProducts}) {
    return <Link to={`/product/${data._id}`}>
        <RenderItem data={data}/>
    </Link>


}
export function View ({data} : {data : IViewProduct}){
    return <RenderItem data={data}/>
}