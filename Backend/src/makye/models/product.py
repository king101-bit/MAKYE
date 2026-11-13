from sqlalchemy import JSON
from sqlalchemy.orm import Mapped, mapped_column

from makye.db.base import Base


class ProductRow(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(index=True)
    details: Mapped[str]
    price: Mapped[int]
    category: Mapped[str] = mapped_column(index=True)
    images: Mapped[list[str]] = mapped_column(JSON, default=list)
    colors: Mapped[list[str]] = mapped_column(JSON, default=list)
    sizes: Mapped[list[str]] = mapped_column(JSON, default=list)
