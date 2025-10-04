import logging

from fastapi import APIRouter, Depends, HTTPException

from app.config import Settings, get_settings
from app.schemas import ChatRequest, ChatResponse
from app.services.chatbot import chat_completion

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/chat", tags=["chat"])


@router.post("", response_model=ChatResponse)
def chat(
    request: ChatRequest,
    settings: Settings = Depends(get_settings),
):
    try:
        messages = [{"role": m.role, "content": m.content} for m in request.messages]
        reply = chat_completion(settings=settings, messages=messages)
    except Exception as exc:
        logger.exception("Erreur lors de l'appel au LLM")
        raise HTTPException(
            status_code=500,
            detail="Le chatbot est temporairement indisponible.",
        ) from exc

    return ChatResponse(reply=reply)