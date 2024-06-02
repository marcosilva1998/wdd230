function time() {
    const timestampField = document.getElementById('timestamp');
    let currentTime = new Date().getTime();
    timestampField.value = currentTime;
}
time()