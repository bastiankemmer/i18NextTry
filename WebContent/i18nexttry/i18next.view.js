sap.ui.jsview("i18nexttry.i18next", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf i18nexttry.i18next
	*/ 
	getControllerName : function() {
		return "i18nexttry.i18next";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf i18nexttry.i18next
	*/ 
	createContent : function(oController) {
		var greet = i18n.t("Greet");
		var name = i18n.t("Name");
		var pw = i18n.t("PW");
		var login = i18n.t("Login");
		
		var greetBox = new sap.m.FlexBox({items: [
														new sap.m.Text({text: greet})
				                                             ]});

		var nameBox = new sap.m.FlexBox({items: [
														new sap.m.Text({text: name}), new sap.m.TextArea()
				                                             ]});

		var pwBox = new sap.m.FlexBox({items: [
														new sap.m.Text({text: pw}), new sap.m.TextArea()
				                                             ]});

		var loginBtn = new sap.m.FlexBox({items: [
														new sap.m.Button({text: login})
				                                             ]});
 		return new sap.m.Page({
			title: "Title",
			content: [
			          greetBox,
			          nameBox,
			          pwBox,
			          loginBtn			          
			]
		});
	}

});