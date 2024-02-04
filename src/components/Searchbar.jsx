import React, { useState } from 'react';
import classes from '../modules/Searchbar.module.scss'


const EmailNotifyForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    const emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailvalidation.test(email)) {
      setError('');
      window.location.reload();
    } else {
      setError('Please provide a valid email address');
    }
  };

  return (
    <div className={classes['Searchbar']}>
        <div className={classes['Search']}>
        <input className={classes['input']}
            type="email"
            id="emailInput"
            placeholder="Your Email Address..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button className= {classes['Notify']}onClick={validateEmail}>Notify Me</button>
      </div>
      <div className={classes['error']}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default EmailNotifyForm;
