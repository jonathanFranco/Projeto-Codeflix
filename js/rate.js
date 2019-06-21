$(document).ready(function(){

      $('#star-1').click(function(){
        $('#star-1').css({'color':'#FF3333','transition':'0.2s','text-shadow':'0px 0px 5px red'});
        $('#star-2,#star-3,#star-4,#star-5').css({'color':'rgb(200,200,200)','transition':'0.2s','text-shadow':'none'});
      });
      $('#star-1').dblclick(function(){
        $(this).css({'color':'rgb(200,200,200)','transition':'0.2s','text-shadow':'none'});
      });

      $('#star-2').click(function(){
        $('#star-1,#star-2').css({'color':'orange','transition':'0.2s', 'text-shadow':'0px 0px 10px orange'});
        $('#star-3,#star-4,#star-5').css({'color':'rgb(200,200,200)','transition':'0.2s','text-shadow':'none'});
      });
      $('#star-3').click(function(){
        $('#star-1,#star-2,#star-3').css({'color':'orange','transition':'0.2s', 'text-shadow':'0px 0px 15px orange'});
        $('#star-4,#star-5').css({'color':'rgb(200,200,200)','transition':'0.2s','text-shadow':'none'});
      });
      $('#star-4').click(function(){
        $('#star-1,#star-2,#star-3,#star-4').css({'color':'yellow','transition':'0.2s', 'text-shadow':'0px 0px 20px #fdec6e'});
        $('#star-5').css({'color':'rgb(200,200,200)','transition':'0.2s','text-shadow':'none'});
      });
      $('#star-5').click(function(){
        $('#star-1,#star-2,#star-3,#star-4,#star-5').css({'color':'yellow','transition':'0.2s', 'text-shadow':'0px 0px 40px #fdec6e'});
      });
      
    });