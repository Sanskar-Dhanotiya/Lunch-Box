
function Validate()
{
    console.log("Hii I am Calling");

    const fname= document.getElementById("FName").value;
    const email= document.getElementById("Email").value;
    const pass= document.getElementById("Pass").value;
    const size= email.length;
    if(fname.length > 12)
    {
        document.getElementById("FName").style="border:2px solid red";
       return false;
    }
    document.getElementById("FName").style="";

    if(email.indexOf("@gmail.com") == -1 || (email[size-4]!="."))
    {
        document.getElementById("Email").style="border:2px solid red";
       
        return false;
    }
    document.getElementById("Email").style="";


if(pass.length<8)
{
    document.getElementById("Pass").style="border:2px solid red";
    return false;
}
document.getElementById("Pass").style="";

return true;


}