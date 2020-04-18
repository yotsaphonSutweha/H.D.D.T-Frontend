import Cookies  from 'js-cookie';

const helpers = {
    'checkIfCookiesExists' : function() {
        if(Cookies.get('session')) {
            return true;
        }
        return false;
    }
}

export default helpers;