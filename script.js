window.onload = function() {
  const cliForm = document.getElementById("cli-form");
  cliForm.addEventListener("submit", handleSubmit)
  console.log(cliForm)
}

function handleSubmit(event) {
  event.preventDefault()
  let cli = document.getElementById("command-line")
  const command = cli.value
 
  const newLogLine = document.createElement("p")
  newLogLine.appendChild(document.createTextNode(command))
  document.getElementById("log").appendChild(newLogLine)
  cli.value = ""
}