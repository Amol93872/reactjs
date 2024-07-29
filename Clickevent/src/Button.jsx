function Button() {
  const handleClick = () => console.log("hey you click me");
  const handleclick2 = (name) => console.log(`${name} stop clicking me`);
  return <button onClick={() => handleclick2("hii")}>click Me 😅 </button>;
}
export default Button;
