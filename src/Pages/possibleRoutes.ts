import  {lazy} from 'react';
import { HomeOutlined,PlusCircleOutlined,ImportOutlined } from '@ant-design/icons';
import {IRoute} from "../types/inext";


function possibleRoutes(role: string) : IRoute[] {

  switch (role) {
  case 'admin':
    return [

      {
        label: 'Create Product',
        path:'create',
        component: lazy(()=> import('./Moder/CreateProduct')),
        icon: PlusCircleOutlined
      },
      {
        label: 'Home',
        path:'',
        component: lazy(()=> import('./Home/index')),
        icon: HomeOutlined
      },
      {
        path: 'product/:id',
        component: lazy(()=> import('./ProductView/index'))
      }
    ]
    case 'moder':
      return [
        {
          label: 'Create Product',
          path:'create',
          component: lazy(()=> import('./Moder/CreateProduct')),
          icon: PlusCircleOutlined
        },
        {
          label: 'Home',
          path:'',
          component: lazy(()=> import('./Home/index')),
          icon: HomeOutlined
        },
        {
          path: 'product/:id',
          component: lazy(()=> import('./ProductView/index'))
        }
      ]
    default:
      return [
        {
          label: 'Home',
          path:'',
          component: lazy(()=> import('./Home/index')),
          icon: HomeOutlined
        },
        {
          path: 'product/:id',
          component: lazy(()=> import('./ProductView/index'))
        },
        {
          path:'login',
          label: 'Login',
          icon: ImportOutlined,
          component: lazy(()=> import('./Login/Login'))
        }
      ]
  }
}

export default possibleRoutes;
