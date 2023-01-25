/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */


export function sortStrings(arr, param = 'asc') {


if  (param === 'asc') {
        const arrnew = [...arr].sort((a, b) => a.localeCompare(b,['ru-Ru','en-US'],{caseFirst:"upper"}));
        return arrnew;
    }

else if (param === 'desc') {
        const arrnew = [...arr].sort((a, b) => a.localeCompare(b,['ru-Ru','en-US'], {caseFirst:"upper"})).reverse();
        return arrnew;
    } 

else {
        console.log('ERROR: wrong sorting order paramener: ', param, '/n "asc" or "desc" parameters only ');
        return null;
        }

}
//['ru','en'],