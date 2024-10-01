function showDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('customers').style.display = 'none';
    document.getElementById('routes').style.display = 'none';
    document.getElementById('payout-requests').style.display = 'none';
}

function showCustomers() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('customers').style.display = 'block';
    document.getElementById('routes').style.display = 'none';
    document.getElementById('payout-requests').style.display = 'none';
}

function showRoutes() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('customers').style.display = 'none';
    document.getElementById('routes').style.display = 'block';
    document.getElementById('payout-requests').style.display = 'none';
}

function showPayoutRequests() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('customers').style.display = 'none';
    document.getElementById('routes').style.display = 'none';
    document.getElementById('payout-requests').style.display = 'block';
}
