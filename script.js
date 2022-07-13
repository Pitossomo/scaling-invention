window.onload = function() {
  const cliForm = document.getElementById("cli-form");
  cliForm.addEventListener("submit", handleSubmit)

  showInitialMessage()
}

function addNew(text) {
  let p = document.createElement("p") 
  p.appendChild(document.createTextNode(text))
  return p;
} 

function showInitialMessage() {
  addNewLogLine("Hello world. This is a calculator tool made for DIO Impulse JS 2022 Bootcamp.")
  addNewLogLine("Enter the desired operator followed by two values to see the resulting operation.")
  addNewLogLine("There is 6 operations supported:")
  addNewLogLine("~ Sum (+ 3 2) => 5")
  addNewLogLine("~ Subtract (- 3 2) => 1")
  addNewLogLine("~ Multiply (* 3 2) => 6")
  addNewLogLine("~ Divide (/ 3 2) => 1.5")
  addNewLogLine("~ Module (% 3 2) => 1")
  addNewLogLine("~ Exponentiation (** 3 2) => 9")
  addNewLogLine("Enter the command 'help' anytime to see this explanation again")
  addNewLogLine("")
}

function handleSubmit(event) {
  event.preventDefault()
  let cli = document.getElementById("command-line")
  const command = cli.value
  
  addNewLogLine(command)

  handleArguments(command)
    
  cli.value = ""
}

function addNewLogLine(text) {
  let newLogLine = document.createElement("div")
  newLogLine.classList.add("log-line")

  let preLine = document.createElement("p")
  preLine.classList.add("preline")
  preLine.appendChild(document.createTextNode(">>"))
  newLogLine.appendChild(preLine)

  let log = document.createElement("p")
  log.classList.add("log")
  log.appendChild(document.createTextNode(text))
  newLogLine.appendChild(log)

  document.getElementById("log-history").appendChild(newLogLine)
}

function handleArguments(command) {
  const args = command.trim().split(/\s+/)
  if (!args || args[0]==='') addNewLogLine("Please, provide some argument.")
  else if (args[0] === "help") showInitialMessage()
  else if (args.length < 3) addNewLogLine("Not enough arguments. Try again")
  else {
    switch (args[0]) {
      case "+": addNewLogLine(Number(args[1])+Number(args[2])); break
      case "-": addNewLogLine(Number(args[1])-Number(args[2])); break
      case "*": addNewLogLine(Number(args[1])*Number(args[2])); break
      case "/": addNewLogLine(Number(args[1])/Number(args[2])); break
      case "%": addNewLogLine(Number(args[1])%Number(args[2])); break
      case "**": addNewLogLine(Number(args[1])**Number(args[2])); break
    }
  }
}