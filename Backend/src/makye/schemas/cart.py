from pydantic import BaseModel, Field


class CartItemCreate(BaseModel):
    product_id: int
    quantity: int = Field(default=1, ge=1)
    size: str | None = None
    color: str | None = None

class CartItemUpdate(BaseModel):
    quantity: int = Field(ge=1)

class CartProduct(BaseModel):
    id: int
    name: str
    price: int
    images: list[str]

    model_config = {"from_attributes": True}


class CartItemResponse(BaseModel):
    id: int
    quantity: int
    size: str | None
    color: str | None
    product: CartProduct

    model_config = {"from_attributes": True}


class CartResponse(BaseModel):
    id: int
    items: list[CartItemResponse]

    model_config = {"from_attributes": True}
