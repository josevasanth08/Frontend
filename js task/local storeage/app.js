document.getElementById("saveBtn").addEventListener("click", () => {
    const payData = {
        name: document.getElementById('name').value,
        eid: document.getElementById('eid').value,
        phone: document.getElementById('phone').value,
    };
    localStorage.setItem("payData", JSON.stringify(payData));
    alert("payslip data saved successfully!");
});

document.getElementById("printBtn").addEventListener('click', () => {
    const payData = JSON.parse(localStorage.getItem("payData"));
    if (payData) {
        const print = window.open('', '_blank');
        print.document.write(`Name: ${payData.name}<br>`);
        print.document.write(`Eid: ${payData.eid}<br>`);
        print.document.write(`Phone: ${payData.phone}<br>`);
    }
});
document.getElementById("viewCard").addEventListener('click', () => {
    const payData = JSON.parse(localStorage.getItem("payData"));

    var container = document.getElementById("cardContainer");

    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h4>Employee Details</h4>
        <p>Employee Name: ${payData.name}</p>
        <p>Employee Id: ${payData.eid}</p>
        <p>Employee Number: ${payData.phone}</p>
    `;
    container.appendChild(card);
});