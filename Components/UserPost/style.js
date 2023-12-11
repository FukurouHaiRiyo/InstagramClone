import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    userContainer: {flexDirection: 'row'},

    userTextContainer: {
        justifyContent: 'center', marginLeft: 10
    },

    user:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },

    username:{
        color: '#000',
        fontSize: 16, 
        fontWeight: 'bold'
    },
    location:{
        color: '#79869F',
        marginLeft: -4,
        fontFamily: 'Roboto',
        fontSize: 12,
        marginTop: 2
    }
});

export default style;