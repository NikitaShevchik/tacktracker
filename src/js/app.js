import * as nikFunctions from "./modules/functions.js";

nikFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();


const menuIcon = document.querySelector('.header__icon');
const menuHeader = document.querySelector('.header__menu');

menuIcon.addEventListener('click', openMenu);

function openMenu(){
    menuHeader.classList.toggle('_active');
    menuIcon.classList.toggle('_cross');
    document.body.classList.toggle('_lock')
}

