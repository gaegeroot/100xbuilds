// Question data structure - Enhanced with Button Ranges for Tier 2
const questions = {
    tier1: [
        {
            id: 'revenueRange',
            type: 'select',
            title: 'What is your annual revenue range?',
            subtitle: 'This helps us understand your business scale and benchmark against similar builders.',
            help: 'Include all revenue sources: custom homes, remodeling, and other construction services.',
            options: [
                { value: '5-10', label: '$5M - $10M' },
                { value: '10-25', label: '$10M - $25M' },
                { value: '25-50', label: '$25M - $50M' },
                { value: '50+', label: '$50M+' }
            ]
        },
        {
            id: 'homesCompleted',
            type: 'select',
            title: 'How many luxury homes do you complete annually?',
            subtitle: 'This helps us calculate your per-project efficiency metrics.',
            help: 'Count only completed homes, not homes under construction or in planning.',
            options: [
                { value: '8-15', label: '8-15 homes' },
                { value: '16-25', label: '16-25 homes' },
                { value: '26-40', label: '26-40 homes' },
                { value: '40+', label: '40+ homes' }
            ]
        },
        {
            id: 'profitMargin',
            type: 'range',
            title: 'What is your current gross profit margin?',
            subtitle: 'This is a key benchmark for measuring improvement potential.',
            help: 'Gross profit = (Revenue - Direct Costs) ÷ Revenue. Include labor, materials, and subcontractors as direct costs.',
            min: 15,
            max: 40,
            default: 25,
            unit: '%'
        },
        {
            id: 'bottleneck',
            type: 'select',
            title: 'What is your biggest business growth bottleneck?',
            subtitle: 'Identifying your primary constraint helps us prioritize recommendations.',
            help: 'Choose the area that most limits your ability to scale and increase profits.',
            options: [
                { value: 'lead-generation', label: 'Not enough qualified leads' },
                { value: 'sales-conversion', label: 'Low sales conversion rates' },
                { value: 'project-management', label: 'Project management & scheduling' },
                { value: 'client-communication', label: 'Client communication & updates' },
                { value: 'change-orders', label: 'Change order processing' },
                { value: 'vendor-coordination', label: 'Vendor & subcontractor coordination' },
                { value: 'quality-control', label: 'Quality control & inspections' },
                { value: 'financial-tracking', label: 'Financial tracking & reporting' }
            ]
        },
        {
            id: 'communicationChallenge',
            type: 'select',
            title: 'What is your primary business challenge?',
            subtitle: 'This helps us understand the most critical issue impacting your growth.',
            help: 'Choose the challenge that has the biggest impact on your revenue and client satisfaction.',
            options: [
                { value: 'lead-quality', label: 'Poor quality leads wasting sales time' },
                { value: 'sales-process', label: 'Inconsistent or ineffective sales process' },
                { value: 'response-time', label: 'Slow response times to prospects/clients' },
                { value: 'project-updates', label: 'Inconsistent project progress updates' },
                { value: 'change-order-clarity', label: 'Unclear change order communication' },
                { value: 'timeline-expectations', label: 'Managing timeline expectations' },
                { value: 'decision-tracking', label: 'Tracking client decisions and approvals' },
                { value: 'documentation', label: 'Document sharing and organization' }
            ]
        }
    ],
    tier2: [
        // Lead Generation Metrics
        { id: 'monthlyLeads', type: 'select', title: 'How many qualified leads do you get per month?', subtitle: 'Average number of qualified prospects per month', help: 'Leads who meet your project size/budget criteria and are actively looking to build', options: [{ value: '1-5', label: '1-5 leads/month', analysis: 3 }, { value: '6-15', label: '6-15 leads/month', analysis: 10 }, { value: '16-30', label: '16-30 leads/month', analysis: 23 }, { value: '31-50', label: '31-50 leads/month', analysis: 40 }, { value: '50+', label: '50+ leads/month', analysis: 65 }] },
        { id: 'leadSources', type: 'multiselect', title: 'What are your primary lead sources?', subtitle: 'Select your top 3 sources of qualified leads', help: 'Choose your most productive lead sources. This helps us optimize your lead generation strategy', options: [{ value: 'referrals', label: 'Client referrals' }, { value: 'website', label: 'Website/SEO' }, { value: 'social-media', label: 'Social media' }, { value: 'paid-advertising', label: 'Paid advertising (Google/Facebook)' }, { value: 'print-advertising', label: 'Print advertising' }, { value: 'trade-shows', label: 'Trade shows/events' }, { value: 'partnerships', label: 'Architect/designer partnerships' }, { value: 'past-clients', label: 'Repeat clients' }, { value: 'cold-outreach', label: 'Cold outreach' }] },
        { id: 'leadQualificationTime', type: 'select', title: 'How long does lead qualification take?', subtitle: 'Average time to determine if a lead is qualified', help: 'From first contact to knowing if they\'re a good fit (budget, timeline, project scope)', options: [{ value: 'under-4h', label: 'Under 4 hours', analysis: 2 }, { value: '4-24h', label: '4-24 hours', analysis: 12 }, { value: '1-3d', label: '1-3 days', analysis: 48 }, { value: '3-7d', label: '3-7 days', analysis: 120 }, { value: 'over-week', label: 'Over a week', analysis: 200 }] },
        { id: 'costPerLead', type: 'select', title: 'What\'s your cost per qualified lead?', subtitle: 'Total marketing spend divided by qualified leads', help: 'Include all marketing costs: advertising, website, staff time, materials. Qualified leads only', options: [{ value: '0-500', label: '$0 - $500', analysis: 250 }, { value: '500-1000', label: '$500 - $1,000', analysis: 750 }, { value: '1000-2500', label: '$1,000 - $2,500', analysis: 1750 }, { value: '2500-5000', label: '$2,500 - $5,000', analysis: 3750 }, { value: '5000+', label: '$5,000+', analysis: 7500 }] },

        // Sales Metrics
        { id: 'conversionRate', type: 'select', title: 'What\'s your lead to sale conversion rate?', subtitle: 'Percentage of qualified leads that become signed contracts', help: 'Qualified leads who become paying clients. Industry benchmark for luxury builders: 15-25%', options: [{ value: 'under-10', label: 'Under 10% (Needs improvement)', analysis: 7 }, { value: '10-20', label: '10-20% (Industry average)', analysis: 15 }, { value: '21-35', label: '21-35% (Above average)', analysis: 28 }, { value: '35+', label: '35%+ (Excellent)', analysis: 45 }] },
        { id: 'salesCycleDays', type: 'select', title: 'How long is your average sales cycle?', subtitle: 'Days from first qualified contact to signed contract', help: 'Time from initial qualified inquiry to contract signing. Luxury homes typically 60-180 days', options: [{ value: 'under-30', label: 'Under 30 days', analysis: 20 }, { value: '30-60', label: '30-60 days', analysis: 45 }, { value: '60-120', label: '60-120 days', analysis: 90 }, { value: '120-180', label: '120-180 days', analysis: 150 }, { value: 'over-180', label: 'Over 180 days', analysis: 240 }] },
        { id: 'presentationToCloseRate', type: 'select', title: 'What\'s your presentation to close rate?', subtitle: 'Percentage of formal presentations that result in contracts', help: 'After you\'ve done a full presentation/proposal, what percentage sign contracts?', options: [{ value: 'under-20', label: 'Under 20%', analysis: 15 }, { value: '20-40', label: '20-40%', analysis: 30 }, { value: '40-60', label: '40-60%', analysis: 50 }, { value: '60+', label: '60%+', analysis: 70 }] },
        { id: 'avgMeetingsToClose', type: 'select', title: 'How many meetings does it take to close?', subtitle: 'Number of meetings/touchpoints before contract signing', help: 'Include initial consultations, design meetings, proposal presentations, negotiations', options: [{ value: '2-3', label: '2-3 meetings', analysis: 2.5 }, { value: '4-6', label: '4-6 meetings', analysis: 5 }, { value: '7-10', label: '7-10 meetings', analysis: 8.5 }, { value: '10+', label: '10+ meetings', analysis: 12 }] },
        { id: 'followUpEffectiveness', type: 'select', title: 'How effective are your follow-ups?', subtitle: 'Percentage of follow-up attempts that get responses', help: 'When you follow up with prospects who haven\'t decided, what percentage respond positively?', options: [{ value: 'under-25', label: 'Under 25% (Poor)', analysis: 18 }, { value: '25-50', label: '25-50% (Average)', analysis: 37 }, { value: '50-75', label: '50-75% (Good)', analysis: 62 }, { value: '75+', label: '75%+ (Excellent)', analysis: 80 }] },

        // Marketing Metrics  
        { id: 'monthlyMarketingSpend', type: 'select', title: 'What\'s your monthly marketing investment?', subtitle: 'Total monthly marketing and advertising budget', help: 'Include all marketing: digital ads, print, website, trade shows, staff time on marketing activities', options: [{ value: '500-2500', label: '$500 - $2,500', analysis: 1500 }, { value: '2500-7500', label: '$2,500 - $7,500', analysis: 5000 }, { value: '7500-15000', label: '$7,500 - $15,000', analysis: 11250 }, { value: '15000-30000', label: '$15,000 - $30,000', analysis: 22500 }, { value: '30000+', label: '$30,000+', analysis: 45000 }] },
        { id: 'websiteConversionRate', type: 'select', title: 'What\'s your website conversion rate?', subtitle: 'Percentage of website visitors who become leads', help: 'Visitors who fill out contact forms, call, or otherwise express interest. Luxury builders should target 2-5%', options: [{ value: 'under-1', label: 'Under 1% (Needs work)', analysis: 0.7 }, { value: '1-3', label: '1-3% (Average)', analysis: 2 }, { value: '3-5', label: '3-5% (Good)', analysis: 4 }, { value: '5+', label: '5%+ (Excellent)', analysis: 6.5 }] },
        { id: 'socialMediaROI', type: 'select', title: 'How effective is social media for lead generation?', subtitle: 'Social media effectiveness for generating qualified leads', help: 'Specifically for qualified prospects, not just followers or engagement', options: [{ value: 'highly-effective', label: 'Highly effective - generates 20%+ of our leads' }, { value: 'moderately-effective', label: 'Moderately effective - generates 5-20% of leads' }, { value: 'minimally-effective', label: 'Minimally effective - generates <5% of leads' }, { value: 'ineffective', label: 'Ineffective - generates no meaningful leads' }, { value: 'not-using', label: 'Not currently using social media for lead gen' }] },
        { id: 'brandRecognition', type: 'select', title: 'What\'s your brand recognition rate?', subtitle: 'Percentage of prospects who already know your company', help: 'When meeting new prospects, what percentage have already heard of your company?', options: [{ value: 'under-10', label: 'Under 10%', analysis: 6 }, { value: '10-25', label: '10-25%', analysis: 17 }, { value: '25-50', label: '25-50%', analysis: 37 }, { value: '50+', label: '50%+', analysis: 65 }] },

        // Client Relationship Metrics
        { id: 'clientLifetimeValue', type: 'select', title: 'What\'s your average client lifetime value?', subtitle: 'Total revenue from average client relationship', help: 'Include initial project, change orders, referrals they generate, and any repeat business', options: [{ value: '500k-1m', label: '$500K - $1M', analysis: 750000 }, { value: '1m-2m', label: '$1M - $2M', analysis: 1500000 }, { value: '2m-5m', label: '$2M - $5M', analysis: 3500000 }, { value: '5m+', label: '$5M+', analysis: 7500000 }] },
        { id: 'referralConversionRate', type: 'select', title: 'What\'s your referral conversion rate?', subtitle: 'Percentage of referrals that become clients', help: 'Referrals typically convert much higher than other lead sources. Industry average: 40-70%', options: [{ value: 'under-40', label: 'Under 40%', analysis: 30 }, { value: '40-60', label: '40-60%', analysis: 50 }, { value: '60-80', label: '60-80%', analysis: 70 }, { value: '80+', label: '80%+', analysis: 85 }] },
        { id: 'repeatClientRate', type: 'select', title: 'What\'s your repeat client rate?', subtitle: 'Percentage of clients who hire you for additional projects', help: 'Second homes, renovations, additions within 5 years of initial project', options: [{ value: 'under-10', label: 'Under 10%', analysis: 6 }, { value: '10-25', label: '10-25%', analysis: 17 }, { value: '25-50', label: '25-50%', analysis: 37 }, { value: '50+', label: '50%+', analysis: 60 }] },

        // Operational Metrics
        { id: 'adminHoursPerProject', type: 'select', title: 'How many admin hours per project?', subtitle: 'Total admin/office hours per project completion', help: 'Include project management, client communication, scheduling, documentation, invoicing. Don\'t include field supervision', options: [{ value: 'under-20', label: 'Under 20 hours', analysis: 15 }, { value: '20-40', label: '20-40 hours', analysis: 30 }, { value: '40-80', label: '40-80 hours', analysis: 60 }, { value: '80+', label: '80+ hours', analysis: 100 }] },
        { id: 'avgResponseTimeHours', type: 'select', title: 'What\'s your average response time?', subtitle: 'Typical time to respond to client/prospect inquiries', help: 'From when client/prospect contacts you to when you provide a substantive response. Luxury clients expect <4 hours', options: [{ value: 'under-2h', label: 'Under 2 hours', analysis: 1 }, { value: '2-4h', label: '2-4 hours', analysis: 3 }, { value: '4-12h', label: '4-12 hours', analysis: 8 }, { value: '12-24h', label: '12-24 hours', analysis: 18 }, { value: 'over-24h', label: 'Over 24 hours', analysis: 48 }] },
        { id: 'proposalPreparationTime', type: 'select', title: 'How long does proposal preparation take?', subtitle: 'Average hours to prepare a complete project proposal', help: 'Time from qualified lead to delivering detailed proposal/estimate. Include design time if you do preliminary design', options: [{ value: 'under-10', label: 'Under 10 hours', analysis: 7 }, { value: '10-20', label: '10-20 hours', analysis: 15 }, { value: '20-40', label: '20-40 hours', analysis: 30 }, { value: '40+', label: '40+ hours', analysis: 55 }] },

        // Technology Metrics
        { id: 'crmUsage', type: 'select', title: 'How do you manage leads and clients?', subtitle: 'Current CRM system usage', help: 'Choose the option that best describes your current system', options: [{ value: 'none', label: 'No formal system - use spreadsheets/notes' }, { value: 'basic', label: 'Basic CRM (contacts and notes only)' }, { value: 'integrated', label: 'Integrated CRM with project management' }, { value: 'custom', label: 'Custom-built system' }, { value: 'advanced', label: 'Advanced CRM with automation' }] },
        { id: 'leadTrackingAccuracy', type: 'select', title: 'How accurate is your lead tracking?', subtitle: 'Percentage of leads properly tracked from source to outcome', help: 'Can you accurately track where leads come from and what happens to them? Critical for ROI analysis', options: [{ value: 'under-50', label: 'Under 50% (Poor tracking)', analysis: 35 }, { value: '50-70', label: '50-70% (Basic tracking)', analysis: 60 }, { value: '70-85', label: '70-85% (Good tracking)', analysis: 77 }, { value: '85+', label: '85%+ (Excellent tracking)', analysis: 90 }] },
        { id: 'automationCurrentLevel', type: 'select', title: 'What\'s your current automation level?', subtitle: 'How much of your sales/marketing process is automated?', help: 'Automation includes email sequences, lead scoring, appointment scheduling, follow-ups', options: [{ value: 'none', label: 'No automation - everything is manual' }, { value: 'minimal', label: 'Minimal automation (basic email responses)' }, { value: 'moderate', label: 'Moderate automation (some sequences and scheduling)' }, { value: 'significant', label: 'Significant automation (most processes have some automation)' }, { value: 'advanced', label: 'Advanced automation (sophisticated sequences and workflows)' }] },

        // Business Goals
        { id: 'growthGoal', type: 'select', title: 'What\'s your primary growth objective?', subtitle: 'Your main business growth goal for the next 2 years', help: 'Choose the most important growth objective that drives your decision-making', options: [{ value: 'more-leads', label: 'Generate more qualified leads' }, { value: 'better-conversion', label: 'Improve sales conversion rates' }, { value: 'higher-margins', label: 'Increase profit margins' }, { value: 'faster-sales', label: 'Shorten sales cycle times' }, { value: 'scale-operations', label: 'Scale operations to handle more volume' }, { value: 'premium-positioning', label: 'Position as premium/luxury brand' }] },
        { id: 'topPriority', type: 'select', title: 'What\'s your top priority for improvement?', subtitle: 'The most important area where you want to see immediate improvement', help: 'Choose the single most important area where improvement would have the biggest business impact', options: [{ value: 'lead-generation', label: 'Generate more qualified leads' }, { value: 'sales-conversion', label: 'Improve sales conversion rates' }, { value: 'client-communication', label: 'Better client communication' }, { value: 'project-efficiency', label: 'Faster project completion' }, { value: 'team-productivity', label: 'Increase team productivity' }, { value: 'profit-margins', label: 'Increase profit margins' }, { value: 'quality-control', label: 'Enhanced quality control' }, { value: 'cost-control', label: 'Better cost control' }] },
        { id: 'painPoint', type: 'textarea', title: 'What\'s your biggest business challenge?', subtitle: 'Describe your most critical business challenge impacting growth or profitability', help: 'Be specific about the problem, its impact on revenue/operations, and what you\'ve tried to solve it', rows: 3, placeholder: 'Optional: Describe your biggest business challenge in detail. What specific problems are limiting your growth or profitability?' },

        // Final Email Collection
        { id: 'tier2Email', type: 'email', title: 'Where should we send your custom analysis?', subtitle: 'Professional email address for your detailed report', help: 'You\'ll receive a detailed PDF report within 24 hours with specific recommendations for your lead generation and sales optimization', required: true, placeholder: 'your@company.com' }
    ]
};

