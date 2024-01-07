export default function CopyURL(inputId) {


    // Get the text field
    let copyText = document.getElementById(inputId);

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}