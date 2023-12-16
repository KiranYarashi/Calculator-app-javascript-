let string="";
let c=document.querySelector("input");
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{

        if(e.target.innerHTML=="="){
            try{
                c.value=eval(string);
                string=c.value;
            }
            catch(err){
                c.value="Error";
                string="";
            }
            
            return;
        }
        else if(e.target.innerHTML=="ON"){
            string="0";
            c.value=string;
            return;
        }
        else if(e.target.innerHTML=="C"){
            string="";
            c.value=string;
            return;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.slice(0,-1);
            c.value=string;
            return;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.slice(0,-1);
            c.value=string;
        }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector("input").value=string;
        }
        

    })
})
