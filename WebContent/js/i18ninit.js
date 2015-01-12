i18n.init(function(t) {
	var userLang = navigator.languages? navigator.languages[0] : (navigator.language || navigator.userLanguage);
	i18n.setLng(userLang);
});