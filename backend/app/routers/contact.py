from fastapi import APIRouter, Depends, HTTPException

from app.config import Settings, get_settings
from app.schemas import ContactForm, ContactResponse
from app.services.email import send_contact_email

import logging

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/contact", tags=["contact"])

SUCCESS_MESSAGE = "Votre message a bien été envoyé. Je vous réponds sous 24h."

# En dessous de ce délai entre l'ouverture de la page et l'envoi, on considère
# que ce n'est pas un humain qui a rempli le formulaire.
MIN_FILL_TIME_MS = 3000


def _spam_reason(form: ContactForm) -> str | None:
    if form.fax:
        return "honeypot rempli"
    if form.elapsed_ms is None:
        return "envoi hors formulaire (elapsed_ms absent)"
    if form.elapsed_ms < MIN_FILL_TIME_MS:
        return f"envoi trop rapide ({form.elapsed_ms} ms)"
    return None


@router.post("", response_model=ContactResponse)
def submit_contact(
    form: ContactForm,
    settings: Settings = Depends(get_settings),
):
    reason = _spam_reason(form)
    if reason:
        # On répond comme si tout s'était bien passé : le robot ne sait pas
        # qu'il a été repéré, et aucun email n'est envoyé.
        logger.warning("Message de contact ignoré (spam probable) : %s", reason)
        return ContactResponse(status="sent", message=SUCCESS_MESSAGE)

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
        message=SUCCESS_MESSAGE,
    )