export function PlayersShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePlayer(props.player.id, params, () => event.target.reset());
  }

  const handleClick = (event) => {
    props.onDestroyPlayer(props.player.id);
  }
  
  return (
    <div>
      <h1>Player information</h1>
      <p>Name: {props.player.name}</p>
      <p>Team: {props.player.team}</p>
      <p>Position: {props.player.position}</p>
      <p>Number: {props.player.number}</p>
      <form onSubmit={handleSubmit}>
        <h1>Update player</h1>
        <div>Name: <input type = "text" name = "name" defaultValue={props.player.name}/></div>
        <div>Team: <input type = "text" name ="team" defaultValue={props.player.team}/></div>
        <div>Position: <input type = "text" name ="position" defaultValue={props.player.position}/></div>
        <div>Number: <input type = "text" name ="number" defaultValue={props.player.number}/></div>
        <div>Image: <input type = "text" name ="image_url" defaultValue={props.player.image_url}/></div>
        <button type="submit">Update player</button>
        <button onClick={handleClick}>Delete Player</button>
      </form>
    </div>
  );
}