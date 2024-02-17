
function checkName() {
  var name = document.getElementById("name").value.toLowerCase();
  if (name === "delbiya sreeraj") {
    document.getElementById("loveQuestion").classList.remove("hidden");
  } else {
    alert("Sorry, wrong name! Try again.");
  }
}

function showResult() {
  var loveLevel = document.getElementById("loveLevel").value;
  var message = "";
  var loveResponse = "";

  if (loveLevel === "0" || loveLevel === "10" || loveLevel === "100" || loveLevel === "1000") {
    message = "😢";
  } else {
    message = "❤";
  }

  if (loveLevel === "infinity") {
    loveResponse = "I LOVE YOU DELBU";
    var response = prompt("Do you love me? (yes/no)");
    if (response.toLowerCase() === "yes") {
      loveResponse += " I love you too! 😘😘😘😘😘 Your Sree is waiting there. Go and talk to him 😁";
    } else {
      alert("Oh, okay. Maybe next time!");
      return;
    }
  } else {
    loveResponse = "Oops! Looks like Delbu doesn't love me that much. 😢";
  }

  document.getElementById("message").innerText = message;
  document.getElementById("loveResponse").innerText = loveResponse;
  document.getElementById("result").classList.remove("hidden");
}
