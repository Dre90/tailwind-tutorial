const burger = document.querySelector('#burger');
const classes = document.querySelector("#menu").classList

burger.addEventListener('click', () => {
    classes.toggle("hidden")
})