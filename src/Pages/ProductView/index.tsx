import {FC, useCallback, useEffect} from "react";
import {Col, Divider, Image, List, Row, Spin} from "antd"
import React, {Props} from "react";
import Text from "antd/es/typography/Text";
import moment from "moment";
import './Components/style.css';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/products/actions";


const data = {
    name: 'Core I9 gen10',
    type: 'computer details',
    description: 'Intel® Thermal Velocity Boost (Intel® TVB) opportunistically and automatically increases clock frequency above single-core and multi-core Intel® Turbo Boost Technology 2.0 frequencies based on how much the processor is operating below its maximum temperature. The frequency gain and duration is dependent on the workload, capabilities of the processor and the processor cooling solution. For processors that have Intel® TVB enabled, the maximum Core Frequency is achieved while the processor is at a temperature of 50°C or lower and turbo power budget is available. Frequencies may reduce over time as processor temperature increases.',
    headImg: 'https://i.eldorado.ua//goods_images/1209289/6753297-1600760315.jpg',
    views: 29,
    likes: 2,
    dislike: 1,
    soldOut: 0.6,
    startCount: 100,
    count: 20,
    createdBy: {
        name: 'Admin',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZMHWl_atlMfBeiFJQhPqr6NSqgPSUzY2Pw&usqp=CAU'
    },
    createdAt: new Date(),
    editedAt: new Date(),
    images: [
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNj0Kic7io1IYv0RhtOa6RnZsj5FuZAi87CtjwuGz0pP7azERoPyFdtoTVzE_d&usqp=CAc',
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-FSEDXuuYilr28TerCmnJG9-bj7ZYVuhIn96LKojWjax4psgHf3WGHvou4NT8Tmt-ijEtmrHvQQ&usqp=CAc'
    ]
}
type TProps = {
    match: {
        params: {
            id: string
        }
    }
}
const  ProductView : FC<TProps> = (props) => {
    const id = props.match.params.id;
    // @ts-ignore
    const {data} = useSelector(state=> state.products);
    const dispatch = useDispatch();
    const getProductById = useCallback(args => dispatch(actions.getProductById(args)), [dispatch]);

    useEffect(() => {
        getProductById(id)
    }, []);

    return Object.keys(data).length > 2 ? <div className={''}>
        <Divider orientation={'center'}>{'Main'}</Divider>
        <Row>
           <Col span={7}>
               <div className={'view-head-img'}>
                   <Image style={{width: '100%', height: '100%', display: 'inline-block'}} src={data.headImg}/>
               </div>
           </Col>
            <Col span={15}>
                <Row>
                    <Col span={12}>

                        <Row >
                            <Col span={12}>
                                Name:
                            </Col>
                            <Text strong>
                                {data.name}
                            </Text>
                        </Row>
                        <Row className={'info-row'}>
                            <Col span={12}>
                                Likes:
                            </Col>
                            <Text strong>
                                {data.likes}
                            </Text>
                        </Row>
                        <Row className={'info-row'}>
                            <Col span={12}>
                                Posted by:
                            </Col>
                            <Text strong>
                                {data.createdBy ? data.createdBy.name: 'Anon'}
                            </Text>
                        </Row>
                        <Row className={'info-row'}>
                            <Col span={12}>
                                Posted:
                            </Col>
                            <Text strong>
                                {moment(data.createdAt).format('DD MMMM')}
                            </Text>
                        </Row>

                    </Col>
                    <Col span={12}>
                        <Row >
                            <Col span={12}>
                                Type:
                            </Col>
                            <Col span={12}>
                                <Text strong>
                                    {data.type}
                                </Text>
                            </Col>
                        </Row>
                        <Row className={'info-row'}>
                            <Col span={12}>
                                Dislike:
                            </Col>
                            <Text strong>
                                {data.dislike}
                            </Text>
                        </Row>
                        <Row className={'info-row'}>
                            <Col span={12}>
                                Ratting:
                            </Col>
                            <Text strong>
                                {data.likes - data.dislike} Point
                            </Text>
                        </Row>

                        <Row className={'info-row'}>
                            <Col span={12}>
                                Edited:
                            </Col>
                            <Text strong>
                                {moment(data.editedAt).format('DD MMMM')}
                            </Text>
                        </Row>
                    </Col>

                </Row>
            </Col>
        </Row>
        <Divider orientation={'center'}>{'About'}</Divider>
        <Row>
            <Col span={12}>
                <div className={'img-container'}>
                    {data.images.concat(data.images).map((item: string)=> <div className={'img-from-container'}>
                        <Image width={'325px'} height={'180px'} src={item}/>
                    </div>)}
                </div>
            </Col>
            <Col span={12}>
                <Text type={'secondary'} className={'text-description'}>
                    {data.description}
                </Text>
            </Col>
        </Row>
    </div>
        :
        <div className="example">
            <Spin />
        </div>
}
export default ProductView as React.FC;