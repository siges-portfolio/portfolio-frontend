import { Component, inject, ViewEncapsulation } from "@angular/core";
import { ButtonComponent } from "@shared/components/button/button.component";
import { MatIcon } from "@angular/material/icon";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";
import { IS_MOBILE } from "@shared/tokens/is-mobile.token";

@Component({
    selector: "[projects-section]",
    templateUrl: "./projects-section.component.html",
    styleUrls: ["./projects-section.component.scss"],
    encapsulation: ViewEncapsulation.None,
    imports: [ButtonComponent, MatIcon, ScrollAnimationDirective],
})
export class ProjectsSectionComponent {
    isMobile = inject(IS_MOBILE);

    projects = [
        {
            title: "CryptoCommunity",
            year: "2025-2026",
            summarySkills: ["Angular v18-21", "Angular Material", "RxJS"],
            skills: ["Angular v18-21", "Angular Material", "TypeScript", "RxJS", "REST API", "HTML/SCSS", "BEM", "GSAP"],
            image: "cryptocommunity.webp",
            link: "https://cryptocommunity-siges.netlify.app/",
            description: `<p>A comprehensive Web3 platform that provides educational materials, news, and tools for learning about blockchain technology, cryptocurrencies, and decentralized applications. The project includes a public section of the website, an authentication system, an admin panel, and internal dashboards for managing educational content and users.</p>
              <p>As part of the project, developed scalable Angular applications featuring a modular architecture, reusable UI components, and integration with a REST API. We implemented secure authentication, access control, administrative tools, interactive dashboards, and functionality for publishing and managing educational materials.</p>
              <p>Key Tasks:</p>
              <ul>
                <li>Development of the client-side application using Angular.</li>
                <li>Creation of an administrative panel and internal dashboards.</li>
                <li>Implementation of authorization, authentication, and a role-based access model.</li>
                <li>Integration with REST APIs and data processing.</li>
                <li>Developing reusable UI components and a modular architecture.</li>
                <li>Optimizing performance and user experience.</li>
                <li>Creating a responsive interface with modern animations and cross-browser support.</li>
              </ul>
              <p><span>* Currently only landing available</span></p>`
        },
        {
            title: "Dust Space",
            year: "2025",
            summarySkills: ["Native JS", "Apache ECharts", "SVG Animations"],
            skills: ["Native JS", "Apache ECharts", "SVG Animations", "HTML/SCSS", "BEM"],
            image: "dust-space.webp",
            link: "https://dust-space-siges.netlify.app/",
            description: `<p>Deep ecosystem of interconnected crypto products aimed at facilitating the use of cryptocurrencies and accelerating their mass adoption.</p>`
        },
        {
            title: "Strange Crypto",
            year: "2025",
            summarySkills: ["Native JS", "Lottie Animations"],
            skills: ["Native JS", "Lottie Animations", "HTML/SCSS", "BEM"],
            image: "strange-crypto.webp",
            link: "https://strange-crypto-siges.netlify.app/",
            description: `<p>Landing page for a trading crypto bot.</p>`
        },
        {
            title: "Micron",
            year: "2025",
            summarySkills: ["Angular v16", "Telegram APP", "TypeScript", "RxJS"],
            skills: ["Angular v16", "Telegram APP", "TypeScript", "RxJS", "REST API", "HTML/SCSS", "BEM"],
            image: "micron.webp",
            link: "https://micron-siges.netlify.app/",
            description: `<p>A single hub in telegram for staking all user favorite crypto coins crosschain.</p>`
        },
        {
            title: "INV Community",
            year: "2024",
            summarySkills: ["Angular v14", "TypeScript", "RxJS"],
            skills: ["Angular v14", "TypeScript", "RxJS", "REST API", "HTML/SCSS", "BEM"],
            image: "inv-community.webp",
            link: "https://inv-community-siges.netlify.app/",
            description: `<p>Educational platform for the crypto community INV Trading. Contains courses of varying difficulty levels.</p>`
        },
    ]
}