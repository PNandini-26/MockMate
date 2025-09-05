import Container from "@/components/container";

const AboutPage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-extrabold">
            <span className="text-outline md:text-8xl">About Us</span>
            <span className="text-gray-500"> - Our story</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            We are passionate innovators dedicated to transforming the way
            people prepare for interviews through AI-powered technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <img
            src="/assets/img/aboutus.jpg"
            alt="Our Team"
            className="w-full object-cover rounded-xl drop-shadow-md"
          />
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-muted-foreground">
              Our mission is to empower individuals with cutting-edge tools that
              boost confidence and improve success rates in job interviews.
            </p>
            <p className="text-muted-foreground">
              With expertise in AI, design, and career development, our team
              strives to make interview preparation smarter, faster, and more
              effective.
            </p>
            <p className="text-muted-foreground">
              Join us on this journey to redefine career success in the modern
              world.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
