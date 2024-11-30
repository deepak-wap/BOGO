// Update the 'active' state for the selected option
const setActiveOption = (options, selectedOption) => {
  const price = selectedOption.querySelector(".usd-text"); // Get Pice element of selected options
  const total = document.querySelector(".total-text"); // Get Total element

  total.innerHTML = "Total: "+ price.innerHTML // update total ammount of selected option
  options.forEach((option) => option.classList.remove("active")); // Remove active class from all options
  selectedOption.classList.add("active"); // Add active class to the selected option
};

// Pre-select an option by index
const setInitialOption = (options, index) => {
  const targetOption = options[index];
  if (!targetOption) return; // Exit if the index is out of bounds

  const price = targetOption.querySelector(".usd-text"); // Get Pice element of selected options
  const total = document.querySelector(".total-text");  // Get Total element

  total.innerHTML = "Total: "+ price.innerHTML // update total ammount of selected option
  
  const radio = targetOption.querySelector("input[type='radio']");
  if (!radio) return; // Exit if the radio button is not found

  radio.checked = true; // Check the radio button
  radio.dispatchEvent(new MouseEvent("click")); // Trigger click event to update the active state
};

const initializeOptions = () => {
  const options = document.querySelectorAll(".option"); // Get all option containers

  // Attach event listeners to each option container
  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");
    if (!radio) return; // Skip if no radio button is found

    // Handle radio button click
    radio.addEventListener("click", () => setActiveOption(options, option));

    // Handle option container click (excluding direct radio or label clicks)
    option.addEventListener("click", (event) => {
      if (event.target !== radio && !event.target.closest("label")) {
        radio.click(); // Simulate a radio button click
      }
    });
  });

  // Pre-select the second option
  setInitialOption(options, 1);
};

document.addEventListener("DOMContentLoaded", initializeOptions);
