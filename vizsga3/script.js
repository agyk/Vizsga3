const users = document.getElementById("users")
let avatar = document.getElementById("avatar")

const renderUsers = () => {
    let url = "https://api.github.com/users";
    function myFunction() {
        myVar = setTimeout(showPage, 3000);
      }
      
      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("container").style.display = "flex";
      }
    fetch(url)
     .then((response)=>{
        return response.json();
     })
     .then((data) => {
        for(let i=0; i<data.length; i++){
            const user = document.createElement("div")
            user.className="userDiv"
            users.append(user)
            const userDatas = document.createElement("div")
            userDatas.className="userDatas"
            const avatar = document.createElement("img")
            user.append(avatar)
            avatar.id="avatar"
            avatar.src = data[i].avatar_url
            const loginName = document.createElement("p")
            loginName.id = "name"
            user.append(loginName)
            loginName.innerText=data[i].login
            const btn = document.createElement("button")
            user.append(btn)
            btn.innerText="Show more"
            user.append(userDatas)
            const userType = document.createElement("p")
            userDatas.append(userType)
            const userAdmin = document.createElement("p")
            userDatas.append(userAdmin)
            userType.innerText = "Rank: "+data[i].type 
            userAdmin.innerText = "Admin: " + data[i].site_admin

           
           
            function toggleData () {
                if( userDatas.style.display==="none"){
                    userDatas.style.display="block"
                    btn.innerText="Show less"
                }else{userDatas.style.display="none"
                     btn.innerText="Show more"}
            }

            btn.addEventListener("click", toggleData)

            


        }
       
       
     })
     .catch(function(error){
        console.log(error)
});
}


function search (){
    let user = document.getElementsByClassName('userDiv')
    let input = document.getElementById('inputSearch');
    let filter = input.value.toUpperCase();
    for (i = 0; i < user.length; i++) {
       let p= user[i].getElementsByTagName("p")[0];
       if(p){
           txtValue = p.textContent || p.innerText;
           if (txtValue.toUpperCase().indexOf(filter) > -1) {
               user[i].style.display = "";
           } else {
               user[i].style.display = "none";
           }

       }
      }

}
let input = document.getElementById('inputSearch');
input.addEventListener("keyup", search)

renderUsers()