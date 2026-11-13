from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env")

    #Database
    database_url: str
    database_url_pooled: str

    #Auth
    secret_key: str
    algorithm: str = 'HS256'
    access_token_expire_minutes: int = 30

    #Object Storage
    aws_endpoint_url_s3: str
    aws_access_key_id: str
    aws_secret_access_key: str
    aws_region: str
    s3_bucket: str


settings = Settings()