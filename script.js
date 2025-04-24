const form = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

const nameCharCount = document.createElement('small');
nameCharCount.style.display = 'block';
nameCharCount.style.marginTop = '5px';
fullNameInput.parentNode.appendChild(nameCharCount);

fullNameInput.addEventListener('input', () => {
  nameCharCount.textContent = `${fullNameInput.value.length} characters`;
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{7,15}$/.test(phone);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const organization = document.getElementById('organization').value.trim();
  const role = document.getElementById('role').value;

  if (!fullName || !email || !phone || !role) {
    alert('Please fill in all required fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!isValidPhone(phone)) {
    alert('Please enter a valid phone number (7-15 digits).');
    return;
  }

  const confirmation = `
    📋 Registration Summary:
    -------------------------
    👤 Name: ${fullName}
    📧 Email: ${email}
    📱 Phone: ${phone}
    🏢 Organization: ${organization || 'N/A'}
    🧑‍💼 Role: ${role}

    ✅ Thank you for registering!
  `;
  alert(confirmation);

  form.reset();
  nameCharCount.textContent = '';
});
