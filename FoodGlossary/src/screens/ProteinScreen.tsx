import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';

import GlossaryCard from '../components/GlossaryCard';

export default function ProteinScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>
        Protein
      </Text>

      <Text style={styles.intro}>
        Discover five uncommon foods that are good sources of protein.
      </Text>

      <GlossaryCard
        name="Tempeh"
        description="A fermented soybean food that is rich in plant-based protein."
        image={require('../../assets/protein/tempeh.jpg')}
      />

      <GlossaryCard
        name="Seitan"
        description="A high-protein food made mainly from wheat gluten."
        image={require('../../assets/protein/seitan.jpg')}
      />

      <GlossaryCard
        name="Lupini Beans"
        description="Yellow legumes that contain a large amount of protein."
        image={require('../../assets/protein/lupini-beans.jpg')}
      />

      <GlossaryCard
        name="Edamame"
        description="Young green soybeans that are commonly eaten as a snack."
        image={require('../../assets/protein/edamame.jpg')}
      />

      <GlossaryCard
        name="Skyr"
        description="A thick Icelandic dairy product that is high in protein."
        image={require('../../assets/protein/skyr.jpg')}
      />

      <View style={styles.sentencesBox}>
        <Text style={styles.sentencesTitle}>
          Example Sentences
        </Text>

        <Text style={styles.sentence}>
          1. Tempeh is a good source of plant-based protein.
        </Text>

        <Text style={styles.sentence}>
          2. Lupini beans contain a high amount of protein.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F4',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#C96A3D',
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
    backgroundColor: '#FCE8DC',
    borderRadius: 16,
    padding: 18,
    marginTop: 8,
  },

  sentencesTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#A94F2B',
    marginBottom: 12,
  },

  sentence: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 8,
  },
});