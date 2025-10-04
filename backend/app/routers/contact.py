from fastapi import APIRouter, Depends, HTTPException

from app.config import Settings, get_settings
from app.schemas import ContactForm, ContactResponse
from app.services.email import send_contact_email

import logging

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("", response_model=ContactResponse)
def submit_contact(
    form: ContactForm,
    settings: Settings = Depends(get_settings),
):
    try:
        send_contact_email(
            settings=settings,
            name=form.name,
            email=form.email,
            service=form.service,
            message=form.message,
        )
    except Exception as exc:
        logger.exception("Erreur envoi email contact")
        raise HTTPException(
            status_code=500,
            detail="Erreur lors de l'envoi du message. Réessayez plus tard.",
        ) from exc

    return ContactResponse(
        status="sent",
        message="Votre message a bien été envoyé. Je vous réponds sous 24h.",
    )