import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const appSetting = {
    databaseURL : "https://crud-by-javascript-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const usersListInDb = ref(database, "users");

const idEl = document.querySelector('#id');
const nameEl = document.querySelector('#name');
const ageEl = document.querySelector('#age');
const cityEl = document.querySelector('#city');
const tablebodyEl = document.querySelector('#tableBody')

const dataForm = document.querySelector('#dataForm'); 

dataForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(!nameEl.value.trim() && !ageEl.value && !cityEl.value.trim())
    {
        alert("Please Fill All the Details");
        return;
    }
    if(idEl.value)
    {
        // Update Record
        set(ref(database, "users/" + idEl.value),{
            name:nameEl.value.trim(),
            age:ageEl.value,
            city:cityEl.value.trim()
        });
        clearElements();
        return;
    }

    // Insert

    const newUser = {
        name:nameEl.value.trim(),
        age:ageEl.value,
        city:cityEl.value.trim()
    };

    push(usersListInDb, newUser);
    clearElements();
});

function clearElements(){
    idEl.value="";
    nameEl.value="";
    ageEl.value="";
    cityEl.value="";
}

onValue(usersListInDb, function(snapshot){
    if(snapshot.exists())
    {
        let usersObject = snapshot.val();
        // console.log(usersObject);
        let usersArray = Object.entries(usersObject);
        // console.log(usersArray);
        tablebodyEl.innerHTML="";
        for(let i=0;i<usersArray.length;i++)
        {
            let currentUser = usersArray[i];
            // console.log(currentUser);
            let currentUserId = currentUser[0];
            let currentUserValue = currentUser[1];
            tablebodyEl.innerHTML+=`
            <tr>
                <td>${i+1}</td>
                <td>${currentUserValue.name}</td>
                <td>${currentUserValue.age}</td>
                <td>${currentUserValue.city}</td>
                <td><button type="button" data-id=${currentUserId} class="btnEdit"><ion-icon name="create-outline"></ion-icon>Edit</button></td>
                <td><button type="button" data-id=${currentUserId} class="btnDelete"><ion-icon name="trash-outline"></ion-icon>Delete</button></td>
            </tr>
            `;
        }
    }
    else
    {
        tablebodyEl.innerHTML=`<tr><td colspan="6" style="text-align:center">No Records Found</td></tr>`
    }
});

document.addEventListener('click', function(e){
    if(e.target.classList.contains("btnEdit"))
    {
        const id = e.target.dataset.id;
        // console.log("Edit",id);
        // console.log(e.target.closest("tr").children);
        const tdElements = e.target.closest("tr").children
        idEl.value = id;
        nameEl.value = tdElements[1].textContent;
        ageEl.value = tdElements[2].textContent;
        cityEl.value = tdElements[3].textContent; 
    }
    if(e.target.classList.contains("btnDelete"))
    {
        const id = e.target.dataset.id;
        // console.log("Delete",id);
        if(confirm("Are You Sure To Delete?"))
        {
            let getDataById = ref(database, `users/${id}`);
            remove(getDataById); 
        }
    }
});