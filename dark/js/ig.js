function GetThumbnail() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let getRules = JSON.parse(localStorage.getItem("rules"));

    let urlIG = document.getElementById("urlig").value;
    // let rootDomain = `https://dazelpro.com/`
    let rootDomain = `http://localhost:3030/`
    let urlApi = `${rootDomain}get-thumbnail`
    let rootUrlImage = `${rootDomain}api/v1/instagram/oembed/`
    let urlImage = '';
    let data = {
        "url": urlIG
    }
    if (urlIG) {
        let checkMyRules = checkRules();
        if (checkMyRules != 3) {
            document.getElementById("after-loading").style.display = "none";
            document.getElementById("get-loading").style.display = "block";
            (async () => {
                const rawResponse = await fetch(urlApi, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const content = await rawResponse.json();
                if (content['success']) {
                    urlImage = `${rootUrlImage + content['file']}.jpg`
                    document.getElementById("get-loading").style.display = "none";
                    document.getElementById("after-loading").style.display = "block";
                    document.getElementById("image-thumb").innerHTML = `<img style="width: 250px;" src="${urlImage}" alt="DAZELPRO : Get Thumbnail Instagram">`;
                    document.getElementById("title-post").innerHTML = `Post by <a style="color:white" href="https://instagram.com/${content['data']['author_name']}" target="_blank" rel="noreferrer">@${content['data']['author_name']}</a>`;
                    document.getElementById("code1").innerHTML = urlImage;
                    document.getElementById("code2").innerHTML = `&lt;img src="${urlImage}"&gt;`;
                    if (checkMyRules == 0) { //LS Kosong
                        let setFirstRule = { "key": today.toLocaleDateString(), "many": 1 }
                        localStorage.setItem("rules", JSON.stringify(setFirstRule));
                    } else if (checkMyRules == 1) {
                        localStorage.clear(); //Beda Tanggal
                        let setFirstRule = { "key": today.toLocaleDateString(), "many": 1 }
                        localStorage.setItem("rules", JSON.stringify(setFirstRule));
                    } else if (checkMyRules == 2) { //Tanggal sama + 1
                        let currentMany = getRules.many + 1;
                        let setNewRule = { "key": today.toLocaleDateString(), "many": currentMany }
                        localStorage.clear();
                        localStorage.setItem("rules", JSON.stringify(setNewRule));
                    }
                } else {
                    document.getElementById("get-loading").style.display = "none";
                    alert("Kebijakan pemakaian Facebook API telah berubah. Kunjungi halaman Facebook Developers untuk informasi lebih lanjut.");
                }
            })();
        } else {
            alert("Kamu hanya diperbolehkan mengambil Thumbnail sebanyak 5x setiap harinya.");
        }
    } else {
        alert("You have entered URL Instagram!");
    }
}

function checkRules() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let checkRules = JSON.parse(localStorage.getItem("rules"));
    if (checkRules) {
        let key = checkRules.key;
        if (key == today.toLocaleDateString()) {
            let many = checkRules.many;
            if (many == 5) {
                return 3;
            } else {
                return 2;
            }
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}