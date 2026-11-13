import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)

class UserRead(BaseModel):
    model_config =  ConfigDict(from_attributes=True)

    id: uuid.UUID
    email: EmailStr
    name: str | None
    delivery_address: str | None
    avatar_key: str | None
    created_at: datetime

class UserUpdate(BaseModel):
    name: str | None = None
    delivery_address: str | None = None