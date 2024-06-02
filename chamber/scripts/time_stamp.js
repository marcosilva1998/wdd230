function time() {
    const timestampField = document.getElementById('timestamp');
    let currentTime = new Date().getTime();
    timestampField.value = currentTime;
    console.log(currentTime);
}
time()