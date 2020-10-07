const checkbox = document.getElementById("checkbox");
const radio = document.getElementById("radio");
const link = document.getElementById("link");

checkbox.onchange = function() {
    if (checkbox.checked && radio.checked) {
        link.setAttribute('href', 'www.yahoo.com');
        link.innerHTML = "yahoo";
    } else if (checkbox.checked) {
        link.setAttribute('href', 'https://www.upwork.com/ab/jobs/search/t/1/details/~012c9445da373f78aa/?amount=-5&sort=recency&subcategory2_uid=531770282584862733');
        link.innerHTML = "upwork";
    } else if (radio.checked) {
        link.setAttribute('href', 'https://stackoverflow.com/');
        link.innerHTML = "stackoverflow";
    } else {
        link.setAttribute('href', 'https://google.com/');
        link.innerHTML = "google";
    }
}

radio.onchange = function() {
    if (checkbox.checked && radio.checked) {
        link.setAttribute('href', 'www.yahoo.com');
        link.innerHTML = "yahoo";
    } else if (radio.checked) {
        link.setAttribute('href', 'https://stackoverflow.com/');
        link.innerHTML = "stackoverflow";
    }
}