

let str = "mukesh";

let bag = "";
for(let i=str.length-1;i>=0;i--){
    bag+=str[i];
}

if(str == bag){
    console.log("Yes");
}
else{
    console.log("No");
}