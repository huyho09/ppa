import requests


url = 'http://127.0.0.1:8000/create_msg/'

body = {
    "send_to" : "20200129@student.hcmus.edu.vn",
    "content" : "Hello, this is a test message"
}

response = requests.post(url=url,json=body,timeout=100)
print(response.status_code)
print(response.content)