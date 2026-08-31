import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

type Props = {
  name: string;
  description: string;
  image: ImageSourcePropType;
};

export default function GlossaryCard({
  name,
  description,
  image,
}: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 18,
    overflow: 'hidden',
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 180,
  },

  content: {
    padding: 16,
  },

  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 7,
  },

  description: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 21,
  },
});