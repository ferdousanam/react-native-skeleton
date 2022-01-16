import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Styles from '@styles';
import {COLORS, images} from '@constants';
import {Spinner} from '@components';
import Button from '@components/form/buttons/Button';
import FormGroup from '@components/form/FormGroup';
import Footer from '@components/inc/Footer';
import {login} from '@actions/userAction';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            mobile: '',
            password: '',
        };
    }
    onPressSubmit = () => {
        this.setState({spinner: true});
        this.props
            .login({mobile: this.state.mobile})
            .then((response) => {
                //
            })
            .catch(() => this.setState({spinner: false}));
    };
    render() {
        return (
            <>
                <Spinner visible={this.state.spinner} />
                <View style={styles.container}>
                    <Image source={images.logo} style={Styles.logo} resizeMode="stretch" />
                    <View style={styles.formContainer}>
                        <FormGroup>
                            <FormGroup.Label>Mobile Number</FormGroup.Label>
                            <FormGroup.InputGroup>
                                <FormGroup.TextInput placeholder="01XXXXXXXXX" keyboardType="phone-pad" maxLength={11} onChangeText={(val) => this.setState({mobile: val})} />
                            </FormGroup.InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup.Label>Password</FormGroup.Label>
                            <FormGroup.InputGroup>
                                <FormGroup.TextInput onChangeText={(val) => this.setState({password: val})} />
                            </FormGroup.InputGroup>
                        </FormGroup>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={this.onPressSubmit} style={styles.button}>
                            <Button.Text>Login</Button.Text>
                        </Button>
                    </View>
                    {/*<View style={styles.infoTextContainer}>*/}
                    {/*    <Text>You should receive an SMS for verification.</Text>*/}
                    {/*    <Text>Message and data rates may apply</Text>*/}
                    {/*</View>*/}
                </View>

                <Footer />
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...Styles.centerContainer,
        marginHorizontal: 20,
    },
    formContainer: {
        marginTop: 50,
    },
    numberPrefixText: {
        fontSize: 20,
        color: COLORS.gray,
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
});

export default connect(null, {login})(SignIn);
