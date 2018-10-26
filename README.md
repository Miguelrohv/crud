# crud
----------------------------------------------------

## to open the app. go to localhost:3000/items 
## to open the API go to localhost:3000/items/API 

----------------------------------------------------
#### no EJS experience

now trying to create web pages accessing the functionalities.

<i>i can do it with Jquery as i have experience with it.</i>

created an API app that does GET,POST,PUT,DELETE.

#### as of 21st. commit.
GET http://localhost:3000/items/API -
<br>get the list of items as JSON <br>
GET http://localhost:3000/items/ 
<br>you get the list of items as html having fields to:
#### update , delete , add
items within page.
<br>
GET localhost:3000/items/API/1 
    <br>get the details of an item as JSON<br>
<i>NOTE: any get aside from these three, it does nothing.</i>
<br>
 POST localhost:3000/items/API 
    <br>add an item to database by JSON<br>
<i>NOTE: any post aside from this does nothing.</i>
<br>
DELETE localhost:3000/items/API/1 
    <br>deletes a specific item specified in the res.params.itemId<br>
<i>NOTE: any delete aside from this one does nothing.</i>
<br>
PUT localhost:3000/items/API/1 
    <br>update a specific item specified in the res.params.itemId<br>
<i>NOTE: any put aside from this one does nothing.</i>
