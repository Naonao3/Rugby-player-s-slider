class Player{
    constructor(number,name,height,weight,cap,img){
        this.number = number
        this.name = name
        this.height = height
        this.weight = weight
        this.cap = cap
        this.img = img
    }
}

let playerList = [
    new Player(1,"Keita Inagaki",186,116,44,"./img/1_Inagaki.jpeg"),
    new Player(2,"Atsushi Sakate",180,104,32,"./img/2_Sakate.jpg"),
    new Player(3,"Jiwon Gu",184,122,20,"./img/3_Gu.jpg"),
    new Player(4,"Warner Dearns",201,117,6,"./img/4_Dears.jpg"),
    new Player(5,"Jack Cornelsen",195,110,11,"./img/5_Cornelsen.jpg"),
    new Player(6,"Michael Leitch",189,113,77,"./img/6_Leitch.jpg"),
    new Player(7,"Pieter Labuschagne",189,106,14,"./img/7_Labuschagne.png"),
    new Player(8,"Kazuki Himeno",187,108,24,"./img/8_Himeno.jpg"),
    new Player(9,"Naoto Saito",165,73,10,"./img/9_Saito.jpg"),
    new Player(10,"Seungsin Lee",176,85,5,"./img/10_Lee.jpg"),
    new Player(11,"Siosaia Fifita",187,105,11,"./img/11_Fifita.jpg"),
    new Player(12,"Ryoto Nakamura",182,92,32,"./img/12_Nakamura.jpg"),
    new Player(13,"Shogo Nakano",186,98,5,"./img/13_Nakano.jpg"),
    new Player(14,"Dylan Riley",187,102,9,"./img/14_Riley.jpg"),
    new Player(15,"Ryohei Yamanaka",188,98,26,"./img/15_Yamanaka.jpg")
];

const target = document.getElementById("target");

//タイトル
let title = document.createElement("div");
title.classList.add("col-10","text-center","text-danger","p-5","container");
let mainTitle = document.createElement("h1");
mainTitle.innerHTML = "Japan starting member against France";
subTitle = document.createElement("h3");
subTitle.classList.add("text-right");
subTitle.innerHTML = "2022.11.20";

title.append(mainTitle);
title.append(subTitle);
target.append(title);

//出力部分
let output = document.createElement("div");
output.classList.add("row");

title.append(output);

//画像部分（左側）
let leftDiv = document.createElement("div");
leftDiv.classList.add("col-md-7","col-12","p-2","d-flex","justify-content-center","align-items-center");
let playerImg = document.createElement("img");
playerImg.classList.add("imgFit","p-2");
let defaultImg = "./img/default.jpg";
playerImg.src = defaultImg;

leftDiv.append(playerImg);
output.append(leftDiv);

//ボタン＆選手の情報部分（右側）
let rightDiv = document.createElement("div");
rightDiv.classList.add("col-md-5","col-12","py-3","text-white");
let info = document.createElement("h5");
info.classList.add("text-left","col-12","py-3")
info.innerHTML = ""
let detailInfo = document.createElement("h5");
detailInfo.innerHTML = ""
detailInfo.classList.add("text-left","col-12","py-3")

rightDiv.append(info);
rightDiv.append(detailInfo);
output.append(rightDiv);

//slide部分
let sliderShow = document.createElement("div");
sliderShow.classList.add("col-12","d-flex","flex-nowrap","overflow-hiddens");

let mainImg = document.createElement("img");
mainImg.classList.add("main","imgFit");
mainImg.setAttribute("data-index",0);

let extraImg = document.createElement("img");
extraImg.classList.add("extra","imgFit");

sliderShow.append(mainImg);
sliderShow.append(extraImg);
playerImg.append(sliderShow);

//ボタン作成
for(let i=0; i < playerList.length; i++){
    let button = document.createElement("button");
    button.classList.add("btn","bg-warning","m-2","col-3","align-items-center");
    button.innerHTML = (i+1).toString();
    //ボタンス押したときのイベント作成
    button.addEventListener("click",function(){
        //選手の情報を表示
        info.innerHTML = playerList[i].name;
        detailInfo.innerHTML = playerList[i].height + "cm, " + playerList[i].weight + "kg, " + playerList[i].cap + "cap";
        //関数呼び出し
        slideJump(i)
    })
    rightDiv.append(button);
}



//関数作成
function slideJump(input){
    let index = parseInt(mainImg.getAttribute("data-index"));
    let currentElement = playerList[index];
    let nextElemnt = playerList[input];
    let animationType = index < input ? "right" : "left";

　  //関数呼び出し
    animationMain(currentElement,nextElemnt,animationType,input);
}

function animationMain(currentElement,nextElemnt,animationType,input){
    mainImg.src = nextElemnt.img
    extraImg.src = currentElement.img;

    mainImg.classList.add("expand-animation");
    extraImg.classList.add("deplete-animation");

    if(animationType === "right"){
        if(playerImg.src == defaultImg){
            extraImg.src = defaultImg;
        }
        playerImg.src = ""
        mainImg.setAttribute("data-index",input)     
        sliderShow.append(extraImg);
        sliderShow.append(mainImg);
        leftDiv.append(sliderShow);
    }

    else if(animationType === "left"){
        if(playerImg.src === defaultImg){
            extraImg.src = defaultImg; 
        }
        playerImg.src = ""
        mainImg.setAttribute("data-index",input);
        sliderShow.append(mainImg);
        sliderShow.append(extraImg);
        leftDiv.append(sliderShow);
    }
}