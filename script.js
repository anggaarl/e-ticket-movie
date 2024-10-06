// Function to open the booking modal and set the movie name
function openBookingModal(movieTitle) {
    const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
    document.getElementById('movieName').value = movieTitle;
    bookingModal.show();
  }
  
  // Handle form submission
  document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const movieName = document.getElementById('movieName').value;
    const userName = document.getElementById('userName').value;
    const ticketCount = document.getElementById('ticketCount').value;
  
    if (userName && ticketCount) {
      alert(`Thank you ${userName}, you have successfully booked ${ticketCount} tickets for "${movieName}"!`);
  
      // Reset form
      document.getElementById('bookingForm').reset();
      
      // Close modal
      const bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
      bookingModal.hide();
    }
  });
  