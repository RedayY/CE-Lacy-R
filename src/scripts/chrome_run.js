//stuff chrome does
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){

    if (request.method = "get_sel_chrome"){

    sendResponse({data: window.getSelection().toString()}); //tell chrome to get selection and turn it to string
}

    else{
    sendResponse({});} //empty response
});

