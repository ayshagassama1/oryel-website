from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers import health, contact, services, chat

settings = get_settings()

app = FastAPI(
    title="Portfolio Oryel API",
    description="API backend du portfolio d'Aissatou Gassama / Oryel",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins.split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(health.router, prefix="/api")

@app.get("/")
def root():
    return {
        "app": "Portfolio Oryel API",
        "version": "0.1.0",
        "docs": "/docs",
    }

app.include_router(contact.router, prefix="/api")
app.include_router(services.router, prefix="/api")
app.include_router(chat.router, prefix="/api")
