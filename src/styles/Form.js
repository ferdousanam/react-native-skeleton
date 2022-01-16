import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';

export default StyleSheet.create({
    formGroup: {
        marginTop: 15,
    },
    formControl: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#E9EAEE',
        paddingHorizontal: 20,
    },
    formGroupBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderWidth: 0.5,
        borderColor: COLORS.gray,
    },
    formLabel: {
        color: '#000',
        marginTop: 5,
    },
    formButtonBox: {
        alignItems: 'center',
        marginTop: 50,
    },
    formButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    formButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#05375a',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    textInputBox: {
        flex: 1,
        color: '#05375a',
        textAlign: 'center',
        paddingVertical: 5,
    },
    textAreaInput: {
        flex: 1,
        paddingLeft: 10,
        height: 150,
    },

    listBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
