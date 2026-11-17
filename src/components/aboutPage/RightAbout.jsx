import Container from '../ui/Container'
import right from '../../assets/images/right-image.png'

const RightAbout = () => (
  <Container className="mt-12" data-aos="fade-left">
    <div className="relative grid items-center gap-y-[17px] px-[55px] py-[15px] md:grid-cols-2">
      <div className="md:mt-[55px]">
        <h3 className="text-[1.75rem] font-medium">We can help you to grow your business</h3>
        <p className="mt-12 text-txt">
          Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus
          libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus
          libero. Etiam quis dolor elit.
        </p>
      </div>
      <div>
        <img src={right} alt="" className="mx-auto md:mr-0 md:ml-auto" />
      </div>
    </div>
  </Container>
)

export default RightAbout
