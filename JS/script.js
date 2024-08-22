document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    const dropdown = document.getElementById('dropdown').value;

    // Check if a radio button is selected
    if (!selectedOption) {
        alert('Please select an option for question 1.');
        return;
    }

    // Display success message
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = `<strong>Success!</strong> You have submitted the form with the following details:<br>
        Name: ${name}<br>
        Email: ${email}<br>
        Number: ${number}<br>
        Selected Radio Option: ${selectedOption.value}<br>
        Dropdown Option: ${dropdown}`;

    // Clear the form
    document.getElementById('userForm').reset();
});