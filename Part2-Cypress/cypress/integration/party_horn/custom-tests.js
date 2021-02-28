describe('Party Horn Tests', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
    });

    it('First Test', () => {
        expect(true).to.equal(true);
    });

    it('test slider adjusts to input', () => {
        cy.get('#volume-number').clear().type('75');
        cy.get('#volume-slider').then(($el) => {
            expect($el).to.have.value(75);
        });
    });

    it('test input adjusts to slider', () => {
        cy.get('#volume-slider').invoke('val', 33).trigger('input');
        cy.get('#volume-number').then(($el) => {
            expect($el).to.have.value(33);
        });
    });

    it('test volume adjusts to slider', () => {
        cy.get('#volume-slider').invoke('val', 33).trigger('input');
        cy.get('#horn-sound').then(($el) => {
            expect($el).to.have.prop('volume', 0.33);
        });
    });

    it('test image and sound src change', () => {
        cy.get('#radio-party-horn').click();

        cy.get('#sound-image').then(($el) => {
            expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
        });

        cy.get('#horn-sound').then(($el) => {
            expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
        });
    });

    it('test volume image changes for all sound levels', () => {
        cy.get('#volume-number').clear().type('0');

        cy.get('#volume-image').then(($el) => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
        });

        cy.get('#volume-number').clear().type('10');

        cy.get('#volume-image').then(($el) => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
        });

        cy.get('#volume-number').clear().type('40');

        cy.get('#volume-image').then(($el) => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
        });

        cy.get('#volume-number').clear().type('80');

        cy.get('#volume-image').then(($el) => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
        });
    });

    it('test honk button is disabled', () => {
        cy.get('#volume-number').clear();

        cy.get('#honk-btn').then(($el) => {
            expect($el).to.have.prop('disabled', true);
        });

        cy.get('#volume-number').clear().type('lmao');
        cy.get('#honk-btn').then(($el) => {
            expect($el).to.have.prop('disabled', true);
        });
    });

    it('test error on invalid input', () => {
        cy.get('#volume-number').clear().type('-1');
        cy.get('#volume-number').invoke('prop', 'validity').should('include', { valid: false });
    });
});
