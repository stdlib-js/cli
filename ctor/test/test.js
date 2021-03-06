/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var join = require( 'path' ).join;
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var instanceOf = require( '@stdlib/assert/instance-of' );
var noop = require( '@stdlib/utils/noop' );
var CLI = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// FIXTURES //

var stdout = require( './fixtures/stdout.js' );
var stderr = require( './fixtures/stderr.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof CLI, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	t.strictEqual( instanceOf( new CLI(), CLI ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var ctor;
	var cli;

	ctor = CLI;
	cli = ctor();

	t.strictEqual( instanceOf( cli, CLI ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor throws an error if provided an `options` argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var cli = new CLI( value );
			return cli;
		};
	}
});

tape( 'the constructor throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var cli = new CLI({
				'pkg': value
			});
			return cli;
		};
	}
});

tape( 'the returned instance exits the process if an error is encountered when writing to `stdout`', function test( t ) {
	var stream;
	var ctor;
	var proc;

	stream = stdout();
	proc = {
		'exit': exit,
		'stdout': stream,
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	ctor();
	stream.emit( 'error' );

	function exit() {
		t.ok( true, 'exits the process' );
		t.end();
	}
});

tape( 'the returned instance exits the process if an error is encountered when writing to `stderr`', function test( t ) {
	var stream;
	var ctor;
	var proc;

	stream = stderr();
	proc = {
		'exit': exit,
		'stdout': stdout(),
		'stderr': stream
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	ctor();
	stream.emit( 'error' );

	function exit() {
		t.ok( true, 'exits the process' );
		t.end();
	}
});

tape( 'if the `title` option is `true`, the returned instance sets the process title (bin object)', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'title': true,
		'pkg': {
			'name': 'beep',
			'version': '0.0.0',
			'bin': {
				'demo': './bin/cli'
			}
		}
	};
	ctor( opts );

	t.strictEqual( proc.title, 'demo', 'sets the process title' );
	t.end();
});

tape( 'if the `title` option is `true`, the returned instance sets the process title (bin string)', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'title': true,
		'pkg': {
			'name': 'beep',
			'version': '0.0.0',
			'bin': './bin/cli'
		}
	};
	ctor( opts );

	t.strictEqual( proc.title, 'beep', 'sets the process title' );
	t.end();
});

tape( 'if the `title` option is `true`, the returned instance sets the process title (no bin)', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'title': true,
		'pkg': {
			'name': 'beep',
			'version': '0.0.0'
		}
	};
	ctor( opts );

	t.strictEqual( proc.title, 'beep', 'sets the process title' );
	t.end();
});

tape( 'if the `title` option is `true` and insufficient package meta information is provided, the returned instance does not set the process title', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'title': true,
		'pkg': {}
	};
	ctor( opts );

	t.strictEqual( proc.title, '', 'does not set the process title' );
	t.end();
});

tape( 'if the `title` option is a string, the returned instance sets the process title to the specified string', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'title': 'boop',
		'pkg': {
			'name': 'beep',
			'version': '0.0.0'
		}
	};
	ctor( opts );

	t.strictEqual( proc.title, 'boop', 'sets the process title' );
	t.end();
});

tape( 'if the `title` option is `false`, the returned instance does not set the process title', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'title': false,
		'pkg': {
			'name': 'beep',
			'version': '0.0.0'
		}
	};
	ctor( opts );

	t.strictEqual( proc.title, '', 'does not set the process title' );
	t.end();
});

tape( 'if the `updates` option is `true` and package meta data is provided, the returned instance checks for available updates in the package registry', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./notifier.js': notifier
	});

	opts = {
		'pkg': {
			'name': './../../ctor',
			'version': '0.0.0'
		},
		'updates': true
	};
	ctor( opts );

	function notifier() {
		return {
			'notify': notify
		};
	}

	function notify() {
		t.ok( true, 'checks registry' );
		t.end();
	}
});

tape( 'if the `updates` option is `true` and insufficient package meta data is provided, the returned instance does not check for available updates in the package registry (no pkg name)', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./notifier.js': notifier
	});

	opts = {
		'pkg': {
			'version': '0.0.0'
		},
		'updates': true
	};
	ctor( opts );

	t.ok( true, 'is ok' );
	t.end();

	function notifier() {
		return {
			'notify': notify
		};
	}

	function notify() {
		t.fail( 'should never be called' );
	}
});

