

let cards=document.getElementById("cards-con");
            let cardContainer=document.createElement("div");
            cardContainer.classList.add("container");
            cards.appendChild(cardContainer);

            let cardRow=document.createElement("div");
            cardRow.classList.add("row");
            cardContainer.appendChild(cardRow);

            let amount=document.querySelector('.amount')
            amount.textContent= "Amount: " + localStorage.getItem('price')===null ? 0 : "Amount:" + localStorage.getItem('price')

            function remove(ind){
              
                if(localStorage.getItem('price')===!null)
                {
              localStorage.setItem('price',ind) 
                }

             else
             {
             localStorage.setItem('price', Number(localStorage.getItem ('price'))- ind)
             }
                
            }
            function add(ind){
                if(localStorage.getItem('price')===null)
                {
              localStorage.setItem('price',ind) 
                }

             else
             {
             localStorage.setItem('price', Number(localStorage.getItem ('price'))+ ind)
             }
                
   console.log(Number(ind))
            }





fetch("http://localhost:3000/items")
.then(response=>response.json())
.then(groceryArray=>{
    console.log(groceryArray)


    for (let obj of groceryArray){
        let cardCol=document.createElement("div");
        cardCol.classList.add("col-12","col-md-6","col-xl-4");
        cardCol.id="card"+groceryArray.indexOf(obj);
        cardRow.appendChild(cardCol);

        let cardEl=document.createElement("div");
        cardEl.classList.add("card","m-5","bg-dark","text-light");
        
        cardCol.appendChild(cardEl);

        

        let cardContent=document.createElement("div");
        cardContent.classList.add("card-body");
        cardEl.appendChild(cardContent);
        let image=document.createElement("img");
        //to display image 
        image.src=obj.filename;
        image.classList.add("w-100","h-100","margin:auto","image-height")
        cardContent.appendChild(image)

        let nameEl=document.createElement("p");
        nameEl.textContent="Name: "+obj.title;
        nameEl.classList.add("text-left","h5","mb-2","card-text")
        cardContent.appendChild(nameEl);

        let idEl=document.createElement("p");
        idEl.textContent="Type: "+obj.type;
        idEl.classList.add("text-left","mb-2","h6","card-text")
        cardContent.appendChild(idEl);

        let idEl2=document.createElement("p");
        idEl2.textContent="Description: "+obj.description;
        idEl2.classList.add("text-left","mb-2","h6","card-text")
        cardContent.appendChild(idEl2);

        let priceEl=document.createElement("p");
        priceEl.textContent="Price: "+obj.price;
        priceEl.classList.add("text-left","mb-2","h6","card-text");
        cardContent.appendChild(priceEl);

        let stockEl=document.createElement("p");
        stockEl.textContent="Stock: "+obj.stock;
        stockEl.classList.add("text-left","mb-2","h6","card-text")
        cardContent.appendChild(stockEl);
        
      
        let addRemove=document.createElement("div");
        addRemove.innerHTML='<button style="float:center; margin:10px;" class="btn btn-primary" onclick="add('+obj.price+')"  >Add</button>   <button style="margin:10px; float:right;"   onclick="remove('+obj.price+')" class="btn btn-success">Remove</button>';
        cardEl.appendChild(addRemove);
    }
    
    
    
   
   
    



});