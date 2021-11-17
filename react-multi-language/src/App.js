
import React, { Component, Suspense } from 'react';

import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import Greeting from './Greeting';
import ChangeLanguage from './ChangeLanguage';
import LangChangeFunc from './LangChangeFunc';

class App extends Component {
  // const {t, i18n} = useTranslation();

  // const handleClick=(language)=>{
  //   //console.log(language)
  //   i18n.changeLanguage(language);
  // }
  render() {
    return (
      <div className="App">
        {/* <button onClick={()=>handleClick('en')}> English</button>
      <button onClick={()=>handleClick('bn')}> Bangla</button>  

      <hr />
      <div>{t('Thanks.1')}</div>   
      <div>{t('Thank You so much.1')}</div>    */}
        <ChangeLanguage/>
        <Greeting />
        <LangChangeFunc/>
      </div>
    )
  }
}

export default App;
