$(document).ready(function() {

	// Basic
	$("#WhatIsJQuery").click(function() {
		$(this).append("<dd> jQuery is a JavaScript library.");
	});

	$("#WhyJQuery").click(function() {
		$(this).append("<dd> jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.");
		$(this).append("<dd> jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.");
	});

	$("#jQueryFeature").click(function() {
		$(this).append("<dd> HTML/DOM manipulation");
		$(this).append("<dd> CSS manipulation");
		$(this).append("<dd> HTML event methods");
		$(this).append("<dd> Effects and animations");
		$(this).append("<dd> AJAX");
		$(this).append("<dd> Utilities");
	});

	$("#Tip1").click(function() {
		$(this).append("<dd> jQuery runs exactly the same in all major browsers, including Internet Explorer 6!");
	});

	$("#jQueryInstallationMethod1").click(function() {
		arguments.callee.counter = arguments.callee.counter || 1;
		if (arguments.callee.counter == 1) {
			$(this).append("<dd> Step:1 Download the jQuery library from jQuery.com");
		} else {
			$(this).append("<dd> Step:2 Include it to the HTML using &lt;script src=&quot;jquery-1.9.1.min.js&quot;&gt;&lt;/script&gt; tag");
		}
		arguments.callee.counter++;
	});

	$("#jQueryInstallationMethod2").click(function() {
		arguments.callee.counter = arguments.callee.counter || 1;
		if (arguments.callee.counter == 1) {
			$(this).append("<dd> Include it from CDN (Content Delivery Network)");
		} else {
			$(this).append("<dd> Example: &lt;script src=&quot;http://code.jquery.com/jquery-1.9.1.min.js&quot;&gt;&lt;/script&gt;");
		}
		arguments.callee.counter++;
	});

	// Syntax
	$("#syntaxContent").click(function() {
		$(this).append("<dd> The jQuery syntax is tailor made for <b>selecting</b> HTML elements and performing some <b>action</b> on the element(s).");
		$(this).append("<dd> Basic syntax is: <b>$(selector).action()</b>");
		$(this).append("<dd> A <b>$</b> sign to define/access jQuery");
		$(this).append("<dd> A <b>(selector)</b> to &quot;query (or find)&quot; HTML elements");
		$(this).append("<dd> A jQuery <b>action()</b> to be performed on the element(s)");
	});

	$("#syntaxExample").click(function() {
		$(this).append("<dd> $(this).hide() - hides the current element.");
		$(this).append("<dd> $(&quot;p&quot;).hide() - hides all &lt;p&gt; elements.");
		$(this).append("<dd> $(&quot;#test&quot;).hide() - hides the element with id=&quot;test&quot;.");
		$(this).append("<dd> $(&quot;.test&quot;).hide() - hides all elements with class=&quot;test&quot;.");
	});

	// Selector
	$("#pElementSelector").click(function() {
		$("p").css('background-color', 'red');
	});

	$("#spanElementSelector").click(function() {
		$("span").css('background-color', 'green');
	});

	$("#firstClassSelector").click(function() {
		$(".first_item").css('background-color', 'lightblue');
	});

	$("#secondClassSelector").click(function() {
		$(".second_item").css('background-color', 'yellow');
	});

	$("#firstPIDSelector").click(function() {
		$("#first_p").css('background-color', 'orange');
	});

	$("#secondSpanSelector").click(function() {
		$("#second_span").css('background-color', 'grey');
	});

	// Event
	$("#eventContent").click(function() {
		$(this).append("<dd> Bind the event handler function to the HTML element.");
		$(this).append("<dd> Fire the event.");
	});

	$("#objectToBindEvent").click(function() {
		$("#eventTrace").append("<dd> Click.");
	});

	$("#objectToBindEvent").dblclick(function() {
		$("#eventTrace").append("<dd> Double Click.");
	});

	$("#objectToBindEvent").mouseenter(function() {
		$("#eventTrace").append("<dd> Mouse Enter.");
	});

	$("#objectToBindEvent").mouseleave(function() {
		$("#eventTrace").append("<dd> Mouse Leave.");
	});

	$("#objectToBindEvent").mousedown(function() {
		$("#eventTrace").append("<dd> Mouse Down.");
	});

	$("#objectToBindEvent").mouseup(function() {
		$("#eventTrace").append("<dd> Mouse Up.");
	});

	$("#objectToBindEvent").mouseover(function() {
		$("#eventTrace").append("<dd> Mouse Over.");
	});

	$(document).keypress(function(event) {
		$("#eventTrace").append("<dd>" + String.fromCharCode(event.which) + " has been presed");
	});

	// Effect
	$("#effectHide").click(function() {
		$("#effectExample").hide();
	});

	$("#effectShow").click(function() {
		$("#effectExample").show();
	});

	$("#effectToggle").click(function() {
		$("#effectExample").toggle();
	});

	$("#effectFadeIn").click(function() {
		$("#effectExample").fadeIn();
	});

	$("#effectFadeOut").click(function() {
		$("#effectExample").fadeOut();
	});

	$("#effectFadeToggle").click(function() {
		$("#effectExample").fadeToggle();
	});

	$("#effectFadeToHalf").click(function() {
		$("#effectExample").fadeTo("slow", 0.5);
	});

	$("#effectFadeToFull").click(function() {
		$("#effectExample").fadeTo("slow", 1);
	});

	$("#effectSlideDown").click(function() {
		$("#effectExample").slideDown();
	});

	$("#effectSlideUp").click(function() {
		$("#effectExample").slideUp();
	});

	$("#effectSlideToggle").click(function() {
		$("#effectExample").slideToggle();
	});

	$("#effectAnimateBig").click(function() {
		$("#effectExample").animate({
			fontSize: '2em',
			height: '+=1em'
		});
	});

	$("#effectAnimateSmall").click(function() {
		$("#effectExample").animate({
			fontSize: '1em',
			height: '-=1em'
		});
	});

	$("#effectAnimateFadeOutAndIn").click(function() {
		$("#effectExample").fadeOut().fadeIn();
	});

	// HTML
	$("#getText").click(function() {
		alert($("#HTMLExample").text());
	});

	$("#getHTML").click(function() {
		alert($("#HTMLExample").html());
	});

	$("#getVal").click(function() {
		alert($("textarea").val());
	});

	$("#getAttr").click(function() {
		alert($("#HTMLExample").attr("style"));
	});

	$("#setText").click(function() {
		$("#HTMLExample").text("This is a new example");
	});

	$("#setHTML").click(function() {
		$("#HTMLExample").html("<i>This is a new example</i>");
	});

	$("#setVal").click(function() {
		$("textarea").val("This is a new val");
	});

	$("#setAttr").click(function() {
		$("#HTMLExample").attr("style", "background-color:red; height:1em;");
	});

	$("#append").click(function() {
		$("#HTMLExample").append("<i>This is the appended text</i>");
	});

	$("#prepend").click(function() {
		$("#HTMLExample").prepend("<u>This is the prepended text</u>");
	});

	$("#after").click(function() {
		$("#HTMLExample").after("<u>This is the after text</u>");
	});

	$("#before").click(function() {
		$("#HTMLExample").before("<i>This is the before text</i>");
	});

	$("#btnAJAXExecution").click(function() {
		$.ajax({
			url: "data.txt"
		}).success(function(data) {
			$("#AJAXText").html(data);
		});
	});

	// CSS
	$("#addClass").click(function() {
		$("#CSSExample").addClass("Important Italic");
	});

	$("#removeClass").click(function() {
		$("#CSSExample").removeClass("Important");
	});

	$("#toggleClass").click(function() {
		$("#CSSExample").toggleClass("Important");
	});

	$("#getCSS").click(function() {
		alert($("#CSSExample").css("color"));
	});

	$("#setCSS").click(function() {
		$("#CSSExample").css("color", "green");
	});

	$("#empty").click(function() {
		$("#HTMLExample").empty();
	});

	$("#remove").click(function() {
		$("#HTMLExample").remove();
	});

	$("#btnBasic").click(function() {
		$(".topic").hide();
		$("#Basic").show();
	});

	$("#btnSyntax").click(function() {
		$(".topic").hide();
		$("#Syntax").show();
	});

	$("#btnSelector").click(function() {
		$(".topic").hide();
		$("#Selector").show();
	});

	$("#btnEvent").click(function() {
		$(".topic").hide();
		$("#Event").show();
	});

	$("#btnEffect").click(function() {
		$(".topic").hide();
		$("#Effect").show();
	});

	$("#btnHTML").click(function() {
		$(".topic").hide();
		$("#HTML").show();
	});

	$("#btnCSS").click(function() {
		$(".topic").hide();
		$("#CSS").show();
	});

	$("#btnAJAX").click(function() {
		$(".topic").hide();
		$("#AJAX").show();
	});
});