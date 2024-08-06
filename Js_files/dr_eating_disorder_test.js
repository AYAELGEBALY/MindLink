document.addEventListener("DOMContentLoaded", function() {
  const doctor = {
    profile_picture: '../img/images_dr/dr1.jpeg',
    name: 'Dr. Juan P',
    specialty: 'Eating Disorder',
    email: 'dr_juan_eating@example.com',
    phone: '(567) 890-1234',
    address: '789 Healthy Road, MindCity, HealthyCountry',
    biography: 'Dr. Juan treats eating disorders, supporting patients in developing a healthy relationship with food and their bodies.',
    education: [
      'MD, Psychiatry, University of Health Sciences',
      'Residency, Psychiatry, National Mental Health Institute'
    ],
    experience: 14
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
