from fastapi import HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from makye.models.cart import CartItemRow, CartRow
from makye.models.product import ProductRow
from makye.models.user import User
from makye.schemas.cart import CartItemCreate


async def get_or_create_cart(
    db: AsyncSession,
    user: User,
) -> CartRow:
    stmt = (
        select(CartRow)
        .where(CartRow.user_id == user.id)
        .options(
            selectinload(CartRow.items).joinedload(CartItemRow.product)
        )
    )

    result = await db.execute(stmt)
    cart = result.scalar_one_or_none()

    if cart:
        return cart

    cart = CartRow(user_id=user.id)

    db.add(cart)
    await db.flush()

    return cart

async def add_to_cart(
    db: AsyncSession,
    user: User,
    payload: CartItemCreate,
) -> CartRow:
    product = await db.get(ProductRow, payload.product_id)

    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    if product.sizes and payload.size not in product.sizes:
        raise HTTPException(status_code=400, detail="Invalid product size")

    if product.colors and payload.color not in product.colors:
        raise HTTPException(status_code=400, detail="Invalid product color")

    if not product.sizes and payload.size:
        raise HTTPException(status_code=400, detail="This product has no sizes")

    if not product.colors and payload.color:
        raise HTTPException(status_code=400, detail="This product has no colors")

    cart = await get_or_create_cart(db, user)

    stmt = select(CartItemRow).where(
        CartItemRow.cart_id == cart.id,
        CartItemRow.product_id == product.id,
        CartItemRow.size == payload.size,
        CartItemRow.color == payload.color,
    )

    result = await db.execute(stmt)
    item = result.scalar_one_or_none()

    if item:
        item.quantity += payload.quantity
    else:
        item = CartItemRow(
            cart_id=cart.id,
            product_id=product.id,
            quantity=payload.quantity,
            size=payload.size,
            color=payload.color,
        )
        db.add(item)

    await db.flush()

    return cart
