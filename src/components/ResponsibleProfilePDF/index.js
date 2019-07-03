import React from 'react';
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';

import styles from './styles';

StyleSheet.create(styles);

const getItemStyle = (index, itemsArr) => {
  const itemStyles = [styles.item];

  if (index === (itemsArr.length -1)) {
    itemStyles.push(styles.lastItem);
  }

  return itemStyles;
} 

const ResponsibleProfilePDF = (dataSource) => {

  const data = dataSource.dataSource;

  console.log(data);

  const joinedInitiatives = data.participation_summary.initiatives;
  const validatedHours = data.participation_summary.validated_hours;

  const initiatives = data.initiative_report.map((initiative, index, arr) => {
    const currentItemStyle = getItemStyle(index, arr);

    return (
      <View style={ currentItemStyle } key={ initiative.title }>
        <View>
          <Text style={ styles.itemTitle }>{ initiative.title } </Text>
          <Text style={ styles.itemTitleExtra }>{ `(${initiative.valid_hours} horas)` }</Text>
        </View>
        
        <Text></Text>
      </View>
    );
  });

  const sdgs = data.sdg_report.map((sdg, index, arr) => {
    const currentItemStyle = getItemStyle(index, arr);

    return (
      <View style={ currentItemStyle } key={ sdg.id  }>
        <Text style={ styles.itemTitle }>{ sdg.id }</Text>
      </View>
    );
  });

  const competences = data.competence_report.map((competence, index, arr) => {
    const currentItemStyle = getItemStyle(index, arr);

    return (
      <View style={ currentItemStyle } key={ competence.id  }>
        <Text style={ styles.itemTitle }>{ competence.id }</Text>
      </View>
    );
  });

  return (
    <Document
      author="Aplanet"
      subject={ `Responsible CV of ${ data.name }` }
      title={ `Responsible CV of ${ data.name }` }
    >
      <Page size="A4" style={ styles.page }>
        <View style={ styles.header }>
          <View style={ styles.avatarWrapper }>
            <Image src={ data.avatar } style={ styles.avatar }/>
          </View>
          <View style={ styles.userInfoWrapper }>
            <Text style={ styles.name }>{ data.name }</Text>
            <Text style={ styles.userInfoItem }>Polis Massa (Tatooine)</Text>
            <Text style={ styles.userInfoItem }>{ data.phone }</Text>
            <Text style={ styles.userInfoItem }>{ data.email }</Text>
          </View>
        </View>

        <View style={ styles.body }>
          <View wrap={false} style={ styles.block }>
            <Image src="/images/icons/community.png" style={ styles.blockIcon } />
            <View style={ styles.subheaderWrapper }>
              <Text style={ styles.subheader }>Iniciativas en las que ha participado</Text>
              <Text style={ styles.subheaderExtra }>{ `(${ joinedInitiatives } iniciativas / ${ validatedHours } horas)` }</Text>
            </View>
            { initiatives }
          </View>
          <View wrap={false} style={ styles.block }>
            <Image
              src="/images/icons/impact.png"
              style={ styles.blockIcon }
            />
            <Text style={ styles.subheader }>SDGs impactados</Text>
            { sdgs }
          </View>
          <View wrap={false} style={ styles.block }>
            <Image
              src="/images/icons/suite.png"
              style={ styles.blockIcon }
            />
            <Text style={ styles.subheader }>Habilidades obtenidas</Text>
            { competences }
          </View>
        </View>

        <Text
          fixed
          style={ styles.footer}
          render={({ pageNumber, totalPages }) => ( <Text>{ `${pageNumber} / ${totalPages}` }</Text> )}
        />
      </Page>
    </Document>
  );
};

export default ResponsibleProfilePDF;