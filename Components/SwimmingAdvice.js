import { Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function SwimmingAdvice() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://rnli.org/safety/choose-your-activity/open-water-swimming#')}>
  <Text style={{color: 'blue'}}>
    Swimming Advice
  </Text>
</TouchableOpacity>
      </View>
    );
  }

 