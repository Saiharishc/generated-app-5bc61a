from fastapi import FastAPI

app = FastAPI()

@app.get('/items')
def list_items():
    return {"message": "List of items"}
