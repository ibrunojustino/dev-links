function toggleMode(){
const html = document.documentElement 
//html.classList.toggle('light')

const img = window.document.querySelector("#profile img")

if(html.classList.contains('light')) {
   
    html.classList.remove('light')
    img.setAttribute("src",'./Assets/avatar.png')

}
else{html.classList.add('light')

img.setAttribute("src",'./Assets/Theme=Light mode.png')
}


}


/*if(html.classList.add('light')){

    img.setAttribute("src",'./Assets/Theme=Light mode.png')

}
    else(img.setAttribute("src",'./Assets/Theme=Light mode.png'))*/

    