'''
author @yash
some utility functions for adding DOI functionality to tl;dr papers
'''
import re


# uses crossref API to (attempt to) parse an abstract given a DOI
def getAbstractfromDOI(doi):
	# attempt to get DOI
	from crossref.restful import Works
	works = Works()
	a = works.doi(doi)

	# error code 0: DOI did not return anything
	if not a:
		return 0

	# everything works
	if "abstract" in a:
		return a["abstract"]

	# error code 1: DOI does not contain abstract
	else:
		return 1

'''
# checks validity of DOI input
def checkDOI(doi):
	# some regex magic from 
	# https://www.crossref.org/blog/dois-and-matching-regular-expressions/
	test_string = 'a1b2cdefg'

	matched = re.match("[a-z][0-9][a-z][0-9]+", test_string)
	is_match = bool(matched)

	print(is_match)
	return bool(re.match(r"/^10.\d{4,9}/[-._;()/:A-Z0-9]+$/i", doi))

print(checkDOI('/10.1155/2016/3845247'))
'''