from pydantic import BaseModel

class Body(BaseModel):
    comment: str = None
