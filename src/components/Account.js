import React from "react";
import ForgotPassword from "./ForgotPassword";
import Feedback from "./Feedback";
import Settings from "./Settings";
import '../css/AccountCSS.scss';

const Account = () => {
    return(
        <div id="account">
            {/* <ForgotPassword /> */}
            <Feedback />
            <Settings/>
        </div>
    );
};

export default Account;