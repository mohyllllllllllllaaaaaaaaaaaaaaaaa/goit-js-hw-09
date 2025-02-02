
const STORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form')
};
const formData = {email: "" , message: ""};
refs.form.addEventListener('input', (e) => {
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    console.log(formData);
    saveToLS('formData', data);

});
function saveToLS(key, value){
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
};
function loadFormLS(key){
    const body = localStorage.getItem(key);
    try {

    }
}
//function saveToLS ()  {
   // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//};
//const loadFormLS = () =>{

}
