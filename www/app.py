from flask import Flask
from flask import render_template

from unisql import connect

from const import DEPLOY

app = Flask(__name__)


@app.get("/")
def index():
    db = connect.sqlite("data.db")

    query = "SELECT * FROM about;"
    about = db.fetch(query, multiple=False)

    query = "SELECT * FROM projects ORDER BY id;"
    projects = db.fetch(query)

    query = "SELECT * FROM stacks ORDER BY tag, name;"
    stacks = db.fetch(query)

    query = "SELECT * FROM tags;"
    tags = db.fetch(query)

    query = "SELECT * FROM links ORDER BY id;"
    links = db.fetch(query)

    db.close()

    return render_template(
        "index.html",
        about=about,
        projects=projects,
        stacks=stacks,
        tags=tags,
        links=links,
    )


if __name__ == "__main__":
    if DEPLOY:
        app.run(host="0.0.0.0", port=8000, debug=False)
    else:
        app.run(debug=True)
