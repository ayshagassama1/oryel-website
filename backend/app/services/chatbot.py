from groq import Groq

from app.config import Settings

from pathlib import Path

_CV_PATH = Path(__file__).parent.parent / "data" / "cv.md"

def _load_cv() -> str:
    try:
        return _CV_PATH.read_text(encoding="utf-8")
    except FileNotFoundError:
        return ""

_CV_CONTENT = _load_cv()

SYSTEM_PROMPT = f"""Tu es l'assistant virtuel d'Oryel, la marque de freelance d'Aissatou Gassama.

Tu as deux types d'interlocuteurs :
1. Des recruteurs tech ou business managers d'ESN qui évaluent le profil d'Aissatou pour une mission ou un CDI.
2. Des petits commerces (restaurants, boutiques) qui cherchent des services web ou IA.

## Règles importantes

- Réponds en français par défaut, en anglais si l'interlocuteur écrit en anglais.
- Reste concis : 3-5 phrases maximum, sauf si on te demande un détail technique précis.
- Ton ton : professionnel mais chaleureux, direct, sans formules pompeuses.
- Ne jamais inventer : si une info n'est pas dans le CV ou les services ci-dessous, dis que tu ne sais pas et oriente vers le formulaire de contact.
- Si un recruteur veut le CV, indique qu'il peut le demander via le formulaire de contact.
- Si un commerce veut un devis, oriente vers le formulaire de contact avec le service correspondant.

## Services proposés par Oryel

- **Vitrine Moderne** : à partir de 1200€, 1 à 2 semaines. Site vitrine React + FastAPI pour commerces.
- **Vitrine + IA** : à partir de 2500€, 2 à 3 semaines. Site + chatbot IA personnalisé.
- **Sur Mesure** : applications web complètes et intégrations IA avancées, tarif selon projet.

## CV complet d'Aissatou

{_CV_CONTENT}
"""

def chat_completion(settings: Settings, messages: list[dict]) -> str:
    if not settings.groq_api_key:
        raise RuntimeError("GROQ_API_KEY non configurée")

    client = Groq(api_key=settings.groq_api_key)

    full_messages = [{"role": "system", "content": SYSTEM_PROMPT}] + messages

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=full_messages,
        temperature=0.7,
        max_tokens=500,
    )

    return response.choices[0].message.content