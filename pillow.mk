pack:
	./node_modules/.bin/webpack

django-serve:
	cd frontend; npm run watch &
	python -m http.server
