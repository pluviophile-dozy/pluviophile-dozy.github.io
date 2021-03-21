function calculateTotal()
{
  let unit_price={
    cozy: 10000,
    dozy: 52000,
    docozy: 62000,
  };
  let item_price={}
  
  item_price.cozy = ($("#cozy").val() * unit_price.cozy )
  
  item_price.dozy = ($("#dozy").val() * unit_price.dozy )
  
  item_price.docozy = ($("#docozy").val() * unit_price.docozy )
  
  let total = item_price.cozy + item_price.dozy + item_price.docozy;

  $("#addedamount").text(total);
    
  let final = total + 3000;
  $("#finalamount").text(final);

  $("#finalamount2").val(final)
  
}
