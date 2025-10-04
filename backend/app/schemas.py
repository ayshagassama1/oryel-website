from pydantic import BaseModel, EmailStr, Field


class ContactForm(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    service: str | None = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)


class ContactResponse(BaseModel):
    status: str
    message: str