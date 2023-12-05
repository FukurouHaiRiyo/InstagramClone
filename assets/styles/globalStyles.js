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
    }
});

export default globalStyles;