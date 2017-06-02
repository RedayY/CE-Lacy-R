//Jasmine Main Specification File

//Creating Suite
describe("Lacy-R Functionality Requirement Min Tests: ", function(){

//telling Jasmine to make sure that these are setup before each tests
beforeEach(function(){
      chrome = {
        extension: {
          onMessage: {
            addListener: function(request, sender, sendResponse){}
          }
        }
      }
      

});

 it('Check if Jasmine is loading. Just a small basic Jasmine test', function(){
     expect(1).toEqual(1);
    });


it('Checks if the request method is get_sel_chrome' , function(){
    expect(chrome.extension.onMessage.request.method).toBe("get_sel_chrome");
});

});

describe("Tests with Sinon-Chrome: ", function(){

it("should spy on my function"), function(){

//spy definition
var spy = sinon.spy(get_Info);

//log
logger = {
        log: sinon.spy()
    };

console.log(spy);




//clear
logger.log.reset();
}
});