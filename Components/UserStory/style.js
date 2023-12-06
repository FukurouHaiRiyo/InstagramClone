import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    storyContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginRight: 20,
    },

    firstName: {
        fontSize: 14,
        marginTop: 8,
        color: '#022150',
        textAlign: 'center',
    },

    userImageContainer:{
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FFC542',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image:{
        width: 60,
        height: 60,
        borderRadius: 65,
    }
});

export default style;
