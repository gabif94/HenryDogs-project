/* eslint-disable import/no-extraneous-dependencies */
const {expect} = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const {Dog, conn} = require('../../src/db.js');

const agent = session(app);
const dog = {
	name: 'Pug',
	height: 20,
	weight: 10,
	temperamentName: 'Quiet',
};

describe('Dogs routes', () => {
	before(() =>
		conn.authenticate().catch(err => {
			console.error('Unable to connect to the database:', err);
		})
	);
	beforeEach(() => Dog.sync({force: true}).then(() => Dog.create(dog)));
	describe('GET /api/dogs', () => {
		it('should get 200', done => {
			agent.get('/api/dogs').expect(200);
			done();
		});
	});
	it('should search by name', done => {
		agent
			.get('/api/dogs?name=affenpinscher')
			.then(res => expect(res.body.name).to.be.equal('affenpinscher'));
		done();
	});
});
