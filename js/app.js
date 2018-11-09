const aside = document.querySelector('aside');
const iconWrappers = document.querySelectorAll('.icon-wrapper');
const asideIcons = document.querySelectorAll('.aside-icon');

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