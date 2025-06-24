# fastapi stuff here

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/api/test")
def read_root():
    return {"Hello": "World"}