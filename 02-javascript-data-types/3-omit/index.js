/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

export const omit = (obj, ...fields) => {

    const arrayFromObj = Object.entries(obj);
    const resultArray = [];
    
    arrayFromObj.map(([key, value]) => {
                
        if (!fields.includes(key))  { 
                 
                 resultArray.push([key,value]);
          
                                    }

                                       });

    return  Object.fromEntries(resultArray);
  
};
