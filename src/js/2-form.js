
const STORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input[name="email"]'),
    message: document.querySelector('.feedback-form textarea[name="message"]'),
};
let formData = {
    email: "" ,
    message: ""
};
function saveToLS(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function loadFormLS(key){
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;}
function initPage(){
    const savedData = loadFormLS();
    if (savedData){
        formData = savedData;
    refs.email.value = savedData.email || "";
    refs.message.value = formData.message || "";
}
}
initPage();

refs.form.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value.trim();
    saveToLS();
});

refs.form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (!formData.email || !formData.message){
        alert("Fill please all fields");
        return;
    }
    console.log(formData);

localStorage.removeItem(STORAGE_KEY);
refs.form.reset();
formData = { email: "", message: ""};
});

