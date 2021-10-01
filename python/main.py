import json

from itertools import groupby
from operator import itemgetter
from os import remove
with open('back-end/accounts.json') as json_file:
    data = json.load(json_file)

data = sorted(data, 
                  key = itemgetter('name'))
  
# Display data grouped by name
for key, value in groupby(data,
                          key = itemgetter('name')):
    
    print(key)
    for k in value:
       print(k)

      
       
        
    
