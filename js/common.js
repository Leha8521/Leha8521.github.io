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
        custom_info.classList.add("animated");
        custom_info.classList.add("fadeInLeft");
        custom_style.classList.add("animated");
        custom_style.classList.add("fadeInRight");
        custom_char.classList.add("animated");
        custom_char.classList.add("fadeInDown");

           


    });

  
// Customization

let ready = document.getElementById('ready'),

    name = document.getElementById('name'),
    age = document.getElementById('age'),
    sexRadio = document.getElementsByClassName('radio')[0],
    male = document.getElementById('male'),
    female = document.getElementById('female'),
    select = document.getElementById('select'),
    textBio = document.getElementById('bio'),

    main_cards = document.getElementsByClassName('main-cards-item'),
    overlay_cards = document.getElementsByClassName('main-cards')[0],
   
    //myMain = document.getElementsByClassName('myMain')[0],
    person_easy = document.querySelector('.person-easy'),
    preview = document.querySelector('.preview'),
    photo = document.getElementsByClassName('photo');

                    // cleaning the form
                      if (window.performance) {
                       name.value = '';
                       age.value = '';
                      // bio.value = '';
                       female.checked = true;
                       select.value = 'Либеральные';
                       textBio.value = '';

                        };
 
      let y = [];
        for (let i = 0; i < 4; i++) {
            y[i] = `url(img/construct-${i+1}.png) center no-repeat`;
           
                       
        };

      let x = [];
        for (let i = 0; i < 4; i++) {
            x[i] = `url(img/construct-${i+5}.png) center no-repeat`;
                     
        };

        if (male.checked) {
               person_easy.style.background = x[0];
               person_easy.style.backgroundSize = "contain";
               preview.style.background = `#f2f2f2 ${x[0]}`;
               preview.style.backgroundSize = "contain";
        } else if (female.checked) { 
             person_easy.style.background = y[0];
             person_easy.style.backgroundSize = "contain";
             preview.style.background = `#f2f2f2 ${y[0]}`;
             preview.style.backgroundSize = "contain";
        };


        sexRadio.addEventListener('change', function(event) {
                if (event.target && event.target.matches('input#male')) {
                    person_easy.style.background = x[0];
                    person_easy.style.backgroundSize = "contain";
                    preview.style.background = `#f2f2f2 ${x[0]}`;
                    preview.style.backgroundSize = "contain";
          } else if (event.target && event.target.matches('input#female')) {
                     person_easy.style.background = y[0];
                     person_easy.style.backgroundSize = "contain";
                     preview.style.background = `#f2f2f2 ${y[0]}`;
                     preview.style.backgroundSize = "contain";
          }

        });   

// Slider
    
    let slideIndex = 0,
        prev = document.getElementsByClassName('prev')[0],
        next = document.getElementsByClassName('next')[0];
               

      function showslidesFemale(slideIndex) { 
       
        
                    person_easy.style.background = y[slideIndex];
                    person_easy.style.backgroundSize = "contain";
                    preview.style.background = `#f2f2f2 ${y[slideIndex]}`;
                    preview.style.backgroundSize = "contain";
                    console.log(slideIndex);
                } 


        function showslidesMen(slideIndex)  {
                    person_easy.style.background = x[slideIndex];
                    person_easy.style.backgroundSize = "contain";
                    preview.style.background = `#f2f2f2 ${x[slideIndex]}`;
                    preview.style.backgroundSize = "contain";
                    console.log(slideIndex);
                 } 
        
    
      

      function plusSlide(n) {
        
        if (female.checked) {  
            if (slideIndex > 3) { 
                    slideIndex = 0;
                    showslidesFemale(slideIndex)} else if (slideIndex < 0)  { 
                        slideIndex = 3;
                         showslidesFemale(slideIndex)
                    } else  showslidesFemale(slideIndex += n);


                    
        
            

            if (slideIndex > 3) { 
                    slideIndex = 0;
                    showslidesFemale(slideIndex)} else if (slideIndex < 0)  { 
                        slideIndex = 3;
                         showslidesFemale(slideIndex)
                    }; 

        } else if (male.checked) {  
            if (slideIndex > 3) { 
                    slideIndex = 0;
                    showslidesMen(slideIndex)} else if (slideIndex < 0)  { 
                        slideIndex = 3;
                         showslidesMen(slideIndex)
                    }; 
        
            showslidesMen(slideIndex += n);

            if (slideIndex > 3) { 
                    slideIndex = 0;
                    showslidesMen(slideIndex)} else if (slideIndex < 0)  { 
                        slideIndex = 3;
                         showslidesMen(slideIndex)
                    }; 

      }
  }

      prev.addEventListener('click', function() {
         plusSlide(-1);
       })

      next.addEventListener('click', function() {
        plusSlide(1);
      })


        

// Application сustomization

       ready.addEventListener('click', function() {
            custom_overlay.style.display = 'none';
            custom_info.style.display = 'none';
            custom_char.style.display = 'none';
            custom_style.style.display = 'none';
            main.style.display = 'block';
            

        let myMain = main_cards[1].cloneNode(true);
            overlay_cards.appendChild(myMain); 
            myMain.classList.add('myMain');

        let nameCards = myMain.getElementsByClassName('name')[0],
            ageCards = myMain.getElementsByClassName('age')[0],
            sex = myMain.getElementsByClassName('sex')[0],
            views = myMain.getElementsByClassName('views')[0],
            bio = myMain.getElementsByClassName('bio')[0];

        let myFoto = myMain.getElementsByClassName('photo')[0],
            foto_replacement = person_easy.style.background;
           
            myFoto.style.background = foto_replacement;
            myFoto.style.backgroundSize = "contain";

            

                id = setInterval(timeAnimate, 200);
                let a = 0;
                function timeAnimate() {
                    if (a == 3) {
                     clearInterval(id);
                    } else {
             
            main_cards[a].classList.add("animated");
            main_cards[a].classList.add("pulse");
            a++;
                };
              };
                

            nameCards.textContent = name.value;
            ageCards.textContent = age.value;
            
                if (male.checked) {
                    sex.textContent = male.value;
                } else {
                    sex.textContent = female.value;
                }

            views.textContent = select.value;
            bio.textContent = textBio.value;


        });

});