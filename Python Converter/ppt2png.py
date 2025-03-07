from fastapi import FastAPI, UploadFile, File
import os
from comtypes import client
import pythoncom
from pathlib import Path
import logging
from fastapi.middleware.cors import CORSMiddleware
#uvicorn ppt2png:app --host 127.0.0.1 --port 8080
app = FastAPI()

UPLOAD_FOLDER = Path("input")
OUTPUT_FOLDER = Path("../back-end/src/assets/slide")
UPLOAD_FOLDER.mkdir(exist_ok=True)
OUTPUT_FOLDER.mkdir(exist_ok=True)

logging.basicConfig(level=logging.INFO)


app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'],
    allow_methods = ['*'],
    allow_headers = ['*']
)

def converter(input_file: str, output_folder: str):
    pythoncom.CoInitialize()
    try:
        input_file = str(Path(input_file).resolve())  
        output_folder = str(Path(output_folder).resolve()) 

        powerpoint = client.CreateObject("PowerPoint.Application")
        presentation = powerpoint.Presentations.Open(input_file, WithWindow=0)
        os.makedirs(output_folder, exist_ok=True)
        presentation.Export(output_folder, "PNG")
        presentation.Close()
        powerpoint.Quit()
    except Exception as e:
        logging.error(f"Error converting file {input_file}: {e}")
    finally:
        pythoncom.CoUninitialize()

@app.post("/convert")
async def upload_ppt(file: UploadFile = File(...)):
    file_path = UPLOAD_FOLDER / file.filename
    with open(file_path, "wb") as f:
        f.write(await file.read())

    output_folder = OUTPUT_FOLDER
    try:
        converter(str(file_path), str(output_folder))
        images = [f"{img}" for img in os.listdir(output_folder)]
        return {"images": images}
    except Exception as e:
        logging.error(f"Error processing file {file.filename}: {e}")
        return {"error": str(e)}