"use client";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [expanded, setExpanded] = useState("panel1");

  const handleExpansion = (id: string) => {
    setExpanded(id);
  };
  return (
    <main className="flex  w-full md:w-[600px] flex-col items-center justifty-start bg-white rounded-md p-6 md:mt-40">
      <header className="w-full flex items-center justify-start gap-6">
        <Image
          src={"/assets/images/icon-star.svg"}
          alt="purple star"
          width={34.99}
          height={34.98}
        />
        <Typography
          fontSize={{
            md: 56,
            xs: 32,
          }}
          sx={{
            fontWeight: "700",
            color: "var(--dark-purple)",
          }}
        >
          FAQs
        </Typography>
      </header>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={() => handleExpansion("panel1")}
        className="shadow-none"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon
                style={{
                  backgroundColor: "var(--dark-purple)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            ) : (
              <AddIcon
                style={{
                  backgroundColor: "var(--pink)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            )
          }
          aria-controls="panel1-content"
          id="panel1"
        >
          <Typography
            fontSize={{
              md: 18,
              xs: 16,
            }}
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "var(--dark-purple)",
              "&:hover": { color: "var(--pink)" },
            }}
          >
            What is Frontend Mentor, and how will it help me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            fontSize={{
              md: 16,
              xs: 14,
            }}
            sx={{
              color: "var(--pale-purple)",
              lineHeight: "150%",
            }}
          >
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={() => handleExpansion("panel2")}
        className="shadow-none"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon
                style={{
                  backgroundColor: "var(--dark-purple)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            ) : (
              <AddIcon
                style={{
                  backgroundColor: "var(--pink)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            )
          }
          aria-controls="panel2-content"
          id="panel2"
        >
          <Typography
            fontSize={{
              md: 18,
              xs: 16,
            }}
            sx={{
              fontWeight: "600",
              color: "var(--dark-purple)",
              "&:hover": { color: "var(--pink)" },
            }}
          >
            Is Frontend Mentor free?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            fontSize={{
              md: 16,
              xs: 14,
            }}
            sx={{
              color: "var(--pale-purple)",
              lineHeight: "150%",
            }}
          >
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={() => handleExpansion("panel3")}
        className="shadow-none"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <RemoveIcon
                style={{
                  backgroundColor: "var(--dark-purple)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            ) : (
              <AddIcon
                style={{
                  backgroundColor: "var(--pink)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            )
          }
          aria-controls="panel3-content"
          id="panel3"
        >
          <Typography
            fontSize={{
              md: 18,
              xs: 16,
            }}
            sx={{
              fontWeight: "600",
              color: "var(--dark-purple)",
              "&:hover": { color: "var(--pink)" },
            }}
          >
            Can I use Frontend Mentor projects in my portfolio?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            fontSize={{
              md: 16,
              xs: 14,
            }}
            sx={{
              color: "var(--pale-purple)",
              lineHeight: "150%",
            }}
          >
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to
            potential employers!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={() => handleExpansion("panel4")}
        className="shadow-none"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <RemoveIcon
                style={{
                  backgroundColor: "var(--dark-purple)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            ) : (
              <AddIcon
                style={{
                  backgroundColor: "var(--pink)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            )
          }
          aria-controls="panel4-content"
          id="panel4"
        >
          <Typography
            fontSize={{
              md: 18,
              xs: 16,
            }}
            sx={{
              fontWeight: "600",
              color: "var(--dark-purple)",
              "&:hover": { color: "var(--pink)" },
            }}
          >
            How can I get help if I'm stuck on a Frontend Mentor challenge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            fontSize={{
              md: 16,
              xs: 14,
            }}
            sx={{
              color: "var(--pale-purple)",
              lineHeight: "150%",
            }}
          >
            The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and
            seek support from other community members.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </main>
  );
}
