var w = $(window).width()-50;
var h = $(window).height()-50;
$('img').css("width" , w);
$('img').css("height" , h);
console.log(w);
console.log(h);

function dispImg() {
	var imgNo = $('select').val();
	console.log(imgNo);
	if(imgNo === "select") {
		$('img')[0].src = "";
		$('img').css("display" , "none");
	};

	if(imgNo === "1") {
		$('img').css("display" , "block");
		$('img')[0].src = "1.gif";
	};

	if(imgNo === "2") {
		$('img')[0].src = "2.gif";
		$('img').css("display" , "block");
	};
	
	if(imgNo === "3") {
		$('img').css("display" , "block");
		$('img')[0].src = "3.gif";
	};

	if(imgNo === "4") {
		$('img')[0].src = "4.gif";
		$('img').css("display" , "block");
	};

	if(imgNo === "5") {
		$('img').css("display" , "block");
		$('img')[0].src = "5.gif";
	};

	if(imgNo === "6") {
		$('img').css("display" , "block");
		$('img')[0].src = "6.gif";
	};

	if(imgNo === "7") {
		$('img').css("display" , "block");
		$('img')[0].src = "7.gif";
	};

	if(imgNo === "8") {
		$('img').css("display" , "block");
		$('img')[0].src = "8.gif";
	};

	if(imgNo === "9") {
		$('img').css("display" , "block");
		$('img')[0].src = "9.gif";
	};
};

$('select').click(dispImg);