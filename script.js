function showDashboard() {
    hideAllSections();
    document.getElementById('dashboard').classList.add('active');
  }
  
  function showServices() {
    hideAllSections();
    document.getElementById('services').classList.add('active');
  }
  
  function showPages() {
    hideAllSections();
    document.getElementById('pages').classList.add('active');
  }
  
  function showContactQueries() {
    hideAllSections();
    document.getElementById('contact-queries').classList.add('active');
  }
  
  function showBookings() {
    hideAllSections();
    document.getElementById('bookings').classList.add('active');
  }
  
  function showSearch() {
    hideAllSections();
    document.getElementById('search').classList.add('active');
  }
  
  function showReports() {
    hideAllSections();
    document.getElementById('reports').classList.add('active');
  }
  
  function showProfile() {
    hideAllSections();
    document.getElementById('profile').classList.add('active');
  }
  
  function logout() {
    // Add logout functionality here
  }
  
  function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
  }
  