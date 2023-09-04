import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOutercontainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnercontainer]
            : styles.buttonInnercontainer
        }
        android_ripple={{
          color: Colors.primary600,
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOutercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnercontainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    //android
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
