document.addEventListener("DOMContentLoaded", function() {
  const doctor = {
    profile_picture: '../img/images_dr/dr1.jpeg',
    name: 'Dr. Aya',
    specialty: 'Depression',
    email: 'dr_aya@example.com',
    phone: '(123) 456-7890',
    address: '456 Wellness Avenue, MindCity, HealthyCountry',
    biography: 'Dr. Aya is a highly respected psychiatrist with over 15 years of experience in treating depression. She obtained her medical degree from the University of Health Sciences and completed his psychiatry residency at the National Mental Health Institute. Known for her compassionate and comprehensive approach, Dr. Aya has helped numerous patients navigate the complexities of depression. Dr. Aya is committed to advancing mental health care through both practice and research. She has published several articles on innovative treatment strategies and frequently shares her expertise at international conferences. Her work integrates cognitive behavioral therapy with pharmacological interventions, ensuring that her patients receive the best possible care. Currently, Dr. Aya practices at MindCity Mental Health Clinic in HealthyCountry, where she continues to provide personalized and evidence-based treatment to her patients. Her dedication to ongoing education ' +
      'and research ensures that her patients benefit from the latest advancements in mental health care.',
    education: [
      'MD, Psychiatry, University of Health Sciences',
      'Residency, Psychiatry, National Mental Health Institute'
    ],
    experience: 15
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
    console.log('Appointment button clicked');
    //window.location.href = 'calendar.html';
    window.location.href = '../html_files/appointment_page.html';
  });
});
