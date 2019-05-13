/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"northwind/Product_Data/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});