// trying to make smooth scroll //
$(document).ready(function(){
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
    if (agentID) {
       $('body').css('-webkit-overflow-scrolling', 'touch');
    }
});

// Email submit functionality //
function _(id){ return document.getElementById(id); }
function submitForm(){
	_("button").disabled = true;
	_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "name", _("name").value );
  formdata.append( "lastName", _("lastName").value );
	formdata.append( "phoneNumber", _("phoneNumber").value );
  formdata.append( "emailAddress", _("emailAddress").value );
  formdata.append( "message", _("message").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "contact.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Thank you '+_("name").value +', your message has been sent.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("button").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}

// // TITLE FADING IN AND OUT //
var faded_i = 0;
var faded_array = ["Glaucoma Specialists", "青光眼專科醫生", "Специалисты по глаукоме", "Especialistas en Glaucoma"];
var faded_elem;
faded_elem = document.getElementById('faded'); fadedSlide();
function fadedNext() {
  faded_i++;
  faded_elem.style.opacity = 0;
  if(faded_i > (faded_array.length - 1)) {
    faded_i = 0;
  }
  setTimeout('fadedSlide()', 1500)
}
function fadedSlide() {
  faded_elem.innerHTML = faded_array[faded_i];
  faded_elem.style.opacity = 1;
  setTimeout('fadedNext()',6000);
}


// FADE THE OF SAN FRANCISCO //
var faded_SF = 0;
var faded_arraySF = ["of San Francisco", "舊金山", "Сан-Франциско", "de San Francicso"];
var faded_elem2;
faded_elem2 = document.getElementById('fadedSF'); fadedSlideSF();
function fadedNextSF() {
  faded_SF++;
  faded_elem2.style.opacity = 0;
  if(faded_SF > (faded_arraySF.length - 1)) {
    faded_SF = 0;
  }
  setTimeout('fadedSlideSF()', 1500)
}
function fadedSlideSF() {
  faded_elem2.innerHTML = faded_arraySF[faded_SF];
  faded_elem2.style.opacity = 1;
  setTimeout('fadedNextSF()',6000);
}


// contact button  //
var faded_contact = 0;
var faded_arrayContact = ["Contact", "聯繫", "Kонтакт", "Contáctenos"];
var faded_elem3;
faded_elem3 = document.getElementById('fadedContact'); fadedSlideContact();
function fadedNextContact() {
  faded_contact++;
  faded_elem3.style.opacity = 0;
  if(faded_contact > (faded_arrayContact.length - 1)) {
    faded_contact = 0;
  }
  setTimeout('fadedSlideContact()', 1500)
}
function fadedSlideContact() {
  faded_elem3.innerHTML = faded_arrayContact[faded_contact];
  faded_elem3.style.opacity = 1;
  setTimeout('fadedNextContact()',6000);
}







// FADED THAT EYE LOGO //

function noImage() {
  // var imgInvis = document.getElementById('fadedImg');
  var imgBlindArrow = document.getElementById('arrow')
  // imgInvis.style.opacity = 0;
  imgBlindArrow.style.opacity = 0;
  setTimeout('yesImage()', 1500);


}

function yesImage() {
  // var imgVis = document.getElementById('fadedImg');
  var imgArrow = document.getElementById('arrow')
  // imgVis.style.opacity = 1;
  imgArrow.style.opacity = 1;
  setTimeout('noImage()', 6000);
}

noImage();
yesImage();


// SMOOTH SCROLLING JQUERY //

$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 1250 );
  });

  // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function() {

        var sectionOffset = $(this.hash).offset().top;

        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })

    })

  });

// Scroll Reveal //var reveal = function myFunction(x) {

// media query event handler
if (window.innerWidth > 769) {
 window.sr = ScrollReveal();
  sr.reveal('.info', {
    duration: 2000,
    origin: 'bottom',
    distance: '150px'
  });
  sr.reveal('.down', {
    duration: 2000,
    origin: 'top',
    distance: '150px'
  });
  sr.reveal('.doctor-left', {
    duration: 2000,
    origin: 'left',
    distance: '500px'
  });
  sr.reveal('.doctor-middle', {
    duration: 2000,
    origin: 'bottom',
    distance: '500px'
  });
  sr.reveal('.doctor-right', {
    duration: 2000,
    origin: 'right',
    distance: '500px'
  });
}
