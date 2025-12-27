module.exports = {

    // ⭐ Genera un email aleatorio único
    generateEmail() {
        const timestamp = Date.now();
        return `user_${timestamp}@example.com`;
    },

    // ⭐ Genera cadenas aleatorias para pruebas
    randomString(length = 8) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    // ⭐ Genera un usuario completo dinámico
    generateUser() {
        const random = this.randomString(6);
        return {
            firstName: "Test",
            lastName: "User",
            email: `auto_${random}@test.com`,
            password: "Password123!"
        };
    }
};
