import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class Greeting extends Component {
    
    handleClick=(language)=>{
        /*
        const { i18n } = this.props;
        //console.log(language)
        i18n.changeLanguage(language);

        */
      }

    render() {
        const { t } = this.props;
        return (
            <div>
                <button onClick={()=>this.handleClick('en')}> English</button>
                <button onClick={()=>this.handleClick('bn')}> Bangla</button>
                <hr />

                <div>{t('Thanks.1')}</div>   
                <div>{t('Thank You so much.1')}</div>  
            </div>
        )
    }
}

export default  withTranslation(Greeting)
