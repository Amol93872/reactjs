// function List() {
//   const fruits = ["apple", "oranges", "banana", "coconut", "Pinapple"];
//   fruits.sort();
//   const listitem = fruits.map((fruit) => <li>{fruit}</li>);
//   return <ol>{listitem}</ol>;
// }
// export default List;

function List() {
  const fruits = [
    { name: "apple", calaries: 95 },
    { name: "oranges", calaries: 89 },
    { name: "banana", calaries: 108 },
    { name: "coconut", calaries: 75 },
    { name: "Pinapple", calaries: 95 },
  ];
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //localecompare is for alpha A to Z

  fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetic like z to a
  fruits.sort();
  const listitem = fruits.map((fruit) => (
    <li key={fruit.calaries}>
      {fruit.name}:&nbsp; {fruit.calaries}
    </li>
  ));
  return <ol>{listitem}</ol>;
}
export default List;
