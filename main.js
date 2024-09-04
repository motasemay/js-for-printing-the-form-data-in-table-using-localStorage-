var registerForm=document.querySelector(".dataForm");
var users=[];
let ulist=[];
registerForm.onsubmit=function(e){
    e.preventDefault();
    var elements=e.target.elements;
    var user={
        name:elements["name"].value,
        password:elements["password"].value,
        email:elements["email"].value
    }
    users.push(user);
    ulist.push(user.name);
    localStorage.setItem("usersInfo",ulist);
  
    printData();
}

function printData(){

  let listData=localStorage.getItem('usersInfo');
    listData=listData.split(",");
    const data=listData.map( e=>`<tr>
        <td>${e}</td>
    </tr>` 
).join('');
    

    // ).join('');
    // var data="";
    // for(var i=0;i<users.length;i++){
    //     data+=`<tr>
    //         <td>${users[i].name}</td>
    //         <td>${users[i].password}</td>
    //         <td>${users[i].email}</td>
    //     </tr>`;
    // }
    
    document.querySelector(".userInfo").innerHTML=data;
}  
  printData();
