import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';

import GlossaryCard from '../components/GlossaryCard';

export default function FiberScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>
        Fiber
      </Text>

      <Text style={styles.intro}>
        Discover five uncommon foods and sources that are rich in dietary fiber.
      </Text>

      <GlossaryCard
        name="Psyllium Husk"
        description="A natural source of soluble dietary fiber obtained from plant seeds."
        image={require('../../assets/fiber/psyllium-husk.jpg')}
      />

      <GlossaryCard
        name="Artichoke"
        description="A vegetable that provides a good amount of dietary fiber."
        image={require('../../assets/fiber/artichoke.jpg')}
      />

      <GlossaryCard
        name="Flaxseeds"
        description="Small seeds that contain fiber and healthy fats."
        image={require('../../assets/fiber/flaxseeds.jpg')}
      />

      <GlossaryCard
        name="Barley"
        description="A whole grain that is naturally rich in fiber."
        image={require('../../assets/fiber/barley.jpg')}
      />

      <GlossaryCard
        name="Prunes"
        description="Dried plums that are known for their high fiber content."
        image={require('../../assets/fiber/prunes.jpg')}
      />

      <View style={styles.sentencesBox}>
        <Text style={styles.sentencesTitle}>
          Example Sentences
        </Text>

        <Text style={styles.sentence}>
          1. Psyllium husk is very high in dietary fiber.
        </Text>

        <Text style={styles.sentence}>
          2. Artichokes can help increase your daily fiber intake.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FBF5',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5B8C5A',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
  },

  intro: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },

  sentencesBox: {
    backgroundColor: '#E5F3E3',
    borderRadius: 16,
    padding: 18,
    marginTop: 8,
  },

  sentencesTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#477347',
    marginBottom: 12,
  },

  sentence: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 8,
  },
});