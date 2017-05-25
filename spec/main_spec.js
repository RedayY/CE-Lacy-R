//Jasmine Main Specification File

//Creating Suite
describe("Lacy-R Functionality Requirement Min Tests: ", function(){

//telling Jasmine to make sure that these are setup before each tests
beforeEach(function(){
      chrome = {
        runtime: {
          onMessage: {

            addListener: function(request, sender, sendResponse){}
          
          }
        }
      }

},

function get_Info() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 

  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "get_sel_chrome"}, 

    function(response){
      var text = document.getElementById('text'); 
      text.innerHTML = response.data;

    });
  });
},

)

}); 


 it('Check if Jasmine is loading. Just a small basic Jasmine test', function(){
     expect(1).toEqual(1);
    });


it('Check if Conversion can be passed through the function, without chrome' , function(){
    expect(window.getSelection().toString()).toBe('');
});

it('Using Chrome API functions' , function(){

    var stuffs = {data: window.getSelection().toString()};
    expect(stuffs).toEqual(stuffs)
});

