from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from makye.core.config import settings

engine = create_async_engine(
    settings.database_url_pooled,
    pool_pre_ping=True,
)

SessionLocal = async_sessionmaker(engine, expire_on_commit=False)