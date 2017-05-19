chrome.extension.onMessage.addListener(function(request, sender, sendResponse){

    if (request.method = "get_sel_chrome"){

    sendResponse({data: window.getSelection().toString()}); //tell chrome to do function
}

    else{
    sendResponse({});} //empty response
});

