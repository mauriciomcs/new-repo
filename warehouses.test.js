test('status should be 200', async () => {
    let actualStatus;
    try {
        // Make request
        const response = await fetch('https://cnt-29f11dea-64b9-4f89-9fb1-3033272afb84.containerhub.tripleten-services.com/api/v1/warehouses');
        // Extract response code status
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Check code status
    expect(actualStatus).toBe(200);
});