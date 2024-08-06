document.addEventListener("DOMContentLoaded", function() {
  function populateCalendar() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    let calendarHTML = '<table>';
    calendarHTML += '<tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>';
    calendarHTML += '<tr>';

    for (let i = 0; i < firstDayIndex; i++) {
      calendarHTML += '<td></td>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
      if ((firstDayIndex + day - 1) % 7 === 0 && day !== 1) {
        calendarHTML += '</tr><tr>';
      }
      calendarHTML += `<td>${day}</td>`;
    }

    calendarHTML += '</tr></table>';
    document.getElementById('calendar').innerHTML = calendarHTML;

    const cells = document.querySelectorAll('#calendar td');
    cells.forEach(cell => {
      if (cell.textContent !== '') {
        cell.addEventListener('click', function() {
          const selectedDate = `${cell.textContent}/${month + 1}/${year}`;
          alert(`You selected ${selectedDate}`);
          // You can handle the date selection here, e.g., sending it to a server or updating the UI
        });
      }
    });
  }

  populateCalendar();  // Ensure this function is called
});
