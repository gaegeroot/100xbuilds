const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    const blogCategories = [
        'automation',
        'technology',
        'sales',
        'operations',
        'insights',
        'growth',
        'finance'
    ];

    // Helper function to sort posts by date (newest first)
    const sortPostsByDate = (posts) => {
        return posts.sort((a, b) => {
            return new Date(b.data.postDate || b.date) - new Date(a.data.postDate || a.date);
        });
    };

    // Main blogpost collection
    eleventyConfig.addCollection("blogpost", function (collectionApi) {
        return sortPostsByDate(collectionApi.getFilteredByTag("blogpost"));
    });

    // Generate category collections dynamically
    blogCategories.forEach(category => {
        const collectionName = `${category}Posts`;

        eleventyConfig.addCollection(collectionName, function (collectionApi) {
            const filteredPosts = collectionApi.getFilteredByTag("blogpost")
                .filter(post => {
                    return post.data.categories && post.data.categories.includes(category);
                });

            return sortPostsByDate(filteredPosts);
        });
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(new Date(dateObj)).toLocaleString(DateTime.DATE_FULL);
    });

    eleventyConfig.addCollection("sitemap", function (collectionApi) {
        return collectionApi.getAll().filter(function (item) {
            // Exclude based on multiple criteria
            const shouldExclude = (
                // Standard exclusions
                item.inputPath.includes('/_includes/') ||
                item.inputPath.includes('/_data/') ||
                item.inputPath.includes('/assets/') ||

                // Explicit exclusion flags
                item.data.excludeFromSitemap ||
                item.data.draft ||

                // Robots meta exclusions
                item.data.noindex ||
                (item.data.robots && item.data.robots.noindex) ||

                // URL-based exclusions
                !item.url ||
                item.url.includes('/sitemap.xml') ||
                item.url.includes('/robots.txt') ||
                item.url.includes('/feed.xml')
            );

            return !shouldExclude;
        });
    });

    eleventyConfig.addShortcode("roiCalculatorCTA", function (title = "Ready to See Your ROI?", subtitle = "Calculate your potential savings with our free ROI calculator") {
        return `
    <div class="blog-cta-section bg-gradient-primary rounded-lg p-4 my-5 text-center text-white">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h4 class="text-white mb-2">${title}</h4>
          <p class="text-white-75 mb-lg-0">${subtitle}</p>
        </div>
        <div class="col-lg-4 text-lg-end">
          <a href="/roi-calculator" class="btn btn-white btn-lg fw-semibold">
            <span class="me-2">📊</span>
            Calculate ROI
          </a>
        </div>
      </div>
    </div>`;
    });

    eleventyConfig.addShortcode("consultationCTA", function (title = "Ready to Transform Your Business?", subtitle = "Book a free 30-minute strategy session") {
        return `
    <div class="blog-cta-section bg-dark rounded-lg p-4 my-5 text-center text-white position-relative overflow-hidden">
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div class="position-absolute top-0 start-0 w-100 h-100" 
             style="background-image: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);">
        </div>
      </div>
      <div class="position-relative">
        <h4 class="text-white mb-2">${title}</h4>
        <p class="text-white-75 mb-4">${subtitle}</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <a href="/consultation" class="btn btn-primary btn-lg fw-semibold">
            <span class="me-2">📅</span>
            Book Consultation
          </a>
          <a href="tel:409-896-1444" class="btn btn-outline-light">
            <span class="me-2">📞</span>
            Call Now
          </a>
        </div>
      </div>
    </div>`;
    });

    eleventyConfig.addShortcode("auditCTA", function (title = "Get Your Operations Audit", subtitle = "Identify $100K+ in hidden opportunities", price = "$497") {
        return `
    <div class="blog-cta-section bg-white border border-primary rounded-lg p-4 my-5 text-center">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h4 class="text-primary mb-2">${title}</h4>
          <p class="text-muted mb-2">${subtitle}</p>
          <div class="text-success fw-bold">Starting at ${price}</div>
        </div>
        <div class="col-lg-4 text-lg-end">
          <a href="/operations-audit" class="btn btn-primary btn-lg fw-semibold">
            <span class="me-2">🔍</span>
            Get Audit
          </a>
        </div>
      </div>
    </div>`;
    });

    eleventyConfig.addShortcode("testimonialQuote", function (quote, author, company, result = "") {
        return `
    <blockquote class="blog-testimonial bg-light rounded-lg p-4 my-5 border-start border-primary border-5">
      <div class="row">
        <div class="col-lg-8">
          <p class="fst-italic mb-3 text-dark">"${quote}"</p>
          <footer class="blockquote-footer">
            <strong>${author}</strong> - ${company}
            ${result ? `<br><span class="text-success fw-semibold">${result}</span>` : ''}
          </footer>
        </div>
        <div class="col-lg-4 text-lg-end d-flex align-items-center justify-content-lg-end">
          <div class="text-primary fs-1">💬</div>
        </div>
      </div>
    </blockquote>`;
    });

    eleventyConfig.addShortcode("mastermindCTA", function (title = "Join the Luxury Builder Mastermind", subtitle = "Connect with elite builders scaling to 8+ figures") {
        return `
    <div class="blog-cta-section bg-gradient-gold rounded-lg p-4 my-5 text-center text-white position-relative">
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-20">
        <div class="position-absolute top-0 start-0 w-100 h-100" 
             style="background-image: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);">
        </div>
      </div>
      <div class="position-relative">
        <h4 class="text-white mb-2">${title}</h4>
        <p class="text-white-75 mb-4">${subtitle}</p>
        <a href="/mastermind" class="btn btn-white btn-lg fw-semibold">
          <span class="me-2">👑</span>
          Learn More
        </a>
      </div>
    </div>`;
    });

    eleventyConfig.addShortcode("notice", function (type = "info", title, content) {
        const typeClasses = {
            info: "alert-info",
            warning: "alert-warning",
            success: "alert-success",
            danger: "alert-danger"
        };

        const icons = {
            info: "ℹ️",
            warning: "⚠️",
            success: "✅",
            danger: "🚨"
        };

        return `
    <div class="alert ${typeClasses[type]} alert-dismissible my-4" role="alert">
      <h5 class="alert-heading">
        <span class="me-2">${icons[type]}</span>
        ${title}
      </h5>
      <p class="mb-0">${content}</p>
    </div>`;
    });

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            include: "includes",
        }
    };
};