// get input variables
const hoursInput = document.querySelector('#hoursInput');
const minutesInput = document.getElementById('minutesInput');
const Btn = document.getElementById('convertBtn');

// add event listeners
form.addEventListener('submit',getSeconds);

function getSeconds(e){
    if(hoursInput.value && minutesInput.value){
// clear any remaining alerts
      clearAlert();
    // create a p element
    const p = document.createElement('p');
    // add class
    p.className = 'alert';
    // get text node
    p.appendChild(document.createTextNode(hoursInput.value * 60 * 60 + minutesInput.value * 60 + " seconds"));
    // get parent
    const searchContainer = document.querySelector('.searchContainer');
    // get search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(p,search);
    }else{
        // remove any remaining alerts
        clearError();
        // create p element
      const p = document.createElement('p');
    //   add class
    p.className = 'error';
    // get text node
    p.appendChild(document.createTextNode('Please input the correct values for hours and minutes.'));
    // get parent
    const searchContainer = document.querySelector('.searchContainer');
    // get search box
    const search = document.querySelector('.search');
    // insert text
    searchContainer.insertBefore(p,search);

    // set time out
     setTimeout(()=>{
       clearError();
     },3000);
    }
    
    e.preventDefault();
}
//    clear alerts
  function clearAlert(){
    const currentAlert = document.querySelector('.alert');
   if(currentAlert){
       currentAlert.remove();
   }
}
// clear error
  function clearError(){
      const currentError = document.querySelector('.error');
      if(currentError){
          currentError.remove();
      }
  }