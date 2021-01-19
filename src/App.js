import React, { useState } from 'react';

import './App.css';

const App = () => {
	const [number1, setNumber1] = useState(0);
	const [type, setType] = useState('isPrime');
	const [results, setResults] = useState('false');

	function checkNumber(v) {
		let num = Number(v);
		if (num <= 0 || num === '-0') {
			setNumber1(num === 0 ? '' : 1);
		} else {
			if (Number.isInteger(num)) {
				setNumber1(num);
			} else {
				setNumber1(Math.ceil(num));
			}
		}
	}

	function calculate(n, type) {
		if (n > 0) {
			if (type === 'isPrime') {
				let r = test_prime(Number(n));
				setResults(`${r}`);
			} else if (type === 'isFibonacci') {
				let r = test_fibonacci(Number(n));
				setResults(`${r}`);
			}
		}
	}
	function test_prime(n) {
		if (n === 1) {
			return false;
		} else if (n === 2) {
			return true;
		} else {
			for (var x = 2; x < n; x++) {
				if (n % x === 0) {
					return false;
				}
			}
			return true;
		}
	}
	const test_fibonacci = (query, count = 1, last = 0) => {
		console.log(query, count, last);
		if (count < query) {
			return test_fibonacci(query, count + last, count);
		}
		if (count === query) {
			return true;
		}
		return false;
	};

	return (
		<div className='container'>
			<div className='block-a'>
				<input
					type='number'
					id='number'
					className='input-a'
					value={number1 === 0 ? '' : number1}
					onChange={(e) => {
						checkNumber(e.target.value);
						calculate(e.target.value, type);
					}}
				></input>
			</div>
			<div className='block-b'>
				<select
					id='calculate'
					style={{ width: '50%' }}
					onChange={(e) => {
						setType(e.target.value);
						calculate(number1, e.target.value);
					}}
				>
					<option defaultValue='isPrime'>isPrime</option>
					<option value='isFibonacci'>isFibonacci</option>
				</select>
			</div>
			<div className='block-c'>
				<span id='result'>{results}</span>
			</div>
		</div>
	);
};

export default App;
