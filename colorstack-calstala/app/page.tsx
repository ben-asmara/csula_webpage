
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { CalendarDays, GraduationCap, Users, MapPin, Mail, ArrowRight, ExternalLink, ChevronRight } from "lucide-react";

const container = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
});

const Section = ({ id, eyebrow, title, subtitle, children }: any) => (
  <section id={id} className="py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container()} className="mb-10">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{eyebrow}</p>
        )}
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
        )}
        {subtitle && (
          <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

const NavLink = ({ href, children }: any) => (
  <a href={href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
    {children}
  </a>
);

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
    <span className="font-extrabold tracking-tight text-xl">Colorstack @ calstala</span>
  </div>
);

const Hero = () => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(129,140,248,0.25),rgba(0,0,0,0))]" />
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16 pb-16 sm:pb-24">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-8">
        <motion.div initial="hidden" animate="show" variants={container()} className="flex-1">
          <Badge className="mb-4" variant="secondary">New • Fall recruiting is on</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Elevating Black & Latinx technologists at <span className="underline decoration-wavy decoration-indigo-400 underline-offset-8">Cal State LA</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Welcome to <span className="font-semibold">Colorstack @ calstala</span>. We build community, develop skills, and open doors to tech careers through events, mentorship, and opportunities.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#join"><Button>Join the Chapter <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="#events"><Button variant="outline">Upcoming Events <CalendarDays className="ml-2 h-4 w-4" /></Button></a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Users className="h-4 w-4" /> 120+ members</div>
            <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Open to all majors</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex-1 w-full">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><CalendarDays className="h-5 w-5" /> This Month at a Glance</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                { title: "Resume + LinkedIn Clinic", date: "Thu • Oct 16", where: "Engineering Hall 201", cta: "RSVP" },
                { title: "Tech Interview Prep Night", date: "Tue • Oct 21", where: "CS Lounge", cta: "RSVP" },
                { title: "Meet the Sponsors", date: "Fri • Oct 31", where: "Innovation Hub", cta: "Register" },
              ].map((ev, i) => (
                <div key={i} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium leading-tight">{ev.title}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {ev.date} • <MapPin className="h-4 w-4" /> {ev.where}</p>
                  </div>
                  <Button variant="secondary" size="sm" asChild>
                    <a href="#events">{ev.cta}</a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </div>
);

const About = () => (
  <Section id="about" eyebrow="About" title="What we do" subtitle="We create spaces where Black and Latinx students in tech can thrive—socially, academically, and professionally.">
    <div className="grid sm:grid-cols-3 gap-6">
      {[
        { icon: GraduationCap, title: "Career Prep", desc: "Workshops, interview prep, resume reviews, and recruiter connects." },
        { icon: Users, title: "Community", desc: "Cohort-driven mentorship, study nights, and social mixers." },
        { icon: CalendarDays, title: "Opportunities", desc: "Hackathons, employer treks, and scholarship spotlights." },
      ].map((f: any, i: number) => (
        <Card key={i} className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">{React.createElement(f.icon, { className: "h-5 w-5" })} {f.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">{f.desc}</CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const eventsData = [
  { title: "Intro Meeting + Icebreakers", date: "Oct 10, 2025", time: "6:00–7:30 PM", where: "Student Center A", link: "#", type: "General Body" },
  { title: "Alumni in FAANG Panel", date: "Oct 17, 2025", time: "5:30–7:00 PM", where: "Zoom", link: "#", type: "Panel" },
  { title: "LeetCode Live: Arrays", date: "Oct 24, 2025", time: "6:00–7:00 PM", where: "CS 1401", link: "#", type: "Workshop" },
  { title: "Halloween Hack Night", date: "Oct 31, 2025", time: "7:00–11:00 PM", where: "Innovation Hub", link: "#", type: "Social" },
];

const Events = () => (
  <Section id="events" eyebrow="Calendar" title="Upcoming events" subtitle="Come through! Most events are open to all students.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {eventsData.map((ev, i) => (
        <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={container(i * 0.05)}>
          <Card className="border-0 shadow-md h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2">
                <span>{ev.title}</span>
                <Badge variant="outline">{ev.type}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {ev.date} • {ev.time}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {ev.where}</p>
              <div className="pt-2">
                <Button size="sm">
                  <a href={ev.link} target="_blank">RSVP <ExternalLink className="ml-1 h-4 w-4 inline" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    <div className="mt-6 text-sm text-muted-foreground">Want your event featured? <a href="#contact" className="underline underline-offset-4">Contact us</a>.</div>
  </Section>
);

const Team = () => (
  <Section id="team" eyebrow="Leaders" title="Executive board" subtitle="Meet the folks behind the chapter.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: "Jordan Williams", role: "President", major: "CS • '26" },
        { name: "Ariana Gomez", role: "VP, Programs", major: "CE • '26" },
        { name: "Samir Patel", role: "Treasurer", major: "Math • '27" },
        { name: "Nia Jackson", role: "Design Lead", major: "HCI • '27" },
        { name: "Mateo Rivera", role: "Sponsorships", major: "CS • '25" },
        { name: "You?", role: "Open role", major: "Apply below" },
      ].map((m, i) => (
        <Card key={i} className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="leading-tight">{m.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p className="text-sm">{m.role}</p>
            <p className="text-xs">{m.major}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const Sponsors = () => (
  <Section id="sponsors" eyebrow="Partners" title="Sponsors & supporters" subtitle="We partner with companies and campus orgs who share our mission.">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
      {["Acme Tech", "Globex", "Initech", "Umbrella"].map((s, i) => (
        <div key={i} className="aspect-[3/1] rounded-xl border bg-muted/40 flex items-center justify-center text-sm font-medium">
          {s}
        </div>
      ))}
    </div>
    <div className="mt-6">
      <Button variant="outline">
        <a href="#contact">Become a sponsor <ChevronRight className="ml-1 h-4 w-4 inline" /></a>
      </Button>
    </div>
  </Section>
);

const Join = () => (
  <Section id="join" eyebrow="Get involved" title="Join the chapter" subtitle="Membership is free. We'll send 1–2 emails a month with events and opportunities.">
    <Card className="border-0 shadow-md">
      <CardContent className="p-6">
        <form className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Full name</label>
            <Input placeholder="e.g., Jordan Williams" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input placeholder="you@university.edu" type="email" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium">Interests</label>
            <Textarea placeholder="What do you want from the chapter?" rows={4} />
          </div>
          <div className="sm:col-span-2">
            <Button className="w-full">Submit <ArrowRight className="ml-2 h-4 w-4 inline" /></Button>
          </div>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">This demo form is non-functional. Hook it up to Google Forms, Airtable, or a serverless action.</p>
      </CardContent>
    </Card>
  </Section>
);

const Contact = () => (
  <Section id="contact" eyebrow="Say hello" title="Contact & socials" subtitle="Questions, partnerships, or speaking? Reach out.">
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="border-0 shadow-md md:col-span-2">
        <CardHeader>
          <CardTitle>Send a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input placeholder="you@example.com" type="email" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="How can we help?" rows={5} />
            </div>
            <div className="sm:col-span-2">
              <Button>Send <Mail className="ml-2 h-4 w-4 inline" /></Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Find us</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-3">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Your campus address here</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> colorstack.calstatela@gmail.com</p>
          <Separator />
          <div className="flex items-center gap-3">
            <a href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fcolorstack.calstala" className="underline underline-offset-4">Linktree</a>
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-10 border-t">
    <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Logo />
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Colorstack @ calstala. Built with ❤️.</p>
    </div>
  </footer>
);

const Navbar = () => (
  <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
    <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
      <Logo />
      <nav className="hidden sm:flex items-center gap-6">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#events">Events</NavLink>
        <NavLink href="#team">Team</NavLink>
        <NavLink href="#sponsors">Sponsors</NavLink>
        <NavLink href="#join">Join</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
      <a href="#join"><Button size="sm">Join</Button></a>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Sponsors />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
}
