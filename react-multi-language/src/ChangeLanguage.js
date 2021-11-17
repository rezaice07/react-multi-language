import React, { Component } from 'react'
import i18next from 'i18next';

class ChangeLanguage extends Component {
    thnk = 'Welcome to React';

    handleClick = (language) => {     
        i18next.changeLanguage(language);
        window.location.href = '/'
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick('en')}> English</button>
                <button onClick={() => this.handleClick('bn')}> Bangla</button>
                <hr />
            </div>
        )
    }
}

export default ChangeLanguage






