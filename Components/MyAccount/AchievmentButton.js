import { StyleSheet, Text , TouchableOpacity, View } from 'react-native';

export default function AchievementButton({navigation, user}) {
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
