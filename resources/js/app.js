import './bootstrap';
import 'boxicons';

// const button_kajian = document.getElementById('button_kajian');
// button_kajian.onclick = () =>{
//     document.getElementById('menu_kajian').classList.toggle('open')
// }

const main_menu = document.querySelector('.main_menu');
const openMenuButton  =document.getElementById('open_menu_mobile');
openMenuButton.addEventListener('click',()=>{
    main_menu.classList.toggle('open_menu')
});
const closeMenuButton  =document.getElementById('close_menu_mobile');
closeMenuButton.addEventListener('click',()=>{
    main_menu.classList.remove('open_menu')
});