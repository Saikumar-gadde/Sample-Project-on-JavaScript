function switchOff(){
    document.getElementById("BulbPic").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catPic").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchOn").textContent = "Switched Off";
    document.getElementById("button2").style.backgroundColor ="red"; 
    document.getElementById("button1").style.backgroundColor = "lightgrey"
    document.getElementById("switchOn").style.color = "red"

}




function switchOn(){
    document.getElementById("BulbPic").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"; 
    document.getElementById("catPic").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchOn").textContent = "Switched On"
    document.getElementById("button1").style.backgroundColor ="green"; 
    document.getElementById("button2").style.backgroundColor = "lightgrey"
    document.getElementById("switchOn").style.color = "green"
}