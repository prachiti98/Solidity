const assert  = require("assert");
const gananche = require('gananche-cli');
const Web3 = require('web3'); //constructor
const web3 = new Web3(ganache.provider()); //instance
class Car{
	park(){
		return 'stopped';
	}
	drive(){
		return 'vroom';
	}
}

describe('Car',() => {
	it('can park',()=>{
		const car= new Car();
		asert.equal(car.park(),'stopped');

	});
});