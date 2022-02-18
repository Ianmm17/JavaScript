const Rover = require('../assignment3/rover.js');
const Message = require('../assignment3/message.js');
const Command = require('../assignment3/command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
// However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

    it('constructor sets position and default values for mode and generatorWatts', function () {
        let rover = new Rover('foo', 'NORMAL', 110)
        expect(rover.position).toEqual('foo')
    });

    it('response return by receiveMessage contains name of message')
    let response = new Rover()
    expect()
    // 7 tests here!

});
