fetch('https://xkcd.now.sh/?comic=latest')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.alt);
        console.log(data.img);

        const titleElement = document.querySelector('#titleElement');
        const imageElement = document.querySelector('#imageElement');
        const altTextElement = document.querySelector('#altText');
        titleElement.textContent = data.title;
        imageElement.src = data.img;
        altTextElement.textContent = ` " ${data.alt} "`;
    })
    .catch(function (err) {
        console.log(err);
    })