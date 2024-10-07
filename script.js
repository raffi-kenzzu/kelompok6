document.getElementById('topup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const topupAmount = document.getElementById('topup-amount').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (phoneNumber && topupAmount && paymentMethod) {
        document.getElementById('confirmation-message').textContent = 
            `Top up berhasil! Nomor Telepon: ${phoneNumber}, Nominal: ${topupAmount}, Pembayaran melalui: ${paymentMethod}`;
    } else {
        document.getElementById('confirmation-message').textContent = 
            'Silakan lengkapi semua field.';
    }
});
