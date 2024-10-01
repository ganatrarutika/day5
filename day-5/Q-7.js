// Predefined stored password
const storedPassword = "currentPassword123"; // Change this as needed

// Prompt for the current password
const currentPassword = prompt("Enter your current password:");

if (currentPassword === storedPassword) {
    // Prompt for the new password
    const newPassword = prompt("Enter your new password (at least 8 characters long):");

    // Check if the new password is at least 8 characters
    if (newPassword.length >= 8) {
        console.log("Password changed successfully!");
    } else {
        console.log("Error: New password must be at least 8 characters long.");
    }
} else {
    console.log("Error: Current password is incorrect.");
}
