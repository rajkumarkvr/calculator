const btns=document.querySelectorAll('.btns');
const txt_box=document.getElementById('txt-input');
var firstOperand=0
var secondOperand=0;
var operator="";
var result=0;
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
       if(e.target.value=="c"){
        txt_box.value="";
       }
       else if(e.target.value=="/" || e.target.value=="*" || e.target.value=="-" || e.target.value=="+" ){
        console.log("mathematical operation")
        firstOperand=Number( txt_box.value);
        operator=e.target.value;
        txt_box.value="";
       }
       else if(e.target.value=="="){
            secondOperand=Number(txt_box.value);
            result=calculateResult()
            txt_box.value=result;
       }
       else{
        txt_box.value+=e.target.value}
    })
})

function calculateResult(){
    let res=0;
    switch(operator){
        case "/":
            res=firstOperand/secondOperand;
            break;
            case "*":
                res=firstOperand*secondOperand;
                break;
                case "-":
                    res=firstOperand-secondOperand;
                    break;
                    case "+":
                        res=firstOperand+secondOperand;
                        break;


    }
    return res;
}