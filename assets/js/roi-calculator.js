// Question data structure
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
    ]
};

let currentQuestionIndex = 0;
let currentTier = 'tier1';
let answers = {};
let isShowingResults = false;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('roiCalculatorApp')) {
        initROICalculator();
    }
});

// Show specific question
function showQuestion(index) {
    const container = document.getElementById('questionContainer');
    const question = questions[currentTier][index];

    if (!question) return;

    let html = `
                <div class="question-number">Question ${index + 1} of ${questions[currentTier].length}</div>
                <h1 class="question-title">${question.title}</h1>
                <p class="question-subtitle">${question.subtitle}</p>
                <p class="help-text">${question.help}</p>
                <div class="input-group">
            `;

    if (question.type === 'select') {
        html += '<div class="option-buttons">';
        question.options.forEach(option => {
            const selected = answers[question.id] === option.value ? 'selected' : '';
            html += `<div class="option-button ${selected}" onclick="selectOption('${question.id}', '${option.value}')">${option.label}</div>`;
        });
        html += '</div>';
    } else if (question.type === 'range') {
        const value = answers[question.id] || question.default;
        html += `
                    <div class="range-input-container">
                        <input type="range" class="range-input" id="${question.id}" 
                               min="${question.min}" max="${question.max}" value="${value}"
                               oninput="updateRangeValue('${question.id}', this.value)">
                        <div class="range-value" id="${question.id}Value">${value}${question.unit}</div>
                    </div>
                `;
    }

    html += '</div>';

    container.innerHTML = html;

    // Re-trigger animation
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 10);

    updateNavigationButtons();
}

// Show results after tier 1
function showTier1Results() {
    const container = document.getElementById('questionContainer');
    const results = calculateTier1Results();

    const html = `
                <h1 class="results-title">Your Business Assessment Results</h1>
                
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="metric-value">${results.opportunity}</div>
                        <div class="metric-label">Annual Opportunity</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">${results.efficiency}</div>
                        <div class="metric-label">Efficiency Gain</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">${results.payback}</div>
                        <div class="metric-label">Typical Payback</div>
                    </div>
                </div>

                <div class="insights-box">
                    <h3 class="insights-title">Key Insights for Your Business:</h3>
                    <ul class="insights-list">
                        ${results.insights.map(insight => `<li>${insight}</li>`).join('')}
                    </ul>
                </div>

                <div class="upgrade-prompt mybg-authority">
                    <h3 class="text-white">Want Your Exact Numbers?</h3>
                    <p class="text-white">Get a comprehensive custom analysis with precise ROI calculations, detailed implementation roadmap, and priority-ranked improvement areas tailored specifically to your business.</p>
                </div>
            `;

    container.innerHTML = html;
    isShowingResults = true;
    updateNavigationButtons();
}

// Calculate tier 1 results
function calculateTier1Results() {
    const revenueMultipliers = {
        '5-10': 7.5,
        '10-25': 17.5,
        '25-50': 37.5,
        '50+': 75
    };

    const baseRevenue = revenueMultipliers[answers.revenueRange] || 15;
    const profitMargin = parseInt(answers.profitMargin) || 25;
    let efficiency = profitMargin < 20 ? 0.25 : profitMargin < 30 ? 0.20 : 0.15;

    const bottleneckMultipliers = {
        'lead-generation': 1.3,
        'sales-conversion': 1.4,
        'project-management': 1.2,
        'client-communication': 1.1,
        'change-orders': 1.15,
        'vendor-coordination': 1.1,
        'quality-control': 1.25,
        'financial-tracking': 1.05
    };

    efficiency *= (bottleneckMultipliers[answers.bottleneck] || 1.0);

    const lowROI = Math.round(baseRevenue * efficiency * 1000000 * 0.8);
    const highROI = Math.round(baseRevenue * efficiency * 1000000 * 1.2);

    const insights = generateInsights(efficiency, profitMargin);

    return {
        opportunity: `${(lowROI / 1000).toFixed(0)}K - ${(highROI / 1000).toFixed(0)}K`,
        efficiency: `${Math.round(efficiency * 100)}%`,
        payback: efficiency > 0.2 ? '4-6 mo' : '6-8 mo',
        insights: insights
    };
}

