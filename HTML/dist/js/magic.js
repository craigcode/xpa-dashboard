/*
    Functions to support interaction with a
    .Net embedded browser in Magic XPA
*/

// raises an event in Magic utilising the browser.DocumentComplete event
function raiseMagicEvent(action){

  document.title = 'MAGIC_EVENT=' + action;
  document.location.href = '#';

}

// return the payload to Magic for a given action
function getPayload(action,options){
  if(action == 'whatever'){

    return 'someData';
  }
}

// handle specific named actions raised by Magic in the browser
function magicHandler(functionName, data){

  if(functionName == 'myFunction1'){
    //do something
  }

  if(functionName == 'myFunction2'){
    //do something
  }
}

//populate data from Magic
function injectData(data){

  $('#xpausername1').text(data.username);
  $('#xpausername2').text(data.username);
  $('#xpausername3').text(data.username);

  $('#widget1val').text(data.widgets[0].value);
  $('#widget1txt').text(data.widgets[0].text);
  $('#widget2val').text(data.widgets[1].value);
  $('#widget2txt').text(data.widgets[1].text);
  $('#widget3val').text(data.widgets[2].value);
  $('#widget3txt').text(data.widgets[2].text);
  $('#widget4val').text(data.widgets[3].value);
  $('#widget4txt').text(data.widgets[3].text);
}