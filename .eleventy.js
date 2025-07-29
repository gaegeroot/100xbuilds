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

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            include: "includes",
        },
        pathPrefix: "/100xbuilds/"
    };
};