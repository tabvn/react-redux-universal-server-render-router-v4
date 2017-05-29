import React from 'react';
import Layout from '../components/Layout';
import Index from '../components/Index';
import About from '../components/About';


const routes = [
    {
        component: Layout,
        routes: [
            {
                component: Index,
                exact: true,
                path: '/'
            },
            {
                component: About,
                exact: true,
                path: '/about'
            }
        ],
    }

];
export default routes;