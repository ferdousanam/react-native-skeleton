import React, {Component} from 'react';
import {connect} from 'react-redux';
import FCMService from '@/services/FCMService';
import {loadProfile} from '@actions/userAction';

class FirebaseNotification extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await FCMService.register();
        await FCMService.getToken();
        FCMService.onNotification = (notification) => {
            // console.log(notification.data);
            if (notification.data.event_name === 'CustomerAccountVerificationEvent') {
                this.props.loadProfile();
            }
        };
    }

    componentWillUnmount() {
        FCMService.unRegister();
    }

    render() {
        return <></>;
    }
}

export default connect(null, {loadProfile})(FirebaseNotification);
