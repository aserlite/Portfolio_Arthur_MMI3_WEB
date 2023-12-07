export default function Form() {
    return {
        formData: {
            nom: '',
            prenom: '',
            email: '',
            message: '',
        },
        errors: {},

        init() {
            console.log(this.formData)
            Alpine.data('form', () => ({
                formData: this.formData,
                errors: this.errors,

                submitForm() {
                    this.errors = {};

                    if (!this.formData.nom.trim()) {
                        this.errors.nom = true;
                    }

                    if (!this.formData.prenom.trim()) {
                        this.errors.prenom = true;
                    }

                    if (!this.formData.email.trim() || !this.isValidEmail(this.formData.email.trim())) {
                        this.errors.email = true;
                    }

                    if (!this.formData.message.trim()) {
                        this.errors.message = true;
                    }

                    if (Object.keys(this.errors).length === 0) {
                        console.log("Formulaire soumis !");
                    }
                },

                clearError(field) {
                    this.errors[field] = false;
                },

                isValidEmail(email) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(email);
                },
            }));
        },
    };
}

