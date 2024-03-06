function skillAddField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let skillOb = document.getElementById('skill');
    let skillAddButtonOb = document.getElementById('skillAddButton');

    skillOb.insertBefore(newNode, skillAddButtonOb);
}

function projectAddField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('projectField');
    newNode.setAttribute('rows', 3);
    newNode.classList.add('mt-2')

    let projectOb = document.getElementById('project');
    let projectAddButtonOb = document.getElementById('projectAddButton');

    projectOb.insertBefore(newNode, projectAddButtonOb);
}
document.getElementById("saveBtn").addEventListener("click", () => {
    const resumeData={
        image:document.getElementById(imgField).value,
        name:document.getElementById("nameField").value,
        contact:document.getElementById("contactField").value,
        email:document.getElementById("emailField").value,
        address:document.getElementById("addressField").value,
        linkin:document.getElementById("linkedinField").value,
        github:document.getElementById("gitField").value,
        portfolio:document.getElementById("PortfolioField").value,
        education:document.getElementById("eduField").value,
        skill:document.getElementById("skillField").value,
        project:document.getElementById("projectField").value,
        certificate:document.getElementById("certField").value
    }
    localStorage.setItem('resumeData',JSON.stringify(resumeData));
    alert("Resume data saved successfully");

});

document.getElementById("genbtn").addEventListener("click", () => {
   
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('resumeData');
    const resumeData = JSON.parse(storedData);

    if(resumeData){
        const gen = window.open("", "_blank");

    let genData =`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <div>
    <div>
    <img src="${resumeData.image}" alt="" width="50px" height="60px"/>
    <h3>${resumeData.name}</h3>
    </div>
    <div>
    <p>Contact: ${resumeData.contact}</P>
    <p>Email: ${resumeData.email}</P>
    <p>Address: ${resumeData.address}</p>
    </div>
    </div>
    <hr/>
    <div>
    <div>
    <h4>Social Link</h4>
    <p>LinkedIn: ${resumeData.linkin}</p>
    <p>Github: ${resumeData.github}</p>
    <p>Portfolio: ${resumeData.portfolio}</P>
    <h4>Skill</h4>
    <p>${resumeData.skill}</p>
    <h4>Certifications</h4>
    <p>${resumeData.certificate}</p>
    </div>
    <div>
    <h4>Education</h4>
    <p>${resumeData.education}</p>
    <h4>Project<h4>
    <p>${resumeData.project}
    </div>
    </div>
    <body>
    <html>`;
    }
});
