import smtplib
from fastapi import FastAPI
from email.message import EmailMessage
import os
from dotenv import load_dotenv
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import socks
import socket


socks.set_default_proxy(socks.PROXY_TYPE_HTTP, "127.0.0.1", 3128)
socket.socket = socks.socksocket

# Load environment variables
load_dotenv()

app = FastAPI()

SMTP_SERVER = os.getenv('SMTP_SERVER') 
SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
EMAIL_SENDER = os.getenv("EMAIL_SENDER")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

print(f"SMTP Server: {SMTP_SERVER}")
print(f"SMTP Port: {SMTP_PORT} - {type(SMTP_PORT)}")
print(f"Sender Email: {EMAIL_SENDER}")
print(f"Email Password: {EMAIL_PASSWORD}")

class EmailRequest(BaseModel): 
    destination_mail: str
    content: str

def send_email(destination_mail: str, content: str): 
    msg = EmailMessage()
    msg.set_content(content)
    msg["Subject"] = "Email from Admin"
    msg["From"] = EMAIL_SENDER
    msg["To"] = destination_mail
    print(f"msg: {msg}")
    try: 
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server: 
            print("starting ttls")
            server.starttls()
            print("Start TTLS success")
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            print("Login success")
            server.send_message(msg)
            print("send done")
        return JSONResponse(content={
            "status": "Email sent successfully",
            "destination_email": destination_mail,
            "content": content
        }, status_code=200)
    
    except Exception as e:
        print("HELLO WORLD") 
        return JSONResponse(content={
            "status": "Failed to send email",
            "error": str(e)
        }, status_code=500)

@app.post("/send_email/")
def send_email_api(request: EmailRequest): 
    return send_email(request.destination_mail, request.content)
