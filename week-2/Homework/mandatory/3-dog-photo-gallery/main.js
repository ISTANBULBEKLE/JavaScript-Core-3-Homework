// function 

const selectButton = document.querySelector('#imageSelector');
const selectUlElement = document.querySelector('.list-group');

selectButton.addEventListener('click', function () {
    const selectLiElement = document.querySelector('.list-group-item');
    const selectImgElement = document.querySelector('.imageElement');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            selectImgElement.src = data.message;
            selectUlElement.appendChild(selectLiElement);
            selectLiElement.appendChild(selectImgElement);
            selectImgElement.setAttribute = ('width', '50%');
            selectImgElement.setAttribute = ('height', '40%');

        })
        .catch(function (err) {
            console.log(err);
        })
})