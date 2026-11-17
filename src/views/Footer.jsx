import Container from '../components/ui/Container'
import logo from '../assets/images/text-logo.png'

const icons = ['bxl-html5', 'bxl-sass', 'bxl-react', 'bxl-javascript', 'bxs-file-json']

const Footer = () => (
  <footer
    id="footer"
    className="bg-[linear-gradient(127deg,rgb(167,89,209)_0%,rgb(130,97,238)_91%)] bg-cover bg-center bg-no-repeat py-[50px] text-center text-white"
  >
    <Container>
      <div>
        {icons.map((name) => (
          <i key={name} className={`bx ${name} px-[10px] text-[25px]`} />
        ))}
      </div>
      <hr className="my-4 opacity-25" />
      <p>
        COPYRIGHT © 2023 SOFTY PINKO COMPANY - DESIGN:{' '}
        <img src={logo} alt="" className="inline w-[15%] md:w-[7.5%]" />
      </p>
    </Container>
  </footer>
)

export default Footer
