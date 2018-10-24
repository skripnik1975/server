


function func(){
    var oReq = new XMLHttpRequest()
    oReq.open("GET", "http://localhost:8080/getData");
    oReq.send()
    setTimeout(()=>{
        if(oReq.status == 200){
            let res = oReq.responseText
            document.getElementById("fieldforresponse").value = res
        }
    }, 1000)
}