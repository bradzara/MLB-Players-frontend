export function PlayersIndex(props) {
  return (
    <div>
      <h1>All Players</h1>
      {props.players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <img src={player.image_url} />
          <p><b>Team:</b> {player.team}</p>
          <p><b>Position:</b> {player.position}</p>
          <p><b>Number:</b> {player.number}</p>
        </div>
      ))}
    </div>
  );
}