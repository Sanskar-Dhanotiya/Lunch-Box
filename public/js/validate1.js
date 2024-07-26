
function validate1()
{
    const fname= document.getElementById("Full-Name").value;
    const email= document.getElementById("Email").value;
    const mobile= document.getElementById("Mobile").value;
    const size= email.length;
   
   
    
    if(fname.length > 12)
    {
        document.getElementById("Full-Name").style="border:2px solid red";
       return false;
    }
    document.getElementById("Full-Name").style="";

    if(email.indexOf("@gmail.com") == -1 || (email[size-4]!="."))
    {
        document.getElementById("Email").style="border:2px solid red";
       
        return false;
    }
    document.getElementById("Email").style="";
   

if(mobile.length<10)
{
    document.getElementById("Mobile").style="border:2px solid red";
    return false;
}
document.getElementById("Mobile").style="";

return true;


}