document.addEventListener("DOMContentLoaded", function() {
  const doctor = {
    profile_picture: '../img/therapist2.jpg',
    name: 'Dr. Mena ELG',
    specialty: 'Anxiety',
    email: 'dr_mena_anxiety@example.com',
    phone: '(234) 567-8901',
    address: '789 Peace Road, MindCity, HealthyCountry',
    biography: 'Dr. Mena focuses on anxiety disorders, offering therapy to manage stress and improve mental well-being.',
    education: [
      'MD, Psychiatry, University of Health Sciences',
      'Residency, Psychiatry, National Mental Health Institute'
    ],
    experience: 12
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
