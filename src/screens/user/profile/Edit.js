import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Styles from '@styles';
import Header from '@components/inc/Header';
import ProfileForm from './ProfileForm';

class EditProfile extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Header navigation={this.props.navigation} title="Edit Profile" />

                <ProfileForm
                    {...this.props}
                    lockUpdate={this.props.authUser.verification_status === 1}
                    formContainer={{marginTop: 0}}
                    saveButton={<ProfileForm.SaveButton>Update Profile</ProfileForm.SaveButton>}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.userReducer.authUser,
    };
};

export default connect(mapStateToProps)(EditProfile);