tape( 'if the `updates` option is `true` and insufficient package meta data is provided, the returned instance does not check for available updates in the package registry (no pkg version)', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./notifier.js': notifier
	});

	opts = {
		'pkg': {
			'name': './../../ctor'
		},
		'updates': true
	};
	ctor( opts );

	t.ok( true, 'is ok' );
	t.end();

	function notifier() {
		return {
			'notify': notify
		};
	}

	function notify() {
		t.fail( 'should never be called' );
	}
});

tape( 'if the `updates` option is `true` and insufficient package meta data is provided, the returned instance does not check for available updates in the package registry (no pkg data)', function test( t ) {
	var ctor;
	var proc;
	var opts;

	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./notifier.js': notifier
	});

	opts = {
		'updates': true
	};
	ctor( opts );

	t.ok( true, 'is ok' );
	t.end();

	function notifier() {
		return {
			'notify': notify
		};
	}

	function notify() {
		t.fail( 'should never be called' );
	}
});

tape( 'the instance has a method which returns command-line arguments', function test( t ) {
	var expected;
	var actual;
	var argv;
	var ctor;
	var proc;
	var opts;
	var cli;

	argv = [
		'/usr/local/bin/node',
		'foo.js',
		'foo',
		'bar',
		'-a=b',
		'--c',
		'd',
		'baz'
	];
	argv[ '@noCallThru' ] = true;
	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr(),
		'argv': argv
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	expected = [ 'foo', 'bar', 'baz' ];
	actual = cli.args();

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the instance has a method which returns command-line flags', function test( t ) {
	var expected;
	var actual;
	var argv;
	var ctor;
	var proc;
	var opts;
	var cli;

	argv = [
		'/usr/local/bin/node',
		'foo.js',
		'foo',
		'bar',
		'-a=b',
		'--c',
		'd',
		'--e',
		'-f',
		'-ghi',
		'--beep',
		'boop',
		'baz'
	];
	argv[ '@noCallThru' ] = true;
	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr(),
		'argv': argv
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	expected = {
		'a': 'b',
		'c': 'd',
		'e': true,
		'f': true,
		'g': true,
		'h': true,
		'i': true,
		'beep': 'boop'
	};
	actual = cli.flags();

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the constructor supports providing an array of command-line arguments', function test( t ) {
	var expected;
	var actual;
	var argv;
	var ctor;
	var proc;
	var opts;
	var cli;

	argv = [
		'/usr/local/bin/node',
		'foo.js',
		'foo',
		'bar',
		'-a=b',
		'--c',
		'd',
		'--e',
		'-f',
		'-ghi',
		'--beep',
		'boop',
		'baz'
	];
	argv[ '@noCallThru' ] = true;
	proc = {
		'exit': noop,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false,
		'argv': argv
	};
	cli = ctor( opts );

	expected = {
		'a': 'b',
		'c': 'd',
		'e': true,
		'f': true,
		'g': true,
		'h': true,
		'i': true,
		'beep': 'boop'
	};
	actual = cli.flags();

	t.deepEqual( actual, expected, 'returns expected flags' );

	expected = [
		'foo',
		'bar',
		'baz'
	];
	actual = cli.args();

	t.deepEqual( actual, expected, 'returns expected arguments' );
	t.end();
});

tape( 'if the flag `-h` is set and is an alias for `--help`, the instance prints help text to `stderr` and exits', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;
	var ctor;
	var proc;
	var opts;
	var log;

	proc = {
		'exit': exit,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr(),
		'argv': [ '/usr/local/bin/node', 'foo.js', '-h' ]
	};
	log = {
		'error': write
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./console.js': log
	});

	fpath = join( __dirname, 'fixtures', 'usage.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFileSync( fpath, fopts );

	actual = '';

	opts = {
		'updates': false,
		'help': expected,
		'options': {
			'boolean': [
				'help',
				'version'
			],
			'alias': {
				'help': [
					'h'
				],
				'version': [
					'V'
				]
			}
		}
	};
	ctor( opts );

	t.strictEqual( actual, expected, 'writes expected text' );
	t.strictEqual( proc.exitCode, 0, 'sets exit code to 0' );
	t.end();

	function write( data ) {
		actual += data.toString();
	}

	function exit() {
		t.fail( 'should not be called' );
	}
});

