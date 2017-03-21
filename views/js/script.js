$(document).ready(function(){




$.get("http://www.omdbapi.com/?t=the.incredibles",function (arrayOfNotes) {

        console.log(arrayOfNotes.imdbRating);
        //console.log(arrayOfNotes.length);

    //     var newHtml = [];

    //     for(var i=arrayOfNotes.length;i>0;i--){
    //         newHtml.push('<div class = "note_div"><div class="row'+ (arrayOfNotes.length-i+1)+'"><div class="col-xs-1">'+ (arrayOfNotes.length-i+1) +'</div><div class="col-xs-3 title_div"><h4>'+ arrayOfNotes[i-1].title+'</h4></div><div class="col-xs-5 body_div">'+ arrayOfNotes[i-1].body +'</div><div class="col-xs-3"><button type="button" class="btn btn-default btn-primary" onclick="delbtnclick(this.id);" id="delbtn'+ (arrayOfNotes.length-i+1) +'">Delete</button></div></div></div>');
 
    // };


    //     $(".all_notes_div").html(newHtml.join(""));
        
      }).fail(function(jqXHR,textStatus,errorThrown){
          alert('woops' + textStatus + errorThrown);
         // $(".all_notes_div").text(errorThrown);
      });


});


