document.addEventListener('DOMContentLoaded', function(event) {

  var signIn = document.querySelector('.signin')
  var modal = document.querySelector('.modal')
  var close = document.querySelector('.close')
  var submit = document.querySelector('.submit')
  var inputs = document.querySelectorAll('input')

  signIn.addEventListener('click', function() {
    modal.style.display = 'inline';
  });

  close.addEventListener('click', function() {
    modal.style.display = 'none';
  })

  submit.addEventListener('click', function() {
    inputs[0].classList.add('error');
    inputs[1].classList.add('error');
  })
    inputs[0].addEventListener('click', function() {
      this.className = null;
    })
    inputs[1].addEventListener('click', function() {
      this.className = null;
    })
});
