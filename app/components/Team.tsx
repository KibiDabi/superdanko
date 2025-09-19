"use client";

import { Card, CardContent } from "@/components/ui/card"; // Assuming you're using Shadcn UI components
import { motion } from "framer-motion";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  funFact?: string;
}

interface TeamProps {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

export default function Team({
  heading = "Meet Our Team",
  subheading = "We're Hiring",
  description = "Our team is made up of passionate individuals dedicated to delivering the best shopping experience for you.",
  members = [
    {
      id: "person-1",
      name: "John Doe",
      role: "CEO & Founder",
      avatar: "/images/superdanko_aboutus.jpg",
      bio: "John has over 10 years of experience in e-commerce and loves solving complex problems.",
      funFact: "Loves hiking and has climbed Mount Everest!",
    },
    {
      id: "person-2",
      name: "Jane Smith",
      role: "Head of Operations",
      avatar: "/images/superdanko_aboutus.jpg",
      bio: "Jane ensures everything runs smoothly behind the scenes.",
      funFact: "Has a black belt in karate.",
    },
    {
      id: "person-3",
      name: "Alice Johnson",
      role: "Lead Developer",
      avatar: "/images/superdanko_aboutus.jpg",
    },
    {
      id: "person-4",
      name: "Bob Brown",
      role: "Marketing Manager",
      avatar: "/images/superdanko_aboutus.jpg",
    },
    {
      id: "person-5",
      name: "Charlie Davis",
      role: "Customer Support",
      avatar: "/images/superdanko_aboutus.jpg",
    },
    {
      id: "person-6",
      name: "Eva Green",
      role: "Product Designer",
      avatar: "/images/superdanko_aboutus.jpg",
    },
    {
      id: "person-7",
      name: "Frank Wilson",
      role: "Sales Executive",
      avatar: "/images/superdanko_aboutus.jpg",
    },
    {
      id: "person-8",
      name: "Grace Lee",
      role: "Content Strategist",
      avatar: "/images/superdanko_aboutus.jpg",
    },
  ],
}: TeamProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-32 bg-background">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-4xl tracking-tight font-display font-semibold lg:text-5xl">
          {heading}
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="container mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {members.map((person, index) => (
          <motion.div
            key={person.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group relative">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6 text-center">
                <p className="text-xl font-semibold">{person.name}</p>
                <p className="text-muted-foreground">{person.role}</p>
              </CardContent>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
                <p className="text-lg font-semibold mb-2">{person.name}</p>
                <p className="text-sm text-muted-foreground mb-4">{person.bio}</p>
                <p className="text-xs text-muted-foreground italic">Fun Fact: {person.funFact}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
