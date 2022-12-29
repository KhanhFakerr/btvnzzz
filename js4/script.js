$ = function(_id){
    return document.getElementById(_id);
}
checkProductname = function(v){
    let reg = /^[A-Z][a-z]+$/;
        return reg.test(v);
}
checkProductcode = function(v){
    let reg = /^NE|HN|SE[0,9]{4,6}$/;
        return reg.test(v);
}
checkProductcostnprice = function(v){
    let reg = /^[0,50]{1,5}|\.$/;
        return reg.test(v);
}
checkProductdiscription = function(v){
    let reg = /^[A-Z]|[a-z]|[0,9]$/;
        return reg.test(v);
}
var btn = $("itemsv");
btn.addEventListener("click", function(){
    let name = $("itemn");
    let code = $("itemc");
    let cost = $("itemcs");
    let price = $("itempr");
    let dsct = $("itemdst");
    // if(name.value.length === 0){
    //     name.setAttribute("placeholder", "Enter Product name");
    // }
    if(!checkProductname(name.value)){
        $("w1").innerText = "Product Name is invalid";
        $("w1").classList.add("error");
    }else{
        $("w1").innerText = "";
        $("w1").classList.add("pro_error"); 
    }
    if(!checkProductcode(code.value)){
        $("w2").innerText = "Product Code is invalid";
        $("w2").classList.add("error");
    }else{
        $("w2"),innerText = "";
        $("w2").classList.add("pro_error");
    }
    if(!checkProductcostnprice(cost.value)){
        $("w4").innerText = "Product Cost must be a number";
        $("w4").classList.add("error");
        $("w3").innerText = "Product Cost must be a number";
        $("w3").classList.add("error");
    }else{
        $("w3").innerText = "";
        $("w3").classList.add("pro_error");
        $("w4").innerText = "";
        $("w4").classList.add("pro_error");
    }
    if(!checkProductdiscription(dsct.value)){
        $("w5").innerText = "Discription must not be blank";
        $("w5").classList.add("error");
    }else{
        $("w5").innerText = "";
        $("w5").classList.add("pro_error");
    }
})