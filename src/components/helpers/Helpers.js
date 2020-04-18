import Cookies  from 'js-cookie';

const helpers = {
    'checkIfCookiesExists' : function() {
        if(Cookies.get('hddt')) {
            return true;
        }
        return false;
    }
}

export default helpers;