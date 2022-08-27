const searchApiWithId = (id, callback) => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(err => callback(err));
};

export default searchApiWithId;