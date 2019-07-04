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
    color: colors.text,
    fontFamily: 'Open Sans',
    paddingVertical: 50
  },
  header: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.white,
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginTop: -50,
  },
  name: {
    display: 'block',
    fontSize: 20,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 8,
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
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingLeft: 50,
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
    fontSize: 12,
    marginTop: -1,
    marginLeft: 5,
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
  },
  itemTitleWrapper: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemTitleExtra: {
    fontWeight: 'normal',
    marginLeft: 3,
  },
  itemDescriptionWrapper: {
    fontSize: 12,
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
  itemDateRange: {
    textTransform: 'uppercase',
  },
  sdgItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 11,
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
  corporateLogo: {
    width: 56,
    marginTop: -1,
  },
  footer: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'column',
    textAlign: 'center',
    color: colors.grey,
  },
};

export default styles;