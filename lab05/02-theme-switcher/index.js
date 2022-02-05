const changeTheme = (theme) => {
   document.querySelector("body").className = theme;
};

document.querySelector('#default').addEventListener('click', () => changeTheme(''));
document.querySelector('#desert').addEventListener('click', () => changeTheme('desert'));
document.querySelector('#ocean').addEventListener('click', () => changeTheme('ocean'));
document.querySelector('#high-contrast').addEventListener('click', () => changeTheme('high-contrast'));
