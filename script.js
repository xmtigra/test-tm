// Author: Andriy Pyvovarchuk
// Description: This file contains all the scripts for the project

// variables
const dialog = document.getElementById('dialog');
const dialogButton = document.getElementById('dialog-open-button');
const dialogCloseButton = document.getElementById('dialog-close-button');

// methods
const openDialog = () => dialog.showModal();
const closeDialog = () => dialog.close();

// events
dialogButton.addEventListener('click', openDialog);
dialogCloseButton.addEventListener('click', closeDialog);
