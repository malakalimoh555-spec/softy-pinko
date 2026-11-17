import Container from '../ui/Container'
import left from '../../assets/images/left-image.png'

const LeftAbout = () => (
  <Container id="about" className="mt-12" data-aos="fade-right">
    <div className="relative grid items-center gap-y-[17px] px-[55px] py-[15px] after:absolute after:-bottom-[10%] after:left-1/2 after:h-px after:w-[70%] after:-translate-x-1/2 after:bg-line md:grid-cols-2">
      <div>
        <img src={left} alt="" className="mx-auto md:mx-0" />
      </div>
      <div>
        <h3 className="text-[1.75rem] font-medium">Let’s discuss about you project</h3>
        <p className="mt-12 text-txt">
          Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo
          efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.
        </p>
      </div>
    </div>
  </Container>
)

export default LeftAbout
