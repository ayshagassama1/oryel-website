from fastapi import APIRouter, HTTPException

from app.data.services import SERVICES, PROJECTS

router = APIRouter(tags=["catalog"])


@router.get("/services")
def list_services():
    return SERVICES


@router.get("/services/{service_id}")
def get_service(service_id: str):
    service = next((s for s in SERVICES if s["id"] == service_id), None)
    if not service:
        raise HTTPException(status_code=404, detail="Service introuvable")
    return service


@router.get("/projects")
def list_projects(category: str | None = None):
    if category:
        return [p for p in PROJECTS if p["category"] == category]
    return PROJECTS