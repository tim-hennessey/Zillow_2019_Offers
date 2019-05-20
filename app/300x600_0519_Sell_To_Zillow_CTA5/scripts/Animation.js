var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var legalButton = document.getElementById('legal-button');
	var t = TweenMax;

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set("#legal", {opacity:0});
		t.set("#cta-over", {opacity:0});
		t.set("#caption-1", {opacity:1});
		t.set("#caption-2", {opacity:0});
		t.set("#caption-3", {opacity:0});
		t.set("#caption-4", {opacity:0});
		t.set("#caption-5", {opacity:0});
		// t.set("#logo", {scale:0.75, x:-50, y:-50});

		banner.addEventListener('mouseover', handleOver, true);
		banner.addEventListener('mouseout', handleOut, true);

		legalButton.addEventListener('mouseover', handleLegalOver, true);
		legalButton.addEventListener('mouseout', handleLegalOut, true);
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		step1();
	}

	// --------------------------------------------------------------------------------------
	function step1() {
		t.to("#caption-1", 0, {opacity:1, delay:0.5, ease:Cubic.easeInOut});
		t.delayedCall(1.3, step2);
	}

	// --------------------------------------------------------------------------------------
	function step2() {
		t.to("#caption-1", 0, {opacity:0, delay:0.0, ease:Cubic.easeInOut});
		t.to("#caption-2", 0, {opacity:1, delay:0.0, ease:Cubic.easeInOut});
		t.delayedCall(1.3, step3);
	}

	// --------------------------------------------------------------------------------------
	function step3() {
		t.to("#caption-2", 0, {opacity:0, delay:0.0, ease:Cubic.easeInOut});
		t.to("#caption-3", 0, {opacity:1, delay:0.0, ease:Cubic.easeInOut});
		t.delayedCall(1.8, step4);
	}

	// --------------------------------------------------------------------------------------
	function step4() {
		t.to("#caption-3", 0, {opacity:0, delay:0.0, ease:Cubic.easeInOut});
		t.to("#caption-4", 0, {opacity:1, delay:0.0, ease:Cubic.easeInOut});
		t.delayedCall(1.3, step5);
	}

	// --------------------------------------------------------------------------------------
	function step5() {
		t.to("#caption-4", 0, {opacity:0, delay:0.0, ease:Cubic.easeInOut});
		t.to("#caption-5", 1, {opacity:1, delay:0.0, ease:Cubic.easeInOut});
		t.delayedCall(1.7, step6);
	}

	// --------------------------------------------------------------------------------------
	function step6() {
		// t.to("#caption-5", 1, {y:0, delay:0.0, ease:Cubic.easeInOut});
		// t.to("#logo", 1, {scale:1, x:0, y:0, delay:0.0, ease:Cubic.easeInOut});
		t.to("#legal-button", 1, {opacity:1, delay:1.0, ease:Cubic.easeInOut});
		t.set("#legal-button", {display:"block"});
	}

	// --------------------------------------------------------------------------------------
	function handleOver() {
		TweenLite.to("#cta-over", 0.2, {opacity:1, ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	function handleOut() {
		TweenLite.to("#cta-over", 0.5, {opacity:0, ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	function handleLegalOver() {
		t.to(legal, 0.2, {opacity:1, ease:Cubic.easeInOut});
		t.set(legalButton, {opacity:0});
	}

	// --------------------------------------------------------------------------------------
	function handleLegalOut() {
		t.to(legal, 0.5, {opacity:0, ease:Cubic.easeInOut});
		t.set(legalButton, {opacity:1});
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
