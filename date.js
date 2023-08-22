// Export a function to get the current date in a specific format
exports.getDate = function () {
    const today = new Date(); // Get the current date and time
    
    const options = {
      weekday: 'long', // Set the weekday format to full name (e.g., "Monday")
      day: 'numeric', // Set the day of the month format to numeric (e.g., "1")
      month: 'long' // Set the month format to full name (e.g., "January")
    };
    
    // Return the current date in the specified format
    return today.toLocaleDateString("en-US", options);
  }
  
  // Export a function to get the current day of the week in a specific format
  exports.getDay = function() {
    const today = new Date(); // Get the current date and time
    
    const options = {
      weekday: 'long' // Set the weekday format to full name (e.g., "Monday")
    };
    
    // Return the current day of the week in the specified format
    return today.toLocaleDateString("en-US", options);
  }
  