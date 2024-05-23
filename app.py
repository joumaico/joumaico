import os

from flask import Flask, render_template
from unisql import connect

from const import PRODUCTION

app = Flask(__name__)


@app.get('/')
def index():
    db = connect.sqlite('data.db')

    about = db.fetch('SELECT * FROM about;', multiple=False)
    projects = db.fetch('SELECT * FROM projects ORDER BY id;')
    stacks = db.fetch('SELECT * FROM stacks ORDER BY tag, name;')
    tags = db.fetch('SELECT * FROM tags;')
    links = db.fetch('SELECT * FROM links ORDER BY id;')

    db.close()

    return render_template(
        'index.html',
        about=about,
        projects=projects,
        stacks=stacks,
        tags=tags,
        links=links,
    )


if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 5000)),
        debug=False if PRODUCTION else True,
    )
