export function PlayersNew (props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlayer(params, () => event.target.reset());
  }
  
  return (
    <div>
      <h1>New Player</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Team: <input name="team" type="text" />
        </div>
        <div>
          Position: <input name="position" type="text" />
        </div>
        <div>
          Number: <input name="number" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create Player</button>
      </form>
    </div>
  )
}