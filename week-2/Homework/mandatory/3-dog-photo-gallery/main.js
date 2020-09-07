// function 


fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        return response.image;
        console.log(response.image);
    })
    .then(function (data) {
        console.log(data);
        const selectButton = document.querySelector('#imageSelector');
        const selectUlElement = document.querySelector('.list-group');


        selectButton.addEventListener('click', selectDogImage);

        function selectDogImage(dogImage) {
            const createLiElement = document.createElement('li');
            const createImgElement = document.createElement('img');
            selectUlElement.appendChild(createLiElement);
            createLiElement.appendChild(createImgElement);
            createImgElement.setAttribute = ('src', `${dogImage.src}`);
            createImgElement.src = dogImage.src;

        }

    })
    .catch(function (err) {
        console.log(err);
    })