// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"
  
describe("Testing the namechecker() exist", () => {
    test('It should return true', async () => {
        expect(checkForName).toBeDefined();
    })
}); 

describe('Test namechecker() is a function' , () => {
    test('It should be a function', async () => {
        expect(typeof checkForName).toEqual("function");
    })  
});








