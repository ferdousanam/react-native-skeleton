import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    centerMiddleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    topContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    topContainerCenter: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    scrollViewContainer: {
        marginBottom: 20,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    textCenter: {
        textAlign: 'center',
    },
    flatListContainer: {
        flexGrow: 1,
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3, // For Android
    },
});
