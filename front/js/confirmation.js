const urlSearchParams = new URLSearchParams(window.location.search);
const orderId = urlSearchParams.get("orderId");
/* console.log(orderId); */

document.getElementById("orderId").innerText = orderId;
localStorage.removeItem("canap_cart")