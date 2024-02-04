import React from "react";
import EmailNotifyForm from './components/Searchbar';
import Logo from './assets/images/logo.svg';
import illustration from './assets/images/illustration-dashboard.png';
import classes from './modules/main.module.scss';
import facebook from './assets/images/facebook-f.svg';
import instagram from './assets/images/instagram.svg';
import twitter from './assets/images/twitter.svg';

function App() {
  return (
    <div className={classes['main']}>
      <img className={classes['Logo']}src={Logo} alt="" />
      <h1>We are launching <span>soon!</span></h1>
      <p>Subscribe and get notified</p>
      <EmailNotifyForm />
      <img className={classes['image']}
      src={illustration} alt="" />
      <div className={classes['icons']}>
        <div className={classes['bg']}>
          <img src={facebook} alt="Facebook" />
        </div>
        <div className={classes['bg']}>
          <img src={instagram} alt="Instagram" />
        </div>
        <div className={classes['bg']}>
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
       <p className={classes['footer']}>© Copyright Ping. All rights reserved</p>
    </div>
  );
}

export default App;
