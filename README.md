# crud
----------------------------------------------------
created the  app as per requirements-(no validation, etc. aside from the minimal resource handling).
----------------------------------------------------
#### no EJS experience

now trying to create web pages accessing the functionalities.

<i>i can do it with Jquery as i have experience with it.</i>

created an API app that does GET,POST,PUT,DELETE.

#### as of 21st. commit.
by > GET http://localhost:3000/items/API -get the list of items as JSON
by > GET http://localhost:3000/items/ you get the list of items as html

by > GET localhost:3000/items/API/1 
    get the details of an item as JSON
<i>NOTE: any get aside from these ~~two~~ three, does nothing.</i>

by > POST localhost:3000/items/API 
    add an item to database by JSON
<i>NOTE: any post aside from this does nothing.</i>

by > DELETE localhost:3000/items/API/1 
    deletes a specific item specified in the res.params.itemId
<i>NOTE: any delete aside from this one does nothing.</i>


by > PUT localhost:3000/items/API/1 
    update a specific item specified in the res.params.itemId
<i>NOTE: any put aside from this one does nothing.</i>
