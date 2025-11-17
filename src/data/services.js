import {
    FaBullhorn,
    FaCode,
    FaShareAlt,
    FaServer,
    FaSearch,
    FaPalette
} from "react-icons/fa";

const services = [
    {
        id: 1,
        icon: <FaCode />,
        title: "Website Development",
        desc: "Custom, responsive, and high-performance websites tailored to your business needs.",
        fullDesc: `
We specialize in crafting visually appealing, user-friendly, and fully responsive websites designed to help businesses stand out online.

Our web development process includes:
- Modern UI/UX design
- Mobile-first responsive layouts
- Fast loading speed optimization
- SEO-ready architecture
- Admin dashboards & custom CMS
- Secure hosting and backend integration

Whether you're a startup or an established brand, we build websites that convert visitors into loyal customers.
        `
    },
    {
        id: 2,
        icon: <FaBullhorn />,
        title: "Digital Marketing",
        desc: "Boost your online presence with targeted digital marketing campaigns.",
        fullDesc: `
Our digital marketing solutions help your business reach the right audience at the right time.

What we offer:
- Google Ads & PPC management
- Social media advertising
- Lead generation campaigns
- Analytics & performance reporting
- ROI-focused marketing strategy

Grow your brand faster with data-driven digital marketing.
        `
    },
    {
        id: 3,
        icon: <FaShareAlt />,
        title: "Social Media Marketing",
        desc: "Grow your brand with powerful social media strategies.",
        fullDesc: `
We create engaging social media campaigns that enhance your brand visibility and customer interaction.

Includes:
- Content creation & design
- Social media management
- Brand engagement strategy
- Influencer marketing
- Performance analytics

Build a strong online community for your business.
        `
    },
    {
        id: 4,
        icon: <FaServer />,
        title: "Web Hosting",
        desc: "Secure, fast, and reliable web hosting solutions.",
        fullDesc: `
Our hosting solutions give your website the perfect environment to perform smoothly.

Features:
- 99.9% uptime guarantee
- SSD superfast servers
- Free SSL certificates
- Daily backups
- 24/7 monitoring & tech support

Experience the power of secure & high-speed hosting.
        `
    },
    {
        id: 5,
        icon: <FaSearch />,
        title: "SEO Services",
        desc: "Rank higher on Google and increase organic traffic.",
        fullDesc: `
Boost your visibility on search engines and attract organic visitors.

Our SEO services include:
- On-page optimization
- Technical SEO fixes
- Keyword research
- Backlink building
- Competitor analysis

Achieve long-term sustainable growth with strong SEO.
        `
    },
    {
        id: 6,
        icon: <FaPalette />,
        title: "Logo & Poster Design",
        desc: "Creative and professional branding designs.",
        fullDesc: `
We design stunning logos and posters that represent your brand identity.

Design services include:
- Logo design (flat, 3D, minimalist)
- Poster & banner design
- Branding guidelines
- Social media creatives
- High-resolution deliverables

Stand out with powerful and memorable brand visuals.
        `
    }
];

export default services;
