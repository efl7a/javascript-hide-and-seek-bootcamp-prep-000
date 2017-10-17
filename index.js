function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
  }
function deepestChild() {
const parent = document.getElementById('grand-node')
var div = '#grand-node'
let child =parent.querySelectorAll('div')
for (var i = 0; i < child.length; i++) {
  div = div + " div"
}
return document.querySelector(`${div}`)


}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children
    for (var y = 0; y < children.length; y++){
      children[y].innerHTML = parseInt(children[y].innerHTML) + n
    }
  }
}
