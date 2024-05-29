// document.getElementById('dropdown2').addEventListener('click', function() {
//     dropdown2.style.height = '30rem';
// });

let isToggled2 = true;
document.getElementById('dropdown_link_2').addEventListener('click', function() {
    const div = document.getElementById('dropdown2');
    const secret_paragrah = document.getElementById('secret_paragraph2');
    secret_paragrah.classList.toggle('hidden')

    if(isToggled2) 
    {
        div.style.height = '35rem';
        div.style.justifyContent = 'normal';
        div.style.paddingTop = "2rem";
        div.style.paddingLeft = "3rem";
        div.style.paddingRight = "3rem";
        secret_paragrah.style.visibility = true;
        isToggled2 = false;

    }
    else 
    {
        div.style.height = '10rem';
        div.style.justifyContent = 'center';
        div.style.paddingTop = "0rem";
        div.style.paddingLeft = "0rem";
        div.style.paddingRight = "0rem";
        secret_paragrah.style.visibility = false;
        isToggled2 = true;
    }
});


let isToggled1 = true;
document.getElementById('dropdown_link_1').addEventListener('click', function() {
    const div = document.getElementById('dropdown1');
    const secret_paragrah = document.getElementById('secret_paragraph1');
    secret_paragrah.classList.toggle('hidden')

    if(isToggled1) 
    {
        div.style.height = '35rem';
        div.style.justifyContent = 'normal';
        div.style.paddingTop = "2rem";
        div.style.paddingLeft = "3rem";
        div.style.paddingRight = "3rem";
        secret_paragrah.style.visibility = true;
        isToggled1 = false;

    }
    else 
    {
        div.style.height = '10rem';
        div.style.justifyContent = 'center';
        div.style.paddingTop = "0rem";
        div.style.paddingLeft = "0rem";
        div.style.paddingRight = "0rem";
        secret_paragrah.style.visibility = false;
        isToggled1 = true;
    }
});


let isToggled = true;
document.getElementById('dropdown_link').addEventListener('click', function() {
    const div = document.getElementById('dropdown');
    const secret_paragrah = document.getElementById('secret_paragraph');
    secret_paragrah.classList.toggle('hidden')

    if(isToggled) 
    {
        div.style.height = '35rem';
        div.style.justifyContent = 'normal';
        div.style.paddingTop = "2rem";
        div.style.paddingLeft = "3rem";
        div.style.paddingRight = "3rem";
        secret_paragrah.style.visibility = true;
        isToggled = false;

    }
    else 
    {
        div.style.height = '10rem';
        div.style.justifyContent = 'center';
        div.style.paddingTop = "0rem";
        div.style.paddingLeft = "0rem";
        div.style.paddingRight = "0rem";
        secret_paragrah.style.visibility = false;
        isToggled = true;
    }
});

function navigateTo(anchor) {
    window.location.hash = anchor;
};





