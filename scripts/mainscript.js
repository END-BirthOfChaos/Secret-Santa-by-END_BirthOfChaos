document.addEventListener("DOMContentLoaded", function()
{
  const lreq =  document.getElementById('launch')
  const hval =  document.getElementById('hidden-one')
  let curid = hval.innerText

  lreq.addEventListener("click", () => {
    let timerInterval;
    lreq.style.height = "0";
    lreq.style.width = "0";
    lreq.style.backgroundSize = "0%";
    Swal.fire({
      title: "Selection",
      html: "Cela devrait prendre quelques secondes",
      timer: 5500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();

        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {

      $.ajax({
          url: '../get_attribution',
          type: 'GET',
          data: { "id": curid },
          dataType: 'json',
          success: function(data) {
            console.log(data["received"][0]);
            Swal.fire({
              title: "Choisi !",
              icon:"success",
              html: `${data["received"][0]} vous offrirez votre cadeau à ${data["received"][1]}`,
              background: "#E8E8E8",
              confirmButtonColor: "#32FF54",
              confirmButtonText: 'Trop cool',
            }).then((result) => {
              window.location.href = '../'
            })

          },
          error: function(error) {
              console.log('Une erreur s\'est produite :', error);
          }
      });

    });

  });
});
