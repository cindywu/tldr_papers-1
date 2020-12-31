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

getAbstractfromDOI("loll")