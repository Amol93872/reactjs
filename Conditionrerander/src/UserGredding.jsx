function UserGreding(props) {
  if (props.isLoggedIn) {
    return <h2>Welcome {props.username}</h2>;
  } else {
    return <h2>Please Log in</h2>;
  }
}
export default UserGreding;
