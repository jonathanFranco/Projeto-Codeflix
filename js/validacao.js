    function val_login(){
            var user = document.getElementById("user").value;
            var senha = document.getElementById("key").value;

            if(user === 'user001'){
                $("#user").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
    
            }

            if(senha === 'qwerty'){
                $("#key").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-2").css({'display':'none'});
    
            }

            if(user === 'admin'){
                $("#user").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
    
            }

            if(senha === 'admin'){
                $("#key").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-2").css({'display':'none'});
    
            }

            if (user === 'user001' && senha === 'qwerty') {
                window.location.href = "index.html";
                $("#user,#key").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1,#msg-2").css({'display':'none'});

            }else if (user === 'admin' && senha === 'admin') {
                window.location.href = "admin.html";
                $("#user,#key").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1,#msg-2").css({'display':'none'});
            }
            if (user === ''){
                $("#user").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-1").css({'display':'block'});
    
            }
            if (senha === '') {
                $("#key").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-2").css({'display':'block'});

            }

        }

        function val_email(){
            var valemail = document.getElementById("valemail").value;

            if (valemail === '') {
                $("#valemail").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-1").css({'display':'block'});

            }
            else{
                $("#valemail").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
    
            }

            if (valemail != '') {
                window.location.href = "codigo.html";
                $("#valemail").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
            }
                
        }

        function val_cod(){
            var codigo = document.getElementById("codigo").value;

            if (codigo === '') {
                $("#codigo").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-1").css({'display':'block'});

            }
            else{
                $("#codigo").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
    
            }

            if (codigo != '') {
                window.location.href = "senha.html";
                $("#codigo").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
            }
                
        }

        function val_newsenha(){
            var newkey = document.getElementById("newkey").value;

            if (newkey === '') {
                $("#newkey").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-1").css({'display':'block'});

            }
            else{
                $("#newkey").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
    
            }

            if (newkey != '') {
                window.location.href = "login.html";
                $("#newkey").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
            }
                
        }

        function val_cad(){
            var cad_name = document.getElementById("cad_name").value;
            var cad_user = document.getElementById("cad_user").value;
            var cad_key = document.getElementById("cad_key").value;
            var cad_email = document.getElementById("cad_email").value;

            if (cad_name === '') {
                $("#cad_name").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-1").css({'display':'block'});

            }
            else{
                $("#cad_name").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-1").css({'display':'none'});
    
            }
            if (cad_user === '') {
                $("#cad_user").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-2").css({'display':'block'});

            }
            else{
                $("#cad_user").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-2").css({'display':'none'});
    
            }

            if (cad_key === '') {
                $("#cad_key").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-3").css({'display':'block'});

            }
            else{
                $("#cad_key").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-3").css({'display':'none'});
    
            }

            if (cad_email === '') {
                $("#cad_email").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(255,53,71)'});
                $("#msg-4").css({'display':'block'});

            }
            else{
                $("#cad_email").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'});
                $("#msg-4").css({'display':'none'});
    
            }

            if (cad_name != '' && cad_user != '' && cad_key != '' && cad_email != '') {
                window.location.href = "login.html";
                $("#cad_name,#cad_user,#cad_key,#cad_email").css({'border-bottom-width':'2px','border-bottom-style':'solid','border-bottom-color':'rgb(66,133,244)'})
                $("#msg-1,#msg-2,#msg-3,#msg-4").css({'display':'none'});
            }
                
        }