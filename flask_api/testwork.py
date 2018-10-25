import json
import classify

with open('db.json') as f:
    allResults = json.load(f)

filename = './static/044motion.jpg'

url = '/static/' +  '044motion.jpg'
#classify the results
results = classify.classifyFromPathList([filename])
results[0]['image'] = url
allResults.append(results[0])
with open('db.json', 'w') as fp:
    json.dump(allResults, fp)
