import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from app.config import Settings


def send_contact_email(
    settings: Settings,
    name: str,
    email: str,
    service: str | None,
    message: str,
) -> None:
    if not settings.smtp_user or not settings.smtp_password:
        print(f"[DEV] Contact reçu : {name} <{email}> — {service or 'aucun service'}")
        print(f"[DEV] Message : {message}")
        return

    msg = MIMEMultipart()
    msg["From"] = settings.smtp_user
    msg["To"] = settings.contact_email
    msg["Subject"] = f"[Oryel] Nouveau contact : {name}"

    body = f"""
Nouveau message reçu via le portfolio :

Nom     : {name}
Email   : {email}
Service : {service or "Non précisé"}

Message :
{message}
"""
    msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
        server.starttls()
        server.login(settings.smtp_user, settings.smtp_password)
        server.send_message(msg)