import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-extrabold">
            <span className="text-outline md:text-8xl">Contact Us</span>
            <span className="text-gray-500"> - We’re here to help</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Have questions or feedback? Reach out to us anytime — our team is
            happy to connect with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-gray-600" />
              <span>support@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-gray-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-gray-600" />
              <span>Mumbai, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-xl drop-shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-md px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-md px-4 py-2"
            />
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
