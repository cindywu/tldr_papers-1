'''
author @yash 
contains all 
'''
from crossref.restful import Works
works = Works()
a = works.doi('10.1155/2016/3845247')
print(a['abstract'])