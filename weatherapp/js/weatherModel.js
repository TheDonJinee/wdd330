export default class weatherModel {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    retrieveSavedData() {
        let savedData = JSON.parse(localStorage.getItem(this.storageKey));     //  convert LS text to JSON
        return savedData;          //  yes we could do this in one line of code but let's show what we are doing
    }
    
    
    saveData(data) {
        let text = JSON.stringify(data);        // prepare our data to be saved to LS. Convert it to text
        localStorage.setItem(this.storageKey, text);        // yes this could have all been done in a single line but let's show what we are doing
    }
}
