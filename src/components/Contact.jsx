import { Mail, MapPin, ExternalLink, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = encodeURIComponent(form.name.value.trim());
    const email = form.email.value.trim();
    const subject = encodeURIComponent(form.subject.value.trim());
    const message = encodeURIComponent(form.message.value.trim());


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const allowedDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "icloud.com",
      "protonmail.com",
    ];

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const domain = email.split("@")[1];
    if (!allowedDomains.includes(domain)) {
      alert(
        "Please use a valid personal email (e.g., Gmail, Outlook, iCloud). Temporary or unknown domains are not accepted."
      );
      return;
    }

    window.location.href = `mailto:aryankinha2@gmail.com?subject=${subject}&body=Name: ${name}%0AEmail: ${encodeURIComponent(
      email
    )}%0A%0A${message}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0e0d0d] text-neutral-200 px-32 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <p className="text-neutral-400 mb-8">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-neutral-200 placeholder-neutral-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-neutral-200 placeholder-neutral-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-neutral-200 placeholder-neutral-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-neutral-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-neutral-200 placeholder-neutral-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-400 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ExternalLink className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <p className="text-neutral-400 mb-6">
                Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800 hover:border-blue-400 transition-colors">
                  <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Email</p>
                    <p className="text-neutral-200">aryankinha2@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-neutral-800 hover:border-blue-400 transition-colors">
                  <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Location</p>
                    <p className="text-neutral-200">India, Delhi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Me */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <p className="text-neutral-400 mb-6">
                Connect with me on social media and professional networks.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/aryankinha"
                  target="_blank"
                  className="p-4 bg-[#1a1a1a] border border-neutral-800 rounded-lg hover:border-blue-400 transition-colors text-center group"
                >
                  <Github className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors" />
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-medium">
                    GitHub
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/aryankinha/"
                  target="_blank"
                  className="p-4 bg-[#1a1a1a] border border-neutral-800 rounded-lg hover:border-blue-400 transition-colors text-center group"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors" />
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-medium">
                    LinkedIn
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
