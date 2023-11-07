import { StyleSheet, Text , TouchableOpacity, View } from 'react-native';

export default function AchievmentButton({navigation}) {
   
  const handlePress = () => {
    navigation.navigate('Achievments');}

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={handlePress}>
        <Text>Achievements here!</Text>
        </TouchableOpacity>
      </View>
    )
  }
