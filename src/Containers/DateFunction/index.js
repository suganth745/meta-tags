import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";

const DateFucntion = () => {
    const history = useNavigate();
    const nowDateTime = moment();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const onChangeStartDate = (event) => {
        setStartDate(event);
        setEndDate('');
    }

    const onChangeEndDate = (event) => {
        setEndDate(event);
    }

    const disabledDates = (event) => {
        return event._d < nowDateTime;
    }
    
    const disabledEndDates = (event) => {
        if (startDate) {
            console.log(disabledDates(event), event._d > moment(startDate).add(3, 'days'))
            return disabledDates(event) || event._d > moment(startDate).add(3, 'days');
        }
        return disabledDates(event);
    }

    const onClickBackBtn = () => {
        history('/');
    }

    return <div className="gl-datefunction">
        <Header title="Date Function" onClickBackBtn={onClickBackBtn}/>
        <div className="gl-datefunction-body">
            <DatePicker showTime className="gl-datefunction-datepicker" placeholder="Start date" disabledDate={disabledDates} onChange={onChangeStartDate} value={startDate}/>
            <DatePicker showTime className="gl-datefunction-datepicker" placeholder="End date" disabledDate={disabledEndDates} onChange={onChangeEndDate} value={endDate} />
        </div>
    </div>
};

export default DateFucntion;