from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from makye.core.deps import get_current_user, get_db
from makye.models.user import User
from makye.schemas.cart import CartItemCreate, CartResponse
from makye.services.cart_service import add_to_cart, get_or_create_cart

router = APIRouter(prefix="/cart", tags=["Cart"])

DbSession = Depends(get_db)
CurrentUser = Depends(get_current_user)


@router.get("", response_model=CartResponse)
async def get_cart(
    db: AsyncSession = DbSession,
    user: User = CurrentUser,
):
    cart = await get_or_create_cart(db, user)
    await db.commit()
    return cart

@router.post("/items", response_model=CartResponse)
async def add_item(
    payload: CartItemCreate,
    db: AsyncSession = DbSession,
    user: User = CurrentUser,
):
    cart = await add_to_cart(db, user, payload)

    await db.commit()
    await db.refresh(cart)

    return cart
