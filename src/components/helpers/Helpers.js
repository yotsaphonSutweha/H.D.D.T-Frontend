import Cookies from 'universal-cookie';
const cookies = new Cookies();
const helpers = {
    'checkIfCookiesExists' : function() {
        if(cookies.get('hddt')) {
            return true;
        }
        return false;
    }
}

export default helpers;