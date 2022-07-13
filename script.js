window.onload = function() {
  const cliForm = document.getElementById("cli-form");
  cliForm.addEventListener("submit", handleSubmit)
  console.log(cliForm)
}

function handleSubmit(event) {
  event.preventDefault()
  let cli = document.getElementById("command-line")
  const command = cli.value

  let newLogLine = document.createElement("div")
  newLogLine.classList.add("log-line")

  let preLine = document.createElement("p")
  preLine.classList.add("preline")
  preLine.appendChild(document.createTextNode(">>"))
  newLogLine.appendChild(preLine)

  let log = document.createElement("p")
  log.classList.add("log")
  log.appendChild(document.createTextNode(command))
  newLogLine.appendChild(log)

  document.getElementById("log-history").appendChild(newLogLine)
  cli.value = ""
}