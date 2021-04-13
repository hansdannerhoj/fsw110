for(var i = 0; i < 10; i++){

    var header = document.getElementById('header')
    
    
    
    var h1 = document.createElement("h1")
    header.appendChild(h1)
    
    h1.textContent= "hello world"
    
    }
    
    document.getElementById('header').style.fontFamily = "arial"
    document.getElementById('header').style.color="blue"
    
    var names = [
        "steve",
        "larry",
        "joe",
        "shirley",
        "steph",
        "nate",
        "rick",
        "emily"
    ]
    
    var headerList = document.getElementById("list")
    
    for (var i = 0; i < names.length; i++) {
    
        var newHeader = document.createElement("li")
        newHeader.textContent = names[i]
       headerList.append(newHeader)
    
    }