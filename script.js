document.getElementById('buy-data-btn').addEventListener('click', function() {
    const mockRequest = {
        network: 'MTN',
        amount: 1000,
        phone: '08012345678'
    };

    console.log('Sending mock request:', mockRequest);

    setTimeout(() => {
        const mockResponse = {
            status: 'success',
            message: 'Transaction completed successfully!',
            transactionId: 'TX123456789'
        };

        alert(`Status: ${mockResponse.status}\nMessage: ${mockResponse.message}\nTransaction ID: ${mockResponse.transactionId}`);
    }, 1000);
});
function showSuccess() {
  alert("✅ Status: success\nMessage: Transaction completed successfully!\nTransaction ID: TX123456789");
}
function showSuccess() {
  alert("Status: success\nMessage: Transaction completed successfully!\nTransaction ID: TX123456789");
}
