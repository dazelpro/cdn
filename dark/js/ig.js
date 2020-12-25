function checkURL() {
    let urlIG = document.getElementById("urlig").value;
    let tknFB = document.getElementById("token").value;
    let url = `https://graph.facebook.com/v9.0/instagram_oembed?url=${urlIG}&maxwidth=320&access_token=${tknFB}`
    if (urlIG !== '') {
        document.getElementById("after-loading").style.display = "none";
        document.getElementById("get-loading").style.display = "block";
        (async () => {
            const rawResponse = await fetch(url, {
                method: 'GET'
            });
            const content = await rawResponse.json();
            if(content['author_name'] !== undefined){
                document.getElementById("get-loading").style.display = "none";
                document.getElementById("after-loading").style.display = "block";
                document.getElementById("image-thumb").innerHTML = `<img style="width: 250px;" src="${content['thumbnail_url']}" alt="">`;
                document.getElementById("title-post").innerHTML = `Post by @${content['author_name']}`;
                document.getElementById("code1").innerHTML = content['thumbnail_url'];
                document.getElementById("code2").innerHTML = `&lt;img src="${content['thumbnail_url']}"&gt;`;
            } else {
                document.getElementById("get-loading").style.display = "none";
                alert("There is something wrong!")
            }
        })();
    } else {
        alert("You have entered URL Instagram!")
    }
}