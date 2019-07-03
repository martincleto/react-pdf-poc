
const fontsPath = '../../fonts';
const colors = {
  primary: '#117065',
  text: '#444444',
  white: '#FFFFFF',
};

const styles = {
  page: {
    color: colors.text,
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
    fontSize: 16,
    fontWeight: 700,
    paddingLeft: 30,
    paddingBottom: 10,
  },
  subheaderExtra: {
    fontSize: 12,
    marginLeft: 5,
    marginBottom: 12,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
    paddingLeft: 30,
    paddingBottom: 10,
    marginTop: -1,
  },
  lastItem: {
    borderLeftColor: colors.white,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemTitleExtra: {
    fontWeight: 'normal',
    marginLeft: 5,
  },
  footer: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'column',
    textAlign: 'center',
    color: 'grey',
  },
};

export default styles;