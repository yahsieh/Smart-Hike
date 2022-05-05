import React from "react";
import ForgotPassword from "./ForgotPassword";
import Feedback from "./Feedback";
import '../css/AccountCSS.scss';

const Account = () => {
    return(
        <div id="account">
            {/* <ForgotPassword /> */}
            <Feedback />
        </div>
    );
};

export default Account;