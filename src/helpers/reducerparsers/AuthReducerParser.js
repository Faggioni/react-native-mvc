/**
 * Auth Data Parser
 */

const replacements = {
    d: 'DD',
    //D: 'ddd',
    j: 'D',
    l: 'dddd',
    N: 'E',
    S: 'o',
    w: 'e',
    z: 'DDD',
    W: 'W',
    F: 'MMMM',
    m: 'MM',
    //M: 'MMM',
    n: 'M',
    t: '',
    L: '',
    o: 'YYYY',
    Y: 'YYYY',
    y: 'YY',
    a: 'a',
    A: 'A',
    B: '',
    g: 'h',
    G: 'H',
    h: 'hh',
    H: 'HH',
    i: 'mm',
    s: 'ss',
    u: 'SSS',
    e: 'zz',
    U: 'X'
};

class AuthReducerParser {
    formatAuthDataFromLogin(apiResponse){
        return {
            authUser: apiResponse.user,
            authTenant: apiResponse.tenants[0],
            authSettings: {
                ...apiResponse.settings,
                date_format_moment: this.carbonToMomentFormat(apiResponse.settings.date_format)
            },
            isUserLoggedIn: true
        }
    }
    formatAuthBrands( brands ){
        return brands.map( brand => {
            return {
                id: brand.id,
                name: brand.name,
                uuid: brand.uuid,
                prefix: brand.prefix,
                inactive: brand.inactive,
            }
        })
    }
    carbonToMomentFormat(phpDate){
        /*Php Moments Conversions*/
        let replace = Object.entries(this.replacements);
        let newDate = phpDate;
        replace.forEach( (item) => {
            newDate = newDate.replace(item[0], item[1]);
        });
        return newDate;
    }
}
export default AuthReducerParser;