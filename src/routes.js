import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Containers/Dashboard';
import DateFucntion from './Containers/DateFunction';
import ProductCatalouge from './Containers/ProductCatalouge';
import ProductView from './Containers/ProductView';

const RouterRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route exact path='/date-function' element={<DateFucntion />} />
                <Route exact path='/product-catalouge' element={<ProductCatalouge />} />
                <Route exact path='/product-view/:id/:name' element={<ProductView />} />
            </Routes>
        </BrowserRouter>
    )
};

export default RouterRoutes;