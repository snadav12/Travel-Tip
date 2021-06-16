export const locService = {
    getLocs
}
var gLocId = 101;

const locs = [{
        id: gLocId++,
        name: 'Greatplace',
        lat: 32.047104,
        lng: 34.832384,
        weather: null,
        createdAt: null,
        updatedAt: null
    },
    {
        id: gLocId++,
        name: 'Neveragain',
        lat: 32.047201,
        lng: 34.832581,
        weather: null,
        createdAt: null,
        updatedAt: null
    },
]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}