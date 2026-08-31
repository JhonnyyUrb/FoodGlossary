import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Food Glossary</Text>

        <Text style={styles.subtitle}>
          Learn about uncommon foods and discover examples
          of fruits, protein and fiber.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Explore the Categories
      </Text>

      <TouchableOpacity
        style={[styles.card, styles.fruitCard]}
        onPress={() => navigation.navigate('Fruits')}
      >
        <Text style={styles.emoji}>🍓</Text>

        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Fruits</Text>
          <Text style={styles.cardDescription}>
            Discover 5 uncommon fruits from around the world.
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.proteinCard]}
        onPress={() => navigation.navigate('Protein')}
      >
        <Text style={styles.emoji}>🥜</Text>

        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Protein</Text>
          <Text style={styles.cardDescription}>
            Explore 5 foods that are excellent sources of protein.
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.fiberCard]}
        onPress={() => navigation.navigate('Fiber')}
      >
        <Text style={styles.emoji}>🌾</Text>

        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Fiber</Text>
          <Text style={styles.cardDescription}>
            Learn about 5 foods and sources rich in dietary fiber.
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>
          About this glossary
        </Text>

        <Text style={styles.infoText}>
          Each category includes 5 examples, short definitions,
          images and 2 example sentences.
        </Text>
      </View>

      <Text style={styles.footer}>
        English Classwork
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  content: {
    padding: 22,
    paddingBottom: 40,
  },

  header: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 24,
    marginTop: 12,
    marginBottom: 28,
    elevation: 3,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 15,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
  },

  fruitCard: {
    backgroundColor: '#FFE7EC',
  },

  proteinCard: {
    backgroundColor: '#FCE9DE',
  },

  fiberCard: {
    backgroundColor: '#E7F3E5',
  },

  emoji: {
    fontSize: 40,
    marginRight: 15,
  },

  cardText: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 5,
  },

  cardDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },

  arrow: {
    fontSize: 34,
    color: '#64748B',
    marginLeft: 8,
  },

  infoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginTop: 12,
    elevation: 2,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 8,
  },

  infoText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 21,
  },

  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    marginTop: 28,
    fontSize: 13,
  },
});