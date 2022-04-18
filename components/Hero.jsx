import Image from "next/image";

export default function Hero() {
  return (
    <div id="home">
      <div id="rectangle">
        <img
          className="profileImage"
          src="/IsaacHeadshot.jpg"
          alt="Isaac Headshot"
          width="100%"
          height="100%"
        />
      </div>

      <h1>Isaac Rowland</h1>
      <h3>Aspiring Developer and tech enthusiast</h3>
      <style jsx>
        {`
          .profileImage {
            height: 100%;
            width: 300px;
            margin: .5rem
          }
          #home {
            color: #febd59;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgb(39, 40, 58);
            background: linear-gradient(
              0deg,
              rgba(39, 40, 58, 1) 0%,
              rgba(39, 40, 58, 1) 60%,
              rgba(255, 255, 255, 1) 60%,
              rgba(255, 255, 255, 1) 100%
            );
            width: 100%;
            padding: 2rem;
          }
          #rectangle {
            display: flex;
            justify-content: center;
            height: 100%;
            background: #febd59;
          }
          h3 {

          }
          h1 {
            margin: 1.5rem;
            font-size: 
          }
        `}
      </style>
    </div>
  );
}
