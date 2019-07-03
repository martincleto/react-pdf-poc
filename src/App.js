import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { PDFViewer } from '@react-pdf/renderer';

import { PDFViewer } from '@react-pdf/renderer';

import ResponsibleProfilePDF from './components/ResponsibleProfilePDF';
import ButtonDownloadPDF from './components/ButtonDownloadPDF';

import data from './data/data.json';

import './App.css';


function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/viewer">PDFViewer</Link>
          </li>
          <li>
            <Link to="/button">PDFDownloadLink</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={ Home } />
      <Route
        path="/viewer"
        render={ () => {
          return (
            <PDFViewer>
              <ResponsibleProfilePDF dataSource={ data } />
            </PDFViewer>
          );
        }}
      />
      <Route path="/button" component={ ButtonDownloadPDF } />
    </Router>
  );
}

const Home = () => {
  return (
    <React.Fragment>
      <p>Click on top navigation links to take a look on <a href="https://react-pdf.org">react-pdf</a> renderer.</p>
    </React.Fragment>
  )
};

export default App;
