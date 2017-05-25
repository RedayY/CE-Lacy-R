//Made with inteliJ IDEA
//Reday A. Yahya
//@RedayNBG


//graphical overlay import from google thanks btw
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}


//main function just to grab what has been selected
function sel_text() {

  var quelle = ""; // <-- here be the source selected

    //Checks wether text has been selected
    if(typeof window.getSelection != "undefined") {

      //stores stuffs
      quelle = window.getSelection().toString();

    }

    //checks if the window selection is not undefined and contains text
    else if (typeof window.selection != "undefined" && document.selection.type == "Text") {

        quelle = document.selection.createRange().text;
      }


      //function return
      return quelle;
}

//Overlay
function overlay_output() {

  //storage
  var high_source = sel_text();

  //calls function 
  if (sel_text){

    //Chrome Smallbox Alert Output combined
   
    renderStatus("Highlighted Text: " + high_source)
    }
}



//Now lets try this with Chrome API..


$(function(){
  $('#btn_run').click(function(){get_Info();});
});

function get_Info() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 

  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "get_sel_chrome"}, 

    function(response){
      var text = document.getElementById('text'); 
      text.innerHTML = response.data;

    });
  });
}
