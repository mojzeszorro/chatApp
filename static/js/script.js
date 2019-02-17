document.addEventListener('DOM ContentLoaded', function() {
  var socket=io.connect(location.protocol +'//'+document.domain + ':' + location.port);
  socket.on('connect', function(){
    
    document.querySelector('#username').onsubmit = function() {
      const user=document.querySelector("#username").value;
      socket.emit('message',{'user':user});
      
  };
});

socket.on('send_msg', data => {
  const li=document.createElement('li');
  li.innerHTML='msg:${data.user}';
  document.querySelector("#messages").append(li);
});
});

var el=document.querySelector("#channel-list")
function openNav() {
    
        el.style.width = "40%";
  }
  
  function closeNav() {
    el.style.width = "10%";
  }
  $(function() {
    $('form').each(function() {
        $(this).find('input').keypress(function(e) {
            // Enter pressed?
            if(e.which == 10 || e.which == 13) {
                this.form.submit();
            }
        });

        $(this).find('input[type=submit]').hide();
    });
});
