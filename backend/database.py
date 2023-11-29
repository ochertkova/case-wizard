import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv() 

DEFAULT_SETTINGS = ("sqlite:///./sql_app.db",  {"check_same_thread": False})
POSTGRESQL_DATABASE_URL = os.getenv("POSTGRESQL_DATABASE_URL")
(SQLALCHEMY_DATABASE_URL, connect_args) = DEFAULT_SETTINGS if POSTGRESQL_DATABASE_URL is None else (POSTGRESQL_DATABASE_URL, {})

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args=connect_args
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

async def is_alive():
    with engine.connect() as con:
        statement = text("SELECT 1")
        rs = con.execute(statement)
        for row in rs:
            return row[0] == 1
        return False
    
async def echo_number(number: int):
    with engine.connect() as con:
        stmt = text("SELECT {number}".format(number=number))
        rs = con.execute(stmt)
        for row in rs:
            return row[0]
        return -1