console.log("script loaded");
let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('pink')
}else{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log('Option clicked', mode)
        setTheme(mode)
})
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'defualt.css'

    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode == 'pink'){
        document.getElementById('theme-style').href = 'pink.css'
    }
    if(mode == 'orange'){
        document.getElementById('theme-style').href = 'orange.css'
    }

    localStorage.setItem('theme', mode)
}
