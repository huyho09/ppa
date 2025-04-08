import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Outlook SMTP settings
SMTP_SERVER = "smtp.office365.com"
SMTP_PORT = 587
EMAIL_ADDRESS = "nguyenhoangtuananh2002@gmail.com"
EMAIL_PASSWORD = "Tuananh@2002"

def send_email(to_email, subject, message):
    try:
        # Create the email message
        msg = MIMEMultipart()
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = to_email
        msg["Subject"] = subject
        msg.attach(MIMEText(message, "plain"))

        # Connect to the Outlook SMTP server
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()  # Upgrade the connection to secure
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)
        server.quit()

        print("Email sent successfully!")

    except Exception as e:
        print(f"Error: {e}")

# Usage example
send_email("nguyenhoangtuananh2002@gmail.com", "Test Subject", "Hello, this is a test email from Python!")
