/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'WordPress';
  year: string;
  client: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  image: string;
  github?: string;
  live?: string;
  caseStudy: {
    overview: string;
    architecture?: string;
    challenges: { issue: string; fix: string }[];
    performance: string[];
  };
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  description: string;
  keyPoints: string[];
  content: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'hotel-website',
    title: 'Custom Hotel Website Development',
    category: 'Full Stack',
    year: '2025',
    client: 'Kamrul Rifat',
    description: 'Developed a custom hotel website using React and Node.js with structured pages to display rooms, services, and booking details.',
    problem: 'The client needed a high-performance booking interface that outclassed generic CMS solutions in terms of speed and customization.',
    solution: 'Engineered a custom full-stack architecture using React for a seamless UI and Express for a robust management backend.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
    features: [
      'Component-based frontend architecture',
      'Secure Backend API integration',
      'Dynamic room availability rendering',
      'Custom booking workflow'
    ],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    live: '#',
    github: '#',
    caseStudy: {
      overview: 'This project aimed to redefine the luxury hotel booking experience. Moving away from WordPress allowed for extreme performance tuning and a zero-latency UI.',
      architecture: 'Client-Server architecture with RESTful APIs. Frontend state managed with React Hooks, serving dynamic content retrieved from MongoDB.',
      challenges: [
        { issue: 'Complex room state management across different booking dates.', fix: 'Implemented a custom date-logic utility and optimized database queries for availability checks.' },
        { issue: 'Image-heavy pages affecting initial load time.', fix: 'Used Next-gen image formats and lazy loading with blur-up placeholders.' }
      ],
      performance: ['98/100 Lighthouse Score', 'Reduced API latency by 40%', 'Interactive in under 1.2s']
    }
  },
  {
    id: 'business-portfolio',
    title: 'Precision Business Platform',
    category: 'WordPress',
    year: '2025',
    client: 'Md. Kamrul Islam Jewel',
    description: 'Developed a high-conversion business website using WordPress and Elementor designed for enterprise-level service presentation.',
    problem: 'The client had a legacy site that was slow, non-responsive, and failed to convert traffic into leads.',
    solution: 'Designed a custom high-performance WordPress theme with professional UI/UX, optimized for Google Core Web Vitals.',
    tech: ['WordPress', 'Elementor', 'Custom CSS', 'PHP'],
    features: [
      'Fully responsive fluid design',
      'SEO-First structure',
      'Automated lead generation funnel',
      'Custom post type for service management'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    live: '#',
    caseStudy: {
      overview: 'Focusing on a "Recruiter/Business First" approach, I transformed their online identity into a trust-building asset.',
      challenges: [
        { issue: 'High bounce rate due to slow mobile loading.', fix: 'Optimized asset delivery, used LiteSpeed caching, and minimized DOM depth in Elementor.' }
      ],
      performance: ['3.2s improvement in LCP', '25% increase in conversion rate', '100% Mobile Usability Pass']
    }
  },
  {
    id: 'agency-dashboard',
    title: 'OneSphere Internal Dashboard',
    category: 'Frontend',
    year: '2024',
    client: 'Internal Tool',
    description: 'A custom frontend dashboard for managing agency projects and client communications.',
    problem: 'Fragmented communication across WhatsApp and Email led to missed deadlines.',
    solution: 'Built a centralized React dashboard with real-time project tracking and document management.',
    tech: ['React.js', 'Motion', 'Lucide', 'Tailwind'],
    features: [
      'Interactive project timeline',
      'Client portal with status tracking',
      'Automated reporting system'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    github: '#',
    caseStudy: {
      overview: 'Internal efficiency tool designed to streamline the "OneSphere Solution" workflow.',
      challenges: [
        { issue: 'Visualizing complex project timelines efficiently.', fix: 'Developed a custom SVG-based Gantt chart component for lightweight rendering.' }
      ],
      performance: ['Saved 10 hours/week in project management', 'Zero-refresh UI state']
    }
  },
  {
    id: 'ecommerce-hub',
    title: 'Modern Retail Portal',
    category: 'WordPress',
    year: '2024',
    client: 'Fashion Brand',
    description: 'Full eCommerce solution with advanced filtering and mobile-first checkout.',
    problem: 'The client needed a scalable store that didn\'t feel like a cookie-cutter template.',
    solution: 'Customized WooCommerce with a headless-inspired UI approach for premium brand feel.',
    tech: ['WooCommerce', 'WordPress', 'Custom CSS'],
    features: [
      'Custom checkout field logic',
      'Multi-currency support',
      'Advanced product taxonomy'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    live: '#',
    caseStudy: {
      overview: 'A deep dive into UX optimization for fashion retail.',
      challenges: [
        { issue: 'Slow checkout process on 3G networks.', fix: 'Stripped unnecessary scripts from checkout page and implemented multi-step micro-interactions.' }
      ],
      performance: ['40% reduction in cart abandonment', 'A+ Security Headers']
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'complex-booking-systems',
    title: 'How I Built a Full-Stack Hotel Booking System from Scratch',
    date: 'April 15, 2025',
    readTime: '8 min read',
    category: 'Engineering',
    excerpt: 'Deep dive into the architecture of a custom React/Node.js booking engine.',
    description: 'A comprehensive guide on building a custom booking engine that outperforms industry standards, focusing on high-concurrency handling and state synchronization.',
    keyPoints: [
      'Decoupled Frontend/Backend Architecture',
      'Atomic Booking Operations',
      'Optimistic Availability Updates',
      'Scalable MongoDB Schema Design'
    ],
    content: `
      ## The Challenge
      Most businesses default to WordPress for booking systems. While effective, it often comes with a performance ceiling and limited customization. My goal was to build a system that was faster, more secure, and infinitely scalable.

      ## The Architecture
      I chose a decoupled architecture using React for the frontend and a Node.js/Express backend. This allowed for independent scaling and a much tighter security model.

      ### Frontend Considerations
      - **State Management:** Using complex date logic for room selection.
      - **Optimistic UI:** Updating availability instantly for the user while verifying in the background.

      ### Backend & Database
      - **MongoDB Schema:** Designing a non-relational schema that handles overlapping bookings efficiently.
      - **API Security:** Implementing robust validation to prevent race conditions during booking.

      ## Results
      The final product achieved a sub-1.5s load time and reduced booking friction significantly, leading to higher conversion rates for the client.
    `,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'react-vs-wordpress',
    title: 'React vs WordPress: When to Reach for Each',
    date: 'March 22, 2025',
    readTime: '6 min read',
    category: 'Digital Strategy',
    excerpt: 'An honest engineering comparison for business-critical applications.',
    description: 'An analytical look at when to prioritize WordPress velocity versus React performance for maximum ROI and technical stability.',
    keyPoints: [
      'ROI-focused platform selection',
      'Maintenance vs Customization tradeoffs',
      'SEO implications of Headless React',
      'Scaling strategies for both ecosystems'
    ],
    content: `
      ## Choosing the Right Tool
      As a developer skilled in both, I often get asked which is better. The answer is always: "It depends on the business goal."

      ### When to use WordPress
      - **Content Velocity:** If the client needs to publish articles or updates daily without developer intervention.
      - **Proven Ecosystem:** When budget is tight and standard plugins (SEO, Security) suffice.

      ### When to use React/Full-Stack
      - **Performance is a Product:** When milliseconds mean money.
      - **Unique UI/UX:** When the design requires interactions that standard templates can't handle.
      - **Data Complexity:** When managing intricate user data, custom dashboards, or real-time features.

      ## Final Verdict
      My approach is to always start with the problem, not the tech. A $5k business site might thrive on WordPress, while a $50k SaaS needs the power of a React stack.
    `,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wordpress-speed-optimization',
    title: 'Extreme Speed: Optimizing WordPress for Recruiter-Level Precision',
    date: 'February 10, 2025',
    readTime: '5 min read',
    category: 'Optimization',
    excerpt: 'Practical steps to make shared-hosting WordPress sites load in under 1s.',
    description: 'Busting the myth of slow WordPress sites by applying advanced engineering principles to standard PHP environments.',
    keyPoints: [
      'Critical CSS automated delivery',
      'Server-side asset orchestration',
      'WebP/AVIF media engineering',
      'Object Caching strategies'
    ],
    content: `
      ## The Myth of "Slow WordPress"
      WordPress isn't inherently slow; it's usually just poorly configured. For recruiters, a slow portfolio is a red flag.

      ## My Optimization Checklist
      1. **Asset Management:** Dequeuing scripts that aren't needed on specific pages.
      2. **Image Engineering:** Moving away from standard JPEGs to WebP with AVIF fallbacks.
      3. **Database Slimming:** Regular cleanup of transients and revisions.
      4. **Server-Side Caching:** Leveraging Object Cache and CDN edge delivery.

      ## Impact
      By using these techniques, I've consistently brought heavy Elementor-based sites to "A" grades on GTMetrix with sub-1s LCP (Largest Contentful Paint).
    `,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
  }
];
