document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // ✅ ambil value dulu
  const name = document.getElementById("name").value.trim();
  const birth = document.getElementById("birth").value;
  const gender =
    document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("messageText").value.trim();
  const now = new Date().toLocaleString();

  if (!name || !birth || !gender || !message) {
    alert("Semua field harus diisi!");
    return;
  }

  document.getElementById("header").textContent =
    `Hi ${name}, Welcome To Website`;

  document.getElementById("resultBox").innerHTML = `
    <p>Current time: ${now}</p>
    <p>Nama: ${name}</p>
    <p>Tanggal Lahir: ${birth}</p>
    <p>Jenis Kelamin: ${gender}</p>
    <p>Pesan: ${message}</p>
  `;
  document.getElementById("messageForm").reset();
});