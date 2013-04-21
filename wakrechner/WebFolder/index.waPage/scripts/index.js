
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btMultipliziere = {};	// @button
	var btAddiere = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btMultipliziere.click = function btMultipliziere_click (event)// @startlock
	{// @endlock
		txtErgebnis = parseInt(txtZahl1) * parseInt(txtZahl2);
		sources.txtErgebnis.sync();
	};// @lock

	btAddiere.click = function btAddiere_click (event)// @startlock
	{// @endlock
		txtErgebnis = parseInt(txtZahl1) + parseInt(txtZahl2);
		sources.txtErgebnis.sync();	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btMultipliziere", "click", btMultipliziere.click, "WAF");
	WAF.addListener("btAddiere", "click", btAddiere.click, "WAF");
// @endregion
};// @endlock
