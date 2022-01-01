pack:
	./node_modules/.bin/webpack

django-serve:
	npm run watch &
	$(MAKE) python-serve
