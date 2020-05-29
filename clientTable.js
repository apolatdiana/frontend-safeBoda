//Connect to backend
const url = "http://localhost:5000/clients";

//Fetch all clients
const token = localStorage.getItem('token');
const fetchAllClients = (client) => {
  const clientData = JSON.stringify(client);
  fetch(url, { 
    method: "GET", 
    body: clientData,
    headers: {
     "Accept": "application/json",
     "Content-Type": "application/json",
     "Authorization": `Bearer ${token}` 
    } })
      .then((res)=>res.json())
      .then((data)=>{
        data.forEach((client) => {
          console.log(data)
          for(let i=0; i<client.clients.length; i++){
            addClientElement(client.clients[i]);
          }
        });
      })
      .catch((error)=>{console.log(error)});
  };
 fetchAllClients();

 //Delete a client
  const deleteClient = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
       "Authorization": `Bearer ${token}` 
      } 
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
      })
    .catch((error)=>{console.log(error)});
  }

  //Edit a client
  // const editStatus = (id) => {
//   const dataToEdit = JSON.stringify({ status: "In-training" });
//   fetch(`${url}/${id}`, { 
//     method: "PATCH", 
//     body: { status: "In-training" },
//     headers: {
//      "Accept": "application/json", 
//      "Content-Type": "application/json",
//      "Authorization": `Bearer ${token}` 
//     } })
//    .then((res)=>res.json())
//    .then((data)=>{
//       console.log(data);
//     })
//    .catch((error)=>{console.log(error)});
// }

const clientTable = document.getElementById("tableBody");

const addClientElement = (client) =>{ 
        const { name, email, phonenumber, age, nin, bodastageaddress, dateofregistration, 
        registrationstation, referralname, nextofkin, nextofkincontact, status, _id, user} = client;

        const tableRow = document.createElement('tr');
        //Adding name
        const nameTd = document.createElement('td');
        nameTd.innerHTML = name;
        tableRow.appendChild(nameTd);
        //Adding contact
        const contactTd = document.createElement('td');
        contactTd.innerHTML = phonenumber;
        tableRow.appendChild(contactTd);
        //Adding email
        const emailTd = document.createElement('td');
        emailTd.innerHTML = email;
        tableRow.appendChild(emailTd);  
        //Adding age
        const ageTd = document.createElement('td');
        ageTd.innerHTML = age;
        tableRow.appendChild(ageTd);
        //Adding nin
        const ninTd = document.createElement('td');
        ninTd.innerHTML = nin;
        tableRow.appendChild(ninTd);
        //Adding stage
        const stageTd = document.createElement('td');
        stageTd.innerHTML = bodastageaddress;
        tableRow.appendChild(stageTd);
        //Adding registration date
        const regDateTd = document.createElement('td');
        regDateTd.innerHTML = dateofregistration;
        tableRow.appendChild(regDateTd);
        //Adding recruitment station
        const stationTd = document.createElement('td');
        stationTd.innerHTML = registrationstation;
        tableRow.appendChild(stationTd);
        //Adding referral
        const referralTd = document.createElement('td');
        referralTd.innerHTML = referralname;
        tableRow.appendChild(referralTd);
        //Adding kin
        const kinTd = document.createElement('td');
        kinTd.innerHTML = nextofkin;
        tableRow.appendChild(kinTd);
        //Adding kin contact
        const kinContactTd = document.createElement('td');
        kinContactTd.innerHTML = nextofkincontact;
        tableRow.appendChild(kinContactTd);
        //Adding status
        const statusTd = document.createElement('td');
        statusTd.innerHTML = status;
        tableRow.appendChild(statusTd);
        //Adding user
        // const userTd = document.createElement('td');
        // userTd.innerHTML = user;
        // tableRow.appendChild(userTd);

        //Adding an edit button
        const editTd = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.classList.add("btn", "btn-sm", "btn-link");
        editBtn.innerHTML = 'Edit';
        editTd.appendChild(editBtn);
        tableRow.appendChild(editTd);

        //Adding a delete button
        const deleteTd = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn", "btn-sm", "btn-danger");
        deleteBtn.innerHTML = 'Delete';
        deleteTd.appendChild(deleteBtn);
        tableRow.appendChild(deleteTd);
    
        clientTable.appendChild(tableRow);

        //Add event listener to delete and edit buttons.
        deleteBtn.addEventListener("click", (e)=>{
          if (confirm("Are you sure you want to delete this client?")) {  
          tableRow.remove(e.target.parentElement);
          deleteClient(_id);
          } 
        });

        // editBtn.addEventListener("click", (e)=>{   
        //     editStatus(_id);  
        //    })
    
    }