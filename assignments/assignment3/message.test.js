const Message = require('../assignment3/message.js');
const Command = require('../assignment3/command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    it("throws error if command type is NOT passed into constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Message Name Required.'));
    });

    it('constructor sets name', function () {
        let message = new Message('foo');
        expect(message.name).toEqual('foo')
    });

    it('contains a commands array passed into the constructor as 2nd argument', function () {
        let myCommands = ['foo', 'bar']
        let command = new Message('foo', myCommands)
        expect(command.commands).toEqual(myCommands)
    })
});