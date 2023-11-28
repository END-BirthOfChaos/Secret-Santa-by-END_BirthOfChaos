
document.addEventListener("DOMContentLoaded", function()
{
  const mainchoices = document.getElementsByClassName('index-main');

  let index = 0;

  const interval = setInterval(function()
  {
    
    if (index < mainchoices.length)
    {
      mainchoices[index].style.opacity = 1;
      index++;
    }
    else
    {
      clearInterval(interval);
    }
  }, 600);
});
