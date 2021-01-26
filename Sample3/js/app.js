$(document).ready(function () {
	$(".nav").click(function (e) {

		var content = $(e.target).data("content");
		var bg = $(e.target).data("bg");
		var slide = $(e.target).data("slide");
		var direction = $(e.target).data("direction");
		var appear = $(e.target).data("appear");

		if ($(e.target).data("action") === "options") {
			$("#build-explore").addClass("disappear");
			$("#build-options").removeClass("disappear");
		} else {
			$(".nav").prop("disabled", true);
			$(content).addClass("disappear");
			$(bg).toggleClass("half full");
			$(slide).toggleClass("half empty");
			$("#bar").toggleClass(direction);
			$("#build-explore").removeClass("disappear");
			$("#build-options").addClass("disappear");
			setTimeout(function () {
				$(appear).removeClass("disappear");
				$(".nav").prop("disabled", false);
			}, 2000);
		}
	});
});