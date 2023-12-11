import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    header: {
        marginLeft: 27, 
        marginRight: 17, 
        marginTop: 45, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    }, 

    messageIcon: {
        paddding: 14, 
        borderRadius: 100, 
        backgroundColor: '#F9FaF8'
    },

    userStoryContainer: {
        marginTop: 20, 
        marginHorizontal: 28,
        marginLeft: 27, 
        marginRight: 17, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    userPostContainer: {
        marginHorizontal: 24,
        marginTop: 20,
    }
});

export default globalStyles;