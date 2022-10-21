var docBody = document.getElementById('top');
var modal = document.getElementById('modal-search');
var btn = document.getElementById("find-btn");
var buttonInstallDes = document.getElementById("install-btn-des");
var buttonInstallMob = document.getElementById("install-btn-mob");
var btnMob = document.getElementById("find-btn-mobile");
var span = document.getElementsByClassName("close")[0];
let emailInput = document.getElementById("email") || '';

window.onload = function(){ 
    document.getElementById("loading").style.display = "none";
}

var deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPromotion();
});

if (buttonInstallDes) {
    buttonInstallDes.addEventListener('click', (e) => {
        hideMyInstallPromotion();
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    });
}

if (buttonInstallDes) {
    buttonInstallMob.addEventListener('click', (e) => {
        hideMyInstallPromotion();
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    });
}

window.addEventListener('appinstalled', (evt) => {
    console.log('INSTALL: Success');
});

function showInstallPromotion() {
    document.getElementById("install-pwa-mob").style.display = "block";
    if (window.innerWidth >= 771) {
        document.getElementById("install-pwa-des").style.display = "block";
    }
}
function hideMyInstallPromotion() {
    document.getElementById("install-pwa-mob").style.display = "none";
    document.getElementById("install-pwa-des").style.display = "none";
}


btn.onclick = function() {
    modal.classList.add('show');
}

btnMob.onclick = function() {
    modal.classList.add('show');
}

emailInput.onclick = function() {
    document.getElementById("hint-error-input-email").style.display = "none";
    document.getElementById("email").style.border = "0";
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
    let hint = document.getElementById("hint-error-input-email");
    let emailInput = document.getElementById("email");
    let email = document.getElementById("email").value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        sendData(email)
        return (true)
    }
    hint.style.display = "block";
    emailInput.style.border = "1px solid red";
    // alert("You have entered an invalid email address!")
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