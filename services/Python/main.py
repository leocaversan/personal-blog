from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from App.Models.models import Body

from App.Controllers.naive_bayes import Model_Naive_Bayes

model, vec, acuracy = Model_Naive_Bayes.train()
predict = Model_Naive_Bayes.predict

app = FastAPI()

origins = [
    "http://localhost:3000", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def index():
    return {'Acuracy': int(acuracy*100)}

@app.post('/predict')
def predict_price(data: Body):
    if predict(data.comment, model, vec) == 1:
        return {"message": "Que bom que gostou"}
    return {"message": "Que pena que não gostou, como podemos melhorar?"}