function press() {
    var locate = window.location.href
        //console.log(locate)
        //window.location.assign('https://www.google.com/')
        //window.location.replace('https://www.google.com/')
        // window.location.reload(false) // cache reloading.
        // window.location.reload(true) // server reloading.
        // var contend = "you Login "
        // window.open().document.write(contend)
    var win = window.open('https://www.google.com/', 'win2', 'width = 300, height = 300, left = 200, top = 100')
    if (win == null) {
        alert('please diabled your popup blocker');
        win.close()
    }
}