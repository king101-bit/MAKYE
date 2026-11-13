from fastapi import APIRouter

from makye.core.deps import CurrentUser, DbSession
from makye.schemas.user import UserRead, UserUpdate


router = APIRouter(prefix="/users", tags=["users"])


@router.get("/me", response_model=UserRead)
async def read_me(user: CurrentUser):
    return user

@router.patch("/me", response_model=UserRead)
async def update_me(user: CurrentUser, payload: UserUpdate, db: DbSession):
    updates = payload.model_dump(exclude_unset=True)

    for field, value in updates.items():
        setattr(user, field, value)

    await db.commit()
    await db.refresh(user)

    return user
    