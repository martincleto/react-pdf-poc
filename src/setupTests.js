import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('@react-pdf/renderer', () => ({
  Document: () => {},
  Font: {
    register: () => {},
  },
  Image: () => {},
  Link: () => {},
  Page: () => {},
  StyleSheet: {
    create: jest.fn(() => {}),
  },
  Text: () => {},
  View: () => {},
}));