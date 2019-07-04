import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import ResponsibleProfilePDF from '../ResponsibleProfilePDF';

import './styles.css';

const composeFileName = (nameStr) => `${ nameStr.replace(/\s/g,'_').toLowerCase() }_responsible_cv.pdf`;

const ButtonDownloadPDF = (dataSource) => {
  const data = dataSource.dataSource;
  const fileName = composeFileName(data.name);

  return (
    <div className="downloadButtonWrapper">
      <PDFDownloadLink document={ <ResponsibleProfilePDF dataSource={ data } /> } fileName={ fileName }>
        {
          ({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download Responsible CV')
        }
      </PDFDownloadLink>
    </div>
  );
}


export default ButtonDownloadPDF;