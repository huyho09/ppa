from datetime import datetime
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import uvicorn
import win32com.client
import pythoncom 
from fastapi.middleware.cors import CORSMiddleware

class RequestBody(BaseModel): 
    send_to: str
    content: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'],
    allow_methods = ['*'],
    allow_headers = ['*']
)

save_dir = os.path.join(os.path.expanduser("~"), "Downloads")

@app.post("/create_msg/")
def create_msg(request: RequestBody): 
    try: 
        # Initialize COM (Fix for CoInitialize error)
        pythoncom.CoInitialize()

        outlook = win32com.client.Dispatch("Outlook.Application")
        mail = outlook.CreateItem(0)
        print(mail)
        mail.Subject = f"Message to {request.send_to}"
        mail.Body = request.content
        mail.To = request.send_to

        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        filename = f"{request.send_to}_{timestamp}.msg"
        filepath = os.path.join(save_dir, filename)

        mail.SaveAs(filepath, 3)

        # Uninitialize COM (Cleanup)
        pythoncom.CoUninitialize()

        return {"message": "Email saved successfully!", "filename": filename, "filepath": filepath}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
