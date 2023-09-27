import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24
  },
  inputContainer: {
    marginBottom: 10,
    width: '90%'
  },
  inputText: {
    borderWidth: 1
  },
  sectionMain: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
    marginTop: 24,
    overflow: 'hidden',
    paddingTop: 24
  },
  text: {
    fontSize: 25
  }
});

export default styles;
