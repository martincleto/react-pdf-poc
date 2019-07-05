import React from 'react';
import {
  Document,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';

import styles from './styles';

StyleSheet.create(styles);

const monthsAbbr = {
  'en': ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec'],
  'es': ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  'pt': ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
}

const parseDate = (dateStr, lang) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = monthsAbbr[lang][date.getMonth()];
  const fullYear = date.getFullYear();
  
  // TODO: Localize this
  return `${day} ${month} ${fullYear}`;
};

const getElementStyle = (index, arr, elementName) => {
  const elementStyles = [styles[elementName.toLowerCase()]];

  if (index > 0) {
    if (index === (arr.length -1)) {
      elementStyles.push(styles[`last${elementName}`]);
    }
  } else {
    elementStyles.push(styles[`first${elementName}`]);
  }

  return elementStyles;
}

const ResponsibleProfilePDF = (dataSource) => {
  
  const data = dataSource.dataSource;
  
  const lang = data.language;
  const joinedInitiatives = data.participation_summary.initiatives;
  const validatedHours = data.participation_summary.validated_hours;
  
  const initiatives = data.initiative_report.map((initiative, index, arr) => {
    const currentItemStyle = getElementStyle(index, arr, 'Item');
    const currentItemStartDate = parseDate(initiative.start_time, lang);
    const currentItemEndDate = parseDate(initiative.end_time, lang);
    const listBulletStyle = getElementStyle(index, arr, 'Bullet');

    return (
      <View style={ currentItemStyle } key={ initiative.title }>
        <Image src="/images/dot.png" style={ listBulletStyle }/>
        <View style={ styles.itemTitleWrapper }>
          <Text style={ styles.itemTitle }>{ initiative.title } </Text>
          <Text style={ styles.itemTitleExtra }>{ `(${initiative.valid_hours} horas)` }</Text>
        </View>
        <View style={ styles.itemDescriptionWrapper }>
          <Text style={ styles.itemDateRange }>{ `${currentItemStartDate} - ${currentItemEndDate}` }</Text>
          <Text>Organizador: { initiative.organization }</Text>
        </View>
      </View>
    );
  });

  const sdgs = data.sdg_report.map((sdg, index, arr) => {
    const currentItemStyle = getElementStyle(index, arr, 'Item');
    const listBulletStyle = getElementStyle(index, arr, 'Bullet');

    return (
      <View style={ currentItemStyle } key={ sdg.sdg_id  }>
        <Image src="/images/dot.png" style={ listBulletStyle }/>
        <View style={ styles.sdgItemWrapper }>
          <Image src={sdg.logo} style={ styles.sdgLogo }/>
          <Text>{ `${sdg.sdg_id}. ${sdg.name}` }</Text>
        </View>
      </View>
    );
  });

  const competences = data.competence_report.map((competence, index, arr) => {
    const currentItemStyle = getElementStyle(index, arr, 'Item');
    const listBulletStyle = getElementStyle(index, arr, 'Bullet');

    return (
      <View style={ currentItemStyle } key={ competence.id  }>
        <Image src="/images/star.png" style={ listBulletStyle }/>
        <Text>{ competence.name }</Text>
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
            <Text style={ styles.userInfoItem }>{ data.location }</Text>
            <Text style={ styles.userInfoItem }>{ data.phone }</Text>
            <Text style={ styles.userInfoItem }>{ data.email }</Text>
          </View>
        </View>

        <View style={ styles.body }>
          <View style={ styles.block }>
            <Image src="/images/icons/community.png" style={ styles.blockIcon } />
            <View style={ styles.subheaderWrapper }>
              <Text style={ styles.subheader }>Iniciativas en las que ha participado</Text>
              <Text style={ styles.subheaderExtra }>{ `(${ joinedInitiatives } iniciativas / ${ validatedHours } h.)` }</Text>
            </View>
            { initiatives }
          </View>
          <View style={ styles.block }>
            <Image
              src="/images/icons/SDGs.png"
              style={ styles.blockIcon }
            />
            <Text style={ styles.subheader }>SDGs impactados</Text>
            { sdgs }
          </View>
          <View style={ styles.block }>
            <Image
              src="/images/icons/skills.png"
              style={ styles.blockIcon }
            />
            <Text style={ styles.subheader }>Habilidades obtenidas</Text>
            { competences }
          </View>
        </View>

        <Link
          fixed
          src="https://aplanet.org/"
          style={ styles.logoLink }
        >
            <Image
              src="/images/aplanetG.png"
              style={ styles.logo }
            />
        </Link>

        <Text
          fixed
          style={ styles.pagination }
          render={({ pageNumber, totalPages }) => ( <Text>{ `${pageNumber} / ${totalPages}` }</Text> )}
        />
      
      </Page>
    </Document>
  );
};

export default ResponsibleProfilePDF;