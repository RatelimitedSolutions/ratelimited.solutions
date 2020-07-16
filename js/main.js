const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('mail');

if(email !== null){
    window.location.href = `mailto:${email}`;
}
