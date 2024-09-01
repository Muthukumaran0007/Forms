document.addEventListener('DOMContentLoaded', function () {
    const charCountElements = document.querySelectorAll('.char-count');
    const nameInputs = document.querySelectorAll('#first-name, #middle-name, #last-name');
    const previousPassportInfo = document.getElementById('previous-passport-info');
    const issuedPassportRadios = document.querySelectorAll('input[name="issued-passport"]');
    const progressBar = document.querySelector('.progress');
    const progressLabel = document.querySelector('.progress-label');

    // Update character count for name fields
    nameInputs.forEach(input => {
        input.addEventListener('input', function () {
            const charCount = this.value.length;
            const maxChars = 10;
            const countElement = this.nextElementSibling;
            countElement.textContent = `${charCount}/${maxChars}`;
        });
    });

    // Show/hide previous passport info based on selection
    issuedPassportRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'yes') {
                previousPassportInfo.classList.remove('hidden');
            } else {
                previousPassportInfo.classList.add('hidden');
            }
        });
    });

    // Form progress indicator
    document.getElementById('passport-form').addEventListener('input', function () {
        const totalFields = Array.from(this.elements).filter(el => el.type !== 'submit').length;
        let filledFields = Array.from(this.elements).filter(el => el.type !== 'submit' && el.value).length;

        const progress = (filledFields / totalFields) * 100;
        progressBar.style.width = `${progress}%`;
        progressLabel.textContent = `${Math.round(progress)}%`; // Update label with percentage
    });

    // Form validation
    document.getElementById('passport-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});









