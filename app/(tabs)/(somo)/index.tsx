import { StyleSheet } from 'react-native';
import Card from '@/components/Card';
import { View } from '@/components/Themed';


export default function Somo() {
  const lessonList = ['SARUFI', 'MASOMO SAFI', 'VITENDAWILI'];
  return (
    <View style={styles.container} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      {
        lessonList.map(function (l, i) {
          return (
            <Card key={i} text={l} />
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 32
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});
