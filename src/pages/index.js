import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Iris Portfolio</title>
        <html lang="en" />
        <meta name="description" content="Iris Portfolio" />
      </Helmet>
      <App />
      <SideBarButton showBelow={70} />
    </>
  );
};
