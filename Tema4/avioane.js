const fetch = require('node-fetch');

async function getObjectFromUrl(url){
    const response = await fetch(url);
    return await response.json();
}

async function getPlanesList(){
    const object = await getObjectFromUrl('https://opensky-network.org/api/states/all?lamin=43.6&lomin=20.3&lamax=48.3&lomax=29.7');
    let list = [];
    for(const plane of object['states']){
        list.push(plane[1]);
    }
    return list;
}

getPlanesList().then(list => console.log(list));