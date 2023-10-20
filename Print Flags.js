let URL = "https://restcountries.com/v3.1/all";

const req = new XMLHttpRequest;
req.addEventListener("load", function(){
    let obj = JSON.parse(this.response);
    for(let arr of obj)
        {
            console.log(arr.flags.png)
        }
    //console.log(this.response);
});

req.open("GET", URL);
req.send();