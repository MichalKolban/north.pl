const container1 = document.querySelector('.devicesLink');
const container2 = document.querySelector('.categoriesLink');
const container3 = document.querySelector('.productLink');

const section1 = document.querySelector('.container');
const section2 = document.querySelector('.container-categories');
const section3 = document.querySelector('.container-products');

const hr = document.querySelector('hr');

function clearClasses() {
    section1.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
}

container1.addEventListener('click', function () {
    clearClasses();
    section1.classList.add('active');
    hr.style.marginLeft = "0%";
})


container2.addEventListener('click', function () {
    clearClasses();
    section2.classList.add('active');
    hr.style.marginLeft = "33.3%";
})

container3.addEventListener('click', function () {
    clearClasses();
    section3.classList.add('active');
    hr.style.marginLeft = "66.6%";
})