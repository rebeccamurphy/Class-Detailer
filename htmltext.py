import nltk   
from urllib import urlopen


url = "https://ssb.banner.marist.edu/PROD11G/bwskfcls.P_GetCrse"    
html = urlopen(url).read()    
raw = nltk.clean_html(html)  
print(raw)