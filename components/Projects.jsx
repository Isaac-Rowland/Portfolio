export default function Projects() {
  return (
    <div id="projects">
      <div className="projectsContent">
        <h2>Projects</h2>

        <div className="grid">
          <a
            href="https://takeyourguess.vercel.app/"
            className="card"
          >
            <h3>Guess that theme song &rarr;</h3>
            <p>
              This is a game built using react, where a user guesses a famous
              theme song within a time constraint.
            </p>
          </a>

          <a href="https://slimy-production.up.railway.app/" className="card">
            <h3>Slimy &rarr;</h3>
            <p>
              A full-stack database backed express application, where users can
              search, like and make comments on the movies.
            </p>
          </a>

          <a href="https://nextvroom-production.up.railway.app/" className="card">
            <h3>NextVroom &rarr;</h3>
            <p>
              This project allows users to create a private database to save
              cars to their own list of cars. Just by inputing the brand, model
              and year it will automatically come with a picture of that car.
            </p>
          </a>

          <a
            href="https://isaac-rowland.github.io/tic-tac-toe/tictactoe.html"
            className="card"
          >
            <h3>Tic Tac Toe &rarr;</h3>
            <p>
              tic tac toe is a 3*3 two player game that is taken in turns one by
              one. -The winner of this game is when someone has three of there
              character in a row, either horizontal, diagonal or vertically.
            </p>
          </a>
        </div>
      </div>
      <style jsx>{`
        #projects {
          width: 100%;
          background: rgb(39, 40, 58);
        }
        .projectsContent {
          max-width: 800px;
          margin: 4rem auto;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 2rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        h2 {
          color: #febd59;
        }
      `}</style>
    </div>
  );
}
