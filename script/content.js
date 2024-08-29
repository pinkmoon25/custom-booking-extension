(function () {
	let search = document.getElementById('MainContent_btnSearch');

	try {
		let currentStep = sessionStorage.getItem('step');

		if (!currentStep) {
			// select court(original value has space after number so we need to add space like '3 ')
			document.getElementById('MainContent_grdGameSlot_ddlCourtTable_5').value = '3 ';

			document.getElementById('MainContent_grdGameSlot_lnkEdit_5').click(); // select time
			sessionStorage.setItem('step', 'final');
		} else {
			let captcha = document.getElementById('MainContent_imgCaptchaImage').src.slice(-5);
			document.getElementById('MainContent_txtCpCode').value = captcha;
			document.getElementById('MainContent_btnSave').click();
			window.confirm = function () { return true; };
			sessionStorage.removeItem('step');
		}
	}
	catch (err) {
		console.error(err);
		if (sessionStorage.getItem('step')) sessionStorage.removeItem('step');
	}
})();
