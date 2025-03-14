import os
import sys
import requests

url = "http://localhost:5000/convert"
pptx_path = "C:/Users/AYG5HC/Downloads/abc.pptx"  
headers = {
    'User-Agent': 'python-requests/2.31.0',
    'Accept-Encoding': 'gzip, deflate',
    'Accept': '*/*',
    'Connection': 'keep-alive',
}

if not os.path.exists(pptx_path):
    print(f"Error: File '{pptx_path}' not found!")
    sys.exit(1)

with open(pptx_path, "rb") as file:
    files = {"file": file}
    response = requests.post(url, files=files,timeout=100,headers=headers)

print("Status Code:", response.status_code)
print("Response Text:", response.text)
