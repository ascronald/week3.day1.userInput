// references

let main_title_ref = document.getElementById("main_title");
let title_input_ref = document.getElementById("title_input");
const submit_button_ref = document.getElementById("submit_button");
let storyresult = document.getElementById("story_result");
let form_container_ref = document.querySelector(".form_container")


// let noun = document.getElementById("noun");
// let verb = document.getElementById("verb");
// let adjective = document.getElementById("adjective");


submit_button_ref.addEventListener("click", clickListener);

// title change
title_input_ref.addEventListener("change", updateValue);
function updateValue(e){
    main_title_ref.textContent = e.target.value;
}



//failsafe
function clickListener(event){
event.preventDefault();
if (main_title_ref.value==''||noun.value==''|| verb.value==''|| adjective.value=='')
{
    alert("Please fill in all fields")
}


// adlib
else{
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adjective = document.getElementById("adjective").value;   
    storyresult.innerText =  'Last night I ate a ' + noun + ' and today I just had to ' + verb + ' What a ' + adjective + ' day! '; 
    form_container_ref.style.display = "none";

}
}