import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';

const styles = StyleSheet.create({
    formControlRadio: {
        flexDirection: 'row',
        borderBottomColor: '#f2f2f2',
        marginTop: 10,
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 0,
        backgroundColor: '#E9EAEE',
        borderWidth: 1,
        borderColor: '#CCCCCC',
    },
    formControlRadioItemWrapper: {
        flexDirection: 'row',
        paddingBottom: 0,
        paddingLeft: 20,
    },
    formLabel: {
        color: '#000',
        marginTop: 5,
        // display: 'none',
    },
    nextButton: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    badge: {
        alignSelf: 'center',
        backgroundColor: COLORS.primary,
        padding: 3,
        borderRadius: 2,
    },
});

export default styles;
