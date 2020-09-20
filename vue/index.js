var appDashboard = new Vue({
    el: '#appDashboard',
    data: {
        pesan: 'Anda memuat halaman ini pada jam ' + new Date().toLocaleString(),
        angular: 'Kumpulan Tutorial Seputar Framework Angular',
        nodejs: 'Kumpulan Tutorial Seputar Node.js',
        ci: 'Kumpulan Tutorial Seputar Framework Codeigniter',
        sfb: 'Share on Facebook'
    }
})

var appShare = new Vue({
    el: '#appShare',
    data: {
        fb: 'Share on Facebook',
        tw: 'Share on Twitter',
        wa: 'Share on Whatsapp',
        tl: 'Share on Telegram',
        lk: 'Share on Linkedin'
    }
})