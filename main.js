// Get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0]; 
        //returns an array, so just need to specify which one you want it to return.

//listen for click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', clickOutside);

//Function to open modal (referenced above)
function openModal(){
   modal.style.display = 'block';
}
//Function to close modal (referenced above)
function closeModal(){
    modal.style.display = 'none';
 }
//function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}