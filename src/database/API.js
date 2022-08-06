
const getData = async () => {
    try {
        const API = `https://api.sheetson.com/v2/sheets/pharmacy?limit=40`;
        const response = await fetch(API,  {
            headers: {
                "Authorization": "Bearer ew60-FQd7oID3GzRAqJoEvF9WdpPakVCReAGrKMOK8pASEDPgTW9FD3nI0W0pw",
                "X-Spreadsheet-Id": "1rTjGxRTaZRfRge58xSys9-S8TnzeHbtsn-Ai-o7Mk_A"
            }
        })
        const data = await response.json();
        const allPharmacys = data.results
        return allPharmacys;
    } catch( error ) {
        console.log('Fetch Error', error);
    }
}


const getDataByLetter = async ( value ) => {
    try {
        const API = `https://api.sheetson.com/v2/sheets/pharmacy?limit=40`;
        const response = await fetch(API,  {
            headers: {
                "Authorization": "Bearer ew60-FQd7oID3GzRAqJoEvF9WdpPakVCReAGrKMOK8pASEDPgTW9FD3nI0W0pw",
                "X-Spreadsheet-Id": "1rTjGxRTaZRfRge58xSys9-S8TnzeHbtsn-Ai-o7Mk_A"
            }
        })
        const data = await response.json();
        const allPharmacys = data.results
        const pharmacyOpen = allPharmacys.filter(pharmacy => pharmacy.letra === value);
        return pharmacyOpen;
    } catch( error ) {
        console.log('Fetch Error', error);
    }
}

export { getData, getDataByLetter };