// Generate personalized insights
function generateInsights(efficiency, profitMargin) {
    const insights = [];

    const bottleneckInsights = {
        'lead-generation': 'Your lead generation challenge represents $150K-$300K in lost revenue opportunity annually',
        'sales-conversion': 'Improving sales conversion rates could increase revenue by $200K-$400K without more leads',
        'project-management': 'Project management inefficiencies are limiting profit potential by an estimated 15-25%',
        'client-communication': 'Communication challenges are costing approximately $75K-$150K annually in lost efficiency',
        'change-orders': 'Change order processing delays are reducing profit margins by 10-20%',
        'vendor-coordination': 'Vendor coordination issues are causing project delays worth $100K-$200K annually',
        'quality-control': 'Quality control gaps are creating rework costs of $125K-$250K per year',
        'financial-tracking': 'Financial tracking inefficiencies are obscuring $75K-$150K in potential savings'
    };

    insights.push(bottleneckInsights[answers.bottleneck] || 'Your primary operational challenge is limiting profit potential significantly');

    const revenueInsights = {
        '5-10': 'At your revenue level, lead generation and sales automation ROI typically exceeds 500%',
        '10-25': 'Builders in your revenue range see average automation returns of 400-600%',
        '25-50': 'Your scale enables automation investments with 300-500% ROI potential',
        '50+': 'Enterprise-level automation at your scale typically delivers 250-400% returns'
    };

    insights.push(revenueInsights[answers.revenueRange] || 'Automation investment ROI for your business size is typically substantial');

    if (efficiency > 0.2) {
        insights.push('Your current operational gaps present exceptional improvement opportunities');
    } else {
        insights.push('Even modest efficiency improvements will yield significant profit gains');
    }

    return insights;
}

// Handle option selection
function selectOption(questionId, value) {
    answers[questionId] = value;

    // Update UI
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');

    updateNavigationButtons();
}

// Handle range input updates
function updateRangeValue(questionId, value) {
    answers[questionId] = parseInt(value);
    document.getElementById(questionId + 'Value').textContent = value + '%';
    updateNavigationButtons();
}

// Navigation functions
function goNext() {
    if (isShowingResults) {
        // Move to tier 2
        currentTier = 'tier2';
        currentQuestionIndex = 0;
        isShowingResults = false;
        // showQuestion(0); // Would implement tier 2 questions here
        alert('Tier 2 questions would start here!');
        return;
    }

    if (currentQuestionIndex < questions[currentTier].length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        // Last question of tier 1 - show results
        showTier1Results();
    }

    updateProgress();
}

function goBack() {
    if (isShowingResults) {
        // Go back to last question of tier 1
        isShowingResults = false;
        currentQuestionIndex = questions[currentTier].length - 1;
        showQuestion(currentQuestionIndex);
    } else if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }

    updateProgress();
}

// Update navigation buttons
function updateNavigationButtons() {
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Back button
    backBtn.disabled = currentQuestionIndex === 0 && !isShowingResults;

    // Next button
    if (isShowingResults) {
        nextBtn.textContent = 'Continue to Custom Analysis →';
        nextBtn.disabled = false;
    } else {
        const currentQuestion = questions[currentTier][currentQuestionIndex];
        const hasAnswer = answers[currentQuestion.id] !== undefined;

        if (currentQuestionIndex === questions[currentTier].length - 1) {
            nextBtn.textContent = 'See My Results →';
        } else {
            nextBtn.textContent = 'Next →';
        }

        nextBtn.disabled = !hasAnswer;
    }
}

// Update progress bars
function updateProgress() {
    const basicProgress = document.getElementById('basicProgress');
    const basicProgressText = document.getElementById('basicProgressText');
    const customProgress = document.getElementById('customProgress');
    const customProgressText = document.getElementById('customProgressText');

    if (currentTier === 'tier1') {
        const progress = isShowingResults ? 100 : (currentQuestionIndex / questions.tier1.length) * 100;
        basicProgress.style.width = progress + '%';

        if (isShowingResults) {
            basicProgressText.textContent = 'Complete';
        } else {
            basicProgressText.textContent = `${currentQuestionIndex + 1} of ${questions.tier1.length} questions`;
        }
    }

    // Custom progress would be updated when tier 2 is implemented
    if (currentTier === 'tier2') {
        customProgressText.textContent = 'In progress';
    }
}

function initROICalculator() {
    const app = document.getElementById('roiCalculatorApp');

    // Insert the calculator HTML
    app.innerHTML = `
        <div class="roi-calculator-container">
            <!-- Progress Bar -->
            <div class="progress-container">
                <div class="progress-sections">
                    <div class="progress-section">
                        <h4>Basic Analysis</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" id="basicProgress"></div>
                        </div>
                        <div class="progress-text" id="basicProgressText">0 of 5 questions</div>
                    </div>
                    <div class="progress-section">
                        <h4>Custom Analysis</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" id="customProgress"></div>
                        </div>
                        <div class="progress-text" id="customProgressText">Not started</div>
                    </div>
                </div>
            </div>

            <!-- Content Area -->
            <div class="content-area">
                <div id="questionContainer" class="question-container">
                    <!-- Questions will be dynamically inserted here -->
                </div>

                <!-- Navigation -->
                <div class="navigation">
                    <button id="backBtn" class="nav-button btn-back" onclick="goBack()">← Back</button>
                    <button id="nextBtn" class="nav-button btn-next" onclick="goNext()" disabled>Next →</button>
                </div>
            </div>
        </div>
    `;

    // Start the calculator
    showQuestion(0);
    updateProgress();
}