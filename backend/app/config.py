from pydantic_settings import BaseSettings
from functools import lru_cache
 
class Settings(BaseSettings): 
    fastapi_env: str = "development"
    allowed_origins: str = "http://localhost:5173"

    # Groq
    groq_api_key: str = ""

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

    return Settings()
