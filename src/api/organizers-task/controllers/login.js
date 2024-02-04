'use strict';

const axios = require('axios');

/**
 * organizers-task controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::organizers-task.organizers-task', () => ({
    async login(ctx, next) {
        const apiUrl = process.env.API_URL;
        const credentials = {
            identifier:  process.env.IDENTIFIER,
            password: process.env.PASSWORD 
        }; 

        const id = parseInt(ctx.params.id, 10);
        const nic = ctx.params.nic;

        console.log(ctx.params);

        try {
            // Check if 'id' and 'nic' exist in the database
            const organizerExists = await strapi.query('api::organizer.organizer').findOne({
                select: ['id', 'NIC_Number','Title', 'Name','Mobile_Number_1'], // Add other fields you want to include
                where: { id, NIC_Number: nic },
            });

            console.log(organizerExists);

            if (!organizerExists) {
                // If organizer does not exist, respond with 404 Not Found
                ctx.response.status = 404;
                ctx.response.body = { error: 'Organizer not found' };
                return;
            }

            // Make a POST request to the API to get the token
            const response = await axios.post(apiUrl, credentials);

            // Extract the token from the response
            const token = response.data.jwt;

            // Log the token
            console.log('Token:', token);

            // Set token and organizer data in the context state
            ctx.state.token = token;
            ctx.state.userData = organizerExists;

            // Respond with status 200 and a valid message along with organizer data
            ctx.response.status = 200;
            ctx.response.body = { message: 'Login successful', token, userData: organizerExists };
        } catch (error) {
            // Handle error if the API request fails
            console.error('Error during login:', error);
            // Send an error response or handle it accordingly
            ctx.response.status = 500;
            ctx.response.body = { error: 'Internal Server Error' };
        }

        // Continue with the next middleware
        await next();
    }
}));
