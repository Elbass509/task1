const menuToggler = document.querySelector('.toggler');
const displayableNavlist = document.querySelector('.nav-list');
const overlayEffect = document.querySelector('main');

menuToggler.addEventListener('click', (event) => {
event.preventDefault();
    if (displayableNavlist.style.display === 'none') {
    displayableNavlist.style.display = 'block';
    overlayEffect.classList.add('overlay');
} else {
    displayableNavlist.style.display = 'none';
    overlayEffect.classList.remove('overlay');
}
})


//Date and time generator
const realTimeDate = new Date ();
let monthHolder = document.querySelector('.month');
let dayHolder = document.querySelector('.day');
let yearHolder = document.querySelector('.year');
const generateDateMonth = realTimeDate.toLocaleDateString('en-US', {month: 'short'});
monthHolder.textContent = generateDateMonth;
const generateDateDay = realTimeDate.toLocaleDateString('en-US', {day: '2-digit'})
dayHolder.textContent = generateDateDay;
const generateDateYear = realTimeDate.getFullYear();
yearHolder.textContent = generateDateYear;


let timeHolder = document.querySelector('.time');
const generateTimeHour = realTimeDate.toLocaleTimeString('en-US', {hour: '2-digit'});
const generateTimeMinutes = realTimeDate.toLocaleTimeString('en-US', {minute: '2-digit'});
const constructedTime = generateTimeHour + ' : ' +generateTimeMinutes;
timeHolder.textContent = constructedTime;

//jquery for restoration of init form i.e. resizing

const resizeHandler = () => {
    if (window.innerWidth >= 551) {
       displayableNavlist.style.display = 'inline-flex';
    } else {
        displayableNavlist.style.display = 'none';
    }
};

window.addEventListener('resize', resizeHandler);

resizeHandler();



