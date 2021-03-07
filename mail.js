function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
function passwordVisibility() {
    if(passwordState == false) {
        passwordState = true
        closedEye.classList.add('invisible')
        openedEye.classList.remove('invisible')
        document.getElementById('password').type = 'text';
        return
    }
    passwordState = false
    closedEye.classList.remove('invisible')
    openedEye.classList.add('invisible')
    document.getElementById('password').type = 'password';
    return
}