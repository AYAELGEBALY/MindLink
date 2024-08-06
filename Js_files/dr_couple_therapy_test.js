document.addEventListener("DOMContentLoaded", function() {
  const doctor = {
    profile_picture: '../img/support1.jpg',
    name: 'Dr. Jo M.',
    specialty: 'Couple Therapy',
    email: 'dr_jo_couple@example.com',
    phone: '(345) 678-9012',
    address: '123 Harmony Street, MindCity, HealthyCountry',
    biography: 'Dr. Jo is an expert in couple therapy, assisting partners in enhancing their relationship and resolving conflicts.',
    education: [
      'MD, Psychiatry, University of Health Sciences',
      'Residency, Psychiatry, National Mental Health Institute'
    ],
    experience: 10
  };

  document.getElementById('profile-picture').src = doctor.profile_picture;
  document.getElementById('doctor-name').textContent = doctor.name;
  document.getElementById('doctor-specialty').textContent = `Specialty: ${doctor.specialty}`;
  document.getElementById('doctor-email').textContent = doctor.email;
  document.getElementById('doctor-email').href = `mailto:${doctor.email}`;
  document.getElementById('doctor-phone').textContent = doctor.phone;
  document.getElementById('doctor-phone').href = `tel:${doctor.phone}`;
  document.getElementById('doctor-address').textContent = doctor.address;
  document.getElementById('doctor-biography').textContent = doctor.biography;

  const educationList = document.getElementById('doctor-education');
  doctor.education.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    educationList.appendChild(li);
  });

  document.getElementById('doctor-experience').textContent = `${doctor.experience} years`;

  const appointmentButton = document.getElementById('appointment-button');
  appointmentButton.addEventListener('click', function() {
    window.location.href = '../html_files/appointment_page.html';
  });
});
