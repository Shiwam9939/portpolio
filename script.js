function downloadCV() {
    const url = './pics/bg.jpg'; // replace with the actual path to your CV file
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Your_CV.pdf'; // replace with the desired name of the downloaded file
    link.click();
}