// Simulate donation data (replace with actual database interaction)
const donations = [
    { foodType: "Bread", quantity: 5, expiryDate: "2024-04-10", location: "Downtown" },
    { foodType: "Soup", quantity: 2, expiryDate: "2024-04-05", location: "" },
  ];
  
  // Populate donation list on page load
  const donationList = document.getElementById("donations-list");
  donations.forEach(donation => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${donation.foodType} - Quantity: ${donation.quantity} - Expires: ${donation.expiryDate} - ${donation.location ? `Location: ${donation.location}` : ""}
    `;
    donationList.appendChild(listItem);
  });
  