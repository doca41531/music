window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            let hihat7 = new Audio('1.mp3')
    
            hihat7.play()
            break;
        case "s":
            let hihat8 = new Audio('3.mp3')
    
            hihat8.play()
            break;
        case "a":
            let hihat9 = new Audio('2.mp3')
    
            hihat9.play()
            break;
        case "d":
            let hihat10 = new Audio('4.mp3')

            hihat10.play()
            break;
        case "ArrowUp":
            let hihat11 = new Audio('5.mp3')
    
            hihat11.play()
            break;
        case "ArrowLeft":
            let hihat12 = new Audio('6.mp3')
    
            hihat12.play()
            break;
        case "ArrowDown":
            let hihat13 = new Audio('7.mp3')
    
            hihat13.play()
            break;
        case "ArrowRight":
            let hihat14 = new Audio('8.mp3')
    
            hihat14.play()
            break;
    }
})