let currentQuestionIndex = 0;
let currentTier = 'tier1';
let answers = {};
let isShowingResults = false;

// Add this to the top of your existing roi-calculator.js file, after the questions object
const WEBHOOK_URL = 'https://n8n.supergoodsystems.com/webhook/roi-calculator-ai'; // Update this URL

// Add this submission function anywhere in your existing file
async function submitCalculatorData(completedTier) {
    try {
        // Create structured JSON with all questions and answers
        const payload = {
            submissionId: `${completedTier}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date().toISOString(),
            completedTier: completedTier, // 'tier1' or 'tier2'
            
            // All Tier 1 questions and answers
            tier1: {
                revenueRange: answers.revenueRange || null,
                homesCompleted: answers.homesCompleted || null,
                profitMargin: answers.profitMargin || null,
                bottleneck: answers.bottleneck || null,
                communicationChallenge: answers.communicationChallenge || null
            },
            
            // All Tier 2 questions and answers (null if tier1 submission)
            tier2: completedTier === 'tier2' ? {
                monthlyLeads: answers.monthlyLeads || null,
                leadSources: answers.leadSources || null,
                leadQualificationTime: answers.leadQualificationTime || null,
                costPerLead: answers.costPerLead || null,
                conversionRate: answers.conversionRate || null,
                salesCycleDays: answers.salesCycleDays || null,
                presentationToCloseRate: answers.presentationToCloseRate || null,
                avgMeetingsToClose: answers.avgMeetingsToClose || null,
                followUpEffectiveness: answers.followUpEffectiveness || null,
                monthlyMarketingSpend: answers.monthlyMarketingSpend || null,
                websiteConversionRate: answers.websiteConversionRate || null,
                socialMediaROI: answers.socialMediaROI || null,
                brandRecognition: answers.brandRecognition || null,
                clientLifetimeValue: answers.clientLifetimeValue || null,
                referralConversionRate: answers.referralConversionRate || null,
                repeatClientRate: answers.repeatClientRate || null,
                adminHoursPerProject: answers.adminHoursPerProject || null,
                avgResponseTimeHours: answers.avgResponseTimeHours || null,
                proposalPreparationTime: answers.proposalPreparationTime || null,
                crmUsage: answers.crmUsage || null,
                leadTrackingAccuracy: answers.leadTrackingAccuracy || null,
                automationCurrentLevel: answers.automationCurrentLevel || null,
                growthGoal: answers.growthGoal || null,
                topPriority: answers.topPriority || null,
                painPoint: answers.painPoint || null,
                tier2Email: answers.tier2Email || null
            } : null,
            
            // Email addresses
            emails: {
                tier1Email: answers.tier1Email || null,
                tier2Email: answers.tier2Email || null
            },
            
            // Calculated results (if tier1 completed)
            calculatedResults: completedTier === 'tier1' || completedTier === 'tier2' ? calculateTier1Results() : null,
            
            // Browser metadata
            metadata: {
                userAgent: navigator.userAgent,
                url: window.location.href,
                referrer: document.referrer
            }
        };

        // Send to webhook
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log('Data submitted successfully:', payload);
        return true;
        
    } catch (error) {
        console.error('Error submitting data:', error);
        return false;
    }
}


// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('roiCalculatorApp')) {
        initROICalculator();
    }
});

// Core Functions
function showQuestion(index) {
    const container = document.getElementById('questionContainer');
    const question = questions[currentTier][index];
    if (!question) return;

    let html = `
        <div class="question-number">Question ${index + 1} of ${questions[currentTier].length}</div>
        <h1 class="question-title">${question.title}</h1>
        <p class="question-subtitle">${question.subtitle}</p>
        <p class="help-text">${question.help}</p>
        <div class="input-group">${renderInput(question)}</div>
    `;

    container.innerHTML = html;
    container.style.opacity = '0';
    setTimeout(() => container.style.opacity = '1', 10);
    updateNavigationButtons();
}

function renderInput(question) {
    if (question.type === 'select') {
        return '<div class="option-buttons">' +
            question.options.map(option =>
                `<div class="option-button ${answers[question.id] === option.value ? 'selected' : ''}" 
                      onclick="selectOption('${question.id}', '${option.value}')">${option.label}</div>`
            ).join('') + '</div>';
    }

    if (question.type === 'multiselect') {
        const selectedValues = answers[question.id] || [];
        return '<div class="option-buttons">' +
            question.options.map(option =>
                `<div class="option-button ${selectedValues.includes(option.value) ? 'selected' : ''}" 
                      onclick="toggleMultiSelect('${question.id}', '${option.value}')">${option.label}</div>`
            ).join('') + '</div>';
    }

    if (question.type === 'range') {
        if (answers[question.id] === undefined) answers[question.id] = question.default;
        const value = answers[question.id];
        return `<div class="range-input-container d-flex flex-column align-items-center">
                    <input type="range" class="range-input" id="${question.id}" 
                           min="${question.min}" max="${question.max}" value="${value}"
                           oninput="updateRangeValue('${question.id}', this.value)">
                    <div class="range-value" id="${question.id}Value">${value}${question.unit}</div>
                </div>`;
    }

    if (question.type === 'textarea') {
        const value = answers[question.id] || '';
        return `<textarea class="textarea-input" id="${question.id}" rows="${question.rows || 3}" 
                          placeholder="${question.placeholder || ''}"
                          oninput="updateTextareaValue('${question.id}', this.value)">${value}</textarea>`;
    }

    if (question.type === 'email') {
        if (question.id === 'tier2Email' && answers.tier1Email) {
            answers[question.id] = answers.tier1Email;
            return `<div class="email-confirmation">
                        <div class="confirmed-email">
                            <div class="email-icon">✓</div>
                            <div class="email-details">
                                <strong>Report will be sent to:</strong><br>
                                <span class="confirmed-address">${answers.tier1Email}</span>
                            </div>
                        </div>
                        <div class="email-change-option">
                            <button type="button" class="change-email-btn" onclick="changeEmailAddress()">
                                Use different email address
                            </button>
                        </div>
                    </div>`;
        } else {
            const value = answers[question.id] || '';
            return `<input type="email" class="email-input" id="${question.id}" value="${value}"
                           placeholder="${question.placeholder || 'your@email.com'}"
                           oninput="updateEmailValue('${question.id}', this.value)">`;
        }
    }

    return '';
}

// Input Handlers
function selectOption(questionId, value) {
    answers[questionId] = value;
    document.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
    updateNavigationButtons();
}

function toggleMultiSelect(questionId, value) {
    if (!answers[questionId]) answers[questionId] = [];
    const index = answers[questionId].indexOf(value);

    if (index > -1) {
        answers[questionId].splice(index, 1);
        event.target.classList.remove('selected');
    } else if (answers[questionId].length < 3) {
        answers[questionId].push(value);
        event.target.classList.add('selected');
    }
    updateNavigationButtons();
}

function updateRangeValue(questionId, value) {
    answers[questionId] = parseInt(value);
    document.getElementById(questionId + 'Value').textContent = value + '%';
    updateNavigationButtons();
}

function updateTextareaValue(questionId, value) {
    answers[questionId] = value;
    updateNavigationButtons();
}

function updateEmailValue(questionId, value) {
    answers[questionId] = value;
    updateNavigationButtons();
}

function changeEmailAddress() {
    delete answers.tier2Email;
    showQuestion(currentQuestionIndex);
}

// Results & Navigation
function showTier1Results() {
    const container = document.getElementById('questionContainer');
    const results = calculateTier1Results();

    container.innerHTML = `
        <div class="row">
            <!-- Left Column: Results Overview -->
            <div class="col-lg-6">
                <h1 class="results-title mb-4">Your Business Assessment Results</h1>
                
                <!-- Key Metrics Row -->
                <div class="row g-3 mb-4 flex-column">
                    <div class="col-md-12">
                        <div class="card text-center" style="border: 2px solid #f59e0b;">
                            <div class="card-body py-3">
                                <h3 class="mb-1" style="color: #f59e0b;">${results.opportunity}</h3>
                                <small class="text-muted">Annual Opportunity</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card text-center" style="border: 2px solid #10b981;">
                            <div class="card-body py-3">
                                <h3 class="mb-1" style="color: #10b981;">${results.efficiency}</h3>
                                <small class="text-muted">Efficiency Gain</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card text-center" style="border: 2px solid #6366f1;">
                            <div class="card-body py-3">
                                <h3 class="mb-1" style="color: #6366f1;">${results.payback}</h3>
                                <small class="text-muted">Typical Payback</small>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Key Insights -->
                <div class="card" style="background-color: #f8fafc; border: 1px solid #e2e8f0;">
                    <div class="card-body">
                        <h5 class="card-title mb-3" style="color: #1e293b;">🎯 Key Insights for Your Business</h5>
                        <ul class="list-unstyled mb-0 text-start">
                            ${results.insights.map(insight => `<li class="mb-2" style="color: #475569;"><span style="color: #f59e0b;">▶</span> ${insight}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Right Column: Email Collection & Actions -->
            <div class="col-lg-6">
                <div class="card border-0 shadow-sm">
                    <div class="card-body p-4">
                        <!-- Basic Report Section -->
                        <div class="text-center mb-4">
                            <div class="d-inline-flex align-items-center justify-content-center mb-3 rounded-circle" 
                                 style="width: 60px; height: 60px; background-color: #f59e0b; color: white;">
                                <i class="fas fa-file" style="font-size: 24px;"></i>
                            </div>
                            <h4 class="mb-2" style="color: #1e293b;">Get Your Basic Report</h4>
                            <p class="mb-0" style="color: #64748b; font-size: 14px;">Receive a PDF summary of your results with<br>quick-win recommendations</p>
                        </div>

                        <!-- Email Input -->
                        <div class="mb-3">
                            <input type="email" class="form-control form-control-lg" id="tier1Email" 
                                   value="${answers.tier1Email || ''}" placeholder="your@company.com" 
                                   oninput="updateEmailValue('tier1Email', this.value)">
                        </div>

                        <!-- Basic Report Button -->
                        <button id="getBasicReportBtn" class="btn btn-lg w-100 mb-4" 
                                style="background-color: #f59e0b; border-color: #f59e0b; color: white; font-weight: 600;"
                                onclick="submitTier1Report()" disabled>Send Basic Report</button>

                        <!-- Divider -->
                        <div class="text-center mb-4">
                            <hr class="my-3" style="border-color: #e2e8f0;">
                            <span class="px-3" style="background: white; color: #64748b; font-size: 14px;">OR</span>
                        </div>

                        <!-- Premium Analysis Upgrade -->
                        <div class="card border-0 mb-3" style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%);">
                            <div class="card-body p-3 text-center">
                                <h5 class="card-title mb-2" style="color: white;">Want Your Exact Numbers?</h5>
                                <p class="card-text mb-3" style="color: #cbd5e1; font-size: 14px;">Get a comprehensive custom analysis with:</p>
                                <ul class="list-unstyled text-start mb-3" style="color: #cbd5e1; font-size: 13px;">
                                    <li class="mb-1">✓ Precise ROI calculations for your business</li>
                                    <li class="mb-1">✓ Detailed implementation roadmap</li>
                                    <li class="mb-1">✓ Priority-ranked improvement areas</li>
                                    <li class="mb-1">✓ Custom recommendations & next steps</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Continue to Custom Analysis Button -->
                        <button id="continueToCustomBtn" class="btn btn-lg w-100" 
                                style="border: 2px solid #f59e0b; color: #f59e0b; background: white; font-weight: 600;"
                                onclick="continueToCustomAnalysis()">Continue to Custom Analysis</button>
                        
                        <p class="text-center mt-2 mb-0" style="color: #64748b; font-size: 12px;">
                            Takes 5 more minutes • Uses same email address
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;

    isShowingResults = true;
    updateNavigationButtons();
    updateEmailButtons();
}

function calculateTier1Results() {
    // More realistic base calculations based on industry research
    const revenueData = {
        '5-10': { baseRevenue: 7.5, avgHomes: 12, avgProjectValue: 625000 },
        '10-25': { baseRevenue: 17.5, avgHomes: 25, avgProjectValue: 700000 },
        '25-50': { baseRevenue: 37.5, avgHomes: 45, avgProjectValue: 833000 },
        '50+': { baseRevenue: 75, avgHomes: 75, avgProjectValue: 1000000 }
    };

    // Realistic efficiency improvement percentages (based on automation ROI studies)
    const bottleneckImprovements = {
        'lead-generation': { timesSaved: 15, profitImprovement: 8, description: 'lead qualification and follow-up automation' },
        'sales-conversion': { timesSaved: 20, profitImprovement: 12, description: 'sales process optimization and CRM automation' },
        'project-management': { timesSaved: 25, profitImprovement: 10, description: 'project tracking and communication automation' },
        'client-communication': { timesSaved: 18, profitImprovement: 6, description: 'automated client updates and response systems' },
        'change-orders': { timesSaved: 12, profitImprovement: 15, description: 'streamlined change order processing' },
        'vendor-coordination': { timesSaved: 20, profitImprovement: 8, description: 'automated vendor scheduling and tracking' },
        'quality-control': { timesSaved: 15, profitImprovement: 10, description: 'systematic quality tracking and reporting' },
        'financial-tracking': { timesSaved: 22, profitImprovement: 7, description: 'automated financial reporting and analysis' }
    };

    const currentData = revenueData[answers.revenueRange] || revenueData['10-25'];
    const bottleneckData = bottleneckImprovements[answers.bottleneck] || bottleneckImprovements['project-management'];
    const profitMargin = parseInt(answers.profitMargin) || 25;

    // Calculate realistic annual savings based on:
    // 1. Time savings (hours per week * hourly cost * 50 weeks)
    // 2. Profit margin improvements (percentage of current profit)
    // 3. Efficiency gains (reduced waste, faster completion)

    const avgExecutiveHourlyCost = 150; // $150/hour for owner/executive time
    const avgProjectManagerHourlyCost = 85; // $85/hour for PM time
    const weeksPerYear = 50;

    // Time savings calculation
    const executiveTimeSaved = Math.round(bottleneckData.timesSaved * 0.6); // 60% executive time
    const pmTimeSaved = Math.round(bottleneckData.timesSaved * 0.4); // 40% PM time

    const annualTimeSavings =
        (executiveTimeSaved * avgExecutiveHourlyCost * weeksPerYear) +
        (pmTimeSaved * avgProjectManagerHourlyCost * weeksPerYear);

    // Profit improvement calculation (more aggressive but realistic)
    const currentAnnualProfit = (currentData.baseRevenue * 1000000) * (profitMargin / 100);
    const profitImprovement = currentAnnualProfit * (bottleneckData.profitImprovement / 100);

    // Process efficiency savings (increased based on company size and bottleneck impact)
    let processEfficiencySavings = currentData.avgHomes * 3500; // $3,500 per project base
    
    // Boost process savings for high-impact bottlenecks
    if (['project-management', 'sales-conversion', 'change-orders'].includes(answers.bottleneck)) {
        processEfficiencySavings *= 1.3; // 30% boost for high-impact areas
    }
    
    // Additional operational savings based on revenue size
    const operationalSavings = Math.min(150000, currentData.baseRevenue * 1000000 * 0.015); // 1.5% of revenue, capped at $150K

    // Total annual opportunity (more compelling range)
    const totalSavings = annualTimeSavings + profitImprovement + processEfficiencySavings + operationalSavings;
    const lowROI = Math.round(totalSavings * 0.85); // Conservative estimate
    const highROI = Math.round(totalSavings * 1.25); // Optimistic estimate

    // Calculate efficiency percentage (more realistic - based on operational improvements, not revenue percentage)
    let efficiencyGain;
    
    // Base efficiency gain on the type of bottleneck and its impact potential
    switch(answers.bottleneck) {
        case 'lead-generation':
            efficiencyGain = 18 + Math.floor(Math.random() * 5); // 18-22%
            break;
        case 'sales-conversion':
            efficiencyGain = 20 + Math.floor(Math.random() * 5); // 20-24%
            break;
        case 'project-management':
            efficiencyGain = 22 + Math.floor(Math.random() * 4); // 22-25%
            break;
        case 'client-communication':
            efficiencyGain = 15 + Math.floor(Math.random() * 5); // 15-19%
            break;
        case 'change-orders':
            efficiencyGain = 19 + Math.floor(Math.random() * 6); // 19-24%
            break;
        case 'vendor-coordination':
            efficiencyGain = 16 + Math.floor(Math.random() * 5); // 16-20%
            break;
        case 'quality-control':
            efficiencyGain = 17 + Math.floor(Math.random() * 5); // 17-21%
            break;
        case 'financial-tracking':
            efficiencyGain = 14 + Math.floor(Math.random() * 5); // 14-18%
            break;
        default:
            efficiencyGain = 18 + Math.floor(Math.random() * 5); // 18-22%
    }
    
    // Adjust based on company size (larger companies can achieve higher efficiency gains)
    if (currentData.baseRevenue >= 75) { // $50M+
        efficiencyGain = Math.min(25, efficiencyGain + 2);
    } else if (currentData.baseRevenue >= 37.5) { // $25M+
        efficiencyGain = Math.min(25, efficiencyGain + 1);
    }
    
    // Adjust based on current profit margin (lower margins have more improvement potential)
    if (profitMargin < 20) {
        efficiencyGain = Math.min(25, efficiencyGain + 2);
    } else if (profitMargin > 35) {
        efficiencyGain = Math.max(12, efficiencyGain - 2);
    }

    // Payback calculation based on typical automation investment ($150K-$300K)
    const avgInvestment = currentData.baseRevenue < 20 ? 200000 : 300000;
    const monthsToPayback = Math.round((avgInvestment / totalSavings) * 12);
    const paybackText = monthsToPayback <= 6 ? '4-6 mo' :
        monthsToPayback <= 12 ? '6-12 mo' :
            monthsToPayback <= 18 ? '12-18 mo' : '18+ mo';

    return {
        opportunity: formatCurrency(lowROI, highROI),
        efficiency: `${efficiencyGain}%`,
        payback: paybackText,
        insights: generateRealisticInsights(bottleneckData, currentData, totalSavings)
    };
}

async function showCompletionMessage() {

    try {
        await submitCalculatorData('tier2');
        console.log('Tier 2 data submitted successfully');
    } catch (error) {
        console.error('Error submitting Tier 2 data:', error);
    }

    document.getElementById('questionContainer').innerHTML = `
        <div class="completion-message">
            <h1 class="results-title">Thank You!</h1>
            <div class="completion-content">
                <div class="success-icon">✓</div>
                <h3>Your Custom Analysis is Being Prepared</h3>
                <p>We've received your detailed business information and are preparing your comprehensive ROI analysis report.</p>
                <div class="next-steps">
                    <h4>What Happens Next:</h4>
                    <ul>
                        <li><strong>Within 2 hours:</strong> You'll receive an email confirmation</li>
                        <li><strong>Within 24 hours:</strong> Your detailed PDF report will be delivered</li>
                        <li><strong>Optional:</strong> Schedule a 15-minute consultation to review your results</li>
                    </ul>
                </div>
                <div class="cta-section">
                    <a href="#" class="btn btn-secondary">Schedule Consultation (Optional)</a>
                </div>
            </div>
        </div>
    `;

    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
}

// Navigation & Validation - FIXED FOR TEXTAREA
function goNext() {
    if (isShowingResults) {
        currentTier = 'tier2';
        currentQuestionIndex = 0;
        isShowingResults = false;
        showQuestion(0);
        updateProgress();
        return;
    }

    if (currentQuestionIndex < questions[currentTier].length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        currentTier === 'tier1' ? showTier1Results() : showCompletionMessage();
    }
    updateProgress();
}

function goBack() {
    if (isShowingResults) {
        isShowingResults = false;
        currentQuestionIndex = questions[currentTier].length - 1;
        showQuestion(currentQuestionIndex);
    } else if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    } else if (currentTier === 'tier2') {
        currentTier = 'tier1';
        isShowingResults = true;
        showTier1Results();
    }
    updateProgress();
}

function updateNavigationButtons() {
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');

    backBtn.disabled = currentTier === 'tier1' && currentQuestionIndex === 0 && !isShowingResults;

    if (isShowingResults) {
        const hasEmail = answers.tier1Email && answers.tier1Email.length > 0;
        nextBtn.textContent = hasEmail ? 'Continue to Custom Analysis →' : 'Skip to Custom Analysis →';
        nextBtn.disabled = false;
    } else {
        const currentQuestion = questions[currentTier][currentQuestionIndex];
        const hasAnswer = validateAnswer(currentQuestion);

        if (currentTier === 'tier1' && currentQuestionIndex === questions[currentTier].length - 1) {
            nextBtn.textContent = 'See My Results →';
        } else if (currentTier === 'tier2' && currentQuestionIndex === questions[currentTier].length - 1) {
            nextBtn.textContent = 'Complete Analysis →';
        } else {
            nextBtn.textContent = 'Next →';
        }

        nextBtn.disabled = !hasAnswer;
    }
}

// FIXED VALIDATION - Textarea is now truly optional
function validateAnswer(question) {
    const answer = answers[question.id];

    // Textarea questions are ALWAYS valid (optional)
    if (question.type === 'textarea') return true;

    // Range inputs with default values are always valid
    if (question.type === 'range') return answer !== undefined && !isNaN(answer);

    if (!answer) return false;

    switch (question.type) {
        case 'select': return typeof answer === 'string' && answer.length > 0;
        case 'multiselect': return Array.isArray(answer) && answer.length > 0;
        case 'email': return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer);
        default: return true;
    }
}

function updateProgress() {
    const basicProgress = document.getElementById('basicProgress');
    const basicProgressText = document.getElementById('basicProgressText');
    const customProgress = document.getElementById('customProgress');
    const customProgressText = document.getElementById('customProgressText');

    if (currentTier === 'tier1') {
        const progress = isShowingResults ? 100 : (currentQuestionIndex / questions.tier1.length) * 100;
        basicProgress.style.width = progress + '%';
        basicProgressText.textContent = isShowingResults ? 'Complete' : `${currentQuestionIndex + 1} of ${questions.tier1.length} questions`;
        customProgress.style.width = '0%';
        customProgressText.textContent = 'Not started';
    } else if (currentTier === 'tier2') {
        basicProgress.style.width = '100%';
        basicProgressText.textContent = 'Complete';
        const progress = (currentQuestionIndex / questions.tier2.length) * 100;
        customProgress.style.width = progress + '%';
        customProgressText.textContent = `${currentQuestionIndex + 1} of ${questions.tier2.length} questions`;
    }
}

function initROICalculator() {
    document.getElementById('roiCalculatorApp').innerHTML = `
        <div class="calculator-container">
            <div class="progress-container">
                <div class="progress-sections">
                    <div class="progress-section">
                        <h4>Basic Analysis</h4>
                        <div class="progress-bar"><div class="progress-fill" id="basicProgress"></div></div>
                        <div class="progress-text" id="basicProgressText">0 of 5 questions</div>
                    </div>
                    <div class="progress-section">
                        <h4>Custom Analysis</h4>
                        <div class="progress-bar"><div class="progress-fill" id="customProgress"></div></div>
                        <div class="progress-text" id="customProgressText">Not started</div>
                    </div>
                </div>
            </div>
            <div class="content-area">
                <div id="questionContainer" class="question-container"></div>
                <div class="navigation">
                    <button id="backBtn" class="nav-button btn-back" onclick="goBack()">← Back</button>
                    <button id="nextBtn" class="nav-button btn-next" onclick="goNext()" disabled>Next →</button>
                </div>
            </div>
        </div>
    `;

    showQuestion(0);
    updateProgress();
}
async function submitTier1Report() {
    if (!answers.tier1Email) return;

    const button = document.getElementById('getBasicReportBtn');
    const originalText = button.innerHTML;

    // Show loading state
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
    button.disabled = true;

    try {
        const success = await submitCalculatorData('tier1');

        if (success) {
            // Success state
            button.innerHTML = '✅ Report Sent!';
            button.style.backgroundColor = '#10b981';
            button.style.borderColor = '#10b981';
            button.style.color = 'white';

            // Show success alert
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert fade show mt-3';
            alertDiv.style.backgroundColor = '#d1fae5';
            alertDiv.style.borderColor = '#a7f3d0';
            alertDiv.style.color = '#065f46';
            alertDiv.innerHTML = `
                <strong>Success!</strong> Your basic report will arrive within 24 hours.
                <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
            `;
            button.parentNode.appendChild(alertDiv);

            // Auto-dismiss after 5 seconds
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.remove();
                }
            }, 5000);

        } else {
            // Error state
            button.innerHTML = '❌ Try Again';
            button.disabled = false;
            button.style.backgroundColor = '#ef4444';
            button.style.borderColor = '#ef4444';
            button.style.color = 'white';
        }

    } catch (error) {
        console.error('Submission error:', error);
        button.innerHTML = '❌ Try Again';
        button.disabled = false;
        button.style.backgroundColor = '#ef4444';
        button.style.borderColor = '#ef4444';
        button.style.color = 'white';
    }
}

// Handle Continue to Custom Analysis
function continueToCustomAnalysis() {
    // Ensure email is captured even if they didn't submit basic report first
    if (answers.tier1Email && answers.tier1Email.includes('@')) {
        // Email is good, proceed to tier 2
        currentTier = 'tier2';
        currentQuestionIndex = 0;
        isShowingResults = false;
        showQuestion(0);
        updateProgress();
    } else {
        // Highlight email field if empty/invalid
        const emailInput = document.getElementById('tier1Email');
        emailInput.classList.add('is-invalid');
        emailInput.focus();
        setTimeout(() => emailInput.classList.remove('is-invalid'), 3000);
    }
}

// Update button states based on email input
function updateEmailButtons() {
    const basicReportBtn = document.getElementById('getBasicReportBtn');
    const customBtn = document.getElementById('continueToCustomBtn');
    const email = answers.tier1Email;

    const isValidEmail = email && email.includes('@') && email.includes('.');

    if (basicReportBtn) {
        basicReportBtn.disabled = !isValidEmail;
    }

    if (customBtn) {
        if (isValidEmail) {
            customBtn.style.backgroundColor = '#f59e0b';
            customBtn.style.borderColor = '#f59e0b';
            customBtn.style.color = 'white';
        } else {
            customBtn.style.backgroundColor = 'white';
            customBtn.style.borderColor = '#f59e0b';
            customBtn.style.color = '#f59e0b';
        }
    }
}

// Update your existing updateEmailValue function
function updateEmailValue(questionId, value) {
    answers[questionId] = value;
    updateNavigationButtons();
    if (questionId === 'tier1Email') {
        updateEmailButtons();
    }
}

// Update navigation buttons to hide them on results page since we have dedicated buttons now
function updateNavigationButtons() {
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (isShowingResults) {
        // Hide navigation buttons on results page since we have dedicated action buttons
        backBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        // Show navigation buttons on question pages
        backBtn.style.display = 'block';
        nextBtn.style.display = 'block';

        backBtn.disabled = currentTier === 'tier1' && currentQuestionIndex === 0;

        const currentQuestion = questions[currentTier][currentQuestionIndex];
        const hasAnswer = validateAnswer(currentQuestion);

        if (currentTier === 'tier1' && currentQuestionIndex === questions[currentTier].length - 1) {
            nextBtn.textContent = 'See My Results →';
        } else if (currentTier === 'tier2' && currentQuestionIndex === questions[currentTier].length - 1) {
            nextBtn.textContent = 'Complete Analysis →';
        } else {
            nextBtn.textContent = 'Next →';
        }

        nextBtn.disabled = !hasAnswer;
    }
}

function formatCurrency(low, high) {
    // Better formatting for currency values
    const formatValue = (value) => {
        if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(1)}M`;
        } else if (value >= 1000) {
            return `$${Math.round(value / 1000)}K`;
        } else {
            return `$${Math.round(value)}`;
        }
    };

    return `${formatValue(low)} - ${formatValue(high)}`;
}

function generateRealisticInsights(bottleneckData, currentData, totalSavings) {
    const bottleneckInsights = {
        'lead-generation': `Automated lead qualification and nurturing could save ${bottleneckData.timesSaved} hours/week while improving conversion rates by ${bottleneckData.profitImprovement}%`,
        'sales-conversion': `Sales process automation and CRM optimization typically improve close rates by ${bottleneckData.profitImprovement}% for luxury builders`,
        'project-management': `Project tracking automation saves ${bottleneckData.timesSaved} hours/week and reduces project delays by an average of 15-20%`,
        'client-communication': `Automated client updates and response systems improve satisfaction while saving ${bottleneckData.timesSaved} hours/week of admin time`,
        'change-orders': `Streamlined change order processing increases approval rates by ${bottleneckData.profitImprovement}% and reduces processing time by 60%`,
        'vendor-coordination': `Automated vendor scheduling and tracking eliminates ${bottleneckData.timesSaved} hours/week of coordination calls and emails`,
        'quality-control': `Systematic quality tracking reduces rework costs by ${bottleneckData.profitImprovement}% and improves client satisfaction scores`,
        'financial-tracking': `Real-time financial dashboards provide ${bottleneckData.profitImprovement}% better profit visibility and eliminate ${bottleneckData.timesSaved} hours/week of manual reporting`
    };

    const revenueInsights = {
        '5-10': 'Builders in your revenue range typically see 15-25% efficiency improvements from automation, with average ROI of 300-500%',
        '10-25': 'At your scale, automation investments typically pay back within 6-12 months through improved operational efficiency',
        '25-50': 'Larger builders like yours often achieve the highest ROI from automation due to economies of scale across multiple projects',
        '50+': 'Enterprise-level builders typically see sustained efficiency gains of 20-30% year-over-year from comprehensive automation'
    };

    const paybackInsight = totalSavings > 400000 ?
        'Based on your profile, automation investment typically pays for itself within 6-8 months' :
        totalSavings > 200000 ?
            'Your efficiency gains suggest automation would pay back within 8-12 months' :
            'Even conservative estimates show positive ROI within 12-18 months';

    return [
        bottleneckInsights[answers.bottleneck] || 'Your primary operational challenge represents significant automation opportunity',
        revenueInsights[answers.revenueRange] || 'Automation ROI for builders your size is typically substantial and measurable',
        paybackInsight
    ];
}