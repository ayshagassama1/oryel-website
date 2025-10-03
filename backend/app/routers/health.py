from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/health")
def health_check():
    """Endpoint de santé - utilisé par Docker, les load balancers,
    et les outils de monitoring pour vérifier que l'API tourne."""
    return {"status": "ok"}
