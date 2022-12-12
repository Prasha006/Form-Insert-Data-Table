function addData(){
    var firstName=document.fform.firstname.value;
    var lastName=document.fform.lastname.value;
    var address=document.fform.address.value;
    var pincode=document.fform.pincode.value;
    var gender=document.fform.gender.value;
    var foodcard=document.fform.foodcard.value;
    var state=document.fform.state.value;
    var country=document.fform.country.value;

    var tr=document.createElement('tr');

    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    var td5=tr.appendChild(document.createElement('td'));
    var td6=tr.appendChild(document.createElement('td'));
    var td7=tr.appendChild(document.createElement('td'));
    var td8=tr.appendChild(document.createElement('td'));

    td1.innerHTML=firstName;
    td2.innerHTML=lastName;
    td3.innerHTML=address;
    td4.innerHTML=pincode;
    td5.innerHTML=gender;
    td6.innerHTML=foodcard;
    td7.innerHTML=state;
    td8.innerHTML=country;

    document.getElementById("tbb").appendChild(tr);
    document.getElementById("form").reset();
}