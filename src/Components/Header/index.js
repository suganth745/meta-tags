import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Header = (props) => {

    const { title, subtitle, prefixIcon, enableBackBtn, onClickBackBtn } = props;

    const onClickBack = () => {
        if (onClickBackBtn) {
            onClickBackBtn();
        }
    }
    const onKeyDownBack = () => {
        if (onClickBackBtn) {
            onClickBackBtn();
        }
    }
    return <div className="gl-header">
        <div className="gl-header-body">
            {enableBackBtn ?? <div className="gl-header-back" tabIndex={0} onKeyDown={onKeyDownBack} onClick={onClickBack}>
                <ArrowLeftOutlined />
            </div>}
            {prefixIcon && <div className="gl-header-prefix-icon">
                {prefixIcon}
            </div>}
            <div className="gl-header-title-wrap">
                <div className="gl-header-title">{title}</div>
                <div className="gl-header-subtitle">{subtitle}</div>
            </div>
        </div>
    </div>
}; 

export default Header;