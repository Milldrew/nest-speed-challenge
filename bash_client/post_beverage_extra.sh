
curl -d '{"extra": "foo", "name": "foo", "brand": "bar", "flavors": ["foo", "bar", "qux"]}' -H "Content-Type: application/json" 'http://localhost:3000/beverages/'$1
