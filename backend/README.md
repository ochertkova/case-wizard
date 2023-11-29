## Fast API + db microapp

Simple Fast API and SQL lite app using pipenv. The app provides close to no functionality

Running the app:
1. clone this repo
2. run `pipenv install`
3. run `pipenv run devserver`. The default port is `8000`. This can  be changed by giving `--port PORT_NUMBER`. 

Open `http://localhost:8000/docs` to access the OpenAPI documentation

### Using PostgreSQL

By default this microapp uses SQLLite. You can use PostgreSQL by adding the following in the file `.env` in the project directory.

```bash
POSTGRESQL_DATABASE_URL=postgresql://test:Password123@localhost:5555
```

You should then run `docker compose run -d` before running the devserver.