import {SiNextdotjs} from 'react-icons/si'

export default function Footer() {
  return (
    <div className='leFooter'>
      <SiNextdotjs/>
      <p>Created using Next.js</p>
      <style jsx>
        {`
        .leFooter {
          text-align: center;
          background: #febd59;
          width: 100%;
          height: 80px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding-top: 1rem;
        }
        `}
      </style>
    </div>
  )
}