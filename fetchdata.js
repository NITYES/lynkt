const http = require("https");
const fs = require('fs');


const dataUrl=["https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history"
  ,"https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD",
  "https://api.github.com/users/mralexgray/repos"]




function getData(url) {

    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.on('data', (chunk) => resolve(chunk)
            )


        })
    })

}

  function  AppendToFile(urlArray,location){
    const dataFile=fs.createWriteStream(location,{flags:"a",encoding:"utf-8"});
    urlArray.forEach(url=>{
        getData(url).then(data=>{
            dataFile.write(url+"-----------------------------------\n"+data +"\n\n")
     })
    })
}

AppendToFile(dataUrl,"data.txt")



