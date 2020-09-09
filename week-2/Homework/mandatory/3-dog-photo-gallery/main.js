// function 


fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
        console.log(data);
        console.log(data.message);
        const dogImage = data.message;
        // const beginTakingTheImage = '';

        const selectButton = document.querySelector('#imageSelector');
        const selectUlElement = document.querySelector('.list-group');

        selectButton.addEventListener('click', selectDogImage);

        function selectDogImage(e) {
            const createLiElement = document.createElement('li');
            const createImgElement = document.createElement('img');

            createImgElement.src = dogImage;
            createImgElement.setAttribute = ('width', '50%');
            createImgElement.setAttribute = ('height', '40%');
            selectUlElement.appendChild(createLiElement);
            createLiElement.appendChild(createImgElement);

            //beginTakingTheImage = createImgElement;

        }
        // beginTakingTheImage.setAttribute = ('src', '');
    })
    .catch(function (err) {
        console.log(err);
    })