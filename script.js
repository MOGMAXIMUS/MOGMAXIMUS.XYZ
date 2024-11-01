document.addEventListener('DOMContentLoaded', () => {
    //background music (backgroundAudio)
    document.addEventListener('DOMContentLoaded', () => {
        const audioElement = document.getElementById('backgroundAudio');
        audioElement.volume = 0.7;
    });

    //copy address (canav)
    const copyText = 'FGHMbobCRNGVFm1dz5hCdgombmpReVppFRKQoGxXpump'; //paste here new CA
    const copyAddressElement = document.querySelector('.canav');
    const copyAlertI = document.getElementById('copyAlertI');

    copyAddressElement.addEventListener('click', () => {
        const tempInput = document.createElement('input');
        tempInput.value = copyText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        copyAlertI.style.display = 'block';

        setTimeout(() => {
            copyAlertI.style.display = 'none';
        }, 2000);
    });

    //first banner (bannerTextI)
    const bannerTextI = document.getElementById('bannerTextI');
    const originalTextI = bannerTextI.innerHTML;

    bannerTextI.addEventListener('mouseover', () => {
        bannerTextI.innerHTML = "YES, 1 FUCKING BILLION DOLLAR";
        bannerTextI.style.color = "#bfff00";
    });

    bannerTextI.addEventListener('mouseout', () => {
        bannerTextI.innerHTML = originalTextI;
        bannerTextI.style.color = "#fff";
    });

    //second banner (bannerTextII)
    const bannerTextII = document.getElementById('bannerTextII');
    const bannerII = bannerTextII.parentElement;
    const originalTextII = bannerTextII.innerHTML;
    const originalBackgroundColorII = getComputedStyle(bannerII).backgroundColor;

    //handle mouseover for the banner text
    bannerII.addEventListener('mouseover', () => {
        bannerTextII.innerHTML = "YOU CAN MAKE A DIFFERENCE";
        bannerTextII.style.color = "#fff";
        bannerII.style.backgroundColor = "#ff00a2";
    });

    bannerII.addEventListener('mouseout', () => {
        bannerTextII.innerHTML = originalTextII;
        bannerTextII.style.color = "#fff";
        bannerII.style.backgroundColor = originalBackgroundColorII;
    });

    //modal download handling
    const modal = document.getElementById('mediaKitModal');
    const closeModal = document.querySelector('.modal .close');
    const openModal = document.querySelector('.downav');
    const confirmDownload = document.getElementById('confirmDownload');
    const downloadAlert = document.getElementById('copyAlertII');
    const errorMessage = document.createElement('div');

    //error message content
    errorMessage.id = 'errorMessage';
    errorMessage.style.display = 'none';
    errorMessage.style.position = 'fixed';
    errorMessage.style.bottom = '20px';
    errorMessage.style.right = '20px';
    errorMessage.style.backgroundColor = '#ff00a2';
    errorMessage.style.color = '#fff';
    errorMessage.style.padding = '10px 20px';
    errorMessage.style.borderRadius = '25px';
    errorMessage.style.fontFamily = 'MonumentExtended, sans-serif';
    errorMessage.style.fontSize = '14px';
    errorMessage.style.letterSpacing = '0.5px';
    errorMessage.innerText = 'SH*T: DOWNLOAD FAILED';
    document.body.appendChild(errorMessage);

    //open modal when "kit" is clicked
    openModal.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    //close modal when "x" is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    //confirm download & success or error
    confirmDownload.addEventListener('click', () => {
        modal.style.display = 'none';
        
        //download
        const downloadLink = document.createElement('a');
        downloadLink.href = 'MOMA_KIT.ZIP';
        downloadLink.download = 'MOMA_KIT.ZIP';
        
        if (downloadLink.href) {
            downloadLink.click();

            //"downloaded"
            setTimeout(() => {
                downloadAlert.style.display = 'block';
                setTimeout(() => {
                    downloadAlert.style.display = 'none';
                }, 3000);
            }, 5000);
        } else {

            //"error"
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    });
});