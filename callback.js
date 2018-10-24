function post(path, callback) {

    console.log('path in post', path);

    callback(path)

}

var b = function (path) {

    console.log('path in callback', path);
}
post('/someaddress', b )

