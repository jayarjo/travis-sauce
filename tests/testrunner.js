var config = {
	  hub: "http://localhost:9000"
	, farm: 'saucelabs'
	, saucelabs: {
		  user: process.env.SAUCE_USERNAME
		, pass: process.env.SAUCE_ACCESS_KEY
		, slots: 1
		, timeout: 30000
	}
	, args: ['tests/test.html']
	, browsers: [  
		  { id: 'chrome', version: 26, osId: 'win' }
		//, { id: 'ie', version: 10, osId: 'win' }
		//, { id: 'firefox', version: 16, osId: 'mac' }
	]

	, verbose: true
	, wait: true
};

require('../node_modules/bunyip/lib/bunyip').main(config, function(code) {
	process.exit(code);
});