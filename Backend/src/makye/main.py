from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from makye.api.routes import auth, cart, products, users

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(cart.router)
app.include_router(products.router)

@app.get("/")
async def health():
    return {"status": "ok"}
