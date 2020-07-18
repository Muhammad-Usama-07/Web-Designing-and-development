// Starting Chapter 43-48
/**/
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("thistable").deleteRow(i);
}