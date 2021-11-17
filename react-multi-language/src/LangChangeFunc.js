import React from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const LangChangeFunc = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <hr />
            <h1> {t('WelcometoReact')}</h1>
            <div>{t('Thanks')}</div>  
            <div>{i18next.t('Welcome to multi language')}</div>

        </div>
    )
}

export default LangChangeFunc
