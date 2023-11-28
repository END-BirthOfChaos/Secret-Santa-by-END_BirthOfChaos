
document.addEventListener("DOMContentLoaded", function()
{
  const first_frame = document.getElementById('deploy');
  const log_frame = document.getElementById('main-login');
  const in_Select = document.getElementById('in-login-select');
  const on_submit = document.getElementById('connect');

  first_frame.addEventListener('mouseenter', () => {
    first_frame.style.height = "0";
    first_frame.style.position = "absolute";
    log_frame.style.width = "44vw";

  });

  log_frame.addEventListener('mouseenter', () => {
    in_Select.style.transform = "scale(1)"
  });

  log_frame.addEventListener('mouseleave', () => {
    in_Select.style.transform = "scale(0.9)"
  });

  on_submit.addEventListener('click', () => {

    Swal.fire({
      title: 'Entrez votre clé reçue par sms',
      color: "#23074D",
      background: "#E8E8E8",
      html:
        '<input type="text" id="input1" class="swal2-input" placeholder="Oui ici">',
      showCancelButton: true,
      confirmButtonColor: "#32FF54",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Valider',
      cancelButtonText: 'Annuler',
      preConfirm: () => {
        return [
          document.getElementById('input1').value,
        ];
      }
    }).then(result => {
      if (result.isConfirmed) {
        const input1 = result.value;
        const toshow = document.getElementById('is-valid')
        on_submit.style.height = "0";
        on_submit.style.border = "0px"
        toshow.classList.remove("subkey-container-h")
        toshow.classList.add("subkey-container");
        toshow.innerHTML = `<a href='mainpage?argument=${input1}'>` + "\n\t<div id=\"subkey\">\n\t\t<span><b>GO!</b></span>\n</div>\n</a>"
      }
    });

  });
});
