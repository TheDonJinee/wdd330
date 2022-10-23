/**
 *      savePermanently
 *          using the key parameter read LS
 *          convert that text to JSON
 *          and return to the user
 * @param storageKey           LS storageKey for the value to be store
 * @returns {any}       the JSONified text from LS
 */
export function retrieveSavedData(storageKey) {
    let permanentSave = JSON.parse(localStorage.getItem(storageKey));     //  convert LS text to JSON
    return permanentSave;          //  yes we could do this in one line of code but let's show what we are doing
}

/**
 *      writeToLS
 *          using the key parameters save the specified data to LS
 *          the data will need to first be converted to text
 *          then saved to LS
 * @param storageKey           LS key for the value to be saved
 * @param savedData          value to be saved to LS
 */
export function writeToLS(storageKey, savedData) {
    let text = JSON.stringify(savedData);        // prepare our data to be saved to LS. Convert it to text
    localStorage.setItem(storageKey, text);        // yes this could have all been done in a single line but let's show what we are doing
}