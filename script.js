function toIndustrial(time) {
    if (typeof time === 'string') {
      // Convert "h:mm" format to decimal time
      const [hours, minutes] = time.split(':').map(Number);
      return parseFloat((hours + minutes / 60).toFixed(2));
    } else if (typeof time === 'number') {
      // Convert minutes to decimal time
      return parseFloat((time / 60).toFixed(2));
    } else {
      // Handle invalid input
      return NaN;
    }
  }
  
  function toNormal(time) {
    // Round to the nearest minute
    const totalMinutes = Math.round(time * 60);
  
    // Calculate hours and minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
  
    // Format minutes and hours without leading zeros
    const formattedHours = hours.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
    return `${formattedHours}:${formattedMinutes}`;
  }
  
  // Examples
  console.log(toIndustrial(1));         // Output: 0.02
  console.log(toIndustrial("1:45"));    // Output: 1.75
  console.log(toNormal(1.5));           // Output: "1:30"
  