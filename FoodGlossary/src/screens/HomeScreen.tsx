import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Food Glossary
      </Text>

      <Text style={styles.subtitle}>
        Discover uncommon examples of fruits,
        protein and fiber.
      </Text>

      <TouchableOpacity
        style={[styles.button, styles.fruitButton]}
        onPress={() => navigation.navigate('Fruits')}
      >
        <Text style={styles.buttonText}>
          🍓 FRUITS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.proteinButton]}
        onPress={() => navigation.navigate('Protein')}
      >
        <Text style={styles.buttonText}>
          🥩 PROTEIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.fiberButton]}
        onPress={() => navigation.navigate('Fiber')}
      >
        <Text style={styles.buttonText}>
          🌾 FIBER
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        English Class Glossary
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 28,
    justifyContent: 'center',
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E293B',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#64748B',
    lineHeight: 23,
    marginBottom: 40,
  },

  button: {
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 18,
    elevation: 3,
  },

  fruitButton: {
    backgroundColor: '#E85D75',
  },

  proteinButton: {
    backgroundColor: '#C96A3D',
  },

  fiberButton: {
    backgroundColor: '#5B8C5A',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 25,
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 13,
  },
});