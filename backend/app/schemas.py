from pydantic import BaseModel, EmailStr, Field


class ContactForm(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    service: str | None = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)
    # Anti-spam. `fax` est un champ piège (honeypot) invisible pour un humain :
    # s'il est rempli, c'est un robot. `elapsed_ms` est le temps passé sur la
    # page avant l'envoi : un humain met plusieurs secondes, un robot non.
    fax: str | None = Field(None, max_length=200)
    elapsed_ms: int | None = Field(None, ge=0)


class ContactResponse(BaseModel):
    status: str
    message: str

class ChatMessage(BaseModel):
    role: str = Field(..., pattern="^(user|assistant)$")
    content: str = Field(..., min_length=1, max_length=2000)

 
class ChatRequest(BaseModel):
    messages: list[ChatMessage] = Field(..., min_length=1, max_length=20)


class ChatResponse(BaseModel):
    reply: str