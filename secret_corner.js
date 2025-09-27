const PIN = "9586"; // change this

const pinBtn = document.getElementById('pin-btn');
const pinInput = document.getElementById('pin-input');
const pinScreen = document.getElementById('pin-screen');


const toast = document.querySelector("#toast")

const list = document.getElementById('list');

let contacts = [];

// ===== Load contacts from contacts.json =====
async function loadContacts() {
  try {
    const res = await fetch("./contacts.json"); // same folder as index.html
    contacts = await res.json();
    renderContacts(contacts);
  } catch (err) {
    console.error("Error loading contacts:", err);
  }
}

function renderContacts(data) {
  list.innerHTML = "";
  data.sort((a, b) => a.name.localeCompare(b.name)).forEach((c, i) => {
    const gender = i % 2 === 0 ? "male" : "female";
    list.innerHTML += `
      <div class="contact">
        <div class="avatar ${gender}">
          <svg viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </div>
        <div class="info">
          <div class="name">${c.name}</div>
          <div class="number">${c.number}</div>
        </div>
      </div>
    `;
  });
}


// ===== PIN unlock =====
pinBtn.addEventListener('click', () => {
  if (pinInput.value === PIN) {
    pinInput.style.color = "green";
    setTimeout(() => {
      pinScreen.style.display = 'none';
    }, 1000);
  } else {

    pinInput.setAttribute("disabled", "true")
    pinInput.classList.toggle("red-color")
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show')
      pinInput.value = '';
      pinInput.classList.toggle("red-color")
      pinInput.removeAttribute("disabled")
    }, 2000);
  }
});

pinInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') pinBtn.click();
});

// ===== Live search =====
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(q) || c.number.toLowerCase().includes(q)
  );
  renderContacts(filtered);
});

// Call loader on start
loadContacts();
