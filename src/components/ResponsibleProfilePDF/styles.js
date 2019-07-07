import { Font } from '@react-pdf/renderer';

const fontsPath = '/fonts';
const fontsSource = {
  regular: `${fontsPath}/OpenSans-Regular.ttf`,
  italic: `${fontsPath}/OpenSans-Italic.ttf`,
  bold: `${fontsPath}/OpenSans-Bold.ttf`,
  boldItalic: `${fontsPath}/OpenSans-BoldItalic.ttf`,
};

const colors = {
  primary: '#117065',
  grey: '#666666',
  lightGrey: '#AAAAAA',
  text: '#444444',
  white: '#FFFFFF',
};

Font.register({ family: 'Open Sans', fonts: [
  { src: fontsSource.regular},
  { src: fontsSource.italic, fontStyle: 'italic' },
  { src: fontsSource.bold, fontWeight: 700 },
  { src: fontsSource.boldItalic, fontStyle: 'italic', fontWeight: 700 },
 ]});

const styles = {
  page: {
    backgroundColor: colors.white,
    color: colors.text,
    fontFamily: 'Open Sans',
    paddingVertical: 70
  },
  header: {
    flexDirection: 'row',
    color: colors.primary,
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 40,
    marginTop: -70,
  },
  name: {
    display: 'block',
    fontSize: 20,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  avatarWrapper: {
    display: 'inline-block',
    width: 120,
    height: 'auto',
    flexBasis: '20%',
    marginRight: 20,
  },
  avatar: {
    display: 'block',
    borderRadius: 60,
  },
  userInfoItem: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 5,
  },
  body: {
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 30
  },
  subheaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subheader: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: 700,
    paddingLeft: 30,
    paddingBottom: 5,
  },
  subheaderExtra: {
    color: colors.primary,
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 3,
  },
  block: {
    fontSize: 13,
    marginBottom: 40,
  },
  blockIcon: {
    position: 'absolute',
    top: -8,
    left: -17,
    width: 36,
    height: 36,
  },
  bullet: {
    position: 'absolute',
    left: -7,
    top: 2,
    width: 11,
    height: 11,
  },
  firstBullet: {
    top: 10,
  },
  lastBullet: {
    top: -1
  },
  item: {
    flexDirection: 'column',
    alingContent: 'flex-start',
    borderLeftWidth: 2.2,
    borderLeftColor: colors.primary,
    paddingLeft: 28,
    paddingBottom: 15,
    marginTop: -1,
  },
  firstItem: {
    paddingTop: 8,
  },
  lastItem: {
    borderLeftColor: colors.white,
    marginTop: -2,
  },
  itemTitleWrapper: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemTitleExtra: {
    color: colors.lightGrey,
    fontWeight: 'normal',
    marginLeft: 5,
  },
  itemDescriptionWrapper: {
    fontSize: 12,
  },
  itemDateRange: {
    textTransform: 'uppercase',
  },
  itemOutterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemValidHours: {
    color: colors.lightGrey,
    marginLeft: 10,
  },
  sdgLogo: {
    width: 30,
    height: 30,
    flexBasis: 30,
    marginRight: 8,
  },
  credits: {
    flexDirection: 'row',
    color: 'grey',
    fontSize: 11,
    paddingLeft: 40,
  },
  link: {
    color: colors.primary,
    marginLeft: 5,
  },
  logoLink: {
    position: 'absolute',
    left: 40,
    bottom: 22.5,
    width: '50%',
  },
  logo: {
    width: 56,
  },
  pagination: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    flexDirection: 'column',
    width: '50%',
    color: colors.grey,
    fontSize: 11,
    textAlign: 'right',
  },
};

export default styles;