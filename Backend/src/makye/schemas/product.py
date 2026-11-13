from pydantic import BaseModel, ConfigDict, Field


class ProductBase(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    details: str
    price: int = Field(gt=0)
    category: str
    images: list[str] = Field(min_length=1)
    colors: list[str] = []
    sizes: list[str] = []


class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    model_config =  ConfigDict(from_attributes=True)

    id: int