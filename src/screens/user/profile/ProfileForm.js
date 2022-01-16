import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {Avatar} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Styles from '@styles';
import {COLORS, icons as Icons, images} from '@constants';
import AuthStorage from '@/core/session/AuthStorage';
import {Spinner} from '@components';
import FormGroup from '@components/form/FormGroup';
import Button from '@components/form/buttons/Button';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            image: {},
            mobile: '',
            authUser: props.authUser,
            errors: {},
            pointerEvents: 'auto',
        };
        if (props.authUser?.mobile) {
            this.state.mobile = props.authUser.mobile;
        } else {
            AuthStorage.get('mobile').then((data) => {
                this.setState({mobile: data});
            });
        }
        this.bs = React.createRef();
    }
    getStateAuthUser(key) {
        if (this.state.authUser?.[key]) {
            return this.state.authUser[key].toString();
        }
        return '';
    }
    setStateAuthUser(key, value) {
        this.setState((prevState) => ({
            authUser: {
                ...prevState.authUser,
                [key]: value,
            },
        }));
    }
    onPressSave = () => {
        //
    };
    render() {
        const {spinner, authUser, mobile, pointerEvents} = this.state;
        const {lockUpdate} = this.props;
        return (
            <>
                <Spinner visible={spinner} />
                <ScrollView>
                    <View pointerEvents={pointerEvents} style={styles.container}>
                        <View style={{...styles.formContainer, ...this.props.formContainer}}>
                            <TouchableWithoutFeedback disabled={lockUpdate}>
                                <View style={{alignItems: 'center', marginBottom: 15}}>
                                    <View style={{alignItems: 'center'}}>
                                        {authUser?.image_url ? <Avatar.Image size={100} source={{uri: authUser.image_url}} /> : <Avatar.Image size={100} source={images.avatar} />}
                                        <View
                                            style={{
                                                position: 'absolute',
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: COLORS.gray,
                                                borderRadius: 50,
                                                padding: 5,
                                                borderWidth: 1,
                                                borderColor: COLORS.white,
                                            }}>
                                            <MaterialIcons name="camera-alt" color={COLORS.white} size={20} />
                                        </View>
                                    </View>
                                    <Text style={{marginTop: 10, fontWeight: 'bold'}}>+88{mobile}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <FormGroup style={styles.formGroup}>
                                <FormGroup.InputGroup>
                                    <FormGroup.TextInput
                                        placeholder="Full Name"
                                        editable={!lockUpdate}
                                        value={this.getStateAuthUser('name')}
                                        onChangeText={(value) => this.setStateAuthUser('name', value)}
                                    />
                                </FormGroup.InputGroup>
                            </FormGroup>
                            <FormGroup style={styles.formGroup}>
                                <FormGroup.InputGroup>
                                    <FormGroup.TextInput
                                        placeholder="Email"
                                        editable={!lockUpdate}
                                        value={this.getStateAuthUser('email')}
                                        onChangeText={(value) => this.setStateAuthUser('email', value)}
                                    />
                                </FormGroup.InputGroup>
                            </FormGroup>
                        </View>
                        {!lockUpdate && (
                            <View style={styles.buttonContainer}>
                                <Button onPress={this.onPressSave} style={styles.button}>
                                    {this.props.saveButton}
                                </Button>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </>
        );
    }
}

const SaveButton = (props) => {
    return <Button.Text style={{marginRight: 10}}>{props.children}</Button.Text>;
};

ProfileForm.SaveButton = SaveButton;

const styles = StyleSheet.create({
    container: {
        ...Styles.centerContainer,
        marginHorizontal: 20,
        paddingTop: 10,
    },
    formGroup: {
        paddingVertical: 10,
    },
    formContainer: {
        marginTop: 40,
    },
    icon: {
        fontSize: 20,
        color: COLORS.gray,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
    },
    infoTextContainer: {
        alignItems: 'center',
    },
    formControlRadioItemWrapper: {
        flexDirection: 'row',
    },
});

ProfileForm.defaultProps = {
    lockUpdate: false,
};

export default connect(null)(ProfileForm);
