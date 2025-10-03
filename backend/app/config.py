from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Configuration de l'application.

    Les valeurs sont lues depuis les variables d'environnement
    ou depuis un fichier .env à la racine du projet.
    """

    fastapi_env: str = "development"
    allowed_origins: str = "http://localhost:5173"

    # OpenAI
    openai_api_key: str = ""

    # Email (contact form)
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    contact_email: str = ""

    class Config:
        env_file = "../.env"
        env_file_encoding = "utf-8"


@lru_cache
def get_settings() -> Settings:
    """Retourne les settings en cache (singleton).

    En FastAPI, on injecte les settings via Depends(get_settings)
    dans les routes qui en ont besoin - c'est le système
    d'injection de dépendances, l'équivalent du Service Container
    de Laravel.
    """
    return Settings()
