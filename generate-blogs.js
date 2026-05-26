const fs = require('fs');
const path = require('path');

const metaDataPath = path.join(__dirname, 'blogs-meta.json');
let blogPosts = [];

if (fs.existsSync(metaDataPath)) {
  console.log('Loading existing metadata from blogs-meta.json...');
  try {
    blogPosts = JSON.parse(fs.readFileSync(metaDataPath, 'utf-8'));
  } catch (err) {
    console.error('Failed to parse blogs-meta.json:', err);
  }
}

if (blogPosts.length === 0) {
  // 30 High-Intent, SEO-Optimized B2B blog posts database
  blogPosts = [
    {
      slug: 'dallas-commercial-construction-cost-2026',
      title: 'Evaluating Dallas Commercial Construction Costs Per Square Foot (2026 Guide)',
      description: 'A detailed breakdown of Dallas commercial construction costs per square foot in 2026. Learn about steel index prices, labor, zoning, and Design-Build contractor fees.',
      tag: 'Cost Analysis',
      date: '2026-05-24',
      readTime: '8 min read',
      keywords: ['Dallas commercial general contractor', 'commercial building cost per sq ft Dallas', 'general contracting Dallas cost'],
      sections: [
        {
          heading: 'Introduction: Dallas Commercial Construction Trends in 2026',
          text: 'The commercial real estate landscape in the Dallas-Fort Worth metroplex continues to experience rapid expansion. However, shifting labor availability and material costs make accurate budget projections critical. In 2026, estimating your building cost per square foot requires a deep understanding of local steel indices, concrete supply lines, and subcontractor margins.'
        },
        {
          heading: 'Dallas Construction Cost Breakdown per Square Foot',
          text: 'Commercial building costs in Dallas vary significantly depending on the class of structure (Class A office space, warehouse, or light industrial). Below is a typical breakdown for Dallas commercial construction in 2026:',
          table: [
            ['Building Type', 'Average Cost Range (per sq ft)', 'Key Cost Drivers'],
            ['Class A Office Space', '$280 - $410', 'Premium finishes, glass glazing systems'],
            ['Mid-Rise Mixed-Use', '$240 - $350', 'Structural concrete foundations, retail zoning'],
            ['Industrial Logistics Hub', '$110 - $165', 'Structural steel framing, clear heights'],
            ['Outpatient Medical Center', '$320 - $480', 'HVAC zoning, medical-grade compliance']
          ]
        },
        {
          heading: 'Mitigating Costs with Design-Build Management',
          text: 'To avoid cost overruns, developers are moving away from traditional Design-Bid-Build models. Partnering with a unified Dallas commercial general contractor who handles both architectural blueprints and site construction mitigates clash risks, lowering total cost variables by up to 12%.'
        }
      ]
    },
    {
      slug: 'atlanta-commercial-permitting-timelines-guide',
      title: 'Atlanta Commercial Permitting Timelines: How to Avoid Project Delays',
      description: 'Avoid costly construction delays in Georgia. Our guide reviews the Atlanta commercial permitting process, reviews zoning variances, and provides developer strategies.',
      tag: 'Regulations',
      date: '2026-05-22',
      readTime: '6 min read',
      keywords: ['Atlanta commercial permitting', 'general contractor Atlanta GA', 'commercial zoning Atlanta'],
      sections: [
        {
          heading: 'The Permitting Bottleneck in Atlanta Commercial Real Estate',
          text: 'For commercial developers in Atlanta, securing municipal permit approvals is often the most unpredictable phase of a project. With zoning updates in Fulton County and municipal review backlogs, wait times can stretch from weeks to several months, putting interest rates and contractor bookings at risk.'
        },
        {
          heading: 'Average Review Times by Permit Type (Atlanta Metro)',
          text: 'Understanding the expected timeline for each stage of construction permitting allows developers to schedule sub-contractors and materials logistics accurately.',
          table: [
            ['Review Type', 'Average Duration', 'Zoning Entity'],
            ['Land Disturbance Permit (LDP)', '6 - 9 Weeks', 'City of Atlanta Planning Office'],
            ['Structural & Building Permit', '8 - 12 Weeks', 'Fulton County Building Department'],
            ['Mechanical/Electrical/Plumbing (MEP)', '4 - 6 Weeks', 'Joint Municipal Inspectors'],
            ['Zoning Variance / Special Use', '12 - 20 Weeks', 'Atlanta Zoning Board of Adjustment']
          ]
        },
        {
          heading: 'How a Design-Build General Contractor Accelerates Permitting',
          text: 'An experienced general contractor in Atlanta GA will submit permit packages concurrently and use 3D BIM models to prove compliance to municipal inspectors beforehand. Pre-vetted code reviews reduce structural revisions, saving an average of 4 to 6 weeks on permit turnaround.'
        }
      ]
    },
    {
      slug: 'austin-architectural-design-fees-commercial-buildings',
      title: 'Austin Architectural Design Fees for Commercial Real Estate',
      description: 'An analysis of architectural design fees for commercial buildings in Austin, Texas. Compare percentage of construction cost models and fixed fee guidelines.',
      tag: 'Design-Build',
      date: '2026-05-20',
      readTime: '7 min read',
      keywords: ['Austin commercial architects', 'architectural design fees Austin', 'BIM modeling cost Austin'],
      sections: [
        {
          heading: 'Pricing Architect Services in the Austin Tech Corridor',
          text: 'Austin, Texas continues to attract major technology headquarters and commercial mixed-use developers. When planning an office tower or creative studio, understanding how architectural design fees are structured helps developers optimize their pre-construction financing.'
        },
        {
          heading: 'Architect Fee Structures: Percentage vs. Flat Rates',
          text: 'Commercial architects in Austin typically structure their design fees using one of three standard billing models:',
          table: [
            ['Billing Model', 'Average Rates (Austin Market)', 'Best Fit For'],
            ['Percentage of Construction Cost', '5% - 9% of total build', 'Complex custom designs & medical facilities'],
            ['Fixed Fee / Flat Rate', '$15,000 - $150,000+', 'Standard retail centers & warehouses'],
            ['Hourly Consultation Rate', '$180 - $275 per hour', 'Pre-construction feasibility audits']
          ]
        },
        {
          heading: 'Reducing Architectural Redundancy with BIM Clash Detection',
          text: 'By utilizing advanced Building Information Modeling (BIM) mockups, architects and structural engineers can review framing and ductwork systems in 3D. Eliminating layout clashes prior to permit submission reduces design revision billing and keeps project timelines on track.'
        }
      ]
    },
    {
      slug: 'houston-soil-stabilization-foundation-engineering',
      title: 'Houston Soil Stabilization: Essential Foundation Engineering for B2B Developers',
      description: 'Houston clay soils present unique foundation structural engineering challenges. Learn about soil stabilization techniques, concrete pouring, and costs in coastal Texas.',
      tag: 'Engineering',
      date: '2026-05-18',
      readTime: '9 min read',
      keywords: ['Houston structural engineering', 'soil stabilization cost Houston', 'commercial foundations Texas'],
      sections: [
        {
          heading: 'The Challenge of Houston Clay Soils',
          text: 'The coastal plains of Houston, Texas are dominated by expansive clay soils, which expand when wet and contract during dry periods. For commercial structures and multi-tenant offices, failing to address soil stability prior to pouring concrete leads to foundation shifting and cracking.'
        },
        {
          heading: 'Comparing Soil Stabilization Methods for Commercial Foundations',
          text: 'Structural engineers use several methods to stabilize ground soils in Houston, depending on the chemical composition of the clay:',
          table: [
            ['Method', 'Average Cost per Sq Ft', 'Structural Benefit'],
            ['Lime Stabilization', '$2.50 - $4.00', 'Reduces plasticity of high-clay soils'],
            ['Chemical Injection (Polyurethane)', '$4.50 - $7.50', 'Fills void spaces, stabilizes deep layers'],
            ['Mechanical Compaction & Fill', '$3.00 - $5.00', 'Replaces expansive soil with stable sand/gravel'],
            ['Deep Pier Concrete Piles', '$1,200 - $2,500 per pier', 'Transfers loads to stable deep soil layers']
          ]
        },
        {
          heading: 'Ensuring Long-Term Structural Integrity',
          text: 'Working with a specialist in Houston structural engineering ensures that soil tests (geotechnical reports) are conducted and interpreted correctly, allowing foundation designers to select the optimal concrete foundation thickness and steel reinforcement levels.'
        }
      ]
    },
    {
      slug: 'leed-certification-roi-commercial-buildings-texas',
      title: 'LEED Certification ROI: Is Green Building Worth It for Texas Developers?',
      description: 'Calculate the return on investment of LEED certification for Texas commercial real estate. Compare building costs with energy savings and tax incentives.',
      tag: 'Sustainability',
      date: '2026-05-16',
      readTime: '8 min read',
      keywords: ['green commercial building Texas', 'LEED certification cost Dallas', 'sustainable construction Austin'],
      sections: [
        {
          heading: 'The Business Case for LEED Certification in Texas',
          text: 'In cities like Austin and Dallas, green building codes are becoming standard. However, pursuing official LEED (Leadership in Energy and Environmental Design) certification adds pre-construction documentation and material costs. Understanding the operational return on investment (ROI) helps commercial developers justify green investments.'
        },
        {
          heading: 'LEED Cost Premiums vs. Annual Operational Savings',
          text: 'While building to LEED standards costs slightly more initially, the reduction in electricity, water, and waste bills compounds quickly:',
          table: [
            ['LEED Level', 'Estimated Build Cost Premium', 'Average Utility Reduction', 'Payback Period'],
            ['Certified / Silver', '1% - 3%', '12% - 18% annually', '3 - 5 Years'],
            ['Gold', '3% - 5%', '20% - 28% annually', '5 - 7 Years'],
            ['Platinum', '6% - 10%', '30% - 40% annually', '7 - 10 Years']
          ]
        },
        {
          heading: 'Texas Green Building Incentives and Tax Breaks',
          text: 'Municipalities and utility companies across Austin, Dallas, and Houston offer fast-track permitting, property tax exemptions, and HVAC rebates for LEED-certified commercial real estate, directly reducing initial construction budget strain.'
        }
      ]
    },
    {
      slug: 'design-build-versus-general-contracting-comparison',
      title: 'Design-Build vs. General Contracting: Which Saves More on Commercial Projects?',
      description: 'A direct comparison between Design-Build and traditional General Contracting delivery methods for commercial developers in Texas and Georgia.',
      tag: 'Design-Build',
      date: '2026-05-14',
      readTime: '7 min read',
      keywords: ['Design-Build general contracting US', 'commercial builders Atlanta', 'construction management Houston'],
      sections: [
        {
          heading: 'The Shift Toward Integrated Construction Delivery',
          text: 'Historically, B2B commercial developers hired architects and general contractors under separate contracts. Today, the Design-Build model—where a single general contracting firm manages both design schematics and active construction—is rapidly becoming the standard due to its ability to streamline communication and lower cost risks.'
        },
        {
          heading: 'Comparison Matrix: Design-Build vs. Design-Bid-Build',
          text: 'Below is a comparative breakdown of how both models affect key construction variables:',
          table: [
            ['Metric', 'Traditional General Contracting', 'Design-Build Delivery'],
            ['Point of Contact', 'Separate (Architect & Contractor)', 'Single Point of Responsibility'],
            ['Clash Resolution', 'Client arbitrates disputes', 'Internal engineering resolution'],
            ['Cost Overruns', 'Average 8% - 15%', 'Average less than 3%'],
            ['Project Speed', 'Sequential, slower delivery', 'Overlapping phases, 15% faster']
          ]
        },
        {
          heading: 'Which Method Is Best for Your Commercial Project?',
          text: 'For complex developments, medical facilities, and high-end estates in Texas and Georgia, Design-Build offers superior cost controls, whereas simple storage facilities or standard retail shells may still suit traditional competitive bidding.'
        }
      ]
    }
  ];

  // Generate 24 additional blog posts programmatically to reach exactly 30 posts,
  // ensuring unique slugs, dates spread over the past month, and varied keywords.
  const tags = ['Cost Analysis', 'Sustainability', 'Regulations', 'Design-Build', 'Engineering'];
  const locations = ['Austin, TX', 'Dallas, TX', 'Houston, TX', 'Atlanta, GA'];
  const keywordsPool = [
    ['commercial general contractor', 'building contractor', 'general contracting'],
    ['commercial architects', 'architectural layout', 'architectural design fees'],
    ['structural engineering', 'foundation calculations', 'steel framing cost'],
    ['green building', 'LEED certified developers', 'sustainable materials'],
    ['project management', 'construction timelines', 'design-build company']
  ];

  for (let i = 1; i <= 24; i++) {
    const locIndex = i % locations.length;
    const tagIndex = i % tags.length;
    const location = locations[locIndex];
    const tag = tags[tagIndex];
    const dateStr = new Date(new Date('2026-05-25').getTime() - (i * 24 * 60 * 60 * 1000 * 1.1))
      .toISOString().split('T')[0];
    
    const kw = keywordsPool[tagIndex];
    
    const post = {
      slug: `blog-post-${i}-construction-intelligence-${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      title: `Advanced Guide to ${tag} for Commercial Real Estate in ${location}`,
      description: `A comprehensive analysis of ${tag} trends and best practices for B2B developers and general contractors operating in ${location} in 2026.`,
      tag: tag,
      date: dateStr,
      readTime: `${Math.floor(Math.random() * 5) + 5} min read`,
      keywords: [`${tag.toLowerCase()} ${location}`, kw[0], kw[1]],
      sections: [
        {
          heading: `Understanding ${tag} in ${location} Metro Market`,
          text: `As commercial development in the ${location} area matures, B2B planners are encountering new regulations, labor dynamics, and material price indexes. Navigating these factors requires a proactive approach to site estimations and structural layouts.`
        },
        {
          heading: `Key Metrics for ${tag} (2026 Reference)`,
          text: `Below is a summarized table of cost and operational indicators for projects focusing on ${tag} in the local market:`,
          table: [
            ['Project Phase', 'Relative Cost Index', 'Estimated Schedule Impact'],
            ['Feasibility & Pre-con', 'Low (3% of budget)', '1 - 3 Weeks'],
            ['BIM Design & Modeling', 'Medium (6% of budget)', '2 - 4 Weeks'],
            ['Foundation & Structural Steel', 'High (45% of budget)', '8 - 12 Weeks'],
            ['Occupancy Inspection & Handover', 'Low (2% of budget)', '2 - 3 Weeks']
          ]
        },
        {
          heading: `Maximizing Project Efficiency`,
          text: `By working with a unified design-build company, commercial developers in ${location} can consolidate their engineering, architectural drafting, and project management under a single general contract, resulting in faster occupancy and reduced overhead.`
        }
      ]
    };
    blogPosts.push(post);
  }
}

// Sort blog posts by date descending
blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

// HTML Page Template
const getTemplate = (post) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} | ApexVertex Insights</title>
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="${post.description}">
  <meta name="keywords" content="${post.keywords.join(', ')}">
  <meta name="author" content="ApexVertex Construction">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  
  <!-- JSON-LD BlogPosting Schema Markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${post.title}",
    "description": "${post.description}",
    "author": {
      "@type": "Organization",
      "name": "ApexVertex Construction"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ApexVertex Construction",
      "logo": {
        "@type": "ImageObject",
        "url": "https://apexvertex.vercel.app/public/assets/engineer_hero.png"
      }
    },
    "datePublished": "${post.date}",
    "genre": "${post.tag}",
    "keywords": "${post.keywords.join(' ')}"
  }
  </script>
</head>
<body>

  <!-- TOP ANNOUNCEMENT BAR -->
  <div class="announcement-bar" role="complementary">
    Combining Craftsmanship with Innovation for Exceptional Results across Texas, Atlanta, and Nationwide.
  </div>

  <!-- HEADER / NAV BAR -->
  <header class="header-nav" id="mainHeader">
    <div class="container flex items-center justify-between">
      <a href="/" class="nav-logo" aria-label="ApexVertex Construction Homepage">
        <svg class="nav-logo-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 19.5H22L12 2ZM12 6.5L18.5 17.5H5.5L12 6.5Z"/>
          <circle cx="12" cy="13" r="1.5"/>
        </svg>
        <span>ApexVertex</span>
      </a>

      <nav aria-label="Primary Navigation">
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog" class="active">Blog</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="header-cta">
        <a href="#contact" class="btn btn-orange btn-sm">Free Consultation</a>
      </div>

      <button class="mobile-menu-btn" id="mobileMenuOpenBtn" aria-label="Open Navigation Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </header>

  <!-- MOBILE NAVIGATION DRAWER -->
  <div class="menu-overlay" id="menuOverlay"></div>
  <div class="mobile-menu-drawer" id="mobileMenuDrawer" aria-hidden="true" role="dialog">
    <button class="mobile-menu-close" id="mobileMenuCloseBtn" aria-label="Close Navigation Menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <ul class="mobile-nav-links">
      <li><a href="/" class="mobile-link">Home</a></li>
      <li><a href="/services" class="mobile-link">Services</a></li>
      <li><a href="/portfolio" class="mobile-link">Portfolio</a></li>
      <li><a href="/blog" class="mobile-link">Blog</a></li>
      <li><a href="/about" class="mobile-link">About Us</a></li>
      <li><a href="#contact" class="mobile-link">Contact</a></li>
    </ul>
    <div class="mobile-nav-cta">
      <a href="#contact" class="btn btn-orange mobile-link" style="width: 100%;">Free Consultation</a>
    </div>
  </div>

  <main>
    <article class="policy-content-wrapper" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
      <div class="container" style="max-width: 850px;">
        <span class="section-tagline" style="text-align: left;">${post.tag} &bull; ${post.readTime}</span>
        <h1 itemprop="headline" style="font-size: 2.8rem; margin-bottom: 1.5rem; line-height: 1.2;">${post.title}</h1>
        
        <div style="display: flex; gap: 1.5rem; color: var(--text-muted); font-size: 0.9rem; margin-bottom: 3rem; border-bottom: 1px solid var(--navy-border); padding-bottom: 1.5rem;">
          <div>Published on <span itemprop="datePublished">${post.date}</span></div>
          <div>Author: <strong>ApexVertex Construction</strong></div>
        </div>

        <div class="policy-rich-text" itemprop="articleBody">
          ${post.sections.map(sec => {
            let sectionHTML = `<h2>${sec.heading}</h2><p>${sec.text}</p>`;
            if (sec.table) {
              sectionHTML += `<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 0.9rem;">
                <thead>
                  <tr style="border-bottom: 2px solid var(--primary-orange); text-align: left;">
                    ${sec.table[0].map(h => `<th style="padding: 0.8rem; color: var(--white); font-weight: 700;">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${sec.table.slice(1).map(row => `<tr style="border-bottom: 1px solid var(--navy-border);">
                    ${row.map((cell, idx) => `<td style="padding: 0.8rem; color: ${idx === 0 ? 'var(--white)' : 'var(--text-muted)'};">${cell}</td>`).join('')}
                  </tr>`).join('')}
                </tbody>
              </table>`;
            }
            return sectionHTML;
          }).join('')}
          
          <div style="background: var(--navy-card); border: 1px solid var(--navy-border); border-left: 4px solid var(--primary-orange); border-radius: 4px; padding: 2rem; margin: 3rem 0; text-align: center;">
            <h3 style="margin-top: 0; margin-bottom: 0.5rem; color: var(--white);">Ready to Start Your Construction Project?</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem;">Connect with our design-build general contracting experts in Texas and Atlanta today for a detailed budget consultation.</p>
            <a href="#contact" class="btn btn-orange">Get a Free Consultation</a>
          </div>
        </div>
      </div>
    </article>

    <!-- Consultation CTA Form -->
    <section id="contact" class="services" style="border-top: 1px solid var(--navy-border);" aria-labelledby="contact-title">
      <div class="container" style="max-width: 700px;">
        <div class="section-header reveal">
          <span class="section-tagline">Consultation</span>
          <h2 id="contact-title">Partner with ApexVertex</h2>
          <p class="section-desc">Connect with our construction consultants in Austin, Houston, Dallas, or Atlanta today.</p>
        </div>

        <form class="contact-form reveal">
          <div style="margin-bottom: 1.5rem;">
            <label for="client-name" style="display: block; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem; color: var(--text-muted);">Your Name</label>
            <input type="text" id="client-name" required style="width: 100%; padding: 0.8rem; background: var(--navy-dark); border: 1px solid var(--navy-border); border-radius: 4px; color: var(--white); font-family: inherit;">
          </div>
          <div style="margin-bottom: 1.5rem;">
            <label for="client-email" style="display: block; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem; color: var(--text-muted);">Email Address</label>
            <input type="email" id="client-email" required style="width: 100%; padding: 0.8rem; background: var(--navy-dark); border: 1px solid var(--navy-border); border-radius: 4px; color: var(--white); font-family: inherit;">
          </div>
          <div style="margin-bottom: 1.5rem;">
            <label for="project-type" style="display: block; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem; color: var(--text-muted);">Project Type</label>
            <select id="project-type" style="width: 100%; padding: 0.8rem; background: var(--navy-dark); border: 1px solid var(--navy-border); border-radius: 4px; color: var(--white); font-family: inherit;">
              <option>Commercial Development</option>
              <option>High-Net-Worth Residential Estate</option>
              <option>Architectural Design &amp; Planning</option>
              <option>Industrial Infrastructure</option>
            </select>
          </div>
          <div style="margin-bottom: 2rem;">
            <label for="client-msg" style="display: block; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem; color: var(--text-muted);">Project Scope &amp; Geolocation</label>
            <textarea id="client-msg" rows="4" placeholder="Briefly describe your project location (e.g., Houston, TX or Atlanta, GA) and scope..." style="width: 100%; padding: 0.8rem; background: var(--navy-dark); border: 1px solid var(--navy-border); border-radius: 4px; color: var(--white); font-family: inherit; resize: none;"></textarea>
          </div>
          <button type="submit" class="btn btn-orange" style="width: 100%;">Submit Request</button>
        </form>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="grid footer-grid">
        <div class="footer-col footer-bio">
          <a href="/" class="nav-logo" aria-label="ApexVertex Construction Homepage">
            <svg class="nav-logo-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 19.5H22L12 2ZM12 6.5L18.5 17.5H5.5L12 6.5Z"/>
              <circle cx="12" cy="13" r="1.5"/>
            </svg>
            <span>ApexVertex</span>
          </a>
          <p>
            Delivering high-end commercial general contracting, state-of-the-art architectural design, and industrial planning nationwide. Focused on major metro markets including Dallas, Houston, Austin, and Atlanta.
          </p>
          <div class="footer-socials">
            <a href="https://linkedin.com" class="social-icon" aria-label="ApexVertex LinkedIn Profile">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="https://instagram.com" class="social-icon" aria-label="ApexVertex Instagram Profile">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m8.9 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="/services">Architecture Design</a></li>
            <li><a href="/services">Estate Construction</a></li>
            <li><a href="/services">Project Management</a></li>
            <li><a href="/services">Site Estimations</a></li>
            <li><a href="/services">Structural Engineering</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Stay Updated</h4>
          <p class="newsletter-desc">Subscribe to our newsletter for 2026 cost indices and building trends in TX and GA.</p>
          <form class="newsletter-form">
            <div class="newsletter-input-group">
              <input type="email" placeholder="Enter your email" class="newsletter-input" required aria-label="Email address for newsletter subscription">
              <button type="submit" class="newsletter-submit" aria-label="Subscribe to Newsletter">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="footer-bottom flex justify-between items-center flex-wrap">
        <div>
          &copy; 2026 ApexVertex Construction. All Rights Reserved. Serving TX, GA, and Nationwide.
        </div>
        <div class="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/#about">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    const mobileMenuOpenBtn = document.getElementById('mobileMenuOpenBtn');
    const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
    const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
      mobileMenuDrawer.classList.add('open');
      mobileMenuDrawer.setAttribute('aria-hidden', 'false');
      menuOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      mobileMenuDrawer.classList.remove('open');
      mobileMenuDrawer.setAttribute('aria-hidden', 'true');
      menuOverlay.classList.remove('open');
      document.body.style.overflow = 'auto';
    }

    mobileMenuOpenBtn.addEventListener('click', openMobileMenu);
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    // Form AJAX Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting Request...';

        const name = document.getElementById('client-name').value;
        const email = document.getElementById('client-email').value;
        const projectType = document.getElementById('project-type').value;
        const message = document.getElementById('client-msg').value;

        // Validation check
        if (!email || !name || !message) {
          showFormFeedback(contactForm, 'Please fill in all required fields.', false);
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
          return;
        }

        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, projectType, message })
          });

          const result = await response.json();
          if (response.ok && result.success) {
            showFormFeedback(contactForm, 'Thank you! Your request has been securely routed to our business communications team.', true);
            contactForm.reset();
          } else {
            showFormFeedback(contactForm, result.error || 'Submission failed. Please check inputs and try again.', false);
          }
        } catch (err) {
          showFormFeedback(contactForm, 'Network error. Please try again later.', false);
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
        }
      });
    }

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('.newsletter-input');
        const submitBtn = newsletterForm.querySelector('.newsletter-submit');
        const originalHtml = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '...';

        const email = emailInput.value;

        try {
          const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          });

          const result = await response.json();
          if (response.ok && result.success) {
            alert('Successfully subscribed to 2026 cost indices & building trends!');
            newsletterForm.reset();
          } else {
            alert(result.error || 'Subscription failed. Please check inputs.');
          }
        } catch (err) {
          alert('Network error. Please try again later.');
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        }
      });
    }

    function showFormFeedback(formElement, message, isSuccess) {
      // Check if existing feedback exists
      let feedback = formElement.querySelector('.form-feedback');
      if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'form-feedback';
        feedback.style.marginTop = '1.5rem';
        feedback.style.padding = '1rem';
        feedback.style.borderRadius = '4px';
        feedback.style.fontSize = '0.9rem';
        feedback.style.fontWeight = '500';
        feedback.style.textAlign = 'center';
        feedback.style.transition = 'all 0.3s ease';
        formElement.appendChild(feedback);
      }
      feedback.innerText = message;
      if (isSuccess) {
        feedback.style.background = 'rgba(76, 175, 80, 0.15)';
        feedback.style.border = '1px solid #4CAF50';
        feedback.style.color = '#4CAF50';
      } else {
        feedback.style.background = 'rgba(244, 67, 54, 0.15)';
        feedback.style.border = '1px solid #f44336';
        feedback.style.color = '#f44336';
      }
      setTimeout(() => {
        feedback.style.opacity = '1';
      }, 50);
    }
  </script>
</body>
</html>
`;

// Main execution block to output all blog files
console.log('Generating ' + blogPosts.length + ' blog posts...');
const blogDir = path.join(__dirname, 'blog');
if (!fs.existsSync(blogDir)){
  fs.mkdirSync(blogDir, { recursive: true });
}
blogPosts.forEach(post => {
  const htmlContent = getTemplate(post);
  const filePath = path.join(blogDir, post.slug + '.html');
  fs.writeFileSync(filePath, htmlContent, 'utf-8');
});
console.log('Successfully generated all blog posts!');

// Output JSON file containing metadata for indexation/listing page
const metaDataPathOut = path.join(__dirname, 'blogs-meta.json');
fs.writeFileSync(metaDataPathOut, JSON.stringify(blogPosts, null, 2), 'utf-8');
console.log('Successfully saved blogs-meta.json metadata file!');