tape( 'if the flag `-h` is set and is an alias for `--help`, the instance prints help text to `stderr` and exits (browser)', function test( t ) {
	var expected;
	var actual;
	var ctor;
	var proc;
	var opts;
	var log;

	proc = {
		'exit': exit,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr(),
		'argv': [ '/usr/local/bin/node', 'foo.js', '-h' ]
	};
	log = {
		'error': write
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./console.js': log
	});

	expected = 'Usage: boop [options] <beep>';
	actual = '';

	opts = {
		'updates': false,
		'help': expected,
		'options': {
			'boolean': [
				'help',
				'version'
			],
			'alias': {
				'help': [
					'h'
				],
				'version': [
					'V'
				]
			}
		}
	};
	ctor( opts );

	t.strictEqual( actual, expected, 'writes expected text' );
	t.strictEqual( proc.exitCode, 0, 'sets exit code to 0' );
	t.end();

	function write( data ) {
		actual += data.toString();
	}

	function exit() {
		t.fail( 'should not be called' );
	}
});

tape( 'if the flag `--help` is set, the instance prints help text to `stderr` and exits', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;
	var ctor;
	var proc;
	var opts;
	var log;

	proc = {
		'exit': exit,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr(),
		'argv': [ '/usr/local/bin/node', 'foo.js', '--help' ]
	};
	log = {
		'error': write
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./console.js': log
	});

	fpath = join( __dirname, 'fixtures', 'usage.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFileSync( fpath, fopts );

	actual = '';

	opts = {
		'updates': false,
		'help': expected,
		'options': {
			'boolean': [
				'help',
				'version'
			]
		}
	};
	ctor( opts );

	t.strictEqual( actual, expected, 'writes expected text' );
	t.strictEqual( proc.exitCode, 0, 'sets exit code to 0' );
	t.end();

	function write( data ) {
		actual += data.toString();
	}

	function exit() {
		t.fail( 'should not be called' );
	}
});

tape( 'if the flag `--help` is set, the instance prints help text to `stderr` and exits (browser)', function test( t ) {
	var expected;
	var actual;
	var ctor;
	var proc;
	var opts;
	var log;

	proc = {
		'exit': exit,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr(),
		'argv': [ '/usr/local/bin/node', 'foo.js', '--help' ]
	};
	log = {
		'error': write
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./console.js': log
	});

	expected = 'Usage: boop [options] <beep>';

	actual = '';

	opts = {
		'updates': false,
		'help': expected,
		'options': {
			'boolean': [
				'help',
				'version'
			]
		}
	};
	ctor( opts );

	t.strictEqual( actual, expected, 'writes expected text' );
	t.strictEqual( proc.exitCode, 0, 'sets exit code to 0' );
	t.end();

	function write( data ) {
		actual += data.toString();
	}

	function exit() {
		t.fail( 'should not be called' );
	}
});

tape( 'if the flag `-V` is set and is an alias for `--version`, the instance prints the version to `stderr` and exits', function test( t ) {
	var expected;
	var actual;
	var ctor;
	var proc;
	var opts;
	var log;

	proc = {
		'exit': exit,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr(),
		'argv': [ '/usr/local/bin/node', 'foo.js', '-V' ]
	};
	log = {
		'error': write
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./console.js': log
	});

	expected = '1.1.1';
	actual = '';

	opts = {
		'version': '1.1.1',
		'updates': false,
		'options': {
			'boolean': [
				'help',
				'version'
			],
			'alias': {
				'help': [
					'h'
				],
				'version': [
					'V'
				]
			}
		}
	};
	ctor( opts );

	t.strictEqual( actual, expected, 'writes expected text' );
	t.strictEqual( proc.exitCode, 0, 'sets exit code to 0' );
	t.end();

	function write( data ) {
		actual += data.toString();
	}

	function exit() {
		t.fail( 'should not be called' );
	}
});

tape( 'if the flag `--version` is set, the instance prints the version to `stderr` and exits', function test( t ) {
	var expected;
	var actual;
	var ctor;
	var proc;
	var opts;
	var log;

	proc = {
		'exit': exit,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr(),
		'argv': [ '/usr/local/bin/node', 'foo.js', '--version' ]
	};
	log = {
		'error': write
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./console.js': log
	});

	expected = '1.1.1';
	actual = '';

	opts = {
		'version': '1.1.1',
		'updates': false,
		'options': {
			'boolean': [
				'help',
				'version'
			],
			'alias': {
				'help': [
					'h'
				],
				'version': [
					'V'
				]
			}
		}
	};
	ctor( opts );

	t.strictEqual( actual, expected, 'writes expected text' );
	t.strictEqual( proc.exitCode, 0, 'sets exit code to 0' );
	t.end();

	function write( data ) {
		actual += data.toString();
	}

	function exit() {
		t.fail( 'should not be called' );
	}
});

