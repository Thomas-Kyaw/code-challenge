#!/bin/bash

BASE_URL="http://localhost:3000/resources"

echo "1. List initial resources"
curl -s "$BASE_URL" | grep "Resource A" && echo " [PASS]" || echo " [FAIL]"

echo "2. Create a new resource"
CREATE_RES=$(curl -s -X POST -H "Content-Type: application/json" -d '{"name":"New Resource","description":"Created via curl"}' "$BASE_URL")
echo $CREATE_RES
ID=$(echo $CREATE_RES | grep -o '"id":[0-9]*' | cut -d':' -f2)
echo "Created ID: $ID"

echo "3. Get the created resource"
curl -s "$BASE_URL/$ID" | grep "New Resource" && echo " [PASS]" || echo " [FAIL]"

echo "4. Update the resource"
curl -s -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Resource","description":"Updated description"}' "$BASE_URL/$ID" | grep "Updated Resource" && echo " [PASS]" || echo " [FAIL]"

echo "5. Filter resources"
curl -s "$BASE_URL?name=Updated" | grep "Updated Resource" && echo " [PASS]" || echo " [FAIL]"

echo "6. Delete the resource"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X DELETE "$BASE_URL/$ID")
if [ "$STATUS" -eq 204 ]; then
    echo " [PASS]"
else
    echo " [FAIL] Status: $STATUS"
fi

echo "7. Verify deletion"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/$ID")
if [ "$STATUS" -eq 404 ]; then
    echo " [PASS]"
else
    echo " [FAIL] Status: $STATUS"
fi
