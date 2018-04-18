window.addEventListener('DOMContentLoaded', function() {

let overlay = document.getElementsByClassName('overlay')[0],
    main = document.getElementsByClassName('main')[0],
    popup = document.getElementsByClassName('popup')[0],
    popup_btn = document.getElementById('popup-btn'),
    custom_overlay = document.getElementsByClassName('custom')[0],
    custom_info = document.getElementsByClassName('custom-info')[0],
    custom_char = document.getElementsByClassName('custom-char')[0],
    custom_style = document.getElementsByClassName('custom-style')[0];


    popup_btn.addEventListener('click', function() {
    	overlay.style.display = 'none';
    	main.style.display = 'none';

    	custom_overlay.style.display = 'flex';
    	custom_info.style.display = 'block';
    	custom_char.style.display = 'block';
    	custom_style.style.display = 'block';



    });



});