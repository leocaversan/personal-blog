from App.Controllers.naive_bayes import Model_Naive_Bayes
from App.Models.models import Body

from fastapi import APIRouter

model, vec, acuracy = Model_Naive_Bayes.train()

app_router = APIRouter()
    
@app_router.get('/')
def index():
    print('funcionou')
    return {'Acuracy': int(acuracy*100)}

@app_router.post('/predict')
def predict(data: Body):
    if Model_Naive_Bayes.predict(data.comment, model, vec) == 1:
        return {"message": "Que bom que gostou"}
    return {"message": "Que pena que não gostou, como podemos melhorar?"}