function loadRunList() {
	console.log("Test");
}

function loadRunData() {
	/*$.getJSON("/read", {}, function(data){
		console.log(data);
	});*/
}

$(document).ready(() => {
	loadRunList();
	$("#runList").on("change", loadRunData);
});