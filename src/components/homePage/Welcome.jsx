import Button from '../ui/Button'
import bg from '../../assets/images/banner-bg.png'

const Welcome = () => (
  <section
    id="welcome"
    className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="px-3 text-center text-white">
      <h1 className="text-4xl leading-tight font-medium xl:text-[2.5rem]">
        We provide the best <strong>strategy</strong>
      </h1>
      <h2 className="text-[2rem] leading-tight font-medium">
        to grow up your <strong>business</strong>
      </h2>
      <p className="mx-auto w-full py-[30px] md:w-1/2">
        Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company
        at absolutely free of charge
      </p>
      <Button variant="pink" className="uppercase">
        discover more
      </Button>
    </div>
  </section>
)

export default Welcome
