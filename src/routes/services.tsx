import Container from "@/components/container";
import { Sparkles, Brain, Briefcase } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-extrabold">
            <span className="text-outline md:text-8xl">Our Services</span>
            <span className="text-gray-500"> - What we offer</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Unlock powerful AI-driven solutions designed to help you stand out
            in your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-xl drop-shadow-md text-center">
            <Sparkles className="mx-auto text-gray-700 w-10 h-10" />
            <h3 className="mt-4 text-lg font-semibold">AI Interview Prep</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Personalized mock interviews powered by AI to refine your
              confidence and skills.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-xl drop-shadow-md text-center">
            <Brain className="mx-auto text-gray-700 w-10 h-10" />
            <h3 className="mt-4 text-lg font-semibold">Skill Insights</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Analyze your strengths and weaknesses to focus on areas that matter
              most.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-xl drop-shadow-md text-center">
            <Briefcase className="mx-auto text-gray-700 w-10 h-10" />
            <h3 className="mt-4 text-lg font-semibold">Career Coaching</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Tailored coaching sessions to help you navigate interviews and
              achieve career goals.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;
