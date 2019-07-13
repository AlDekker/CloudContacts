document.addEventListener("DOMContentLoaded", function(event) { 

  var cloudContactLinksBox = document.querySelector('.cloudcontacts__links-box'),
      cloudContactLink = document.getElementsByClassName('cloudcontacts__link'),
      cloudContactButton = document.querySelector('.cloudcontacts__button');
  
  // Animation Start
  function setDelayIn(){
    for(var i = 0; i <= cloudContactLink.length-1; i++){
      cloudContactLink[i].style.transitionDelay = '0.'+(i+1)+'s';
    }
  } setDelayIn();    

  function setDelayOut(){
    for (var i = 0; i <= cloudContactLink.length-1; i++){
      cloudContactLink[i].style.transitionDelay = '0.'+(cloudContactLink.length-i)+'s';
    }
  }
  // Animation End

  //Opened Links Box
  function cloudLinksVisible(){
    cloudContactLinksBox.classList.add('cloudcontacts__links-box--opened');
    cloudContactButton.classList.add('cloudcontacts__button--active');
    setDelayOut();
    return;
  }

  //Hidden Links Box
  function cloudLinksHidden(){
    cloudContactLinksBox.classList.remove('cloudcontacts__links-box--opened');
    cloudContactButton.classList.remove('cloudcontacts__button--active');
    setDelayIn();
    return;
  }

  cloudContactButton.addEventListener('click', function(){
    if ( cloudContactLinksBox.classList.contains('cloudcontacts__links-box--opened') ) {
      cloudLinksHidden();
      return;
    }
    cloudLinksVisible();
    return;
  });

  
});
