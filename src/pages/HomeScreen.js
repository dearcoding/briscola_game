import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

export default function HomeScreen({ navigation }) {
    /*
     * HomeScreen is the component used to render the home of Briscola game App
     */
  return (
        <View style={styles.container}>
              <Text style={styles.textTitle}>Briscola game</Text>
                <TouchableOpacity style={styles.buttonStyle}
                      onPress={() =>
                            navigation.navigate('SelectGame')
                    }
                >
                    <Text style={styles.buttonText}>Play now</Text>
                </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 205,
      width: 100+"%",
      height: 100+"%"
  },
  image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
  },
  textTitle : {
      fontSize : 50,
      color: '#4280ff',
      fontWeight: 'bold'
  },
  buttonStyle : {
      marginTop: 150,
      backgroundColor: '#4280ff',
      padding: 30,
      borderRadius : 30
  },
  buttonText : {
      fontSize: 35
  }
});
