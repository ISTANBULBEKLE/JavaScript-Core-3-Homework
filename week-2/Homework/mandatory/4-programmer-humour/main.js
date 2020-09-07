fetch('https://xkcd.now.sh/?comic=latest')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.alt);
        console.log(data.img);
    })
    .catch(function (err) {
        console.log(err);
    })