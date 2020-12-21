var modal = document.getElementById('modal-search');
var btn = document.getElementById("find-btn");
var btnMob = document.getElementById("find-btn-mobile");
var span = document.getElementsByClassName("close")[0];

window.onload = function(){ 
    document.getElementById("loading").style.display = "none";
}

btn.onclick = function() {
    modal.classList.add('show');
}

btnMob.onclick = function() {
    modal.classList.add('show');
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function check() {
    let email = document.getElementById("email").value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        sendData(email)
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
function sendData(email) {
    let urlSubs = 'https://dazelpro.com/subscribe';
    // let urlSubs = 'http://localhost:3030/subscribe';
    let csrfToken = document.getElementById("token").value;
    document.getElementById("btnActive").style.display = "none";
    document.getElementById("btnInActive").style.display = "block";
    (async () => {
        const rawResponse = await fetch(urlSubs, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({"email": email})
        });
        const content = await rawResponse.json();
        if(content['success']){
            document.getElementById("newsletterActive").style.display = "none";
            document.getElementById("newsletterInActive").style.display = "block";
        } else {
            alert("There is something wrong!")
        }
    })();
}