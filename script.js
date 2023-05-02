const col = document.getElementById("Zodiac");

const changeBackground = ()=>{
    let background = document.querySelector(".con");
    switch(col.value){
        case "Cancer":
        background.style.backgroundColor ="#4a7fd4"
        break;
        case "Sagittarius":
        background.style.backgroundColor ="#ba4ad4"
        break;
        case "Pisces":
        background.style.backgroundColor ="#d44a6c"
        break;
        case "Capricorn":
        background.style.backgroundColor ="#d4534a"
        break;
        case "Leo":
        background.style.backgroundColor ="#d4b84a"
        break;
        case "Libra":
        background.style.backgroundColor ="#88d44a"
        break;
        case "Taurus":
        background.style.backgroundColor ="#4ad478"
        break;
        case "Virgo":
        background.style.backgroundColor ="#4acfd4"
        break;
        case "Aquarius":
        background.style.backgroundColor ="#4a71d4"
        break;
        case "Gemini":
        background.style.backgroundColor ="#8a4ad4"
        break;
        case "Scorpio":
        background.style.backgroundColor ="#d44a4a"
        break;
        default:
        background.style.backgroundColor ="#d4d44a"
        break;
    }
}