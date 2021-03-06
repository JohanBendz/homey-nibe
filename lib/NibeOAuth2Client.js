'use strict';

const { OAuth2Client } = require('homey-oauth2app');

class NibeOAuth2Client extends OAuth2Client {
    static get API_URL() {
        return 'https://api.nibeuplink.com';
    }

    async getSystems() {
        return this.get({
            path: '/api/v1/systems'
        })
    }

    async getSystem(id) {
        return this.get({
            path: `/api/v1/systems/${id}`
        })
    }

    async getSystemParameters(id, params) {
        return this.get({
            path: `/api/v1/systems/${id}/parameters`,
            query: params
        })
    }

    async getSystemStatus(id) {
        return this.get({
            path: `/api/v1/systems/${id}/status/system`
        })
    }

    async getSystemUnits(id) {
        return this.get({
            path: `/api/v1/systems/${id}/units`
        })
    }

    async getSystemCategories(id) {
        return this.get({
            path: `/api/v1/systems/${id}/serviceinfo/categories`
        })
    }

    async getCategoryParameters(id, category) {
        return this.get({
            path: `/api/v1/systems/${id}/serviceinfo/categories/status?categoryId=${category}`
        })
    }

    async getSystemPremium(id) {
        return this.get({
            path: `/api/v1/systems/${id}/premium`
        })
    }

    async putParameters(id, settings) {
        return this.put({
            path: `/api/v1/systems/${id}`,
            body: {
              "settings": settings
            }
        })
    }
}

module.exports = NibeOAuth2Client;
