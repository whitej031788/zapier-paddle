'use strict';

const testAuth = (z, bundle) => {
    const httpOptions = {
        method: 'POST',
        body: JSON.stringify(bundle.authData),
        headers: {
            'Content-Type': 'application/json'
        },
    };
    
    return z.request(
        'https://vendors.paddle.com/api/2.0/product/get_products',
        httpOptions
    ).then((response) => {
        if (response.status !== 200 || !response.json || !response.json.success) {
            throw new Error('The API Key or Vendor ID you supplied is invalid');
        } else {
            return true;
        }
    });
};

module.exports = {
    type: 'custom',
    fields: [
        {
            key: 'vendor_id', 
            label: 'Vendor ID', 
            required: true, 
            type: 'string',
            helpText: 'Found in Vendor Settings (top left) / Integrations after logging in'
        },
        {
            key: 'vendor_auth_code', 
            label: 'Vendor Auth Code', 
            required: true, 
            type: 'string',
            helpText: 'Found in Vendor Settings (top left) / Integrations after logging in'
        }
    ],
    test: testAuth
};