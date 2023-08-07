import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text  import CountVectorizer
from sklearn.naive_bayes import MultinomialNB 
import sys
from ..Utils.data_bases import data_base

sys.dont_write_bytecode = True

avaliacoes_positivas = data_base.position_avaliable()
avaliacoes_negativas = data_base.negative_avaliable()

class Model_Naive_Bayes(object):
    def train():
    #creating the fake base provided by gpt chat

        fake_data_feedback_positive = {
            "avaliacoes": avaliacoes_positivas,
            "notas": [1 for x in range(len(avaliacoes_positivas))]
        }
        fake_data_feedback_negative = {
            "avaliacoes": avaliacoes_negativas,
            "notas": [0 for x in range(len(avaliacoes_negativas))]
        }

        df_fake_data_feedback = pd.concat([pd.DataFrame(fake_data_feedback_positive), pd.DataFrame(fake_data_feedback_negative)])
        df_fake_data_feedback = df_fake_data_feedback.sample(frac = 1).reset_index(drop=True)

        #separate base between training and testing
        y = df_fake_data_feedback['notas']
        x = df_fake_data_feedback['avaliacoes']
        x, x_test, y, y_test = train_test_split(x, y, test_size=0.1, random_state=42)

        # Vectorize text reviews to numbers
        vec = CountVectorizer()
        x = vec.fit_transform(x).toarray()
        x_test = vec.transform(x_test).toarray()

        model = MultinomialNB() 
        model.fit(x, y)
        acuracy = model.score(x_test, y_test)
        
        return model, vec, acuracy

    def predict(comment:str, model, vec):
        return model.predict(vec.transform([comment]))
