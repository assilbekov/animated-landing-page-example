import { Tag } from "@/components/Tag";
import Image from "next/image";
import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import { IntegrationsColumn } from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaLogo,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionLogo,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackLogo,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeLogo,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerLogo,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubLogo,
    description: "GitHub is the leading platform for code collaboration.",
  },
];
export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="flex justify-center">
              <Tag>Integrations</Tag>
            </div>
            <h2 className="text-center text-6xl font-medium mt-6 max-w-2xl mx-auto">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-center text-white/50 text-lg mt-4 max-w-2xl mx-auto">
              We integrate with your favorite tools to make your workflow
              easier. See how we work with your favorite tools.
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
