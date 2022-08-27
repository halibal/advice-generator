import searchApiWithId from './adviceSlip.js';

// DOM Elements
const adviceText = document.querySelector("#adviceText");
const adviceId = document.querySelector("#adviceId");
// DOM Elements


// create random IDs to lookup in API;
const createRandomId = () => {
    return Math.floor(Math.random() * 500);
};

// calls API when client clicks on the dice button
document.querySelector("#btnDice").addEventListener("click", () => {
    adviceText.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Loading...`;
    searchApiWithId(createRandomId(), (data) => {
        changeDom(data);
    });
});


// Manipulates DOM elements and places API information into screen, recalls function if it can't find matching advice with the ID sent
const changeDom = (data) => {
    if (data.slip === undefined) {
        searchApiWithId(createRandomId(), (data) => {
            changeDom(data);
        });
    } else {
        adviceText.innerText = `"${data.slip.advice}"`;
        adviceId.innerHTML = data.slip.id
    }
}