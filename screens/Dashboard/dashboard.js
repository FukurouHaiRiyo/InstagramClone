import React, {useEffect, useContext} from 'react';
import { View, Text} from 'react-native';
import useUser from '../../hooks/use-user';

const Dashboard = () => {
  const {user} = useUser();
  console.log(user);
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;