import uuid

from makye.models.product import ProductRow
from sqlalchemy import ForeignKey, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from makye.db.base import Base


class CartRow(Base):
    __tablename__ = "carts"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id"),
        unique=True,
        index=True,
    )

    items: Mapped[list["CartItemRow"]] = relationship(
        back_populates="cart",
        cascade="all, delete-orphan",
        lazy="selectin",
    )


class CartItemRow(Base):
    __tablename__ = "cart_items"

    id: Mapped[int] = mapped_column(primary_key=True)

    cart_id: Mapped[int] = mapped_column(
        ForeignKey("carts.id", ondelete="CASCADE"),
    )

    product_id: Mapped[int] = mapped_column(
        ForeignKey("products.id"),
    )

    quantity: Mapped[int] = mapped_column(default=1)

    size: Mapped[str | None] = mapped_column(nullable=True)
    color: Mapped[str | None] = mapped_column(nullable=True)

    cart: Mapped["CartRow"] = relationship(back_populates="items")
    product: Mapped["ProductRow"] = relationship(lazy="joined")

    __table_args__ = (
        UniqueConstraint(
            "cart_id",
            "product_id",
            "size",
            "color",
            name="uq_cart_product_variant",
        ),
    )
