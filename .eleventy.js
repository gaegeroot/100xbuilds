module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection("automationPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('automation');
        });
    });

    eleventyConfig.addCollection("roiAnalysisPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('roi-analysis');
        });
    });

    eleventyConfig.addCollection("caseStudiesPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('case-studies');
        });
    });

    eleventyConfig.addCollection("salesSystemsPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('sales-systems');
        });
    });

    eleventyConfig.addCollection("industryInsightsPosts", function (collectionApi) {
        return collectionApi.getFilteredByTag("blogpost").filter(post => {
            return post.data.categories && post.data.categories.includes('industry-insights');
        });
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