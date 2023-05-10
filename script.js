let passValidation = () =>{
    let password = document.getElementById("passName").value;
    let cpassword = document.getElementById("cpassName").value;
     let name = document.getElementById("uName").value;
    
     if (password == cpassword){
        document.getElementById("para").innerHTML = "Password Matched. Password validation successful."
        return false;
    }else{
        document.getElementById("para").innerHTML = " Password didn't Match. Password validation unsuccessful"
        return false;
    }
}


 