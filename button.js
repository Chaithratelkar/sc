function login(){
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;

    if(uname=="chaithra" && pass=="chai**98")
    {
        location.assign("file:///C:/Users/User/Desktop/javascript/nextpage.html")
    }
    else{
        alert("wrong password")
    }
}



