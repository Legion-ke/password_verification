# Password Management System

This is a simple form application designed to accept user passwords and store them securely using hashing techniques. Additionally, it provides functionality for users to change their passwords later. The system also checks if the new password matches any of the previously used passwords and warns the user accordingly.

## Features:

- **Password Storage:** User passwords are securely stored using hashing techniques to ensure data security.
- **Password Change:** Users can change their passwords at any time using the provided form.
- **Password History Check:** The system checks if the new password matches any previously used passwords and provides a warning if so.

## Usage:

1. **Set Up:**
   - Clone the repository to your local machine.
   - Ensure you have a compatible web server environment (e.g., Apache, Nginx) with PHP installed.

2. **Configuration:**
   - No additional configuration is required.

3. **Running the Application:**
   - Navigate to the project directory on your web server.
   - Open the `index.html` file in your web browser to access the form.

4. **Password Change:**
   - Enter your current password along with the new password in the designated fields.
   - Submit the form to change your password.

5. **Password History Warning:**
   - If the new password matches any of your previously used passwords, you will receive a warning message indicating that you've used the password before.

## Security:

- **Hashing:** Passwords are hashed before storage using secure hashing algorithms to prevent plaintext exposure.
- **Protection:** The system is designed to protect user passwords from unauthorized access and ensures data integrity.

## Note:

This application is meant for demonstration purposes and may require additional security measures and validation in a production environment.

## Contributors:

- [Your Name or Organization]

## License:

This project is licensed under the [License Name] License.
