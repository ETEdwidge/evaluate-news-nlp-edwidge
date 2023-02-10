// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
var requestPost = require('../src/server/PostRoute')
var validateR = requestPost.validateR;
   
describe("Testing if validateR() exists", () => {
    test("It should be true", async () => {
        expect(validateR).toBeDefined();
    });
});

describe('Test if validateR() is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateR).toEqual("function");
    })
});
