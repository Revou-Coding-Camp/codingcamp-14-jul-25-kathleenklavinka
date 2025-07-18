document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const resultBox = document.getElementById("resultBox");
  const nameField = document.getElementById("name");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("inputName").value;
    const birth = document.getElementById("inputDate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("inputMessage").value;
    const now = new Date();

    nameField.textContent = name;

    resultBox.innerHTML = `
      <strong>Current time:</strong> ${now.toString()} <br/>
      <strong>Nama:</strong> ${name} <br/>
      <strong>Tanggal Lahir:</strong> ${birth} <br/>
      <strong>Jenis Kelamin:</strong> ${gender} <br/>
      <strong>Pesan:</strong> ${message}
    `;
  });
});