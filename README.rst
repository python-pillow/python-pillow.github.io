Pillow Website
==============

This website is hosted at `python-pillow.org <https://python-pillow.org/>`_
(also reachable at `python-pillow.github.io <https://python-pillow.github.io/>`_).

It's a static site — plain HTML, CSS, and a touch of vanilla JS, with no build
step or framework. GitHub Pages serves it directly from the ``main`` branch.

Structure
---------

- ``index.html`` — the entire site (single page)
- ``assets/css/pillow.css`` — all styles
- ``assets/js/back-to-top.js`` — the "back to top" button behavior
- ``assets/images/`` — logos, hero art, and other images
- ``assets/fontawesome/`` — vendored Font Awesome icons

Local preview
-------------

Since there's no build step, any static file server works, for example::

    python3 -m http.server 8000

Then open http://localhost:8000/ in a browser.

Contributing
------------

This repo uses `pre-commit <https://pre-commit.com/>`_ for basic hygiene
checks (trailing whitespace, end-of-file, YAML/JSON validation, etc.). Install
it and run against all files with::

    pre-commit run --all-files

or, if you have `just <https://github.com/casey/just>`_ installed::

    just precommit
