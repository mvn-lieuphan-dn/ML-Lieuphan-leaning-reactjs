export default function Box(props) {
  const style = {
    backgroundColor: props.db.color,
  };
  function handleDeleteBox (id) {
    props.handleDeleteDb(id);
  }
  return (
    <li className="item">
      <div className="flex-center">
        <div className="item-color" style={style}>
        </div>
        <div class="wrapper">
          <h3 className="title">{props.db.title}</h3>
          <p className="des">{props.db.des}</p>
        </div>
        <a onClick={() => handleDeleteBox(props.db.id)}><img src="https://www.jing.fm/clipimg/full/192-1922172_erase-delete-remove-wipe-out-comments-clipart-png.png" class="icon"/></a>
      </div>
    </li>
  )
}
