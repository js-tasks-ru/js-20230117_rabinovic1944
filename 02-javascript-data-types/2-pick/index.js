/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {


    const arrayFromObj = Object.entries(obj);
    const resultArray = [];
    
    arrayFromObj.map(([key, value]) => {
                
        if (fields.includes(key))  { 
                 
                 resultArray.push([key,value]);
          
                                    }

                                       });

    return  Object.fromEntries(resultArray);
  
};