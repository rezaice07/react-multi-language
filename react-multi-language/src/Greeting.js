import React, { Component } from 'react'
import i18next from 'i18next';

class Greeting extends Component {

    componentDidMount = () => {
        //i18next.loadNamespaces('common');
    }
    render() {
        return (
            <div>
                <div>{i18next.t('WelcometoReact')}</div>
                <div>{i18next.t('Thanks')}</div>
                <div>{i18next.t('Welcome to multi language')}</div>
            </div>
        )
    }
}

export default Greeting

