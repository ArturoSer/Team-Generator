const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
const { inherits } = require("util")

const managerARR = []
const internARR = []
const engineerARR = []
const employeeARR = []

promptManager()

function promptManager() {
    inquirer.prompt([
        {
            type:"input",
            message:"what is your name?",
            name:"name"
        },
        {
            type:"input",
            message:"what is your username?",
            name:"id"
        },
        {
            type:"input",
            message:"what is your email?",
            name:"email"
        },
        {
            type:"input",
            message:"what is your extension?",
            name:"extensionNumber"
        },
    ])
    .then((data) => {
        managerARR.push(new Manager(data.name, data.id, data.email, data.extensionNumber))
        console.log(managerARR)
        selectRole()
    })
}

function promptIntern() {
    inquirer.prompt([
        {
            type:"input",
            message:"what is your name?",
            name:"name"
        },
        {
            type:"input",
            message:"what is your username?",
            name:"id"
        },
        {
            type:"input",
            message:"what is your email?",
            name:"email"
        },
        {
            type:"input",
            message:"what is your college?",
            name:"school"
        },
    ])
    .then((data) => {
        internARR.push(new Intern(data.name, data.id, data.email, data.school))
        selectRole()
    })
}

function promptEngineer() {
    inquirer.prompt([
        {
            type:"input",
            message:"what is your name?",
            name:"name"
        },
        {
            type:"input",
            message:"what is your username?",
            name:"id"
        },
        {
            type:"input",
            message:"what is your email?",
            name:"email"
        },
        {
            type:"input",
            message:"what is your github?",
            name:"github"
        },
    ])
    .then((data) => {
        engineerARR.push(new Engineer(data.name, data.id, data.email, data.github))
        selectRole()
    })
}

function selectRole() {
    inquirer.prompt([
        {
            type:"list",
            choices: ["Intern", "Engineer", "Building Team"],
            message:"Pick a Role:",
            name:"role"
        }
    ])
    .then((data) => {
        if (data.role === "Engineer") {
            promptEngineer();
        }
        if (data.role === "Intern") {
            promptIntern();
        }
        if (data.role === "Building Team") {
            GenerateManager(managerARR);
            if (engineerARR) {
                GenerateEngineer(engineerARR);
            }
            if (internARR) {
                GenerateIntern(internARR);
            }
            renderHTML()
            init()
            console.log(renderHTML());
        }
    })
}

function GenerateManager(managerARR) {
    managerHTML = `
    <div class=row>
    <div class="col-3 mx-auto py-5 px-4">
    <div class="card" style="width: 20rem;">
    <div class="card-header text-white bg-primary">
    <h5 class="card-title">${managerARR[0].getName()}</h5>
    <p class="card-text"><svg aria-hidden="true" class = "icons" focusable="false" data-prefix="fas" data-icon="mug-saucer" class="svg-inline--fa fa-mug-saucer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"></path></svg> Manager</p>
    </div>
    <div class="card-body bg-light py-5 px-4" style="height: 15rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Username: ${managerARR[0].getId()}</li>
    <li class="list-group-item">Email: ${managerARR[0].getEmail()}</li>
    <li class="list-group-item">Extension: ${managerARR[0].getExtension()}</li>
    </ul>
    </div>
    </div>
    </div>
    <div class=row>`;
    employeeARR.push(managerHTML);
}

function GenerateIntern(internARR) {
    for(let i=0; i < internARR.length; i++) {
        var internHTML = `
        <div class="col-3 mx-auto py-5 px-4">
    <div class="card" style="width: 20rem;">
    <div class="card-header text-white bg-primary">
    <h5 class="card-title">${internARR[i].getName()}</h5>
    <p class="card-text"><i class="fas fa-glasses"></i> Intern</p>
    </div>
    <div class="card-body bg-light py-5 px-4" style="height: 15rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Username: ${internARR[i].getId()}</li>
    <li class="list-group-item">Email: ${internARR[i].getEmail()}</li>
    <li class="list-group-item">School: ${internARR[i].getSchool()}</li>
    </ul>
    </div>
    </div>
    </div>`;
    employeeARR.push(internHTML);
    }
}

function GenerateEngineer(engineerARR) {
    for (let i = 0; i < engineerARR.length; i++) {
        var engineerHTML = `
        <div class="col-3 mx-auto py-5 px-4">
    <div class="card" style="width: 20rem;">
    <div class="card-header text-white bg-primary">
    <h5 class="card-title">${engineerARR[i].getName()}</h5>
    <p class="card-text"><svg aria-hidden="true" class = "icons" focusable="false" data-prefix="fas" data-icon="mug-saucer" class="svg-inline--fa fa-mug-saucer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"></path></svg> Manager</p>
    </div>
    <div class="card-body bg-light py-5 px-4" style="height: 15rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Username: ${engineerARR[i].getId()}</li>
    <li class="list-group-item">Email: ${engineerARR[i].getEmail()}</li>
    <li class="list-group-item">Github: ${engineerARR[i].getGithub()}</li>
    </ul>
    </div>
    </div>
    </div>`;
    employeeARR.push(engineerHTML);
    }
}

function renderHTML() {
    htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="" />
    <title>The Teams Profile View</title>
    </head>

    <header>
        <div class="p-10 text-center bg-danger my-5">
            <h1 class="mb-3">Teams Profile</h1>
            <h3 class="mb-3">Introduction to the Team!</h3>
        </div>
    </header>

<body>
    <div class="container">`

    htmlCode += employeeHTML()
    htmlCode += `
    </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html> `

return htmlCode;
}

function employeeHTML() {
    var empHTML = "";
    for (let i = 0; i < employeeARR.length; i++) {
        empHTML += employeeARR[i];
    }
    return empHTML;
}

const init = () => {
    fs.writeFileSync("index.html", renderHTML());
}