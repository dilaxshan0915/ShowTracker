// Selectors
document.querySelector('form').addEventListener('submit', handleAddForm);

// Event Handlers
function handleAddForm(e) {
    e.preventDefault();


    var input = document.querySelector('input');
    if (input.value != ''){
      document.getElementById("addTVshowName").innerHTML = ( input.value + " has been Added");
    }
    else {
      document.getElementById("addTVshowName").innerHTML = "Please Enter the TV Show Name";}
}
