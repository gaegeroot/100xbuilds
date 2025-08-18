// Phone number formatting - Original with complete backspace fix
function formatPhoneNumber(input) {
    // Remove all non-digit characters
    let value = input.value.replace(/\D/g, '');

    // Limit to 10 digits
    if (value.length > 10) {
        value = value.slice(0, 10);
    }

    // Format as (XXX) XXX-XXXX
    if (value.length >= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
    } else if (value.length >= 3) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }

    input.value = value;
}

// Apply phone formatting on page load
document.addEventListener('DOMContentLoaded', function () {
    // Find phone input field
    const phoneInput = document.querySelector('input[name="phone"]');
    const form = document.querySelector('#apply-form form');
    if (phoneInput) {
        // Add placeholder
        phoneInput.placeholder = '(555) 123-4567';

        // Handle backspace over formatting characters
        phoneInput.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace') {
                const cursorPos = this.selectionStart;
                const value = this.value;

                // If cursor is right after a formatting character, move cursor back to delete the digit
                if (cursorPos > 0) {
                    const charBefore = value.charAt(cursorPos - 1);

                    // Handle all formatting characters: ), space, and -
                    if (charBefore === ')' || charBefore === ' ' || charBefore === '-') {
                        e.preventDefault();

                        // Find the last digit before this formatting character
                        let digitPos = cursorPos - 2;
                        while (digitPos >= 0 && !/\d/.test(value.charAt(digitPos))) {
                            digitPos--;
                        }

                        if (digitPos >= 0) {
                            // Remove that digit and reformat
                            const newValue = value.slice(0, digitPos) + value.slice(digitPos + 1);
                            this.value = newValue;
                            formatPhoneNumber(this);
                        }
                        return;
                    }
                }
            }

            // Original key filtering logic
            const allowedKeys = [
                'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
                'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
            ];

            if (allowedKeys.includes(e.key) ||
                (e.key >= '0' && e.key <= '9') ||
                (e.ctrlKey && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()))) {
                return;
            }

            e.preventDefault();
        });

        // Format on input (original logic)
        phoneInput.addEventListener('input', function () {
            formatPhoneNumber(this);
        });

        // Format on paste
        phoneInput.addEventListener('paste', function () {
            setTimeout(() => formatPhoneNumber(this), 10);
        });
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // Get the webhook URL from the form's action attribute
            const webhookUrl = form.getAttribute('action');

            if (!webhookUrl) {
                console.error('No webhook URL found in form action');
                showErrorMessage();
                return;
            }

            // Clean phone number before submission (remove formatting)
            const phoneInput = form.querySelector('input[name="phone"]');
            let cleanPhone = '';
            if (phoneInput) {
                cleanPhone = phoneInput.value.replace(/\D/g, '');
            }

            // Collect all form data
            const formData = new FormData(form);
            const jsonData = {
                fullName: formData.get('full-name'),
                company: formData.get('company'),
                email: formData.get('email'),
                phone: cleanPhone, // Use cleaned phone number
                metroArea: formData.get('metro-area'),
                revenue: formData.get('revenue'),
                challenges: formData.get('challenges'),
                timestamp: new Date().toISOString(),
                source: 'Builder Partnership Application'
            };

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting Application...';
            submitBtn.disabled = true;

            // Submit to webhook URL from form action
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json().catch(() => ({})); // Handle empty response
                })
                .then(data => {
                    // Success - replace form with success message
                    showSuccessMessage();
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Reset button and show error
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    showErrorMessage();
                });
        });
    }
});

function showSuccessMessage() {
    const formContainer = document.querySelector('#apply-form .card-body');
    formContainer.innerHTML = `
        <div class="text-center py-5">
            <div class="mb-4">
                <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                    <i class="fa fa-check-circle txt-secondary" style="font-size: 2.5rem;"></i>
                </div>
            </div>
            <h2 class="txt-primary mb-4">Application Submitted Successfully!</h2>
            <p class="lead text-muted mb-4">
                Thank you for applying for exclusive territory partnership. We're reviewing your application and will contact you within 24 hours to discuss territory availability.
            </p>
            <div class="bg-light rounded p-4 mb-4">
                <h5 class="txt-primary mb-3">What Happens Next:</h5>
                <div class="row g-3 text-start">
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <span class="txt-secondary me-3 fw-bold">1.</span>
                            <div>
                                <strong>Territory Review</strong><br>
                                <small class="text-muted">We'll verify your metro area availability</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <span class="txt-secondary me-3 fw-bold">2.</span>
                            <div>
                                <strong>Qualification Call</strong><br>
                                <small class="text-muted">15-minute discussion about your needs</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <span class="txt-secondary me-3 fw-bold">3.</span>
                            <div>
                                <strong>Partnership Setup</strong><br>
                                <small class="text-muted">If it's a fit, we'll reserve your territory</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <span class="txt-secondary me-3 fw-bold">4.</span>
                            <div>
                                <strong>Launch Process</strong><br>
                                <small class="text-muted">Begin building your Luxury Client Pipeline™</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="alert mybg-secondary-light txt-primary border-0">
                <div class="d-flex align-items-center justify-content-center">
                    <i class="fa fa-clock-o me-3"></i>
                    <div>
                        <strong>Territory Hold:</strong> We'll hold your metro area for 48 hours while we review your application.
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelector('#apply-form').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function showErrorMessage() {
    // Create error alert at top of form
    const formContainer = document.querySelector('#apply-form .card-body');
    const existingAlert = formContainer.querySelector('.alert-danger');

    if (!existingAlert) {
        const errorAlert = document.createElement('div');
        errorAlert.className = 'alert alert-danger border-0 mb-4';
        errorAlert.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fa fa-exclamation-triangle me-3"></i>
                <div>
                    <strong>Submission Error:</strong> There was a problem submitting your application. Please try again or call us directly at <a href="tel:409-896-1444" class="text-danger">(409) 896-1444</a>.
                </div>
            </div>
        `;
        formContainer.insertBefore(errorAlert, formContainer.firstChild);

        // Remove error after 10 seconds
        setTimeout(() => {
            errorAlert.remove();
        }, 10000);
    }
}