import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Header from "../../components/Header";
import 'bootstrap/dist/css/bootstrap.css'


export default function Resume() {
  return (
    <div className="resumeContainer">
      <Header/>
      <div className="resume">
        <iframe
          loading="lazy"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE8b3ytdn4&#x2F;view?embed"
          allowfullscreen="allowfullscreen"
          allow="fullscreen"
          height="100%"
          width="100%"
        ></iframe>
      </div>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
        .resume {
          height: 100%;
        }
        .resumeContainer {
          height: 90vh;
        }
      `}</style>
    </div>
  );
}
