export default function UserRow (props) {
  // function handleDeleUser (id) {
  //   props.handleDeleUser(id);
  // }
  return (
    <tr>
      <td>{ props.user.id }</td>
      <td>{ props.user.email }</td>
      <td>{ props.user.pass }</td>
      <td>{ props.user.country }</td>
      <td>{ props.user.gender }</td>
      <td>{ props.user.orther }</td>
      <td><button onClick= {() => props.handleDeleUser(props.user.id)}class="btn-delete">x</button></td>
    </tr>
  )
}
