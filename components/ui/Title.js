import {Text, StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';

function Title({children}) {
 return  <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    color: COLORS.primary800,
    borderColor: COLORS.primary800,
    borderWidth: 2,
    padding: 12,
  },
})