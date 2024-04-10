const clearListBtn=document.getElementById("clearListBtn"),summaryBody=document.getElementById("summeryBody"),total=document.getElementById("total"),itemList=[];function addItemToList(e,t){var i=itemList.find(t=>t.name===e);i?i.piece++:itemList.push({name:e,price:t,piece:1}),updateListAndTotal()}function updateListAndTotal(){summaryBody.innerHTML="",itemList.forEach(t=>{t=`
      <tr>
        <td>${t.name}</td>
        <td>${t.price}</td>
        <td>${t.piece}</td>
      </tr>
    `;summaryBody.innerHTML+=t}),updateTotal()}function updateTotal(){var e=0;itemList.forEach(t=>{e+=t.price*t.piece}),total.innerText=`Végösszeg: ${e} Ft`}itemButton1.addEventListener("click",function(){addItemToList("Jack Daniel's 0,04",1490)}),itemButton2.addEventListener("click",function(){addItemToList("Finlandia 0,04",1290)}),clearListBtn.addEventListener("click",function(){itemList.length=0,updateListAndTotal()});