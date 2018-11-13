const aside = document.querySelector('aside');
const iconWrappers = document.querySelectorAll('.icon-wrapper');
const asideIcons = document.querySelectorAll('.aside-icon');
const messageUser = document.querySelector('#message-user-search');
const bellMessages = document.querySelector('.bell-messages');
const notification = document.querySelector('.notification');
const saveSettingsBtn = document.querySelector('#saveSettingsBtn');
const cancelSettingsBtn = document.querySelector('#cancelSettingsBtn');
const timezone = document.querySelector('#timezone');
const switchOne = document.querySelector('#emailSwitch');
const switchTwo = document.querySelector('#profileSwitch');

asideIcons[0].classList.add('fill-white');

// Event listener for aside icons
aside.addEventListener('click', (e) => {
	if (e.target.tagName === 'DIV') {
        for (let i = 0; i < iconWrappers.length; i++) {
            iconWrappers[i].classList.remove('selected');
        }
		let div = e.target;
		div.classList.add('selected');
	    for (let i = 0; i < asideIcons.length; i++) {
            asideIcons[i].classList.remove('fill-white');
        }
        div.children[0].classList.add('fill-white');
	} 
});

// Event listener to slide up alert box
$('.alert').click(function() {
	$(this).slideUp();
})

// Function to check if form is filled out
function validateForm() {
	let message = '';
    let nameInput = document.forms["messageUserForm"]["searchForUser"].value;
    let messageInput = document.forms["messageUserForm"]["messageForUser"].value;
    if (nameInput === "" && messageInput === "") {
    	message += 'Please fill out the username and message';
    	alert(message);
    	return false;
    } else if (nameInput === "") {
    	message += 'Please fill out the username';
    	alert(message);
    	return false;
    } else if (messageInput === "") {
    	message += 'Please fill out the message';
    	alert(message);
    	return false;
    } else {
    	let confirmMessage = confirm('Are you ready to submit the form?');
    	if (confirmMessage === true) {
    		alert('Thank you for submitting the message!');
    	}
    }
}

// Event listener to slide bell messages
$('.notification').click(function() {
	$('.bell-messages').slideToggle();
})

// Autocomplete functionality
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var memberNames = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'John Doe'];

autocomplete(document.getElementById("message-user-search"), memberNames);


// Local storage
if (localStorage.getItem('timezone')) {
	timezone.value = localStorage.getItem('timezone');
}

if (localStorage.getItem('emailSwitch')) {
	const checkedOne = JSON.parse(localStorage.getItem('emailSwitch'));
	switchOne.checked = checkedOne;
}

if (localStorage.getItem('profileSwitch')) {
	const checkedTwo = JSON.parse(localStorage.getItem('profileSwitch'));
	switchTwo.checked = checkedTwo;	
}

saveSettingsBtn.addEventListener('click', () => {
	alert('Settings saved');
	localStorage.setItem('timezone', timezone.value);
	localStorage.setItem('emailSwitch', switchOne.checked);
	localStorage.setItem('profileSwitch', switchTwo.checked);
})

cancelSettingsBtn.addEventListener('click', () => {
	alert('Settings cleared');
	localStorage.clear();
});