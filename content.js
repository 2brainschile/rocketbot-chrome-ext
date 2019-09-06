/*global chrome*/

const FIELD_NAME = 'ID CLIENTE';
const URL = 'http://back.contablechile.com/admin/estado_clientes?q[rut_contains]=';

$(document).ready(function() {
  const path = window.location.pathname.split('/')
  if (window.location.host == 'app.rocketbots.io') {

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (!mutation.addedNodes) return;

        for (var i = 0; i < mutation.addedNodes.length; i++) {
          var node = mutation.addedNodes[i];
          if (node.id == "messages") {
            var fields = document.querySelectorAll("#messages .v-text-field__slot span")
            for(var i=0; i < fields.length; i++) {
              if (fields[i].innerHTML.indexOf(FIELD_NAME) != -1) {
                var code = fields[i].parentNode.nextElementSibling.value;
                $(fields[i]).append(' <a target="_blank" href="' + URL + code + '">Ficha Cliente</a>');
              }
            }
          }
        }

    });
  });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
  }

})
