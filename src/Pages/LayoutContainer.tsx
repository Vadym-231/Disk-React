import React, {lazy, Suspense, Fragment, useCallback, useEffect} from 'react';
import {  Switch, Route, NavLink} from "react-router-dom";
import {Button, Layout, Spin} from "antd";
import possibleRoutes from './possibleRoutes';
import Navigation from "./Assets/Navigation";
import Footer from './Assets/Foother'
import {useDispatch, useSelector} from "react-redux";
import actions from "../redux/auth/actions";
const { Content } = Layout;


const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', position: 'fixed', height: '50%', width: '100%', bottom: 0, fontSize: '22px' }}>This page could not be found</div>
  )
}


export default function LayoutContainer ()  {

    // @ts-ignore
    const { data, firstLoad, isSuccessAuth } = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    const getMe = useCallback(() => dispatch({type: actions.CHECK_USER_REQUEST}), [dispatch]);
    const logout = useCallback( () => dispatch({type: actions.LOGOUT}), [dispatch]);

    useEffect( () => { getMe() }, [getMe,isSuccessAuth])


    const linksList   = possibleRoutes(data ? data.role :  '').filter((route) => route.label).map((route, index) =>
        <><NavLink style={{color:'black'}} key={index} to={`/${route.path}`} className={'nav-link'}>
            <Button type={'link'} icon={route.icon ? <route.icon/> : null}>{route.label}</Button>
        </NavLink></>
    );
    const routes = possibleRoutes(data ? data.role :  '').map((route, index) =>
        <Route key={index} exact path={`/${route.path}`} component={route.component}/>
    );


  const layoutContent = firstLoad
      ?
      <Spin className={'loading-placeholder'} size="large"  />
      :
      <Layout style={{background: "white"}} className="layout">
      <Content className='has-header-fixed'>
          <Navigation isAuth={data&&data.email} user={data&& data.email ? data : null} logout={logout}  linksList={linksList} />
          <div className={'content'}>
              <Suspense fallback={<Spin className={'loading-placeholder'} size="large"  />}>
                  <Switch>
                      {routes}
                  </Switch>
              </Suspense>
          </div>
          <Footer/>
      </Content>
    </Layout>
  return (
    <Fragment>{layoutContent}</Fragment>
  );
};

//export default LayoutContainer;