tape( 'the instance provides a method to forcefully exit', function test( t ) {
	var ctor;
	var proc;
	var opts;
	var cli;

	proc = {
		'exit': exit,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );
	cli.exit();

	function exit( code ) {
		t.strictEqual( code, 0, 'is provided expected value' );
		t.end();
	}
});

tape( 'the instance provides a method to forcefully exit and provide an exit code', function test( t ) {
	var ctor;
	var proc;
	var opts;
	var cli;

	proc = {
		'exit': exit,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );
	cli.exit( 5 );

	function exit( code ) {
		t.strictEqual( code, 5, 'is provided expected value' );
		t.end();
	}
});

tape( 'the instance method to forcefully exit throws an error if not provided a nonnegative integer', function test( t ) {
	var values;
	var proc;
	var ctor;
	var cli;
	var i;

	proc = {
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	values = [
		'5',
		-1,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cli.exit( value );
		};
	}
});

tape( 'the instance provides a method to gracefully exit', function test( t ) {
	var ctor;
	var proc;
	var opts;
	var cli;

	proc = {
		'exit': noop,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );
	cli.close();

	t.strictEqual( proc.exitCode, 0, 'returns expected value' );
	t.end();
});

tape( 'the instance provides a method to gracefully exit and provide an exit code', function test( t ) {
	var ctor;
	var proc;
	var opts;
	var cli;

	proc = {
		'exit': noop,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );
	cli.close( 5 );

	t.strictEqual( proc.exitCode, 5, 'returns expected value' );
	t.end();
});

tape( 'the instance method to gracefully exit throws an error if not provided a nonnegative integer', function test( t ) {
	var values;
	var proc;
	var ctor;
	var cli;
	var i;

	proc = {
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	values = [
		'5',
		-1,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cli.close( value );
		};
	}
});

tape( 'the instance provides a method to exit due to an error', function test( t ) {
	var ctor;
	var proc;
	var opts;
	var log;
	var cli;
	var err;

	proc = {
		'exit': noop,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	log = {
		'error': onError
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./console.js': log
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	err = new Error( 'invalid operation' );
	cli.error( err );

	t.strictEqual( proc.exitCode, 1, 'returns expected value' );
	t.end();

	function onError() {
		t.ok( true, 'method to log error message to `stdout` is invoked' );
	}
});

tape( 'the instance provides a method to exit due to an error (exit code)', function test( t ) {
	var ctor;
	var proc;
	var opts;
	var log;
	var cli;
	var err;

	proc = {
		'exit': noop,
		'exitCode': -1,
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	log = {
		'error': onError
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc,
		'./console.js': log
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	err = new Error( 'invalid operation' );
	cli.error( err, 2 );

	t.strictEqual( proc.exitCode, 2, 'returns expected value' );
	t.end();

	function onError() {
		t.ok( true, 'method to log error message to `stdout` is invoked' );
	}
});

tape( 'the instance method to exit due to an error throws an error if not provided an error object for the first argument', function test( t ) {
	var values;
	var proc;
	var ctor;
	var cli;
	var i;

	proc = {
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cli.error( value );
		};
	}
});

tape( 'the instance method to exit due to an error throws an error if not provided an error object for the first argument (exit code)', function test( t ) {
	var values;
	var proc;
	var ctor;
	var cli;
	var i;

	proc = {
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cli.error( value, 1 );
		};
	}
});

tape( 'the instance method to exit due to an error throws an error if not provided a nonnegative integer as an exit code', function test( t ) {
	var values;
	var proc;
	var ctor;
	var cli;
	var i;

	proc = {
		'title': '',
		'stdout': stdout(),
		'stderr': stderr()
	};

	ctor = proxyquire( './../lib/main.js', {
		'./process.js': proc
	});

	opts = {
		'updates': false
	};
	cli = ctor( opts );

	values = [
		'5',
		-1,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cli.error( new Error( 'invalid operation' ), value );
		};
	}
});
