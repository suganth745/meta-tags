import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Header from "../../Components/Header";
import NavBtnList from "../../Constants/Nav";


const Dashboard = () => {
   const history = useNavigate();

   const onClickNavBtn = (data) => {
       history(`${data.path}`);
   }
    return (
        <div className="gl-dashboard">
            <Header title="Dashboard" prefixIcon={<HomeOutlined />} enableBackBtn={false} />
            <div className="gl-dashboard-body">
                {NavBtnList?.map((eitem) => <Button onClick={() => onClickNavBtn(eitem)} className="gl-dashboad-body-nav-btn" key={eitem.id}>{eitem.name}</Button>)}
            </div>
        </div>
    );
};

export default Dashboard;