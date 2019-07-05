import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { PDFDownloadLink } from '@react-pdf/renderer';

import ButtonDownloadPDF from './index.js';

jest.mock('@react-pdf/renderer', () => {
  return {
    __esModule: true,
    Font: {
      register: jest.fn(() => {}),
    },
    StyleSheet: {
      create: jest.fn(() => {}),
    },
    PDFDownloadLink: jest.fn(() => null),
  };
});

const mockData = {
  name: "Luke Skywalker",
};

describe('<ButtonDownloadPDF />', () => {
  let component = null;

  beforeEach(() => {
    component = shallow(<ButtonDownloadPDF dataSource={ mockData } />);
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  test('uses <PDFDownloadLink/> component', () => {
    expect(component.find(PDFDownloadLink).length).toBe(1);
  });

  test('sets output filename according \'user_name_responsible_cv.pdf\'', () => {
    const expectedFileName = `${ mockData.name.replace(/\s/g,'_').toLowerCase() }_responsible_cv.pdf`;
    const actualFileName = component.find(PDFDownloadLink).prop('fileName');

    expect(expectedFileName).toEqual(actualFileName);
  });
});