//import { createPopper } from  '@popperjs/core';


let toBeDeleted;
let teamName;



$(document).ready(function(){
	
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });

    //table button to trigger confirmation modal
	$(document).on("click", "#deleteModal", function(){
        toBeDeleted = this;
    });
    
    //Confirm deletion modal
    $(document).on("click", "#confirmDelete", function(){
        teamName= $(toBeDeleted).find("accessKey")
        teamName=teamName.prevObject[0].accessKey
        $(toBeDeleted).parents("tr").remove()
        
        alert(teamName)
    });

    $(document).on("hover", "#teamTable", function(){

        alert(teamName)
    });

});


function alert(message) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"> The team named \'' + message + '\' has been deleted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    $("#liveAlertPlaceholder").append(wrapper)
  }
  
  