from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from App.Routes import sentimental_analisys 

app = FastAPI()

origins = [
    "http://localhost:3000", 
    "http://44.219.245.85:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(sentimental_analisys.app_router, prefix='/api')
