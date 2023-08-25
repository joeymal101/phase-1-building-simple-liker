// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// DOM Render Function//
function toggleHeart(heart) {
  if(heart.innerText === EMPTY_HEART) {
    mimicServerCall()
    .then(() => {
      heart.innerText = FULL_HEART
      heart.classList.add('activated-heart');
    })
    .catch(error => {
      const modalMessage = document.getElementById('modal-message')
      modalMessage.innerText = error
      const modal = document.getElementById('modal')
      modal.classList = remove('hidden')
      setTimeout(() => {
        modal.classList.add('hidden')
      }, 3000)
    });
  }else {
    heart.innerText = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
}

// Event Listener //
document.addEventListener("DOMContentLoaded", () => {
  const heartIcons = document.querySelectorAll(".like-glyph");
  heartIcons.forEach(heart => {
    heart.addEventListener("click", () => toggleHeart(heart));
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
