function toggleCard(card) {
  card.classList.toggle('expanded'); // Toggle the expanded class
  const indicator = card.querySelector('.toggle-indicator');
  indicator.textContent = card.classList.contains('expanded') ? 'Collapse' : 'Expand'; // Change the indicator
}