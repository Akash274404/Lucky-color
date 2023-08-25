
const zodiac = document.getElementById("zodiac")

const body = document.body;

const changebackground = () => {
    switch (zodiac.value) {
        case "arise":
            body.style.backgroundColor = "#fc0303";
            break;
        case "tarus":
            body.style.backgroundColor = "#03fc6f";
            break;
        case "gemni":
            body.style.backgroundColor = "#fc88d8";
            break;
        case "cancer":
            body.style.backgroundColor = "#579eeb";
            break;
        case "leo":
            body.style.backgroundColor = "#fc0300";
            break;
        case "virgo":
            body.style.backgroundColor = "#ee0101";
            break;
        case "libra":
            body.style.backgroundColor = "#dd0202";
            break;
        case "scorpio":
            body.style.backgroundColor = "#cc0404";
            break;
        case "sagittarius":
            body.style.backgroundColor = "#aa0505";
            break;
        case "aquarius":
            body.style.backgroundColor = "#bb0606";
            break;
        case "capricorn":
            body.style.backgroundColor = "#ff0707";
            break;
        case "pisces":
            body.style.backgroundColor = "#mn0808";
            break;
        default:
            break;
    }

}