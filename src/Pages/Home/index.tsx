import React, {Props, useCallback, useEffect} from "react";
import Product from "./Components/Product";
import './Components/style.css'
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/products/actions";
/*
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
}*/

function Home (props: Props<any>) {
    const dispatch = useDispatch();
    // @ts-ignore
    const {products} = useSelector(state=> state.products);
    const getProduct = useCallback(args => dispatch(actions.getProducts(args)), [dispatch]);

    useEffect(() : void => {
        getProduct(null)
    }, []);



    return<>
            {Array.isArray(products) ? products.concat(products).concat(products).concat(products).map(item=><Product data={item}/>) : null}
    </>

};
export default Home as React.FC;