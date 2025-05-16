const value_txt = document.getElementById("value");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.onclick = function () {
    if (key.dataset.val === "limpiar") value_txt.value = "";
    else if (key.dataset.val === "igual")
      value_txt.value = eval(value_txt.value);
    else value_txt.value += key.dataset.val;
  };
});
