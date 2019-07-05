import React from 'react';
import { shallow } from 'enzyme';

import { StyleSheet } from '@react-pdf/renderer';

import ResponsibleProfilePDF from './index.js';

import data from '../../data/data.json';

import styles from './styles';

describe('<ResponsibleProfilePDF />', () => {
  let component = null;

  beforeEach(() => {
    component = shallow(<ResponsibleProfilePDF dataSource={ data } />);
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  test('loads the styles for the template', () => {
    const spyStyleSheetCreate = jest.spyOn(StyleSheet, 'create');

    expect(spyStyleSheetCreate).toHaveBeenCalledTimes(1);
    expect(spyStyleSheetCreate).toHaveBeenCalledWith(styles);
  });
});

