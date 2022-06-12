let theme;
let dark = document.getElementById('dark');
let light = document.getElementById('light');
let cookie = document.getElementById('Cookie');
dark.addEventListener('click', function(){
    theme = "black";
    document.body.style.backgroundColor = theme;
    localStorage.setItem('theme', theme);

});
light.addEventListener('click', function(){
    theme = "white";
    document.body.style.backgroundColor = theme;
    localStorage.setItem('theme', theme);
});
function getTheme(){
    theme = localStorage.getItem('theme');
    document.body.style.backgroundColor = theme;
};
cookie.addEventListener('click', function(){
    document.cookie = "user=John; path=/; expires=Wed, 15 Jun 2022 11:00:00 GMT";
});