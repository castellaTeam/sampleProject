$(document).ready(function() {
	$("#toastrBtn").click(function() {
		toastr.success('npm install --save toastr', 'toastr is installed by');
	});
});