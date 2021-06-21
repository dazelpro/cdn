function checkURL() {
    let urlIG = document.getElementById("urlig").value;
    let rootDomain = `https://dazelpro.com/`
    // let rootDomain = `http://localhost:3030/`
    let urlApi = `${rootDomain}get-thumbnail`
    let rootUrlImage = `${rootDomain}api/v1/instagram/oembed/`
    let urlImage = '';
    let data = {
        "url" : urlIG
    }
    if (urlIG) {
        document.getElementById("after-loading").style.display = "none";
        document.getElementById("get-loading").style.display = "block";
        (async() => {
            const rawResponse = await fetch(urlApi, {
                // method: 'GET'
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
            } else {
                document.getElementById("get-loading").style.display = "none";
                alert("Kebijakan pemakaian Facebook API telah berubah. Kunjungi halaman Facebook Developers untuk informasi lebih lanjut.")
            }
        })();
    } else {
        alert("You have entered URL Instagram!")
    }
}