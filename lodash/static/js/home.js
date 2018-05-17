addEventListener("load", function() {
	"use strict";
	var t = "<iframe frameborder=0 scrolling=0 allowtransparency ",
		e = "src=https://ghbtns.com/github-btn.html?user=lodash&amp;repo=lodash&amp;count=true&amp;type=",
		a = "_button.html?dnt=true&amp;size=m&amp;show_count=",
		r = "src=https://platform.twitter.com/widgets/",
		s = t + "class=btn-gh " + e + "star></iframe>" + t + "class=btn-gh " + e + "fork></iframe>",
		n = document.getElementById("social");
	navigator.onLine && "undefined" == typeof phantom ? n.innerHTML = s : n.parentNode.style.display = "none"
});
//取消twitter按钮
//+ t + "class=btn-twitter-follow " + r + "follow" + a + "false&amp;screen_name=bestiejs></iframe>" + t + "class=btn-twitter-share " + r + "tweet" + a + "true&amp;url=https://lodash.com/&amp;text=" + encodeURI("Check out lodash – A JavaScript utility library delivering consistency, modularity, performance, %26 extras").replace("%25", "%") + "></iframe>"