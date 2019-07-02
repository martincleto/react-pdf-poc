import React from 'react';
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';

const ResponsibleProfilePDF = (dataSource) => {

  const data = dataSource.dataSource;

  return (
    <Document
      author="Aplanet"
      subject={ `Responsible CV of ${ data.name }` }
      title={ `Responsible CV of ${ data.name }` }
    >
      <Page size="A4" style={ styles.page} >
        <View style={ styles.header }>
          <Image src={ data.avatar } style={ styles.avatar } />
          <Text style={ styles.name }>{ data.name }</Text>
        </View>
      </Page>
    </Document>
  );
};

const fontsPath = '../../fonts';

Font.register({ family: 'Open Sans', fonts: [
  { src: `${fontsPath}/OpenSans-Regular.ttf` },
  { src: `${fontsPath}/OpenSans-Bold.ttf`, fontWeight: '700' },
  { src: `${fontsPath}/OpenSans-Italic.ttf`, fontStyle: 'italic' },
  { src: `${fontsPath}/OpenSans-BoldItalic.ttf`, fontStyle: 'italic', fontWeight: 700 },
 
 ]});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    color: '#444',
    fontFamily: 'Open Sans',
    
  },
  header: {
    backgroundColor: '#117065',
    color: '#FFF',
    padding: 10,
    flexGrow: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  avatar: {
    display: 'inline-block',
    width: '200px',
    height: '200px',
    marginRight: '50px',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
});

export default ResponsibleProfilePDF;