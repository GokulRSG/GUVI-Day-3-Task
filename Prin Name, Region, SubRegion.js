let URL = "https://restcountries.com/v3.1/all";


function getresponsevalue(){
    let obj = JSON.parse(this.response);
    //console.log(obj)
    for(let arr of obj)
        {
            console.log("Name = " + arr.name.common);
            console.log("Region = " + arr.region);
            console.log("Sub Region = " + arr.subregion);
        }
    //console.log(this.response);
}
const req = new XMLHttpRequest;
req.addEventListener("load", getresponsevalue);
req.open("GET", URL);
req.send();