const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//serialized
console.log(myUrl.href);

//host(root domain)
console.log(myUrl.host);

//pathName
console.log(myUrl.pathname)