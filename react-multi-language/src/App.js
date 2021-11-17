import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();

  const handleClick=(language)=>{
    //console.log(language)
    i18n.changeLanguage(language);
  }
  return (
    <div className="App">
      <button onClick={()=>handleClick('en')}> English</button>
      <button onClick={()=>handleClick('bn')}> Bangla</button>  

      <hr />
      <div>{t('Thanks.1')}</div>   
      <div>{t('Thank You so much.1')}</div>   
    </div>
  );
}

export default App;
