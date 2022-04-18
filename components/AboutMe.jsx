export default function () {
  return (
    <div id="about-me">
      <h2 className="aboutMeHeading">About Me</h2>
      <p>
        I am a Software Developer who is looking for an opportunity to work with
        a team of like-minded individuals to help me grow in my career while
        working on challenging problems. I hope to bring my proactive, positive,
        and strong communication skills to everything I work on.
      </p>
      <style jsx>
        {`
        #about-me {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 4rem auto;
          padding: 2rem;
        }
        .aboutMeHeading {
          color: rgb(39, 40, 58);
        }
        `}
      </style>
    </div>
  );
}
