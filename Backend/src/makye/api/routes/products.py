from typing import Literal

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from makye.core.deps import get_db
from makye.models.product import ProductRow
from makye.schemas.product import Product, ProductCreate

router = APIRouter(prefix="/products", tags=["products"])

@router.get("", response_model=list[Product])
async def get_products(
    q: str | None = None,
    category: str | None = None,
    min_price: int | None = Query(None, ge=0),
    max_price: int | None = Query(None, ge=0),
    sort: Literal["low", "high"] | None = None,
    limit: int = Query(50, ge=1, le=100),
    db: AsyncSession = Depends(get_db),
):
    stmt = select(ProductRow)

    if q:
        stmt = stmt.where(ProductRow.name.ilike(f"%{q}%"))

    if category:
        stmt = stmt.where(ProductRow.category == category)

    if min_price is not None:
        stmt = stmt.where(ProductRow.price >= min_price)

    if max_price is not None:
        stmt = stmt.where(ProductRow.price <= max_price)

    if sort == "low":
        stmt = stmt.order_by(ProductRow.price.asc())
    elif sort == "high":
        stmt = stmt.order_by(ProductRow.price.desc())

    result = await db.scalars(stmt.limit(limit))
    return result.all()

@router.get("/{product_id}", response_model=Product)
async def get_product(product_id: int, db: AsyncSession = Depends(get_db)):
    product = await db.get(ProductRow, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.post("", response_model=Product, status_code=201)
async def create_product(data: ProductCreate, db: AsyncSession = Depends(get_db)):
    row = ProductRow(**data.model_dump())
    db.add(row)
    await db.commit()
    await db.refresh(row)
    return row
