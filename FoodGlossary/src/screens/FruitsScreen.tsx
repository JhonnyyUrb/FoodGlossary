import {
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';

import GlossaryCard from '../components/GlossaryCard';

export default function FruitsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>
        Fruits
      </Text>

      <Text style={styles.intro}>
        Discover five uncommon fruits from different parts of the world.
      </Text>

      <GlossaryCard
        name="Rambutan"
        description="A tropical fruit with red hairy skin and sweet white flesh."
        image={require('../../assets/fruits/rambutan.jpg')}
      />

      <GlossaryCard
        name="Mangosteen"
        description="A tropical fruit with thick purple skin and soft white sections inside."
        image={require('../../assets/fruits/mangosteen.jpg')}
      />

      <GlossaryCard
        name="Salak"
        description="A fruit from Southeast Asia with brown scaly skin, also known as snake fruit."
        image={require('../../assets/fruits/salak.jpg')}
      />

      <GlossaryCard
        name="Cherimoya"
        description="A green tropical fruit with soft, sweet and creamy flesh."
        image={require('../../assets/fruits/cherimoya.jpg')}
      />

      <GlossaryCard
        name="Jabuticaba"
        description="A small purple fruit that grows directly on the trunk of its tree."
        image={require('../../assets/fruits/jabuticaba.jpg')}
      />

      <View style={styles.sentencesBox}>
        <Text style={styles.sentencesTitle}>
          Example Sentences
        </Text>

        <Text style={styles.sentence}>
          1. Rambutan has a sweet and juicy flavor.
        </Text>

        <Text style={styles.sentence}>
          2. Mangosteen is one of my favorite tropical fruits.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F8',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E85D75',
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
    backgroundColor: '#FFE8EC',
    borderRadius: 16,
    padding: 18,
    marginTop: 8,
  },

  sentencesTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#C43D58',
    marginBottom: 12,
  },

  sentence: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 8,
  },
});