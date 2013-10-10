require.config({
	//Define the paths to the framworks
	paths: {
		jquery: 'js/lib/jquery',
		underscore: 'js/lib/underscore',
		test: 'js/test',
		logger: 'js/logger'
	}	
});

//Start the main app logic
require(['jquery' ,'underscore', 'test', 'logger'], function($, _, test, logger) {
	//Load jQuery, underscore and backbone
	logger.log("Init");
	$("#container").html(test.p("Testing"));
});

